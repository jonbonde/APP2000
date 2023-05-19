using Microsoft.AspNetCore.Mvc;
using System.IO;

namespace app2000.Data
{
    internal static class BildeRepository
    {
        internal async static Task<bool> UploadBilde(Bilde bilde)
        {
            string path = Path.Combine(@"..\..\reactclient\src\Utilities\Bilder", bilde.BildeNavn);
            using (Stream stream = new FileStream(path, FileMode.Create))
            {
                try
                {
                    bilde.file.CopyTo(stream);

                    return true;
                }
                catch (Exception e)
                {
                    return false;
                }
            }
        }
        /* internal static Response UploadBilde([FromForm] Bilde bilde)
        {
            Response response = new Response();
            try
            {
                string path = Path.Combine(@"..\..\reactclient\src\Utilities\Bilder", bilde.BildeNavn);
                using (Stream stream = new FileStream(path, FileMode.Create))
                {
                    bilde.file.CopyTo(stream);
                }
                response.StatusCode = 200;
                response.StatusMessage = "Image created successfully";
            }
            catch (Exception ex)
            {
                response.StatusCode = 100;
                response.StatusMessage = ex.Message;
            }

            return response;
        } */
    }
}
