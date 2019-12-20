
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
/* eslint-disable require-atomic-updates */
// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {

    
    const { data, app, method, result, params } = context;
    // Update the original data (so that people can't submit additional stuff)
<<<<<<< HEAD
    
    const addUser = async message => {
      // Get the user based on their id, pass the `params` along so
      // that we get a safe version of the user data
=======

    const addUser = async message => {
      // Get the user based on their id, pass the `params` along so
      // that we get a safe version of the user data

>>>>>>> 1c57ebb9255fa17ed15d6ef1e76473b74dd9a7d6
     
      //const user = await app.service('users').get(ObjectId(message.user), params);
  
      // Merge the message content to include the `user` object
      return {
        ...message
<<<<<<< HEAD
=======

>>>>>>> 1c57ebb9255fa17ed15d6ef1e76473b74dd9a7d6
      };
    };

    // In a find method we need to process the entire page
    if (method === 'find') {
      // Map all data to include the `user` information
<<<<<<< HEAD
      
=======

>>>>>>> 1c57ebb9255fa17ed15d6ef1e76473b74dd9a7d6
      context.result.data = await Promise.all(result.data.map(addUser));
    } else {
      // Otherwise just update the single result
      context.result = await addUser(data);
    }

    return context;
  };
};



