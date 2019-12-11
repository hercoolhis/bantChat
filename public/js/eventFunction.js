
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

  ev.preventDefault();
    
  // Create a new message and then clear the input field
  await client.service('message').create({
    text: input.value    
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
  
  const chatUserName = await client.service('users').find({
    query: {
      email: {
        $in: [ userEmail ]
      },
      $select: [ 'username' ]
    }
  });

  const partnerUserName = chatUserName.data[0].username;

  const recipientMessages = await client.service('message').find({
      query: {   
        recipient: localStorage.getItem('user-email'),       
        user: userId   
      }
    }),
    sentMessages = await client.service('message').find({
      query: {          
        user: localStorage.getItem('user-id'),
        recipient: userEmail
      }
    });

  recipientMessages.data.forEach((message) => {
    message.type = 'recipient';
  });

  const allMessages = recipientMessages.data.concat(sentMessages.data);

  
  // We want to show the newest message last
  allMessages.reverse().forEach(addMessage);

  document.getElementById('chat-name').innerHTML = `${ partnerUserName }`;
  
};



