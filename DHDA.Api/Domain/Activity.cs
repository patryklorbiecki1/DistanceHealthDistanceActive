using DHDA.Core.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DHDA.Api.Domain
{
    public class Activity
    {
        public string ActivityName { get; protected set; }
        public string UserEmail { get; protected set; }
        public int Distance { get; protected set; }
        public int TimeInSec { get; protected set; }
        public Activity(string activityName, string userEmail, int distance, int timeInSec)
        {
            ActivityName = activityName;
            UserEmail = userEmail;
            Distance = distance;
            TimeInSec = timeInSec;
        }

    }
 
}
