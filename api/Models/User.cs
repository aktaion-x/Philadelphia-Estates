using System.ComponentModel.DataAnnotations;
using RealStateAPI.Interfaces;

namespace RealStateAPI.Models;

public class User : IUser
{
  public int Id { get; set; }

  [Required]
  [MaxLength(100)]
  public string? FullName { get; set; }

  [Required]
  [MaxLength(100)]
  public string? Email { get; set; }

  [Required]
  [MaxLength(20)]
  public string? Phone { get; set; }

  [Required]
  [MaxLength(100)]
  [MinLength(6)]
  public string? Password { get; set; }
}
