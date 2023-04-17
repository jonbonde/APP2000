using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.Sqlite;
using Microsoft.EntityFrameworkCore;
using System.Data.Common;

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

        [HttpPost]
        internal async static Task<SignInResponse> LoggInnAsync(SignInRequest request)
        {
            SignInResponse response = new SignInResponse();
            response.IsSuccess = true;
            response.Message = "Successful";

            using (SqliteConnection conn = new SqliteConnection("Data Source=./Data/AppDB.db"))
            {
                try
                {
                    string SqlQuery = @"SELECT * FROM Brukere WHERE Brukernavn=@Brukernavn AND Passord=@Passord";

                    using (SqliteCommand command = new SqliteCommand(SqlQuery, conn))
                    {
                        conn.Open();

                        command.CommandType = System.Data.CommandType.Text;
                        command.CommandTimeout = 1000;
                        command.Parameters.AddWithValue("@Brukernavn", request.Brukernavn);
                        command.Parameters.AddWithValue("@Passord", request.Passord);

                        using (DbDataReader reader = await command.ExecuteReaderAsync())
                        {
                            if (reader.HasRows)
                            {
                                response.Message = "Innlogging vellykket";
                            }
                            else
                            {
                                response.IsSuccess = false;
                                response.Message = "Feil brukernavn eller passord";
                            }
                        }
                    }
                }
                catch (Exception e)
                {
                    response.IsSuccess = false;
                    response.Message = e.Message;
                }

                return response;
            }
        }
    }
}
