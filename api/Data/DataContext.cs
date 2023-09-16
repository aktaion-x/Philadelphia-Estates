using Microsoft.EntityFrameworkCore;
using RealStateAPI.Models;

namespace RealStateAPI.Data;

public class DataContext : DbContext
{
  public DataContext(DbContextOptions<DataContext> options) : base(options) { }

  public DbSet<User> Users => Set<User>();
  public DbSet<Post> Posts => Set<Post>();
}