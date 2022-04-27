const firebaseConfig = {
    apiKey: "AIzaSyArLwrcqc3FxpQLpX2_b3sBk6I2Mdgp_bk",
    authDomain: "form-c5d3e.firebaseapp.com",
    databaseURL: "https://form-c5d3e-default-rtdb.firebaseio.com",
    projectId: "form-c5d3e",
    storageBucket: "form-c5d3e.appspot.com",
    messagingSenderId: "458178200657",
    appId: "1:458178200657:web:3f4591dd2f6806b2622470"
  };
 
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("form");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var address=getElementVal("address");
    var phone=getElementVal("phone");

    var emailid = getElementVal("email");
    var msgContent = getElementVal("ur");
  
    saveMessages(name,address,phone, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name,address,phone, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      address:address,
      phone:phone,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };