/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const loginHTML = `<div class="limiter">
<div class="container-login100">
    <div class="wrap-login100">
        <div class="heading"></div>
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

const chatHTML2 = `
<div id="frame">
<div id="sidepanel">
    <div id="profile">
        <div class="wrap">
            <img id="profile-img" src="" class="online" alt="" />
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
        
        <p id="chat-name" style="margin-left: 40%;
        margin-top: 20px;">General</p>
        
    </div>
    <div id="messages" class="messages">
        <ul class="chat">
        
        </ul>
    </div>
    <div class="message-input">
        <div class="wrap">
        <form class="flex flex-row flex-space-between" id="send-message">
        <input type="text" name="text" placeholder="Write your message..." />
        <input type="hidden" name="recipient" />
       
        <button class="submit"><i class="fa fa-paper-plane" aria-hidden="true"></i></button>
        </form>
        </div>
    </div>
</div>
</div>

<audio id="notifySound">
      <source src="sound/just-saying.mp3" type="audio/mpeg">          
    </audio>
`;

const addUser = user => {
  const userList = document.querySelector('.user-list');
  
  if(userList) {
    // Add the user to the list
    userList.innerHTML += `<li class="contact">
      <div onclick="showUserChat('${user.email}', '${user._id}', '${user.unreadMessages}')" class="wrap " id="single-user">
          <span class="contact-status online ${user.email}"></span>
          <img src="${user.avatar}" alt="" />
          <div class="meta">
              <p class="name">${user.username}</p> 
              <p class="preview" id="${user.email}">${user.text}</p>
          </div>
      </div>
  </li>`;

  }

  if (user.unreadMessages === true) {
    document.getElementsByClassName(`${user.email}`)[0].innerHTML = '<i class="fa fa-envelope" aria-hidden="true"></i>';
  }
};

// Renders a message to the page
const addMessage = message => {
  // The user that sent this message (added by the populate-user hook)  
  
  const chat = document.querySelector('.chat');
  // Escape HTML to prevent XSS attacks
  const text = message.text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;').replace(/>/g, '&gt;');
  
  if(chat) {
    let classToUse;
    
    if (message.type === 'recipient' || message.user_id !== localStorage.getItem('user-id')) {
      classToUse = 'sent';
    } else {
      classToUse = 'replies';
    }
    
    chat.innerHTML += `<li class="${ classToUse }">
          <img src="${message.user_avatar}" alt="" />
          <p>${text} <small><small><small>${moment(message.createdAt).format('MMM Do, hh:mm')}</small></small></small></p>
      </li> `;
      
    // Always scroll to the bottom of our message list
    chat.scrollTop = chat.scrollHeight - chat.clientHeight;
  }
  

};


const addNewMessage = message => {
  // The user that sent this message (added by the populate-user hook)  
   
  const chat = document.querySelector('.chat');
  // Escape HTML to prevent XSS attacks
  const text = message.text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;').replace(/>/g, '&gt;');
    
  let recipientValue = document.querySelector('[name="recipient"]').value;  
  
  if (((recipientValue == message.recipient) || (recipientValue ==  message.user_email)) && ((localStorage.getItem('user-email') == message.recipient) || (localStorage.getItem('user-email') == message.user_email))) {
    if(chat) {
      let classToUse;
      
      if (message.type === 'recipient' || message.user_id !== localStorage.getItem('user-id')) {
        classToUse = 'sent';
      } else {
        classToUse = 'replies';
      }
      
      chat.innerHTML += `<li class="${ classToUse }">
            <img src="${message.user_avatar}" alt="" />
            <p>${text} <small><small><small>${moment(message.createdAt).format('MMM Do, hh:mm')}</small></small></small></p>
        </li> `;
        
      // Always scroll to the bottom of our message list
      chat.scrollTop = chat.scrollHeight - chat.clientHeight;

      const markMessageAsRead = async (message) => {
        await client.service('message').patch(
          null,
          { read: true },
          { 
            query: {
              recipient: localStorage.getItem('user-email'),       
              user_id: message.user_id,
              read: false
            }        
          });
      };
      //wait 7 seconds and mark message as read 
      setTimeout(function(){ markMessageAsRead(message); }, 3000);
    }
  } else {
    //show notification   
    document.getElementsByClassName(`${message.user_email}`)[0].innerHTML = '<i class="fa fa-envelope" aria-hidden="true"></i>';
  }

  //update last message for chat
  
  if (message.user_id == localStorage.getItem('user-id')) {
    document.getElementById(`${message.recipient}`).innerHTML = `${message.text}`;
  } else {
    document.getElementById(`${message.user_email}`).innerHTML = `${message.text}`;
  }

  if (message.recipient == localStorage.getItem('user-email')) {
    var x = document.getElementById('notifySound');  
    x.play();
  }
  
 
};



 
