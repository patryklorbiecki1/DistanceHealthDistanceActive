using DHDA.Api.Commands.User;
using DHDA.Core.Domain;
using DHDA.Core.Repositories;
using Microsoft.AspNetCore.Authorization;
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

     
        [HttpGet("{email}")]
        public async Task<User> GetUserByEmail(string email)
        => await _userRepository.GetUserByEmail(email);

        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]CreateUser command)
        {
            await _userRepository.Register(command.Email, command.Password);

            return Created($"users/{command.Email}", null);
        }

    }
}
