using DHDA.Api.DTO;
using DHDA.Core.Domain;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace DHDA.Core.Repositories
{
    public interface IUserRepository
    {
        Task<IEnumerable<UserDTO>> GetAllUsers();
        Task<User> GetUserByEmail(string email);
        Task Register(string email, string password);
        Task<User> Login(string email, string password);
    }
}
