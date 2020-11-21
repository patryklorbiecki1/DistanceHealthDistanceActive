using AutoMapper;
using DHDA.Api.DTO;
using DHDA.Core.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DHDA.Api.AutoMapper
{
    public static class AutoMapperConfig
    { 
        public static IMapper Initialize()
          => new MapperConfiguration(cfg =>
          {
              cfg.CreateMap<User, UserDTO>();
            
          })
          .CreateMapper();
    }
}
