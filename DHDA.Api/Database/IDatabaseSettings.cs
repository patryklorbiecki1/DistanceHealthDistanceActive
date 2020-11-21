using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DHDA.Infrastructure.Database
{
    public interface IDatabaseSettings
    {
        string ConnectionString { get; set; }
        string Database { get; set; }
    }
}
