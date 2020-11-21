using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Text;

namespace DHDA.Core.Domain
{
    public class User
    {
        [BsonId]
        public string IdUser { get; protected set; }
        public string Name { get; protected set; }
        public string LastName { get; protected set; }
        public DateTime CreatedAt { get; protected set; }
        public string Company { get; protected set; }
        public string Number { get; protected set; }
        public string Email { get; protected set; }
        public string ClassName { get; protected set; }
        public string Password { get; protected set; }
        public string Salt { get; protected set; }

        public User(string email, string password,string salt)
        {
            IdUser = Guid.NewGuid().ToString().Substring(0, 23);
            Email = email;
            Password = password;
            CreatedAt = DateTime.UtcNow;
            Salt = salt;
        }
       
    }
}
