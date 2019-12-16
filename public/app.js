/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

// Show the login page
const showLogin = (error) => {
  if(document.querySelectorAll('.login').length && error) {
    document.querySelector('.heading').insertAdjacentHTML('beforeend', `<p>There was an error: ${error.message}</p>`);
  } else {
    showLogIn();
  }
};
  
// Shows the chat page
const showChat = async () => {  
  document.body.innerHTML = chatHTML2;
  
  // Find the latest 25 messages. They will come with the newest first
  const messages = await client.service('message').find({
    query: {
      $sort: { createdAt: -1 },
      $limit: 25,
      recipient: 'general'
    }
  });

  
    
  // We want to show the newest message last
  messages.data.reverse().forEach(addMessage);

  let user = localStorage.getItem('user'),
    email = localStorage.getItem('user-email'),
    avatar = localStorage.getItem('avatar');
  
  // Find all users
  const users = await client.service('users').find({
    query: {
      email: {
        $nin: [ email ]
      }
    }
  });


  document.getElementById('current-user').innerHTML = `${user}`;
  document.getElementById('current-user-email').innerHTML = `${email}`;
  document.getElementById('profile-img').src = avatar;
  
  

  //   var index = array.indexOf(5);
  // if (index > -1) {
  //   array.splice(index, 1);
  // }




  // Add each user to the list
  users.data.forEach(addUser);
  //window.location = 'http://localhost:4200/chat.html';
};

// Retrieve email/password object from the login/signup page
const getCredentials = (mode) => {
  
  const user = {
    email: document.querySelector('[name="email"]').value,
    password: document.querySelector('[name="password"]').value
  };

  switch (mode) {
  case 'logIn':

    user.username = undefined;

    break;
  case 'signUp': 

    user.username = document.querySelector('[name="username"]').value;
  
    break;
  
  default:
    break;
  }  
  
  return user;
};

// Log in either using the given email/password or the token from storage
const login = async credentials => {
  try {
    
    if(!credentials) {
      // Try to authenticate using an existing token
      await client.reAuthenticate();
      
    } else {
      // Otherwise log in with the `local` strategy using the credentials we got
      const { user } = await client.authenticate({
        strategy: 'local',
        ...credentials
      });

      localStorage.setItem('user', user.username);
      localStorage.setItem('user-email', user.email);
      localStorage.setItem('avatar', user.avatar);
      localStorage.setItem('user-id', user._id);
      
    }

    
    showChat();
  } catch(error) {
    // If we got an error, show the login page
    showLogin(error);
  }
};








//Listeners and Functions
const addEventListener = (selector, event, handler) => {
  document.addEventListener(event, async ev => {
    if (ev.target.closest(selector)) {
      handler(ev);
    }
  });
};
 

// "Signup and login" button click handler
addEventListener('#signup', 'click', signUpFunction);  
// "Login" button click handler
addEventListener('#login', 'click', loginFunction);
// "Logout" button click handler
addEventListener('#logout', 'click', logOutFunction);
// "Send" message form submission handler
addEventListener('#send-message', 'submit', sendMessage);



//view events
addEventListener('#showSignUp', 'click', showSignUp);
addEventListener('#showLogin', 'click', showLogIn);

  
// Listen to created events and add the new message in real-time
client.service('message').on('created', addNewMessage);
  
// We will also see when new users get created in real-time
client.service('users').on('created', addUser);









  
// Call login right away so we can show the chat window
// If the user can already be authenticated
login();
  
  
  