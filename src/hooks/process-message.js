// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const { data } = context;
<<<<<<< HEAD
<<<<<<< HEAD
    
=======

>>>>>>> 1c57ebb9255fa17ed15d6ef1e76473b74dd9a7d6
=======

>>>>>>> c540656a83e4ca9c91b8a369377f8d9d42ea2dd1
    // Throw an error if we didn't get a text
    if(!data.text) {
      throw new Error('A message must have a text');
    }

    // The logged in user
    const { user } = context.params;
    // The actual message text
    // Make sure that messages are no longer than 400 characters
    const text = data.text.substring(0, 400);

    // Update the original data (so that people can't submit additional stuff)
    context.data = {
      text,
<<<<<<< HEAD
=======

>>>>>>> c540656a83e4ca9c91b8a369377f8d9d42ea2dd1

<<<<<<< HEAD
=======

>>>>>>> 1c57ebb9255fa17ed15d6ef1e76473b74dd9a7d6
      recipient: data.recipient,
      // Set the user id
      user_id: user._id,
      user_username: user.username,
      user_email: user.email,
      user_avatar: user.avatar,
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 1c57ebb9255fa17ed15d6ef1e76473b74dd9a7d6
=======

>>>>>>> c540656a83e4ca9c91b8a369377f8d9d42ea2dd1
      // Add the current date
      createdAt: new Date().getTime()
    };

    return context;
  };
};
