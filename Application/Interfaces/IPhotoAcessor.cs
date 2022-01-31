using Microsoft.AspNetCore.Http;

namespace Application.Photos
{
    public interface IPhotoAcessor
    {
        Task<PhotoUploadResult> AddPhoto(IFormFile file);
        Task<string> DeletePhoto(string publicId);
    }
}