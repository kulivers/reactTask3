using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;

using userWebApi.Model;

namespace reactTask_3.Controllers
{
    public class RegistrationMessage
    {
        public List<string> Messages { get; set; }
    }

    [Route("api/[controller]")]
    [ApiController]
    public class UserRegisterController : ControllerBase
    {
        [HttpGet]
        public string Get()
        {
            return "I'm healthy";
        }

        [HttpPost]
        public IActionResult Post(UserData userData)
        {
            return Ok(userData.GetRegisteredMessage());
        }
    }
}
