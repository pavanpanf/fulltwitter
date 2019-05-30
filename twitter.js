const signUp = document.querySelector('.signup').addEventListener('click', (e) => {
  const signUpBlock = document.querySelector('.signupblock');
  signUpBlock.style.display = 'block'
  const loginBlock = document.querySelector('.loginblock');
  loginBlock.style.display = 'none'
  e.preventDefault();
});


function close(event) {
  console.log('clicked')
  const loginBlock = document.querySelector('.loginblock');
  loginBlock.style.display = 'none'
  const signUpBlock = document.querySelector('.signupblock');
  signUpBlock.style.display = 'none'
  event.preventDefault()
}
const login = document.querySelector('.Login');
login.addEventListener('click', (e) => {
  const loginBlock = document.querySelector('.loginblock');
  loginBlock.style.display = 'block'
  const signUpBlock = document.querySelector('.signupblock');
  signUpBlock.style.display = 'none'
  e.preventDefault();

}
)

let data = {
  user_name: '',
  user_email: '',
  user_pass: ''
}
//invalidusername invalidemail invaledpass invaledconpass
// user name : ^[a-zA-Z0-9_]{2,10}$
// email : ^([a-zA-Z0-9._]){2,10}@([a-zA-Z0-9._]){2,10}.[a-zA-Z]{2,4}$
const userName = document.querySelector('#username');
userName.addEventListener('blur', (e) => {
  data.user_name = userName.value;
  console.log(userName.value)
  if (userName.value !== '') {
    let patter = /^[a-zA-Z0-9_]{2,10}$/
    if (!patter.test(userName.value)) {
      document.getElementById('invalidusername').style.display = 'block'
    }
    if (patter.test(userName.value) || userName.value === '') {
      document.getElementById('invalidusername').style.display = 'none'
    }
  }
});
const email = document.querySelector('#email');
email.addEventListener('blur', (e) => {
  data.user_email = email.value;
  if (email.value !== '') {
    let patter = /^([a-zA-Z0-9._]){2,10}@([a-zA-Z0-9._]){2,10}.[a-zA-Z]{2,4}$/
    if (!patter.test(email.value)) {
      document.getElementById('invalidemail').style.display = 'block'
    }
    if (patter.test(email.value) || email.value === '') {
      document.getElementById('invalidemail').style.display = 'none'
    }
  }
})
const password = document.querySelector('#password');
password.addEventListener('blur', (e) => {
  data.user_pass = password.value;
  if (password.value !== '') {
    let patter = /^[a-zA-Z0-9!@]{2,10}$/
    if (!patter.test(password.value)) {
      document.getElementById('invaledpass').style.display = 'block'
    }
    if (patter.test(password.value) || password.value === '') {
      document.getElementById('invaledpass').style.display = 'none'
    }
  }
})
const confirmpassword = document.querySelector('#confirmpassword');
confirmpassword.addEventListener('blur', (e) => {
  data.confirmpassword = confirmpassword.value;
  const pass = document.getElementById('password').value;
  //console.log(pass)
  //console.log(confirmpassword.value)
  if (pass === confirmpassword.value) {
    document.getElementById('invaledconpass').style.display = 'none'
  } else {
    document.getElementById('invaledconpass').style.display = 'block'
  }
})

// signup link  ('https://fsd1.herokuapp.com/users/create')
/*

*/

let url = 'https://fsd1.herokuapp.com/users/create'
function signupButton(event) {
  console.log(data)
  fetch(url, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => res.json())
    .then(user => console.log(user))


  event.preventDefault()
}

let data1 = {
  user_email: ''
  ,
  user_pass: ''
}
const lemail = document.querySelector('#lemail');
lemail.addEventListener('blur', (e) => {
  data1.user_email = lemail.value;
  console.log(lemail.value)
})
const lpassword = document.querySelector('#lpassword');
lpassword.addEventListener('blur', (e) => {
  data1.user_pass = lpassword.value;
  console.log(lpassword.value)
})

function loginButton(event) {

  fetch('https://fsd1.herokuapp.com/users/login', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(data1)
  }).then(res => res.json())
    .then(user => {
      if (user.status === 'success') {
        window.location.assign('twitterhome.html')
      }
    })
  event.preventDefault();
}