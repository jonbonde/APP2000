using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace app2000.Data.Migrations
{
    /// <inheritdoc />
    public partial class SecondMigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Brukere",
                columns: table => new
                {
                    BrukerId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Epost = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false),
                    Brukernavn = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false),
                    Passord = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Brukere", x => x.BrukerId);
                });

            migrationBuilder.InsertData(
                table: "Brukere",
                columns: new[] { "BrukerId", "Brukernavn", "Epost", "Passord" },
                values: new object[,]
                {
                    { 1, "Brukernavn 1 som trenger å få laget en nettside", "Epost 1", "Passord 1" },
                    { 2, "Brukernavn 2 som trenger å få laget en nettside", "Epost 2", "Passord 2" },
                    { 3, "Brukernavn 3 som trenger å få laget en nettside", "Epost 3", "Passord 3" },
                    { 4, "Brukernavn 4 som trenger å få laget en nettside", "Epost 4", "Passord 4" },
                    { 5, "Brukernavn 5 som trenger å få laget en nettside", "Epost 5", "Passord 5" },
                    { 6, "Brukernavn 6 som trenger å få laget en nettside", "Epost 6", "Passord 6" }
                });

            migrationBuilder.UpdateData(
                table: "Posts",
                keyColumn: "PostId",
                keyValue: 1,
                columns: new[] { "Content", "Title" },
                values: new object[] { "Dette er innlegg 1 som trenger å få laget en nettside", "Innlegg 1" });

            migrationBuilder.UpdateData(
                table: "Posts",
                keyColumn: "PostId",
                keyValue: 2,
                columns: new[] { "Content", "Title" },
                values: new object[] { "Dette er innlegg 2 som trenger å få laget en nettside", "Innlegg 2" });

            migrationBuilder.UpdateData(
                table: "Posts",
                keyColumn: "PostId",
                keyValue: 3,
                columns: new[] { "Content", "Title" },
                values: new object[] { "Dette er innlegg 3 som trenger å få laget en nettside", "Innlegg 3" });

            migrationBuilder.UpdateData(
                table: "Posts",
                keyColumn: "PostId",
                keyValue: 4,
                columns: new[] { "Content", "Title" },
                values: new object[] { "Dette er innlegg 4 som trenger å få laget en nettside", "Innlegg 4" });

            migrationBuilder.UpdateData(
                table: "Posts",
                keyColumn: "PostId",
                keyValue: 5,
                columns: new[] { "Content", "Title" },
                values: new object[] { "Dette er innlegg 5 som trenger å få laget en nettside", "Innlegg 5" });

            migrationBuilder.UpdateData(
                table: "Posts",
                keyColumn: "PostId",
                keyValue: 6,
                columns: new[] { "Content", "Title" },
                values: new object[] { "Dette er innlegg 6 som trenger å få laget en nettside", "Innlegg 6" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Brukere");

            migrationBuilder.UpdateData(
                table: "Posts",
                keyColumn: "PostId",
                keyValue: 1,
                columns: new[] { "Content", "Title" },
                values: new object[] { "This is post 1 and it has some very interesting content.", "Post 1" });

            migrationBuilder.UpdateData(
                table: "Posts",
                keyColumn: "PostId",
                keyValue: 2,
                columns: new[] { "Content", "Title" },
                values: new object[] { "This is post 2 and it has some very interesting content.", "Post 2" });

            migrationBuilder.UpdateData(
                table: "Posts",
                keyColumn: "PostId",
                keyValue: 3,
                columns: new[] { "Content", "Title" },
                values: new object[] { "This is post 3 and it has some very interesting content.", "Post 3" });

            migrationBuilder.UpdateData(
                table: "Posts",
                keyColumn: "PostId",
                keyValue: 4,
                columns: new[] { "Content", "Title" },
                values: new object[] { "This is post 4 and it has some very interesting content.", "Post 4" });

            migrationBuilder.UpdateData(
                table: "Posts",
                keyColumn: "PostId",
                keyValue: 5,
                columns: new[] { "Content", "Title" },
                values: new object[] { "This is post 5 and it has some very interesting content.", "Post 5" });

            migrationBuilder.UpdateData(
                table: "Posts",
                keyColumn: "PostId",
                keyValue: 6,
                columns: new[] { "Content", "Title" },
                values: new object[] { "This is post 6 and it has some very interesting content.", "Post 6" });
        }
    }
}
