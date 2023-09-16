using RealStateAPI.Models;
using RealStateAPI.Data;
using Microsoft.EntityFrameworkCore;
using RealStateAPI.Enums;

namespace RealStateAPI.Services;

public class PostService
{
  private readonly DataContext _context;
  public PostService(DataContext context)
  {
    _context = context;
  }

  public IEnumerable<Post> GetPosts(string stateType, string city, string orderBy)
  {
    IQueryable<Post> query = _context.Posts.AsNoTracking();

    Enum.TryParse<Cites>(city, out var newCity);

    if (!string.IsNullOrEmpty(stateType) && Enum.TryParse<Types>(stateType, out var parsedStateType))
    {
      query = query.Where(post => post.StateType == parsedStateType);
    }

    if (!string.IsNullOrEmpty(city) && Enum.TryParse<Cites>(city, out var parsedCity))
    {
      query = query.Where(post => post.City == parsedCity);
    }

    if (!string.IsNullOrEmpty(orderBy))
    {
      if (orderBy.ToLower().Equals("DESC"))
      {
        query = query.OrderByDescending(post => (float)post.Price);
      }
      else
      {
        query = query.OrderBy(post => (float)post.Price);
      }
    }

    return query.ToList();
  }

  public async Task<Post> GetPost(int id)
  {
    Post? post = await _context.Posts.FindAsync(id);
    if (post is null)
    {
      throw new Exception("Post doesn't exists!");
    }
    return post;
  }

  public IEnumerable<Post> GetUserPosts(int userId)
  {
    return _context.Posts.Where(post => post.Owner!.Id == userId).ToList();
  }

  public async Task<Post> CreatePost(Post post, int userId)
  {
    post.OwnerId = userId;
    try
    {
      User? user = await _context.Users.FindAsync(userId);
      post.Owner = user;
      if (post.Image is not null & post.Image?.Length > 0)
      {
        await UploadImageService.Upload(post);
      }
      else
      {
        UploadImageService.UploadDefault(post);
      }
      post.Id = 0;
      await _context.Posts.AddAsync(post);
      await _context.SaveChangesAsync();
    }
    catch (Exception e)
    {
      throw new Exception($"Can't create post {e.Message}");
    }
    return post;
  }

  public async Task<Post> UpdatePost(Post post, int postId, int userId)
  {
    var postToUpdate = await _context.Posts.FindAsync(postId);
    if (postToUpdate is null)
    {
      throw new Exception("Post doesn't exists!");
    }
    if (postToUpdate.OwnerId != userId)
    {
      throw new Exception("Post doesn't belongs to you!");
    }
    try
    {
      if (post.Image is not null & post.Image?.Length > 0)
      {
        string ImagePath = await UploadImageService.Upload(post);
        postToUpdate.ImagePath = ImagePath;
      }
    }
    catch (Exception e)
    {
      throw new Exception($"Image can't be updated.. - {e.Message}");
    }

    postToUpdate.Street = post.Street;
    postToUpdate.City = post.City;
    postToUpdate.Price = post.Price;
    postToUpdate.StateType = post.StateType;
    postToUpdate.Email = post.Email;
    postToUpdate.Features = post.Features;
    postToUpdate.OwnerId = userId;

    await _context.SaveChangesAsync();

    return postToUpdate;
  }

  public void DeletePost(int postId, int userId)
  {
    var postToDelete = _context.Posts.Find(postId);

    if (postToDelete is null)
    {
      throw new Exception("Post doesn't exists!");
    }
    if (postToDelete.OwnerId != userId)
    {
      throw new Exception("Post doesn't belongs to you!");
    }
    _context.Posts.Remove(postToDelete);
    _context.SaveChanges();
  }
}