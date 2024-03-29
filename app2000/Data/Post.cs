﻿using System.ComponentModel.DataAnnotations;

namespace app2000.Data
{
    internal sealed class Post
    {
        [Key]
        public int PostId { get; set; }

        [Required]
        [MaxLength(100)]
        public string Title { get; set; } = string.Empty;

        [Required]
        [MaxLength(100000000)]

        public string Content { get; set; } = string.Empty;

        [MaxLength(100)]

        public string Bilde { get; set; } = string.Empty;

        [Required]
        [MaxLength (100)]

        public string BrukerNavn { get; set;} = string.Empty;
    }
}
