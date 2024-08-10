
# Proyecto de E-commerce - CENTRO COMERCIAL CORONDA

Este proyecto apunta hacia la cercialización de productos de multiples rubros. Su ubicación es dentro de la ciudad de Coronda provincia de Santa Fe.

# Creación del proyecto 

- Entorno de react en node

    Se utilizó la documentación de VITE, https://vitejs.dev/guide/, para crear este proyecto.

- Comandos utilizados

    ```bash 
    npm create vite@latest
    ```
    Posteriomente nos pedira el nombre del Proyecto, seguido nos solicita el frame, 'React' y elegir una variante que es JavaScript.
    Terminado esto realizar los siguentes pasos, uno a la ves:
    ```bash
    cd 'nombre del proyecto'    // moverse a la carpeta del proyecto
    npm install                 // instalar la libreria
    npm run dev                 // correr el proyecto
    ```
     
### Componentes utilizados

Dentro de la carpeta 'componentes' tiene los siguientes componentes:

| NOMBRE              | DESCRIPCION                                                                        |
|-------------------- | -----------------------------------------------------------------------------------|
| Botones             | Botonde de incremento y decremento de unidad y de 'AGREGAR AL CARRITO'             |
| CartView            | Composición del carrito de compreas con items agregados                            |
| Contacto            | Formulario del usuario que realiza consultas                                       |
| Context             | Contexto para el uso de funciones y estados para su reutilización en otros lugares |
| ProductDetail       | Brinda infomración del producto                                                    |
| Error404            | Mostrar como se ve el error 404                                                    |
| ProductFilter       | Permite filtrar producto                                                           |
| Home                | Pagina principal                                                                   |
| Carrito             | Imagen del carrito con el contador de productos                                    |
| Items               | Mapera el el arrays de objerto de productos                                        |
| ContenedorItemList  | Contenedor de items                                                                |
| Loaders             | Simulador de el tiempo de carga de productos                                       |
| BarraNav            | Mostrar la barra de navegación                                                     |
| Orders              | Formulario para obtener datos del consumidor para finalizar una orden de compras   |
| Card                | Tarjeta de productos                                                               |

Por otro lado se creó el archivo 'fetchData.jsx' con un arrays de objertos y una función que tiene la funcion de simular una llamada a una API para obtener los datos de los productos atraves.

Además, contiene sus imágenes dentro de la carpeta 'assest' de cada producto.

## Librería para mensajes

Se utilizó librerías para mostrar notificaciones y mensajes emergentes, como son, 'Sweetalert' y 'Toastify'

En consola se instalaron las libreriar y posteriormente se importan en el codigo.

-  Sweetalert

    https://sweetalert2.github.io/

    ```bash
    npm install sweetalert2
    ```

- Toastify
    https://www.npmjs.com/package/react-toastify
    
    ```bash
    npm i react-toastify
    ```
    
### Uso de base de datos: Firebase

Base de datos usada para obtener y guardar las ordenes y colecciones que se cargan y finalizar una compra del carrito del proyecto.
