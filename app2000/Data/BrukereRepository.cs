using Microsoft.EntityFrameworkCore;

namespace app2000.Data
{
    internal static class BrukereRepository
    {
        internal async static Task<bool> CreateBrukerAsync(Bruker brukerToCreate)
        {
            using (var db = new AppDBContext())
            {
                try
                {
                    await db.Brukere.AddAsync(brukerToCreate);

                    return await db.SaveChangesAsync() >= 1;
                }
                catch (Exception e)
                {
                    return false;
                }
            }
        }

        internal async static Task<Bruker> LoggInnAsync(string brukernavn, string passord)
        {
            using (var db = new AppDBContext())
            {
                return await db.Brukere.FirstOrDefaultAsync(bruker => bruker.Brukernavn == brukernavn && bruker.Passord == passord);
            }
        }
    }
}
