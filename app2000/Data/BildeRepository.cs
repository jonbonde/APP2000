using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.IO;
using System.IO.Pipelines;

namespace app2000.Data
{
    internal static class BildeRepository
    {
        [HttpPost]
        internal async static Task<bool> UploadBilde([FromForm] Bilde bilde)
        {
            try
            {
                string path = Path.Combine(Directory.GetCurrentDirectory(), "bilder", bilde.BildeNavn);

                using (Stream stream = new FileStream(path, FileMode.Create))
                {
                    await bilde.file.CopyToAsync(stream);

                    return true;
                }
            }
            catch (Exception ex) 
            {
                return false;
            }
        }
    }
}
