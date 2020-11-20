using DHDA.Core.Domain;
using DHDA.Core.Repositories;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DHDA.Api.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserRepository _userRepository;

        public UserController(IUserRepository userRepository)
        { 
            _userRepository = userRepository;
        }

        [HttpGet]
        public async Task<IEnumerable<User>> GetAllUsers()
            => await _userRepository.GetAllUsers();

        [HttpGet("{id}")]
        public async Task<User> GetUserById(string id)
        => await _userRepository.GetUserById(id);
    }
}
