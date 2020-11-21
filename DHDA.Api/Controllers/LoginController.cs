using DHDA.Api.Commands.User;
using DHDA.Core.Repositories;
using DHDA.Infrastructure.Services;
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
    public class LoginController : ControllerBase
    {
        private readonly IUserRepository _userRepository;
        private readonly IJwtHandler _jwtHandler;

        public LoginController(IUserRepository userRepository, IJwtHandler jwtHandler)
        {
            _userRepository = userRepository;
            _jwtHandler = jwtHandler;
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> Login([FromBody] CreateUser createUser)
        {
            IActionResult response = Unauthorized();
            var user = await _userRepository.Login(createUser.Email, createUser.Password);
            if (user != null)
            {
                var tokenString = await _jwtHandler.GenerateToken(user);
                response = Ok(new { token = tokenString });
            }
            return response;
        }

    }
}
