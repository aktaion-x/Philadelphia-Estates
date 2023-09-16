using RealStateAPI.Data;
using RealStateAPI.Enums;
using RealStateAPI.Models;

namespace RealStateAPI.Services;

class UploadImageService
{
  public static async Task<string> Upload(Post post)
  {
    string fileName = Guid.NewGuid().ToString() + Path.GetExtension(post.Image!.FileName);
    string imagePath = Path.Combine(@"wwwroot\images", fileName);

    using (FileStream stream = new FileStream(imagePath, FileMode.Create))
    {
      await post.Image.CopyToAsync(stream);
    }
    post.ImagePath = $@"images\{fileName}";
    post.Image = null;

    return post.ImagePath;
  }

  public static string UploadDefault(Post post)
  {
    string path = "/images/for-sale.png";
    post.ImagePath = path;
    return path;
  }

}