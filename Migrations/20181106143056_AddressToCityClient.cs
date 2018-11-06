using Microsoft.EntityFrameworkCore.Migrations;

namespace TestTask.Migrations
{
    public partial class AddressToCityClient : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Address",
                table: "Clients",
                newName: "City");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "City",
                table: "Clients",
                newName: "Address");
        }
    }
}
