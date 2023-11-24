let sliderElement = document.querySelector("#slider")
let buttonElement = document.querySelector("#button")

let sizePassword =document.querySelector("#valor")
let password = document.querySelector("#password")

let containerPassword = document.querySelector("#container-password")

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@?"

let novaSenha = "";


//pega o valor que o usuario colocou no slider da pagina//
sizePassword.innerHTML = sliderElement.value;

slider.oniput = function(){
  sizePassword.innerHTML = this.value;
}

//gerar senha com caracteres aleatorios
function generatePassword(){
  //alert("Vamos gerar a senha")

  let pass =""
  for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
    pass += charset.charAt(Math.floor(Math.random()* n));
  }
  
  containerPassword.classList.remove("hide");
  password.innerHTML = pass;
  novaSenha = pass;

}

//copiar a sebha gerada
function copyPassword(){
  alert("Senha copiada com sucesso")
  navigator.clipboard.writeText
  (novaSenha);
}