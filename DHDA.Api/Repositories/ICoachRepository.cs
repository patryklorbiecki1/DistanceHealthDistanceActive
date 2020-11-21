using DHDA.Core.Domain;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DHDA.Core.Repositories
{
    public interface ICoachRepository
    {
        Task<Coach> GetCoach(string email);
        Task<IEnumerable<User>> GetUsers(string email);
    }
}
