using Microsoft.AspNetCore.Mvc;
using RealStateAPI.Models;
using RealStateAPI.Services;


namespace RealStateAPI.Controllers;

[Route("api/[controller]/[action]")]
[ApiController]
public class UserController : ControllerBase
{
  UserService _service;
  public UserController(UserService service)
  {
    _service = service;
  }

  [HttpPost]
  public async Task<IActionResult> Signup([FromBody] User user)
  {
    UserResponse response;
    try
    {
      response = await _service.CreateUser(user);
    }
    catch (Exception e)
    {
      return Unauthorized(e.Message);
    }
    return Ok(response);
  }

  [HttpPost]
  public async Task<IActionResult> Login([FromBody] UserCredentials user)
  {
    UserResponse response;
    try
    {
      response = await _service.LoginUser(user.Email!, user.Password!);
    }
    catch (Exception e)
    {
      return Unauthorized(e.Message);
    }
    return Ok(response);
  }
}