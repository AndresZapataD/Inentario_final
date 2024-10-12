Sistema de Inventario
Este es un sistema de inventario básico que permite la gestión de productos, incluyendo la visualización de productos, la actualización de stock, la eliminación de productos, y la exportación de la lista a un archivo PDF.

Requisitos previos
Antes de ejecutar este proyecto, asegúrate de tener instalados los siguientes elementos en tu entorno:

Node.js (versión 14.x o superior)
MongoDB Atlas (una cuenta gratuita en la nube)
Git (opcional)
Configuración de MongoDB Atlas
Ve a MongoDB Atlas y crea una cuenta gratuita.
Crea un Cluster en MongoDB Atlas.
Dentro del Cluster, selecciona la opción Database Access y agrega un nuevo usuario con nombre de usuario y contraseña. Asegúrate de anotar estas credenciales, ya que las necesitarás más adelante.
Luego, selecciona Network Access y agrega tu dirección IP actual o selecciona "Allow Access from Anywhere".
Vuelve al Dashboard y haz clic en Connect. Selecciona Connect your application y copia la cadena de conexión. Esta cadena será algo similar a lo siguiente:
bash
Copiar código
mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
Modifica la cadena reemplazando <username>, <password>, y <dbname> por el usuario, contraseña, y nombre de la base de datos que creaste.
Instalación
Clona el repositorio de tu proyecto localmente:

bash
Copiar código
git clone https://github.com/tu-usuario/sistema-inventario.git
cd sistema-inventario
Crea un archivo .env en la raíz del proyecto. En este archivo, añade la cadena de conexión a MongoDB que copiaste en el paso anterior:

bash
Copiar código
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
PORT=5000
Instala las dependencias necesarias:

bash
Copiar código
npm install
Esto instalará todas las librerías necesarias, como express, mongoose, y cors.

Ejecución de la aplicación
Para iniciar el servidor de desarrollo, utiliza el siguiente comando:

bash
Copiar código
npm start
Si deseas que el servidor se reinicie automáticamente cuando hagas cambios en el código, puedes instalar nodemon como dependencia de desarrollo e iniciar el servidor con nodemon:

bash
Copiar código
npm install -g nodemon
nodemon start
Una vez que el servidor esté en ejecución, abre tu navegador y visita:

arduino
Copiar código
http://localhost:5000
Uso de la aplicación
Lista de productos: En la sección de productos, puedes ver todos los productos que están en el sistema. Cada producto tiene la opción de actualizar el stock o eliminarlo.
Agregar producto: Puedes agregar un nuevo producto completando un formulario con el nombre, descripción, precio, stock y categoría.
Registrar movimiento: Permite registrar un movimiento (ingreso o egreso) de stock de un producto existente.
Exportar a PDF: Puedes exportar la lista de productos a un archivo PDF usando el botón "Exportar a PDF".
Dependencias principales
Express: Un framework para aplicaciones Node.js.
Mongoose: Una biblioteca de modelado de objetos para MongoDB.
cors: Middleware para habilitar CORS.
jsPDF: Librería para generar archivos PDF en el frontend.
Estructura del proyecto
bash
Copiar código
├── backend
│   ├── controllers
│   │   └── productoController.js      # Controlador para la lógica de los productos
│   ├── models
│   │   └── Producto.js                # Modelo de MongoDB para los productos
│   └── routes
│       └── productoRoutes.js          # Rutas de la API para manejar los productos
├── public
│   ├── index.html                     # Página de inicio
│   ├── productos.html                 # Página de lista de productos
│   ├── crearProducto.html             # Página para crear productos
│   ├── movimientoProducto.html        # Página para registrar movimiento de productos
│   └── styles.css                     # Estilos CSS para las vistas
├── .env                               # Configuración de variables de entorno
├── server.js                          # Configuración del servidor con Express
├── package.json                       # Dependencias y scripts de npm
└── README.md                          # Documentación del proyecto
Comandos principales
npm start: Inicia el servidor en modo de producción.
nodemon start: Inicia el servidor en modo desarrollo con reinicio automático.
Instrucciones adicionales:
MongoDB Atlas: Si necesitas más detalles sobre la configuración de MongoDB Atlas, puedes visitar la documentación oficial.
Dependencias: Todas las dependencias importantes (como express, mongoose, cors, y jsPDF) se instalan automáticamente con el comando npm install.