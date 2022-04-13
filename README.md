# DAW II - String Operations (Services)

### Autor del proyecto

Danilo Rivero Pérez - Grado en Ingeniería Informática - DAW II.

### Descripción de la aplicación

Se ha creado una aplicación que gestiona el paso de información entre componentes padres e hijos haciendo uso de servicios. Con esta app, se pueden realizar diferentes operaciones con cadenas de texto, entre ellas, invertir una cadena de texto, encriptar una cadena con el algoritmo SHA256, contar el número de vocales de una cadena, etc. Para probar la app, se debe escribir lo que se quiera en el textArea llamado ```Input Area``` y hacer clic en el botón correspondiente a la operación que se quiera realizar con la cadena escrita. Tras esto, en el textArea denominado ```Output Area``` se mostrará la cadena resultante con la operación realizada. También, se puede ver el histórico de operaciones que se han ido realizando, así como limpiar el propio historial de operaciones por medio de un botón. Para la realización de este proyecto se ha usado [Angular](https://angular.io/) y para maquetar el diseño del proyecto, se ha usado [TailwindCSS](https://tailwindcss.com/). Además, se ha hecho uso de una librería que contiene varios algoritmos criptográficos como es [CryptoJS](https://cryptojs.gitbook.io/docs/).

Las funcionalidades de la aplicación son:

- Permite convertir una cadena a ```mayúscula```.
- Permite convertir una cadena a ```minúscula```.
- Permite ```invertir``` una cadena.
- Permite ```resetear``` los datos introducidos.
- Permite encriptar una cadena de texto con el algoritmo ```AES```.
- Permite encriptar una cadena de texto con el algoritmo ```Triple-DES```.
- Permite encriptar una cadena de texto con el algoritmo ```MD5```.
- Permite encriptar una cadena de texto con el algoritmo ```SHA256```.
- Permite contar las ```vocales``` de una cadena de texto.
- Permite contar las ```consonantes``` de una cadena de texto.
- Permite contar los ```caracteres``` de una cadena de texto.
- Permite contar los ```caracteres especiales``` de una cadena de texto.
- Permite ver el ```histórico``` de operaciones realizadas.
- Permite limpiar el ```histórico``` de operaciones realizadas.
- Permite mostrar la página SPA en modo ```oscuro``` y en modo ```claro```


### Ejecutar el proyecto

Para ejecutar este proyecto en ***local*** se deben seguir los siguientes pasos:

  1. Ejecutar en la terminal desde la ruta del proyecto, el comando: ```mpm install``` para instalar todas las dependencias del proyecto en Angular.
  2. Ejecutar desde la terminal, el servidor local con el comando: ```ng serve --open```
  3. Se abrirá en un navegador el proyecto realizado a través de la URL ```localhost:nºpuerto```
  
### Hosting de alojamiento del proyecto

Podrá ver el proyecto de la calculadora realizado [aquí](https://string-operations-dawii.netlify.app/).

## Tecnologías utilizadas en el Proyecto

| Tecnologías                                                           | Descripción                               |
| --------------------------------------------------------------------- | ----------------------------------------- |
| **[Angular](https://angular.io/)**                                    | Framework de JavaScript                   |
| **[TypeScript](https://www.typescriptlang.org/)**                     | Superset de Javascript con tipado         |
| **[TailwindCSS](https://tailwindcss.com/)**                           | Librería de diseño                        |
| **[CryptoJS](https://cryptojs.gitbook.io/docs/)**                     | Librería de algoritmos criptográficos     |
