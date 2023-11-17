using Application.Common.Dtos;
using System;
using System.Collections.Generic;

namespace Application.Services.Interfaces
{
    public interface IUserService
    {
        UserDto GetUser(Guid id);
        List<UserDto> GetUsers();
        void CreateUser(UserDto customerDto);

        //UPDATE

        //DELETE
    }
}
