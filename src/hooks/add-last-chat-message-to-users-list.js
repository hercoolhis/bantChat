/* eslint-disable require-atomic-updates */
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {

    const { result, app, params } = context;
    
    const addLastMessageToChat = async user => {

      const chatMessages = await app.service('message').find({
        query: { 
          $sort: { createdAt: -1 },
          $limit: 1,                
          $or: [
            { 
              recipient: params.user.email,       
              user_id: user._id                     
            },
            { 
              user_id: params.user._id,
              recipient: user.email
            }
          ]          
        }
      });

      let last_message = chatMessages.data[0] ? chatMessages.data[0].text : '...';
<<<<<<< HEAD
=======

      
>>>>>>> 1c57ebb9255fa17ed15d6ef1e76473b74dd9a7d6
      
      return {
        ...user,
        text : last_message
      };

    };

    context.result.data = await Promise.all(result.data.map(addLastMessageToChat));

    return context;
  };
};
