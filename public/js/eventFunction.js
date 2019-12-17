
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const signUpFunction = async () => {  
  // For signup, create a new user and then log them in
  const credentials = getCredentials('signUp');
        
  // First create the user
  await client.service('users').create(credentials);
  // If successful log them in
  await login(credentials);
};


const loginFunction = async () => {
  const user = getCredentials('logIn');
  
  await login(user);
};

const logOutFunction = async () => {
  await client.logout();
  document.body.innerHTML = loginHTML;
};

const sendMessage = async (ev) => {
  const input = document.querySelector('[name="text"]');
  const recipient = document.querySelector('[name="recipient"]').value || 'general';

  

  ev.preventDefault();
    
  // Create a new message and then clear the input field
  await client.service('message').create({
    text: input.value,
    recipient   
  });
    
  input.value = '';
};

const showSignUp = () => {
  document.body.innerHTML = signUpHTML;
};

const showLogIn = () => {
  document.body.innerHTML = loginHTML;
};

const showUserChat = async (userEmail, userId) => {

  document.getElementsByClassName('chat')[0].innerHTML = '';  
  document.getElementsByClassName(`${userEmail}`)[0].innerHTML = '';
  
  const chatUserName = await client.service('users').find({
      query: {
        email: {
          $in: [ userEmail ]
        },
        $select: [ 'username' ]
      }
    }),

    partnerUserName = chatUserName.data[0].username,

    privateMessages = await client.service('message').find({
      query: { 
        $sort: { createdAt: -1 },
        $limit: 25,      
        $or: [
          { 
            recipient: localStorage.getItem('user-email'),       
            user_id: userId                     
          },
          { 
            user_id: localStorage.getItem('user-id'),
            recipient: userEmail
          }
        ]          
      }
    });
   

  privateMessages.data.forEach((message) => {
    if (message.user === userId) {
      message.type = 'recipient';
    }
  });
  
  // We want to show the newest message last
  privateMessages.data.reverse().forEach(addMessage);

  document.getElementById('chat-name').innerHTML = `${ partnerUserName }`;
  let messageRecipient = document.querySelector('[name="recipient"]');
  messageRecipient.value = userEmail;
  
};



