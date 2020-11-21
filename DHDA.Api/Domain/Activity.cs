using DHDA.Core.Domain;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DHDA.Api.Domain
{
    public class Activity
    {
        [BsonId]
        public string IdActivity { get; protected set; }
        public string ActivityName { get; protected set; }
        public string UserEmail { get; protected set; }
        public int Distance { get; protected set; }
        public int TimeInSec { get; protected set; }
        public Activity(string activityName, string userEmail, int distance, int timeInSec)
        {
            IdActivity = Guid.NewGuid().ToString().Substring(0, 23);
            ActivityName = activityName;
            UserEmail = userEmail;
            Distance = distance;
            TimeInSec = timeInSec;
        }

    }

}