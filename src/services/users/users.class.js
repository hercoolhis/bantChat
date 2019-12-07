const { Service } = require('feathers-mongoose'),
  gravatar = require('gravatar');
  

exports.Users = class Users extends Service {

  create(data, params) {
    const { username, email, password } = data,
      avatar = gravatar.url(email ,  {s: '100', r: 'x', d: 'retro'}, true),
      userData = {
        username,
        email,
        password,
        avatar
      };
    return super.create(userData, params);    

  }
  
};
