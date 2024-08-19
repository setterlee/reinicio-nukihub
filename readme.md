# Aplicación para reiniciar nukihub 
Esta es una aplicación que automatiza el proceso de realizar el reinicio de nukihub. Utiliza Puppeteer para realizar acciones.
Esta guía te mostrará cómo configurar y ejecutar la aplicación.

## Estado del proyecto

Esta aplicacion aun se encuentra en fase de desarrollo por lo que su uso aun no se recomienda hasta que se pueda publicar una version estable y funcional. 



## Requisitos previos

- Asegúrate de tener instalado Node.js en tu sistema. Puedes descargarlo desde [el sitio web oficial de Node.js](https://nodejs.org/).

- Asegurate de tener la libreria necesarias:
    ```bash
    sudo apt-get install ca-certificates fonts-liberation libappindicator3-1 libasound2 libatk-bridge2.0-0 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgbm1 libgcc1 libglib2.0-0 libgtk-3-0 libnspr4 libnss3 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 lsb-release wget xdg-utils
    ```

## Configuración

1. Clona este repositorio en tu máquina local:

   ```bash
   git clone https://github.com/tu-usuario/reinicio-nukihub.git
   cd reinicio-nukihub
   ``` 
    

2. Crea un archivo .env en la raíz del proyecto para almacenar tus variables de entorno. Debes definir las siguientes variables:

    ```bash
    ENV="ambiente de desarrollo (dev) o producción (production)"
    HOST="http://nukihub"
    PAGE="/mqttconfig"
    ``` 
    

3. Instala las dependencias del proyecto:

    ```bash
    npm install
    ``` 
    

4. Ejecuta la aplicación:
    ```bash
    npm start
    ``` 

    Esto  levantara un cliente rest y quedara a la espera de la llamada que inicie el proceso



## Personalización

Puedes personalizar el código para adaptarlo a tu sitio web y tus necesidades específicas. Consulta el código fuente en main.ts y los diferentes métodos para entender cómo funcionan las acciones automatizadas.


## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE.md para obtener más detalles.