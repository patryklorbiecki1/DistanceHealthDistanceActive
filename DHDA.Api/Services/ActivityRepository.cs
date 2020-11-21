using DHDA.Api.Domain;
using DHDA.Api.Repositories;
using DHDA.Core.Domain;
using DHDA.Infrastructure.Database;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DHDA.Api.Services
{
    public class ActivityRepository : IActivityRepository
    {
        private readonly IMongoCollection<Activity> _appDbContext;

        public ActivityRepository(IDatabaseSettings settings)
        {
            var client = new MongoClient(settings.ConnectionString);
            var database = client.GetDatabase(settings.Database);
            _appDbContext = database.GetCollection<Activity>("activity");
        }

        public async Task<IEnumerable<Activity>> GetAllActivities()
            => await Task.FromResult(_appDbContext.Find(activity => true).ToList());

        public async Task<IEnumerable<Activity>> GetUserActivities(string email)
              => await Task.FromResult(_appDbContext.Find<Activity>(activity => activity.UserEmail == email).ToList());
        public async Task CreateActivity(string userEmail, string activityName, int distance, int time)
        {
            var activity = new Activity(activityName, userEmail, distance,time);
            _appDbContext.InsertOne(activity);
            await Task.CompletedTask;
        }

    }
}
