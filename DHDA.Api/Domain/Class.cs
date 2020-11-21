using System;
using System.Collections.Generic;
using System.Text;

namespace DHDA.Core.Domain
{
    public class Class
    {
        public String ClassName { get; protected set; }
        public IEnumerable<User> Users { get; protected set; }
        public Coach coach { get; protected set; }

    }
}
