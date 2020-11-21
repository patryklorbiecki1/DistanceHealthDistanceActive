using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DHDA.Api.DTO
{
    public class UserDTO
    {
        public string IdUser { get; set; }
        public string Name { get;  set; }
        public string LastName { get;  set; }
        public DateTime CreatedAt { get;  set; }
        public string Company { get;  set; }
        public string Number { get;  set; }
        public string Email { get;  set; }
    }
}
