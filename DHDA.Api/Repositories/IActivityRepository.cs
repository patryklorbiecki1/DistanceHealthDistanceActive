using DHDA.Api.Domain;
using DHDA.Core.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DHDA.Api.Repositories
{
    public interface IActivityRepository
    {
        Task<IEnumerable<Activity>> GetAllActivities();
        Task<IEnumerable<Activity>> GetUserActivities(string userEmail);
        Task CreateActivity(string userEmail, string activityName,int distance,int time);
    }
}
