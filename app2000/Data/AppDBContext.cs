using Microsoft.EntityFrameworkCore;

namespace app2000.Data
{
    internal sealed class AppDBContext : DbContext
    {
        public DbSet<Post> Posts { get; set; }
        public DbSet<Bruker> Brukere { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) => optionsBuilder.UseSqlite("Data Source=./Data/AppDB.db");

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            Post[] postsToSeed = new Post[6];
            Bruker[] brukerToSeed = new Bruker[6];

            for (int i = 1; i <= 6; i++)
            {
                postsToSeed[i - 1] = new Post
                {
                    PostId = i,
                    Title = $"Innlegg {i}",
                    Content = $"Dette er innlegg {i} som trenger å få laget en nettside"
                };

                brukerToSeed[i - 1] = new Bruker
                {
                    BrukerId = i,
                    Epost = $"Epost {i}",
                    Brukernavn = $"Brukernavn {i} som trenger å få laget en nettside",
                    Passord = $"Passord {i}"
                };
            }

            modelBuilder.Entity<Post>().HasData(postsToSeed);
            modelBuilder.Entity<Bruker>().HasData(brukerToSeed);
        }
    }
}
