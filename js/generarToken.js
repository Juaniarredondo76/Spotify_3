 export async function generarToken(){

    let URI="https://accounts.spotify.com/api/token"

    let client_id="client_id=d832b3ad7dec412ab6c2bc9ea2f469cf"
    let client_secret="client_secret=dea17d1e35f143c688a512b293f69ef9"
    let grant_type="grant_type=client_credentials"

    let parametros={
        method:"POST",
        headers:{"Content-Type":"application/x-www-form-urlencoded"},
        body:`${client_id}&${client_secret}&${grant_type}`
    }
    let respuesta=await fetch(URI,parametros)
    let informacioToke=await respuesta.json()

    let token=`${informacioToke.token_type} ${informacioToke.access_token}`
    
    return(token)
    
}

