
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    var users = [
      { username: "kam", password: "1234" },
      { username: "kratos", password: "4321" },
    ];

    var user = users.find(function (user) {
      return user.username === username && user.password === password;
    });

    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      window.location.href = 'Inicio.html';
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  }
