function enviar(){
    email = document.getElementById("correo electronico").value;
    nombre = document.getElementById ("name").value;
    phone = document.getElementById("phone").value;
    message= document.getElementById("message").value;
    val=0;
    if(email==""){
      val++;
    }
    if(nombre==""){
        val++;
      }
    if(phone==""){
        val++;
      }
    if(message==""){
        val++;
      }
    if(val== 0){
      document.getElementById("botonEnviarMensaje").disabled =false;
    }
    else {
      document.getElementById("botonEnviarMensaje").disabled = true;
    }
  }

  document.getElementById("email").addEventListener("keyup",enviar);
  document.getElementById("name").addEventListener("keyup",enviar);
  document.getElementById("phone").addEventListener("keyup",enviar);
  document.getElementById("message").addEventListener("keyup",enviar);
  document.getElementById("botonEnviarMensaje").addEventListener("click",()=>{
    alert("su mensaje se ha enviado con exito")
  });