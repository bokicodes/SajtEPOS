const username = document.getElementById("username");
const email = document.getElementById("email");
const pw = document.getElementById("pw");
const pwConfirm = document.getElementById("pwConfirm");
const form = document.getElementById("form");
const regButton = document.getElementById("buttonReg");
const exitButton = document.getElementById("izlaz");

const polovi = document.getElementsByName("pol"); //vraca niz svih elemenata sa name = "pol";
const zanimanje = document.getElementById("zanimanje");
trenutniDatum = new Date();

/* -------------- REGISTRACIJA --------------------*/ 
regButton.addEventListener("click", e => {
  if(validateInputs()){
    document.getElementById("popupIme").innerHTML = username.value;
    document.getElementById("popupEmail").innerHTML = email.value;
    document.getElementById("popupSifra").innerHTML = pw.value;

    //Pol
    for(i = 0; i < polovi.length; i++){
      if(polovi[i].checked){
        document.getElementById("popupPol").innerHTML = polovi[i].value;
      }
    }

    document.getElementById("popupZanimanje").innerHTML = zanimanje.value;
    document.getElementById("popupDatum").innerHTML = trenutniDatum.getDate() + "/" + (Number(trenutniDatum.getMonth())+1)  + "/" + trenutniDatum.getFullYear();
    document.getElementById("popup").style.display = "block";
  }
});

exitButton.addEventListener("click", e => {
  document.getElementById("popup").style.display = "none";
  form.reset();
});

const setError = (element, msg) => { /*parametri su html element i error msg*/
  const inputControl = element.parentElement; /*uzece parent elementa sto je zapravo input control*/ 
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = msg;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
}

const isValidEmail = email => {
  const re =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return re.test(String(email).toLowerCase()); /*true ako je valid. false ako nije */
}

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const pwValue = pw.value.trim();
  const pwConfirmValue = pwConfirm.value.trim();

  let value1 = false;
  let value2 = false;
  let value3 = false;
  let value4 = false;

  if(usernameValue === ""){
    setError(username, "Morate uneti korisničko ime.");
  }else{
    setSuccess(username);
    value1 = true;
  }

  if(emailValue === ""){
    setError(email, "Morate uneti email.");
  }else if(!isValidEmail(emailValue)){
    setError(email, "Niste uneli važeću adresu.");
  }else{
    setSuccess(email);
    value2 = true;
  }

  if(pwValue === ""){
    setError(pw, "Morate uneti šifru");
  }else if(pwValue.length < 8){
    setError(pw, "Šifra mora imati minimum 8 karaktera.")
  }else if(pwValue.length > 20){
    setError(pw, "Šifra mora imati maksimum 20 karaktera.")
  }
  else{
    setSuccess(pw);
    value3 = true;
  }

  if(pwConfirmValue === ""){
    setError(pwConfirm, "Molimo vas potvrdite šifru.");
  } else if(pwConfirmValue !== pwValue){
    setError(pwConfirm, "Šifre nisu jednake");
  } else{
    setSuccess(pwConfirm);
    value4 = true;
  }
  if(value1 === true && value2 === true && value3 === true && value4 === true){
    return true;
  }else{
    return false;
  }
};
/* ------------------------------------------------------ */