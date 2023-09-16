using RealStateAPI.Enums;
using RealStateAPI.Models;

namespace RealStateAPI.Interfaces;

public interface IUser
{
  public int Id { get; set; }

  public string? FullName { get; set; }

  public string? Email { get; set; }

  public string? Phone { get; set; }

  public string? Password { get; set; }
}
