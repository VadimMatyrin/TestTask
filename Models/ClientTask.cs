using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TestTask.Models
{
    public class ClientTask
    {
        public int Id { get; set; }
        [Required]
        [MaxLength(50)]
        public string TaskName { get; set; }
        [Required]
        [MaxLength(300)]
        public string Description { get; set; }
        [Required]
        public DateTime StartTime { get; set; }
        [Required]
        public DateTime EndTime { get; set; }
        public int ClientId { get; set; }
        public virtual Client Client { get; set; }
    }
}
