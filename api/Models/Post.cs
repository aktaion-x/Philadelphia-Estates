using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using RealStateAPI.Enums;
using RealStateAPI.Interfaces;


namespace RealStateAPI.Models;

public class Post : IPost
{
  public int Id { get; set; }

  public int OwnerId { get; set; } // Property to hold the Owner's ID
  [ForeignKey("OwnerId")] // Define a foreign key relationship
  public User? Owner { get; set; }

  [Required]
  public Types StateType { get; set; }

  public string? ImagePath { get; set; }

  [NotMapped]
  public IFormFile? Image { get; set; }

  [Required]
  public Cites City { get; set; }

  [Required]
  public string? Street { get; set; }

  [Required]
  public string? Email { get; set; }

  [Required]
  public string? Features { get; set; }

  [Required]
  public decimal Price { get; set; }
}
