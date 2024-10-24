
# Ejecutando codigo TypeScript con Nodejs
## Instalacion

```bash
npm install -D typescript ts-node
```

Para ejecutar 
```json
"scripts": {
    "dev": "npx ts-node src/index.ts"
  }
```
## Nodemon
Para reiniciar el servidor cuando hagamos cambios

```bash
npm install -D nodemon
```

Para ejecutar 
```json
"scripts": {
    "dev": "nodemon --exec ts-node src/index.ts"
  }
```

```bash
npm run dev
```
# Documentacion con Swagger

- Instalacion
```bash
npm install swagger-jsdoc swagger-ui-express
```
cuando se trabaja con Typescript, se instala los tipos
```bash
npm install -D @types/swagger-jsdoc @types/swagger-ui-express
```


## Que son las REST API'S?
Las **REST APIs** (Representational State Transfer Application Programming Interfaces) son un tipo de arquitectura para diseñar servicios web. Permiten que diferentes aplicaciones se comuniquen entre sí mediante el uso de **HTTP** para realizar solicitudes y recibir respuestas.

**REST** se basa en seis principios clave:

1. **Cliente-Servidor**: El cliente solicita información, y el servidor responde. Ambos están separados, lo que permite desarrollar y mantener cada parte de manera independiente.

2. **Stateless (Sin estado)**: Cada solicitud enviada del cliente al servidor debe contener toda la información necesaria para que el servidor la entienda. El servidor no guarda información sobre sesiones pasadas.

3. **Cacheable**: Las respuestas del servidor deben indicar si pueden ser almacenadas en caché o no, lo que mejora el rendimiento al evitar solicitudes repetitivas.

4. **Interfaz uniforme**: Esto significa que las operaciones que se realizan a través de la API (como obtener, crear, actualizar o eliminar datos) deben ser consistentes.

5. **Capas**: Las APIs REST permiten el uso de múltiples capas entre el cliente y el servidor (como proxies o balanceadores de carga), sin que el cliente sepa cuántas capas existen o cómo funcionan.

6. **Código bajo demanda**: A veces, el servidor puede enviar código ejecutable al cliente (por ejemplo, scripts o applets) para que lo ejecute, pero no es un requisito.

## Metodos HTTP

Cuando trabajamos con **APIs REST**, se utilizan diferentes métodos **HTTP** para definir la operación que se quiere realizar sobre un recurso:

- **GET**: Este método se usa para obtener datos de un recurso en el servidor, sin modificarlo. Es similar a leer información.

    - Ejemplo: Solicitar una lista de usuarios.
    ```
    GET /users
    ```
- **POST**: Se utiliza para crear nuevos recursos en el servidor. Normalmente se usa para enviar datos que el servidor debe procesar y guardar.

    - Ejemplo: Crear un nuevo usuario.
    ```
    POST /users
    ```
- **PUT**: Este método se utiliza para actualizar completamente un recurso existente en el servidor. Si el recurso no existe, a veces también puede crearlo (dependiendo de la implementación).

    - Ejemplo: Actualizar la información de un usuario existente.
    ```
    PUT /users/1
    ```
- **PATCH**: Similar a **PUT**, pero este método se usa para hacer actualizaciones parciales a un recurso existente. Solo envías los cambios específicos que deseas realizar.

    - Ejemplo: Cambiar el correo electrónico de un usuario.
    ```
    PATCH /users/1
    ```
- **DELETE**: Se utiliza para eliminar un recurso en el servidor.

    - Ejemplo: Eliminar un usuario específico.
    ```
    DELETE /users/1
    ```

## Diferencia entre PUT Y PATCH
- **PUT:** Se utiliza para reemplazar completamente un recurso existente. Cuando haces una solicitud PUT, se espera que envíes todo el objeto, ya que este método sobrescribirá todos los datos del recurso existente con los nuevos datos que proporciones. Si no se incluye algún campo, se elimina en lugar de mantenerse.

