// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const { data } = context;

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


      recipient: data.recipient,
      // Set the user id
      user_id: user._id,
      user_username: user.username,
      user_email: user.email,
      user_avatar: user.avatar,

      // Add the current date
      createdAt: new Date().getTime()
    };

    return context;
  };
};
