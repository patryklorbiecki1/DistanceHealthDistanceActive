using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
namespace DHDA.Api.Commands.Activity
{
    public class CreateActivity
    {
        public string ActivityName { get; set; }
        public string UserEmail { get; set; }
        public int Distance { get; set; }
        public int TimeInSec { get; set; }
    }
}