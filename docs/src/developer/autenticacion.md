# Autenticación API

## Introducción

Bienvenidos a la documentación de la API de Autenticación de nuestra plataforma. Aquí encontrarás información detallada sobre cómo gestionamos la autenticación y la seguridad, asegurando que solo los usuarios autorizados puedan acceder a funcionalidades específicas y a datos sensibles.

En nuestra API, la seguridad es primordial. Por eso, empleamos estándares modernos y robustos para la gestión de sesiones y el control de acceso, incluyendo el uso de JSON Web Tokens (JWT) y cookies HTTP-only para una capa adicional de seguridad.

## Autenticación con Cookies HTTP-only

La autenticación en nuestra API se maneja a través de JWT, que se entregan a los usuarios como cookies HTTP-only después de un inicio de sesión exitoso. Este método asegura que el token de autenticación se almacene de manera segura en el navegador del cliente y se envíe automáticamente con cada solicitud a la API, sin la posibilidad de ser accedido o manipulado por JavaScript. Esto mejora la seguridad al proteger contra ataques de cross-site scripting (XSS).

### Proceso de Autenticación:

1. **Inicio de Sesión**: Al realizar una petición POST a `/usuarios/login` con las credenciales correctas, el servidor valida estas credenciales y, si son válidas, retorna una respuesta `200 OK` junto con una cookie HTTP-only que contiene el JWT.

   ```json
   {
     "status": "success",
     "message": "Usuario logueado con éxito",
     ...
   }
   ```

2. **Uso del Token**: Una vez que el navegador almacena la cookie, esta se envía automáticamente en las cabeceras de las solicitudes subsiguientes a la API, permitiendo el acceso a rutas protegidas sin necesidad de manejar explícitamente el token en el frontend.

3. **Cierre de Sesión**: Para cerrar la sesión, se realiza una petición POST a `/usuarios/logout`, que instruye al navegador para eliminar la cookie de autenticación, finalizando así la sesión del usuario.

4. **Verificación del Estado de Autenticación**: El endpoint `/usuarios/checkAuthStatus` puede utilizarse en cualquier momento para verificar si el usuario está actualmente autenticado, basándose en la presencia y validez de la cookie de autenticación.

### Consideraciones de Seguridad:

- Las cookies HTTP-only no pueden ser leídas ni modificadas por JavaScript, lo que reduce significativamente el riesgo de ataques XSS.
- Es importante configurar correctamente las políticas de CORS y asegurar que las cookies se envíen solo a través de conexiones HTTPS para proteger contra ataques de tipo man-in-the-middle.

Esta estrategia de autenticación está diseñada para ofrecer un equilibrio óptimo entre seguridad y facilidad de uso, asegurando que nuestra API permanezca segura y accesible.

<script setup>
import Swagger from '/components/Swagger.vue'
</script>

<Swagger id="dialersSwagger" yaml="/specs/autenticacion/autenticacion.yaml"/>
