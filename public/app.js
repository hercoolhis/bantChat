// Establish a Socket.io connection
const socket = io();

// Initialize our Feathers client application through Socket.io
// with hooks and authentication.
const client = feathers();
client.configure(feathers.socketio(socket));

// Use localStorage to store our login token
client.configure(feathers.authentication({
  storage: window.localStorage
}));


// Login screen
const loginHTML = `<div class="limiter">
<div class="container-login100">
    <div class="wrap-login100">
        <form class="login100-form validate-form">
            <span class="login100-form-title p-b-26">
                Welcome
            </span>
            <span class="login100-form-title p-b-48">
                <i class="zmdi zmdi-font"></i>
            </span>

            <div class="wrap-input100 validate-input" data-validate = "Valid email is: a@b.c">
                <input class="input100" type="text" name="email">
                <span class="focus-input100" data-placeholder="Email"></span>
            </div>

            <div class="wrap-input100 validate-input" data-validate="Enter password">
                <span class="btn-show-pass">
                    <i class="zmdi zmdi-eye"></i>
                </span>
                <input class="input100" type="password" name="password">
                <span class="focus-input100" data-placeholder="Password"></span>
            </div>

            <div class="container-login100-form-btn">
                <div class="wrap-login100-form-btn">
                    <div class="login100-form-bgbtn"></div>
                    <button type="button" id="login" class="login100-form-btn">
                        Login
                    </button>
                </div>
            </div>

            <div class="text-center p-t-115">
                <span class="txt1">
                    Don’t have an account?
                </span>

                <a id="showSignUp" class="txt2" href="#">
                    Sign Up
                </a>
            </div>
        </form>
    </div>
</div>
</div>`;

const signUpHTML = `<div class="limiter">
<div class="container-login100">
    <div class="wrap-login100">
        <form class="login100-form validate-form">
            <span class="login100-form-title p-b-26">
                Welcome
            </span>
            <span class="login100-form-title p-b-48">
                <i class="zmdi zmdi-font"></i>
            </span>
            <div class="wrap-input100 validate-input"  data-validate="Enter Username" >
                <input class="input100" type="text" name="username">
                <span class="focus-input100" data-placeholder="Username"></span>
            </div>

            <div class="wrap-input100 validate-input" data-validate = "Valid email is: a@b.c">
                <input class="input100" type="text" name="email">
                <span class="focus-input100" data-placeholder="Email"></span>
            </div>

            <div class="wrap-input100 validate-input" data-validate="Enter password">
                <span class="btn-show-pass">
                    <i class="zmdi zmdi-eye"></i>
                </span>
                <input class="input100" type="password" name="password">
                <span class="focus-input100" data-placeholder="Password"></span>
            </div>

            <div class="container-login100-form-btn">
                <div class="wrap-login100-form-btn">
                    <div class="login100-form-bgbtn"></div>
                    <button type="button" id="signup" class="login100-form-btn">
                        SignUp
                    </button>
                </div>
            </div>

            <div class="text-center p-t-115">
                <span class="txt1">
                    Have an account?
                </span>

                <a id="showLogin" class="txt2" href="#">
                    Log In
                </a>
            </div>
        </form>
    </div>
</div>
</div>`;

// Chat base HTML (without user list and messages)
const chatHTML = `<main class="flex flex-column">
  <header class="title-bar flex flex-row flex-center">
    <div class="title-wrapper block center-element">
      <img class="logo" src="http://feathersjs.com/img/feathers-logo-wide.png"
        alt="Feathers Logo">
      <span class="title">Chat</span>
    </div>
  </header>

  <div class="flex flex-row flex-1 clear">
    <aside class="sidebar col col-3 flex flex-column flex-space-between">
      <header class="flex flex-row flex-center">
        <h4 class="font-300 text-center">
          <span class="font-600 online-count">0</span> users
        </h4>
      </header>

      <ul class="flex flex-column flex-1 list-unstyled user-list"></ul>
      <footer class="flex flex-row flex-center">
        <a href="#" id="logout" class="button button-primary">
          Sign Out
        </a>
      </footer>
    </aside>

    <div class="flex flex-column col col-9">
      <main class="chat flex flex-column flex-1 clear"></main>

      <form class="flex flex-row flex-space-between" id="send-message">
        <input type="text" name="text" class="flex flex-1">
        <button class="button-primary" type="submit">Send</button>
      </form>
    </div>
  </div>
</main>`;

