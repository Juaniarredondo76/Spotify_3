//pasos para consumir datos de un api
//con js puro

//1. Ir  un servidor y darle la URI del servicio
export const URI="https://api.spotify.com/v1/artists/3fMbdgg4jU18AjLCKBhRSm/top-tracks?market=US"
//export const URI_BRUNOMARS="https://api.spotify.com/v1/artists/0du5cEVh5yTK9QJze8zA0C/top-tracks?market=US"
//export const URI_KRAKEN="https://api.spotify.com/v1/artists/02OR1V0L1ODy7dDlBLTOvx/top-tracks?market=US"
//export const URI_METALLICA="https://api.spotify.com/v1/artists/2ye2Wgw4gimLv2eAKyk1NB/top-tracks?market=US"
//export const URI_JARABEPALO="https://api.spotify.com/v1/artists/5B6H1Dq77AV1LZWrbNsuH5/top-tracks?market=US"


//PERMISO
export const TOKEN="Bearer BQByeFGj0yjKEZuLoVBUgG58DCORqbnq-lJih80rwWPsm-PdgPeFKVlMmlbqL0mVTaYaoCvjlc7QNNA7ArsI87_Zg_MNyUZW3ZaLSq9nd2VLseONhkv_519AyyvIhseyt8bOrwA2xt19za7EUfmxXsJTXjcxnWl9FQU"
//2. CONFIGURO: CON METODOS CABECERAS Y CUERPO DE LA PETICION
//primer atributo es el metodo, 
//segundo headers
//tercero cuerpo
export const PARAMATROS_PETICION={
    method:"GET",
    headers:{Authorization:TOKEN}
}