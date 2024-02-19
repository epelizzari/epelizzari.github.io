# Módulo de Arrendadores/Propietarios

Este módulo permite la gestión de los arrendadores o propietarios de las propiedades listadas en la plataforma. Aquí puedes añadir nuevos arrendadores, actualizar su información, y asociar o desasociar propiedades a su nombre.

## Acceso al Módulo

Para acceder al módulo de arrendadores/propietarios:

1. Dirígete al menú lateral izquierdo de la pantalla.
2. Selecciona la opción "Arrendadores" o "Propietarios".

<!-- ![Imagen del acceso al módulo de arrendadores](/path/to/arrendadores_module_access.png) -->

En esta sección, encontrarás un listado de todos los arrendadores registrados, con opciones para gestionar su información y propiedades asociadas.

## Gestión de Arrendadores/Propietarios

### Creación de Arrendador/Propietario

Para registrar un nuevo arrendador en el sistema:

1. Haz clic en el botón "Agregar Arrendador" en la parte superior de la vista del módulo.
2. Completa el formulario con la información del arrendador.

<!-- ![Imagen del formulario de arrendador](/path/to/add_arrendador_form.png) -->

### Listado de Arrendadores/Propietarios

Aquí se muestra una lista completa de todos los arrendadores, permitiéndote acceder rápidamente a su información y gestionar las propiedades asociadas.

<!-- ![Imagen del listado de arrendadores](/path/to/arrendadores_list.png) -->

### Modificar/Actualizar Arrendador/Propietario

Para actualizar la información de un arrendador:

1. Selecciona el arrendador deseado del listado.
2. Haz clic en "Editar" para modificar sus datos.

### Propiedades Asociadas al Arrendador

Dentro de la ficha de cada arrendador, podrás ver y gestionar las propiedades que le están asociadas, facilitando la administración centralizada de la información.

<!-- ![Imagen de propiedades asociadas](/path/to/associated_properties.png) -->

Este módulo es esencial para mantener una relación clara entre propiedades y sus respectivos propietarios, asegurando una gestión eficaz del inventario inmobiliario.

### Permissions

When we talk about dialer, in addition to the ordinary permissions such as view, create, delete, and modify, there is also certain special permissions, below is a brief explanation of them.

<!-- | Permission | Function |
| --- | --- |
| <div class="h4WithIcon"><img src="/assets/permissions/code.png" alt="Create permission" class="permissionIcon">View</div> | Allows the user to view existing dialers |
| <div class="h4WithIcon"><img src="/assets/permissions/create.png" alt="Create permission" class="permissionIcon">Create</div> | Allows the user to create new dialer |
| <div class="h4WithIcon"><img src="/assets/permissions/edit.png" alt="Edit permission" class="permissionIcon">Edit</div> | Allows the user to update existing dialer |
| <div class="h4WithIcon"><img src="/assets/permissions/delete.png" alt="Delete permission" class="permissionIcon">Delete</div> | Allows the user to delete dialer |
| <div class="h4WithIcon"><img src="/assets/permissions/list.png" alt="List permission" class="permissionIcon">List</div> | Allows the user to monitor and manage the lists uploaded to the dialer | -->

You can choose from default values by selecting a country, and then customize them according to your needs. Alternatively, you have the option to configure all the settings manually based on your preferences. The variables are the following:

| Field                    | Description                                                                                                   |
| ------------------------ | ------------------------------------------------------------------------------------------------------------- |
| **initialSilence**       | Is maximum initial silence duration before greeting                                                           |
| **greeting**             | is the maximum length of a greeting                                                                           |
| **afterGreetingSilence** | Is the silence after detecting a greeting                                                                     |
| **totalAnalysisTime**    | Is the maximum time allowed for the algorithm to decide on whether the audio represents a HUMAN, or a MACHINE |
| **minimumWordLength**    | Is the minimum duration of Voice considered to be a word                                                      |
| **betweenWordsSilence**  | Is the minimum duration of silence after a word to consider the audio that follows to be a new word           |
| **maximumNumberOfWords** | Is the maximum number of words in a greeting. If this is REACHED, then the result is detection as a MACHINE   |
| **silenceThreshold**     | What is the average level of noise from 0 to 32767 which if not exceeded, should be considered silence?       |

<!-- <img src="/assets/dialers/deleteConfirm.png" alt="Delete confirm dialog" class="image"> -->

---

<style>
    .chartTypeIcon, .sourceIcon{
        float: left;
        margin-right: 10px;
    }
    .h4WithIcon{
        display: flex;
        align-items: center;
        gap: 12px;
    }
    .image{
        margin-top: 8px;
        margin-bottom: 16px;
    }
</style>
