using AutoMapper;
using DHDA.Api.DTO;
using DHDA.Api.Services;
using DHDA.Core.Domain;
using DHDA.Core.Repositories;
using DHDA.Infrastructure.Database;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DHDA.Infrastructure.Services
{
    public class UserRepository : IUserRepository
    {

        private readonly IMongoCollection<User> _appDbContext;
        private readonly IEncrypter _encrypter;
        private readonly IMapper _mapper;
        public UserRepository(IDatabaseSettings settings, IEncrypter encrypter,
             IMapper mapper)
        {
            _mapper = mapper;
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.Database);
            _appDbContext = database.GetCollection<User>("user");
            _encrypter = encrypter;
        }
        public async Task<IEnumerable<UserDTO>> GetAllUsers()
        {
            var users = await Task.FromResult(_appDbContext.Find(user => true).ToList());
            return _mapper.Map<List<User>, List<UserDTO>>(users);
        }
        public async Task<User> GetUserByEmail(string email)
        =>  await Task.FromResult(_appDbContext.Find<User>(user => user.Email == email).FirstOrDefault());
          
        
        public async Task<User> Login(string email, string password)
        {
            var user = await GetUserByEmail(email);
            if (user == null)
            {
                throw new Exception("Invalid credentials");
            }
            return user;
        }

        public async Task Register(string email, string password)
        {
            var user = await GetUserByEmail(email);
            if (user != null)
            {
                throw new Exception($"User with email: {email} already exists");
            }
            var salt = _encrypter.GetSalt(password);
            var hash = _encrypter.GetHash(password, salt);
            user = new User(email, hash, salt);
            _appDbContext.InsertOne(user);

        }
    }
}