const chatHTML2 = `

<div id="frame">
<div id="sidepanel">
    <div id="profile">
        <div class="wrap">
            <img id="profile-img" src="http://emilcarlsson.se/assets/mikeross.png" class="online" alt="" />
            <p id="current-user"></p>
            <p id="current-user-email"></p>
            
            <i class="fa fa-chevron-down expand-button" aria-hidden="true"></i>
            <div id="status-options">
                <ul>
                    <li id="status-online" class="active"><span class="status-circle"></span> <p>Online</p></li>
                    <li id="status-away"><span class="status-circle"></span> <p>Away</p></li>
                    <li id="status-busy"><span class="status-circle"></span> <p>Busy</p></li>
                    <li id="status-offline"><span class="status-circle"></span> <p>Offline</p></li>
                </ul>
            </div>
            <div id="expanded">
                <label for="twitter"><i class="fa fa-facebook fa-fw" aria-hidden="true"></i></label>
                <input name="twitter" type="text" value="mikeross" />
                <label for="twitter"><i class="fa fa-twitter fa-fw" aria-hidden="true"></i></label>
                <input name="twitter" type="text" value="ross81" />
                <label for="twitter"><i class="fa fa-instagram fa-fw" aria-hidden="true"></i></label>
                <input name="twitter" type="text" value="mike.ross" />
            </div>
        </div>
    </div>
    <div id="search">
        <label for=""><i class="fa fa-search" aria-hidden="true"></i></label>
        <input type="text" placeholder="Search contacts..." />
    </div>
    <div id="contacts">
        <ul class="user-list">
            
            
        </ul>
    </div>
    <div id="bottom-bar">
        <button id="logout"><i class="fa fa-sign-out fa-fw" aria-hidden="true"></i> <span>Sign Out</span></button>
        <button id="settings"><i class="fa fa-cog fa-fw" aria-hidden="true"></i> <span>Settings</span></button>
    </div>
</div>
<div class="content">
    <div class="contact-profile">
        
        
        <div class="social-media">
            <i class="fa fa-facebook" aria-hidden="true"></i>
            <i class="fa fa-twitter" aria-hidden="true"></i>
             <i class="fa fa-instagram" aria-hidden="true"></i>
        </div>
    </div>
    <div class="messages">
        <ul class="chat">
                     
        </ul>
    </div>
    <div class="message-input">
        <div class="wrap">
        <input type="text" placeholder="Write your message..." />
        <i class="fa fa-paperclip attachment" aria-hidden="true"></i>
        <button class="submit"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
        </div>
    </div>
</div>
</div>
`;

// Add a new user to the list
const addUser = user => {
  const userList = document.querySelector('.user-list');

  

  if(userList) {
    // Add the user to the list
    userList.innerHTML += `<li class="contact">
                <div class="wrap">
                    <span class="contact-status online"></span>
                    <img src="${user.avatar}" alt="" />
                    <div class="meta">
                        <p class="name">${user.username}</p>
                        <p class="preview">You just got LITT up, Mike.</p>
                    </div>
                </div>
            </li>`;

    

    // Update the number of users
    //const userCount = document.querySelectorAll('.user-list li').length;

    
    
    //document.querySelector('.online-count').innerHTML = userCount;
  }
};

// Renders a message to the page
const addMessage = message => {
  // The user that sent this message (added by the populate-user hook)
  
  const { user = {} } = message;
  const chat = document.querySelector('.chat');
  // Escape HTML to prevent XSS attacks
  const text = message.text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;').replace(/>/g, '&gt;');

  if(chat) {
    chat.innerHTML += `<li class="sent">
    <img src="${user.avatar}" alt="" />
    <p>${text} <small><small><small>${moment(message.createdAt).format('MMM Do, hh:mm')}</small></small></small></p>
</li> `;

    

    // Always scroll to the bottom of our message list
    chat.scrollTop = chat.scrollHeight - chat.clientHeight;
  }
};

// Show the login page
const showLogin = (error) => {
  if(document.querySelectorAll('.login').length && error) {
    document.querySelector('.heading').insertAdjacentHTML('beforeend', `<p>There was an error: ${error.message}</p>`);
  } else {
    document.getElementById('app').innerHTML = loginHTML;
  }
};
  
// Shows the chat page
const showChat = async () => {
  //document.getElementById('app').innerHTML = chatHTML2;
  //localStorage.setItem('user', user.email);
  document.body.innerHTML = chatHTML2;
  
  // Find the latest 25 messages. They will come with the newest first
  const messages = await client.service('message').find({
    query: {
      $sort: { createdAt: -1 },
      $limit: 25
    }
  });
    
  // We want to show the newest message last
  messages.data.reverse().forEach(addMessage);
  
  // Find all users
  const users = await client.service('users').find();
  let user = localStorage.getItem('user'),
    email = localStorage.getItem('user-email'),
    avatar = localStorage.getItem('avatar');

  document.getElementById('current-user').innerHTML = `${user}`;
  document.getElementById('current-user-email').innerHTML = `${email}`;
  document.getElementById('profile-img').src = avatar;
  //document.getElementById('current-user').innerHTML = `${user}`;


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
      
    }

    
    showChat();
  } catch(error) {
    // If we got an error, show the login page
    showLogin(error);
  }
};

const addEventListener = (selector, event, handler) => {
  document.addEventListener(event, async ev => {
    if (ev.target.closest(selector)) {
      handler(ev);
    }
  });
};
  
// "Signup and login" button click handler
addEventListener('#signup', 'click', async () => {
  // For signup, create a new user and then log them in
  const credentials = getCredentials('signUp');
      
  // First create the user
  await client.service('users').create(credentials);
  // If successful log them in
  await login(credentials);
});
  
// "Login" button click handler
addEventListener('#login', 'click', async () => {
  const user = getCredentials('logIn');
  
  await login(user);
});



addEventListener('#showSignUp', 'click', async () => {
  document.getElementById('app').innerHTML = signUpHTML;
});

addEventListener('#showLogin', 'click', async () => {
  document.getElementById('app').innerHTML = loginHTML;
});
  
// "Logout" button click handler
addEventListener('#logout', 'click', async () => {
  await client.logout();
 
      
  document.body.innerHTML = loginHTML;

  
});
  
// "Send" message form submission handler
addEventListener('#send-message', 'submit', async ev => {
  // This is the message text input field
  const input = document.querySelector('[name="text"]');
  
  ev.preventDefault();
  
  // Create a new message and then clear the input field
  await client.service('message').create({
    text: input.value
    
  });
  
  input.value = '';
});
  
// Listen to created events and add the new message in real-time
client.service('message').on('created', addMessage);
  
// We will also see when new users get created in real-time
client.service('users').on('created', addUser);
  
// Call login right away so we can show the chat window
// If the user can already be authenticated
login();
  
  
  