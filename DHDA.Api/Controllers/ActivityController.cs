using DHDA.Api.Commands.Activity;
using DHDA.Api.Domain;
using DHDA.Api.Repositories;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DHDA.Api.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class ActivityController : Controller
    {
        private readonly IActivityRepository _activityRepository;

        public ActivityController(IActivityRepository activityRepository)
        {
            _activityRepository = activityRepository;
        }

        [HttpGet]
        public async Task<IEnumerable<Activity>> GetAllActivities()
            => await _activityRepository.GetAllActivities();

        [HttpGet("{email}")]
        public async Task<IEnumerable<Activity>> GetUserActivities(string email)
            => await _activityRepository.GetUserActivities(email);

        [HttpPost]
        public async Task CreateActivity([FromBody] CreateActivity command)
        {
            await _activityRepository.CreateActivity(command.UserEmail, command.ActivityName, command.Distance, command.TimeInSec);

        }


    }
}