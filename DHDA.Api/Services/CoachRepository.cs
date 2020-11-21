using DHDA.Core.Domain;
using DHDA.Core.Repositories;
using DHDA.Infrastructure.Database;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DHDA.Api.Services
{
    public class CoachRepository : ICoachRepository
    {
        private readonly IMongoCollection<Coach> _appDbContext;

        public CoachRepository(IDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.Database);
            _appDbContext = database.GetCollection<Coach>("coach");
        }
        public async Task<Coach> GetCoach(string email)
          => await Task.FromResult(_appDbContext.Find<Coach>(coach => coach.Email == email).FirstOrDefault());

        public async Task<IEnumerable<User>> GetUsers(string email)
             => await Task.FromResult(_appDbContext.Find<Coach>(coach => coach.Email == email).FirstOrDefault().Users.ToList());
    }
}
