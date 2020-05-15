using System.Collections.Generic;

namespace VyShare.Models
{
    public class User : Person
    {
        public IEnumerable<Order> Orders { get; set; }
        public string Username { get; set; }
        public string Password { get; set; } // Storing password in clear text for now
    }
}