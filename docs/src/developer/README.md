# Métodos API de Backend

Esta sección ofrece una visión detallada de los métodos de backend implementados como servicios para la aplicación. Estos métodos cubren una amplia gama de funcionalidades, desde interacciones básicas con la base de datos hasta manejo complejo de autenticación de usuarios y gestión de entidades como Propiedades y Arrendadores. A continuación, se describen las principales categorías de servicios proporcionados por la API.

## Autenticación y Seguridad

La seguridad y la autenticación de los usuarios son fundamentales para proteger el acceso a la aplicación y garantizar que solo los usuarios autorizados puedan realizar operaciones sensibles.

- **Login**: Permite a los usuarios iniciar sesión en la aplicación, estableciendo una sesión segura a través de JWT almacenados en cookies HTTP-only.
- **Logout**: Cierra la sesión del usuario, invalidando el token de sesión actual para prevenir accesos futuros con el mismo token.
- **Verificación de Estado de Autenticación**: Comprueba si el usuario actual está autenticado y devuelve información relevante del perfil del usuario.

## Gestión de Propiedades

Las propiedades son el núcleo de la aplicación, y la API proporciona métodos extensivos para su gestión.

- **Listar Propiedades**: Obtiene un listado de todas las propiedades disponibles, con opciones de filtrado por estado de publicación, características y ubicación.
- **Crear Nueva Propiedad**: Permite a los usuarios autorizados agregar nuevas propiedades al sistema.
- **Actualizar Propiedad**: Modifica los detalles de una propiedad existente, permitiendo a los propietarios o administradores mantener la información actualizada.
- **Eliminar Propiedad**: Remueve una propiedad del sistema, asegurando que solo los usuarios con permisos adecuados puedan realizar esta acción.
- **Publicar/Despublicar Propiedad**: Cambia el estado de publicación de una propiedad para controlar su visibilidad en la plataforma.

## Gestión de Arrendadores

La API también facilita la administración de arrendadores, permitiendo un manejo eficiente de los propietarios y sus propiedades asociadas.

- **Registrar Arrendador**: Añade nuevos arrendadores al sistema, vinculando su perfil a propiedades específicas.
- **Actualizar Información del Arrendador**: Permite a los arrendadores actualizar su información personal y de contacto.
- **Listar Propiedades por Arrendador**: Recupera todas las propiedades asociadas a un arrendador específico, facilitando la gestión de sus activos.

