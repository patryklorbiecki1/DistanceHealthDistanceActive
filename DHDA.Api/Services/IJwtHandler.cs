using DHDA.Core.Domain;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DHDA.Infrastructure.Services
{
    public interface IJwtHandler
    {
        Task<string> GenerateToken(User user);
    }
}
