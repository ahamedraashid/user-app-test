using Application.Common.Dtos;
using Application.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Presentation.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }
        // GET: api/<CustomerController>
        [HttpGet]
        public IActionResult Get()
        {
            var users = _userService.GetUsers();
            return Ok(new
            {
                Users = users,
                Total = users.Count,
                limit = 0
            });
           
        }

        // GET api/<CustomerController>/5
        [HttpGet("{id}")]
        public UserDto Get(Guid id)
        {
            return _userService.GetUser(id);
        }

        // POST api/<CustomerController>
        [HttpPost]
        public void Post([FromBody] UserDto userDto)
        {
            _userService.CreateUser(userDto);
        }

        // PUT api/<CustomerController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<CustomerController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