Ejemplo: Si tienes un recurso de usuario:
```json
{
  "name": "Juan",
  "age": 30
}
```
Si haces una solicitud **PUT** para actualizar solo el nombre:
```json
{
  "name": "Carlos"
}
```
El resultado será:
```json
{
  "name": "Carlos"
}
```
En este caso, se elimina el campo age porque el nuevo recurso enviado no lo incluye.

- **PATCH:** Se utiliza para actualizar parcialmente un recurso existente. A diferencia de **PUT**, **PATCH** permite modificar solo algunos campos del recurso, dejando intactos los demás campos que no se especifican en la solicitud.

Ejemplo: Si haces una solicitud PATCH para cambiar solo el nombre:
```json
{
  "name": "Carlos"
}
```
El resultado será:
```json
{
  "name": "Carlos",
  "age": 30
}
```
Aquí, solo se actualiza el campo name y el resto del recurso permanece igual.

## Que es un ORM?

**ORM** significa Object-Relational Mapping (Mapeo Objeto-Relacional). Es una técnica que permite interactuar con bases de datos relacionales utilizando objetos de la programación orientada a objetos. En lugar de escribir directamente **consultas SQL**, puedes usar objetos y métodos de tu lenguaje de programación para interactuar con los datos.

Los **ORMs** convierten las filas de tablas en bases de datos en objetos del lenguaje de programación que estés utilizando, y las operaciones **CRUD** (Crear, Leer, Actualizar, Eliminar) se realizan a través de métodos en estos objetos.

**Los beneficios de usar un ORM incluyen:**

- **Abstracción del SQL**: Puedes trabajar con objetos en tu código, en lugar de escribir directamente consultas SQL.
- **Mantenimiento y escalabilidad**: Facilita el mantenimiento del código y permite que el sistema escale con menos esfuerzo.
- **Seguridad**: Al usar un ORM, se minimiza el riesgo de inyecciones SQL, ya que las consultas están construidas y manejadas por el propio ORM.

**Consideraciones a la hora de elegir un ORM**:
- Debe estar en desarollo de forma activa, es decir que tiene que estar actualizandose.
- Compatibilidad con la Base de Datos: Verifica si el ORM que estás considerando es compatible con el sistema de base de datos que planeas usar (PostgreSQL, MySQL, SQLite, SQL Server, etc.). Algunos ORMs están optimizados para bases de datos específicas.
- Un ORM asegura la entrada de la informacion pero siempre debes validar.

**Ejemplo de ORM en Nodejs**
1. **Mongoose**: MongoDB
2. **Prisma**
3. **Sequelize**: Oracle, Postgres, MySQL, MariaDB, SQLite y SQL Server
4. **TypeORM**

**Instalacion**
1. instalamos el ORM, para este caso **Sequelize**
```bash
npm install --save sequelize
```
2. Luego instalamos el tipo de base de datos que usaremos, en este caso **Postgres**
```bash
npm install --save pg pg-hstore # Postgres
```

## Que es un Middleware?

Un middleware es una función o pieza de código que se ejecuta en el medio del ciclo de procesamiento de una solicitud en una aplicación web, generalmente entre la recepción de la solicitud del cliente y el envío de la respuesta del servidor. Su objetivo es interceptar y modificar las solicitudes y respuestas, o ejecutar lógica adicional antes de que la solicitud llegue a su destino final o la respuesta sea enviada al cliente.

En el contexto de frameworks como Express en Node.js, un middleware se utiliza para:

- Manipular solicitudes: Leer y modificar los datos de la solicitud antes de que llegue a los controladores.
- Autenticación y autorización: Verificar si el usuario está autenticado o tiene permisos para acceder a ciertos recursos.
- Registro de actividades (logging): Registrar detalles sobre las solicitudes (como los tiempos de respuesta, IP, etc.).
- Gestión de errores: Manejar excepciones o errores que ocurran durante el procesamiento de las solicitudes.
- Procesamiento de archivos: Procesar y manipular datos como imágenes, formularios, etc.