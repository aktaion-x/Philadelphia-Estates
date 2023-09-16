using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using RealStateAPI.Models;
using RealStateAPI.Services;
using RealStateAPI.Data;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;


var builder = WebApplication.CreateBuilder(args);
var connectionString = builder.Configuration.GetConnectionString("RealState") ?? "Data Source=RealState.db";
builder.Services.AddCors(options =>
    {
      options.AddPolicy("AllowReactApp", builder =>
      {
        builder
              .WithOrigins("http://localhost:3000") // Update this with the actual origin of your React app
              .AllowAnyHeader()
              .AllowAnyMethod();
      });
    });
builder.Services.AddAuthentication(options =>
{
  options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
  options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(options =>
{
  options.TokenValidationParameters = new TokenValidationParameters
  {
    ValidateIssuer = true,
    ValidateAudience = true,
    ValidateLifetime = true,
    ValidateIssuerSigningKey = true,
    ValidIssuer = builder.Configuration["Jwt:Issuer"],
    ValidAudience = builder.Configuration["Jwt:Audience"],
    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:Key"]))
  };
});
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddScoped<UserService>();
builder.Services.AddScoped<PostService>();
builder.Services.AddScoped<AuthenticationService>();
builder.Services.AddSqlite<DataContext>(connectionString);

builder.Services.AddSwaggerGen((c) =>
{
  c.SwaggerDoc("v1", new OpenApiInfo { Title = "Todo Api", Description = "Keep track of your tasks", Version = "v1" });
  // Define a security scheme for Bearer token
  c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
  {
    Type = SecuritySchemeType.Http,
    Scheme = "bearer",
    BearerFormat = "JWT",
    Description = "Enter your Bearer token in this format: Bearer {your token}",
    In = ParameterLocation.Header,
    Name = "Authorization",
  });

});

var app = builder.Build();
app.UseSwagger();
app.UseSwaggerUI((c) =>
{
  c.SwaggerEndpoint("/swagger/v1/swagger.json", "Todo Api v1");
});

app.UseHttpsRedirection();
// Here, you're allowing CORS for an array of specific domains.
app.UseCors("AllowReactApp"); // Apply the CORS policy
app.UseAuthentication();
app.UseAuthorization();
app.UseStaticFiles();
app.MapControllers();

app.Run();
