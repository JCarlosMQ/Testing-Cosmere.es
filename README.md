# Testing-Cosmere.es


En la terminal de Visual Studio code: Ejecutar los siguientes comandos

1. Para entrar a la carpeta del proyecto:

cd proyecto-playwright

2. Inicializar el proyecto:

npm init -y

3. Instalar Playwright:

npm install -D playwright

4. Instalar navegadores:

npx playwright install

5. Instalar playwright/test:

npm install -D @playwright/test

6. Ejecutar los casos de prueba:

npx playwright test --reporter=HTML


---------------------------------------------------------------
- PARA EJECUTAR UN CASO ESPECIFICO:

npx playwright test Nombre_del_archivo.spec.js --reporter=HTML


- VER REPORTE:

npx playwright show-report


---------------------------------------------------------------



CREAR CASO DE PRUEBA AUTOMATIZADO

npx playwright codegen 

--------------------------------------
REPRODUCIR PRUEBA CON PLAYWRIGHT

npx playwright test --debug Nombre_Archivo.spec.js




