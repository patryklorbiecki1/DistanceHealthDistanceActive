using System;
using System.Collections.Generic;
using System.Text;

namespace DHDA.Infrastructure.Database
{
    public class DatabaseSettings : IDatabaseSettings
    {
        public string ConnectionString { get; set; }
        public string Database { get; set; }
    }
}
