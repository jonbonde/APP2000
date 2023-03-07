using System.ComponentModel.DataAnnotations;
using System.Security.Cryptography;

namespace app2000.Data
{
    internal sealed class Bruker
    {
        [Key]
        public int BrukerId { get; set; }

        [Required]
        [MaxLength(100)]
        public string Epost { get; set; } = string.Empty;

        [Required]
        [MaxLength(100)]
        public string Brukernavn { get; set; } = string.Empty;

        [Required]
        [MaxLength(100)]
        public string Passord { get; set; } = string.Empty;
    }
}
