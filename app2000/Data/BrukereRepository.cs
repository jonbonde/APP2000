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
    }
}
