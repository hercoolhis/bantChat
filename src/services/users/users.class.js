const { Service } = require('feathers-mongoose'),
  crypto = require('crypto'),
  // The Gravatar image service
  gravatarUrl = 'https://s.gravatar.com/avatar',
  // The size query. Our chat needs 60px images
  query = 's=60';

exports.Users = class Users extends Service {

  create(data, params) {
    const { username, email, password } = data,
      hash = crypto.createHash('md5').update(email.toLowerCase()).digest('hex'),
      avatar = `${gravatarUrl}/${hash}?${query}`,
      userData = {
        username,
        email,
        password,
        avatar
      };

    return super.create(userData, params);    

  }
  
};
