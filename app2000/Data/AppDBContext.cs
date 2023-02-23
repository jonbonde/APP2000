using Microsoft.EntityFrameworkCore;

namespace app2000.Data
{
    internal sealed class AppDBContext : DbContext
    {
        public DbSet<Post> Posts { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) => optionsBuilder.UseSqlite("Data Source=./Data/AppDB.db");

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            Post[] postsToSeed = new Post[6];

            for (int i = 1; i <= 6; i++)
            {
                postsToSeed[i - 1] = new Post
                {
                    PostId = i,
                    Title = $"Innlegg {i}",
                    Content = $"Dette er innlegg {i} som trenger å få laget en nettside"
                };
            }

            modelBuilder.Entity<Post>().HasData(postsToSeed);
        }
    }
}
