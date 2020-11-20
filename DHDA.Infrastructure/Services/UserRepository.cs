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
        public UserRepository(IDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.Database);
            _appDbContext = database.GetCollection<User>("user");
        }
        public async Task<IEnumerable<User>> GetAllUsers()
            => await Task.FromResult(_appDbContext.Find(user => true).ToList());


        public async Task<User> GetUserById(string id)
            => await Task.FromResult(_appDbContext.Find<User>(user => user.IdUser == id).FirstOrDefault());
        
    }
}
