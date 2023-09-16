using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.IdentityModel.Tokens;
using RealStateAPI.Models;

namespace RealStateAPI.Services;

public class AuthenticationService
{
  private readonly IConfiguration _configuration;
  public AuthenticationService(IConfiguration configuration)
  {
    _configuration = configuration;
  }

  public string GenerateJwtToken(User user)
  {
    List<Claim> claims = new List<Claim>
    {
      new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
      new Claim(ClaimTypes.Name, user.Email!)
    };

    SymmetricSecurityKey key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
    SigningCredentials creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
    DateTime expires = DateTime.UtcNow.AddDays(Convert.ToDouble(_configuration["Jwt:ExpireDays"]));

    JwtSecurityToken token = new JwtSecurityToken(
        _configuration["Jwt:Issuer"],
        _configuration["Jwt:Audience"],
        claims: claims,
        expires: expires,
        signingCredentials: creds
    );

    string tokenString = new JwtSecurityTokenHandler().WriteToken(token);

    return tokenString;
  }
}