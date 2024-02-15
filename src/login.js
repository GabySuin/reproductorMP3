const viewPassword = document.getElementById('viewPassword')
const passwordInput = document.getElementById('passwordInput')
const usernombreInput = document.getElementById('usernombreInput')
const loginBtn = document.getElementById('loginBtn')

viewPassword.addEventListener('click', () => {
  const actualType = passwordInput.getAttribute('type')
  if (actualType == 'password') {
    passwordInput.setAttribute('type', 'text')
  } else {
    passwordInput.setAttribute('type', 'password')
  }
})

const users = [
  {
    usernombre: 'gaby',
    password: 'suin'
  },
  {
    usernombre: 'Admin',
    password: '12345'
  }
]

loginBtn.addEventListener('click', (event) => {
  event.preventDefault()

  const usernombreValue = usernombreInput.value
  const passwordValue = passwordInput.value

  const user = users.find((user) => user.usernombre == usernombreValue && user.password == passwordValue)

  if (user) {
    alert('Acceso Correcto')
    localStorage.setItem('isLogged', true)
    window.location.href = '../index.html'
  }
  else {
    usernombreInput.value = ''
    passwordInput.value = ''
    alert('Usuario Incorrecto')
  }
})

if (localStorage.getItem('isLogged')) {
  const form = document.getElementById('loginForm')
  form.innerHTML = `<button id="logout">Logout</button>
        <a href="../index.html">
        <i class="bi bi-arrow-left"></i> Back
      </a>`

  const logoutBtn = document.getElementById('logout')
  logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('isLogged')
    window.location.href = '../index.html'
  })
}

