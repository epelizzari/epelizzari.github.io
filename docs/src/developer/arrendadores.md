# Arrendadores API

## Introducción

Bienvenido a la documentación de la API de Arrendadores, una interfaz de programación de aplicaciones diseñada para facilitar la gestión eficiente de arrendadores y sus propiedades. Esta API proporciona un conjunto robusto de herramientas para crear, consultar, actualizar y eliminar información relacionada con arrendadores, así como gestionar las propiedades asociadas a cada uno de ellos.

### Características Principales

- **Gestión de Arrendadores**: Crea, consulta, actualiza y elimina arrendadores en tu sistema, permitiendo un manejo detallado de su información.
- **Administración de Propiedades**: Asocia propiedades a arrendadores, actualiza detalles de estas propiedades y gestiona su relación de manera eficiente.
- **Búsqueda Avanzada**: Encuentra arrendadores y propiedades mediante criterios específicos, facilitando la búsqueda por nombre, ubicación, y más.
- **Seguridad y Control de Acceso**: Define y controla el acceso a la información de manera segura, asegurando que solo los usuarios autorizados puedan gestionar los datos.

### Empezando

Para comenzar a utilizar la API de Arrendadores, nnecesitarás obtener un token de usuario valido a través de nuestro proceso de login [Autenticacion](/developer/autenticacion.html#introduccion). Nuestra API utiliza tokens de acceso para asegurar las comunicaciones y proteger los datos de nuestros usuarios.

Una vez autenticado, podrás realizar llamadas HTTP a los endpoints proporcionados, utilizando los métodos `GET`, `POST`, `PUT`, y `DELETE` para interactuar con la API según tus necesidades.

Para obtener más detalles sobre los endpoints específicos y cómo utilizarlos, por favor consulta las secciones siguientes de esta documentación.

## Arrendadores

Aquí puedes profundizar en los detalles específicos relacionados con la gestión de arrendadores, incluyendo ejemplos de solicitudes y respuestas para cada operación disponible.

<script setup>
import Swagger from '/components/Swagger.vue'
</script>

<Swagger id="dialersSwagger" yaml="/specs/arrendadores/arrendadores.yaml"/>
