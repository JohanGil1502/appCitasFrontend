Instalación de Apache en windows:

Descarga e instala Apache HTTP Server desde Apache Lounge en el siguiente link:https://www.apachelounge.com/download/.

1. Una vez descargado y descomprimido el archivo, dirígete a los archivos que resultan de la descompresión y después a la carpeta Apache24, después a la carpeta bin y ejecuta el archivo httpd.exe.

2. El directorio principal donde deberás colocar tus archivos de tu frontend (HTML, CSS, JS) es en la carpeta htdocs que se encuentra en la carpeta Apache24 .

3. Dirígete al archivo httpd.conf que se encuentra en la carpeta Apache24, después a la carpeta conf, una vez ahí abre el archivo y dirígete y edita la linea 37 dónde encontrarás lo siguiente -> Define SRVROOT "C:/Apache24/Apache24" cambia la ruta dentro de las comillas por la ruta donde tienes la carpeta de Apache24.

4. Abre la consola de comandos (cmd) como administrador y ejecuta:
httpd -k start

Esto iniciará Apache, y podrás acceder a tu aplicación en http://localhost/.

5. En tu navegador, abre http://localhost y verás el frontend.

