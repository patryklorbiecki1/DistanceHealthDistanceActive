using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;
using DHDA.Core.Domain;

namespace DHDA.Infrastructure.Services
{
    public class JwtHandler : IJwtHandler
    {
        private readonly IConfiguration _configuration;
        public JwtHandler(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public async Task<string> GenerateToken(User user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            var token = new JwtSecurityToken(issuer: _configuration["Jwt:Issuer"],
                audience: _configuration["Jwt:Issuer"],
                expires: DateTime.Now.AddMinutes(120),
                signingCredentials: credentials);
            await Task.CompletedTask;
            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
