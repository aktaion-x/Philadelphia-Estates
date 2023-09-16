using RealStateAPI.Models;
using RealStateAPI.Data;
using Microsoft.EntityFrameworkCore;


namespace RealStateAPI.Services;

public class UserService
{
  private readonly DataContext _context;
  private readonly AuthenticationService _authentication;
  public UserService(DataContext context, AuthenticationService authentication)
  {
    _context = context;
    _authentication = authentication;
  }

  public async Task<UserResponse> CreateUser(User user)
  {
    var isEmailExists = await _context.Users.AnyAsync(u => u.Email == user.Email);
    if (isEmailExists)
    {
      throw new Exception("Email already exists!");
    }

    string hashedPassword = BCrypt.Net.BCrypt.HashPassword(user.Password, BCrypt.Net.BCrypt.GenerateSalt());
    user.Password = hashedPassword;
    var createdUser = await _context.Users.AddAsync(user);
    await _context.SaveChangesAsync();

    string token = _authentication.GenerateJwtToken(user);

    return new UserResponse
    {
      User = user,
      Token = token
    };
  }
  public async Task<UserResponse> LoginUser(string email, string password)
  {
    if (string.IsNullOrEmpty(email) || string.IsNullOrEmpty(password))
    {

      throw new Exception($"All fields must be filed!");
    }
    var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == email);
    if (user is null)
    {
      throw new Exception("Email or password is not correct!");
    }
    bool passwordMatch = BCrypt.Net.BCrypt.Verify(password, user.Password);
    if (!passwordMatch)
    {
      throw new Exception("Email or password is not correct!");
    }

    string token = _authentication.GenerateJwtToken(user);

    return new UserResponse
    {
      User = user,
      Token = token
    };
  }
}