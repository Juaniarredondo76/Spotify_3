function suscribir(){
    email = document.getElementById("correo electronico").value;
    val=0;

    if(email==""){
      val++;
    }

    if(val== 0){
      document.getElementById("botonSuscribete").disabled =false;
    }
    else {
      document.getElementById("botonSuscribete").disabled = true;
    }
  }

  document.getElementById("email").addEventListener("keyup",suscribir);
  document.getElementById("botonSuscribete").addEventListener("click",()=>{
    alert("tu suscripcion se ha realizado")
  });