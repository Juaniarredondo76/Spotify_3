import{generarURI} from './generadorURI.js'
import{consumirAPI} from './servicio.js'
import{generarToken} from './generarToken.js'
import{pintarCanciones} from './pintarCanciones.js'



//detectar el clic en el boton del formulario
let boton=document.getElementById("boton")
boton.addEventListener("click",function(evento){
    evento.preventDefault()

    

    let artistaSeleccionado=document.getElementById("Artistas").value
    let URI=generarURI(artistaSeleccionado)

    async function activarAPI(){

        let token=await generarToken()

        let datosConsultadosAPI= await consumirAPI(URI,token)
        pintarCanciones(datosConsultadosAPI)
    }
    activarAPI()
    
})

