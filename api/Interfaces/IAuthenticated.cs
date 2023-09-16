namespace RealStateAPI.Interfaces;

public interface IAuthenticated : IUser
{
  public string Token { get; set; }
}