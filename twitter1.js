const signUp = document.querySelector('.signup').addEventListener('click', (e) => {
  const signUpBlock = document.querySelector('.signupblock');
  signUpBlock.style.display = 'block'
  e.preventDefault();
});



const login = document.querySelector('.Login');
login.addEventListener('click', (e) => {
  const loginBlock = document.querySelector('.loginblock');
  loginBlock.style.display = 'block'
  const signUpBlock = document.querySelector('.signupblock');
  signUpBlock.style.display = 'none'
  e.preventDefault();

}
)
let details = []

let data = {
  username: '',
  email: '',
  password: '',
  confirmpassword: ''
}
function setdetails(userProfile, callBack) {
  setTimeout(() => {
    details.push(userProfile)
    callBack();
  }, 2000)
}

function getdetails() {
  setTimeout(function () {
    const userName = document.querySelector('#username');
    userName.addEventListener('blur', (e) => {
      data.username = userName.value;
    });
    const email = document.querySelector('#email');
    email.addEventListener('blur', (e) => {
      data.email = email.value;
    })
    const password = document.querySelector('#password');
    password.addEventListener('blur', (e) => {
      data.password = password.value;
    })
    const confirmpassword = document.querySelector('#confirmpassword');
    confirmpassword.addEventListener('blur', (e) => {
      data.confirmpassword = confirmpassword.value;
    })
  }, 1000)
}
setdetails(data, getdetails)
//console.log(details)

// signup link  (https://fsd1.herokuapp.com/users/create)
let userDetail = '';
[userDetail] = details;