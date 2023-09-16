using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RealStateAPI.Models;
using RealStateAPI.Services;

namespace RealStateAPI.Controllers;

[Route("api/[controller]/[action]")]
[ApiController]
public class PostController : ControllerBase
{

  PostService _service;
  public PostController(PostService service)
  {
    _service = service;
  }

  [HttpGet]
  public IEnumerable<Post> GetAllPosts([FromQuery] string? stateType, [FromQuery] string? city, [FromQuery] string? orderBy)
  {
    return _service.GetPosts(stateType!, city!, orderBy!);
  }
  [HttpGet("{id}")]
  public async Task<IActionResult> GetPost(int id)
  {
    Post post;
    try
    {
      post = await _service.GetPost(id);
    }
    catch (Exception e)
    {
      return NotFound(e.Message);
    }
    return Ok(post);
  }

  [HttpGet]
  [Authorize]
  public IEnumerable<Post> GetUserPosts()
  {
    int userId = Convert.ToInt32(User.FindFirst(ClaimTypes.NameIdentifier)!.Value);
    IEnumerable<Post> posts = _service.GetUserPosts(userId);
    return posts;
  }

  [HttpPost]
  [Authorize]
  public async Task<IActionResult> CreatePost([FromForm] Post post)
  {
    int userId = Convert.ToInt32(User.FindFirst(ClaimTypes.NameIdentifier)!.Value);
    Post createdPost;
    try
    {
      createdPost = await _service.CreatePost(post, userId);
    }
    catch (Exception e)
    {
      return Unauthorized(e.Message);
    }
    return Ok(createdPost);
  }

  [HttpPut("{id}")]
  [Authorize]
  public async Task<IActionResult> UpdatePost([FromForm] Post post, int id)
  {
    int userId = Convert.ToInt32(User.FindFirst(ClaimTypes.NameIdentifier)!.Value);
    Post updatedPost;
    try
    {
      updatedPost = await _service.UpdatePost(post, id, userId);
    }
    catch (Exception e)
    {
      return Unauthorized(e.Message);
    }
    return Ok(updatedPost);
  }

  [HttpDelete("{id}")]
  [Authorize]
  public IActionResult DeleteUserPost(int id)
  {
    int userId = Convert.ToInt32(User.FindFirst(ClaimTypes.NameIdentifier)!.Value);
    _service.DeletePost(id, userId);
    return Ok();
  }
}