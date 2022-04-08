# spotify-console
**spotify-console** permite la generación del token de autenticación de Spotify a partir de las llaves *Client ID* y *Client Secret* del [Dashboard de aplicaciones](https://developer.spotify.com/dashboard/) de Spotify Developer.
## node.js
Para poder ejecutar el programa se debe tener instalado **node.js**. Para verificar si está instalado en su computador se debe ejecutar en la terminal (MAC) o en el símbolo de sistema o powershell (Windows) el comando:
```
node -v
```
Si el comando devuelve un número de versión node.js está instalado en el computador. En el caso en que no esté instalado se debe descargar de la página https://nodejs.org/ preferiblemente la última versión LTS.
## Configuración de las llaves
En la carpeta raíz del programa ubique y abra el archivo **config.json**. El archivo tiene el formato siguiente:
```
{
  "client_id": "",
  "secret_id": ""
}
```
Dentro de las comillas respectivas agregue los códigos *Client ID* y *Client Secret* generados en el *Dashboard de aplicaciones* y guarde el archivo.
## Generación del Token
Abra la terminal (MAC) o el símbolo de sistema o powershell (Windows) y ubíquese en la ruta donde se encuentra el archivo *config.json*. Para instalar el programa ejecute el siguiente comando:
```
npm install
```
**Tenga en cuenta que el anterior comando es de instalación y sólo debe ser ejecutado una vez.**
Para generar el token debe ejecutar el comando:
```
npm run dev
```
Después de correr el comando debería salir un mensaje con el token generado.
