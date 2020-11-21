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
    public class CoachController : ControllerBase
    {
        private readonly ICoachRepository _coachRepository;

        public CoachController(ICoachRepository coachRepository)
        {
            _coachRepository = coachRepository;
        }

        [HttpGet("/u/{coachEmail}")]
        public async Task<IEnumerable<User>> GetUsers(string coachEmail)
            => await _coachRepository.GetUsers(coachEmail);

        [HttpGet("{email}")]
        public async Task<Coach> GetUserByEmail(string email)
            => await _coachRepository.GetCoach(email);

    }
}
