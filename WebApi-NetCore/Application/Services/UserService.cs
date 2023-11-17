using Application.Common.Dtos;
using Application.Common.Interfaces;
using Application.Services.Interfaces;
using AutoMapper;
using Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Application.Services
{
    public class UserService : IUserService
    {
        private readonly IApplicationContext _applicationContext;
        private readonly Mapper _mapper;

        public UserService(IApplicationContext applicationContext)
        {
            _applicationContext = applicationContext;

            _applicationContext = applicationContext;
            MapperConfiguration config = new MapperConfiguration(cfg =>
            {
                cfg.CreateMap<UserDto, User>().ReverseMap();

            });

            _mapper = new Mapper(config);
        }

        //ApplicationContext objct should not be exposed here instead of that we need to expose a wrapper of this making EF encapsulated within Infrastructure proj
        //better to expose something lke UnitOfWork which encapsulates EF 
        public void CreateUser(UserDto userDto)
        {
            var user = _mapper.Map<User>(userDto);
            //add should be a prop in UserRepository under IUnitOfWork
            _applicationContext.User.Add(user);

            _applicationContext.SaveChanges();
        }

        public UserDto GetUser(Guid id)
        {
            var user = _applicationContext.User.Find(id);
            return _mapper.Map<UserDto>(user);
        }

        public List<UserDto> GetUsers()
        {
            var users = _applicationContext.User.ToList();
            return _mapper.Map<List<UserDto>>(users);
        }
    }
}
