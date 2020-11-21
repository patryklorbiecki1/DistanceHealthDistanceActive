using System;
using System.Collections.Generic;
using System.Text;

namespace DHDA.Core.Domain
{
    public class Coach
    {
        public string Name { get; protected set; }
        public string LastName { get; protected set; }
        public DateTime DateBirth { get; protected set; }
        public string Company { get; protected set; }
        public string Number { get; protected set; }
        public string Email { get; protected set; }
        public IEnumerable<User> Users { get; protected set; }
    }
}
