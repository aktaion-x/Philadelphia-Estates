using RealStateAPI.Enums;
using RealStateAPI.Models;

namespace RealStateAPI.Interfaces;

public interface IPost
{
  public int Id { get; set; }

  public Types StateType { get; set; }

  public Cites City { get; set; }

  public string? Street { get; set; }

  public string? Email { get; set; }

  public string? Features { get; set; }

  public decimal Price { get; set; }
}
