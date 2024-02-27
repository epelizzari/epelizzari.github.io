# Módulo de Arrendadores/Propietarios

Este módulo permite la gestión de los arrendadores o propietarios de las propiedades listadas en la plataforma. Aquí puedes añadir nuevos arrendadores, actualizar su información, y asociar o desasociar propiedades a su nombre.

## Acceso al Módulo

Para acceder al módulo de arrendadores/propietarios:

1. Dirígete al menú lateral izquierdo de la pantalla.
2. Selecciona la opción "Arrendadores" seguido de "Lista de arrendadores".

![Imagen del acceso al módulo de arrendadores](/assets/arrendadores/ListaArrendadores.png)


En esta sección, encontrarás un listado de todos los arrendadores registrados, con opciones para gestionar su información y propiedades asociadas.

## Gestión de Arrendadores/Propietarios

### Creación de Arrendador/Propietario

Para registrar un nuevo arrendador en el sistema:

1. Haz clic en el botón "Agregar Arrendador" en la parte superior de la vista del módulo.

    ![Imagen del botón agregar propiedad](/assets/arrendadores/btnAgregarArrendador.png)

2. Serás llevado al formulario de creación de arrendador, donde deberás ingresar toda la información relevante.

### Información Requerida

- **Nombre:** Nombre y apellido del arrendador.
- **Email:** Email de contacto del arrendador.
- **Telefono:** Telefono de contacto del arrendadpr.
- **Documento:** Documento de identificacion del arrendador.
- **Direccion:** Direccion del arrendador.
- **Seccion de Informacion adicionale:** Permite agregar informacion especifica sobre el arrendador en particular que esta siendo cargado o modificado. Guia de gestion de informacion adicional [Adicional](administrator/modulo-de-arrendadores.html#informacion-adicional).

    ![Imagen del formulario de arrendador](/assets/arrendadores/FormArrendadorCompleto.png)



Una vez completado el formulario, haz clic en "Guardar" para añadir el arrendador en el sistema.
En caso contrario si se presiona el boton "Cancelar" la informacion ingresada hasta el momemento se pierde y seras re dirigido al listado inicial.

**Nota: todos los campos son obligatorios para la creacion de un arrendador excepto las caracateristicas variables.**


### Listado de Arrendadores/Propietarios

Aquí se muestra una lista completa de todos los arrendadores, permitiéndote acceder rápidamente a su información y gestionar las propiedades asociadas.

![Imagen del listado de arrendadores](/assets/arrendadores/ArrendadoresListado.png)


### Búsqueda

Utiliza el campo de busqueda disponible para refinar el listado de arrendadores mostrados. Presiona enter para ejecutar la busqueda


### Acciones sobre los Arrendadores

Para acceder a las acciones sobre el arrendador seleccionado, se debe desplegar el menu de 3 puntos verticales ubicados en cada fila de la lista de arrendadores, donde se visualizan las siguientes opciones:

- **Modificar/Actualizar:** Para editar la información de un arrendador existente.

    Los pasos para actualizar la informacion de una propiedad son los siguientes:

1. Haz clic en la opcion "Editar" del menu.
2. Serás dirigido al formulario de modificacion de arrendador, donde deberás modificar toda la información que desees.

    **Nota: el formulario de creacion y modificacion de arrendador son iguales.**

- **Gestionar propiedades:** Permite gestionar las propiedades asociadas para arrendador selecccionado. Guia de gestion de propiedades asociadas [Propiedades asociadas](/administrator/modulo-de-arrendadores.html#propiedades-asociadas-al-arrendador).

- **Eliminar:** Remueve el arrendador del sistema.

    Para eliminar un arrendador haz clic en la opcion "Eliminar" del menu, luego confirma la accion para eliminar el arrendador seleccionado arrendador del sistema.

### Propiedades Asociadas al Arrendador

Para cada arrendador cargado en el sistema, existe un listado de propiedades asociados que inicialmente se encontrara vacio, a traves de este listado una vez que asocies propiedades podrás ver y gestionar las propiedades que le están asociadas, facilitando la administración centralizada de la información.

1. Haz clic en "Gestionar Propiedades" para ingresar al modulo de gestion y  asociar o desasociar propiedades al arrendador.
1. Una vez que realices los cambios deseados debes presionar el boton "Confirmar cambios" para que estos se guarden en el sistema


    El modulo de gestion de propiedades se divide en dos grandes sectores:

    - **Lista de propiedades disponibles y seleccionadas :** Este listado muestra todas las propiedades disponibles en el sistema y que pueden ser asociadas al arrendador seleccionad, en la media en que se seleccionen propiedades del listado, las mismas iran quedando marcadas para facilitar la visualizacion al usurio.

    ![Imagen de lista de  propiedades disponibles ](/assets/arrendadores/ListadoDisponiblesAsociar.png)

    - **Lista de propiedades asociadas:** En esta lista se muestran aquellas propiedades asignadas al arrendador. Desde este modulo es posible: agrear o eliminar propiedades al listado de asociadas al arrendador .

    ![Imagen de lista de propiedades asociadas al arrendador](/assets/arrendadores/ListadoAsociadasArrendador.png)

    Este módulo es esencial para mantener una relación clara entre propiedades y sus respectivos propietarios, asegurando una gestión eficaz del inventario inmobiliario.

### Informacion Adicional

El formulario para crear arrendador incorpora una funcionalidad esencial: la capacidad de añadir características específicas para cada arrebdador en el sistema. Para incluir nueva informacion adicional, ve a la sección "Informacion Adicional" y haz clic en el botón "Agregar". 
El sistema mostrará dos campos en paralelo: uno para el nombre de la característica y otro para su valor correspondiente. Si deseas añadir otra característica, simplemente presiona de nuevo el botón "Agregar" y sigue el procedimiento descrito. Al guardar el arrendador, esta informacion se almacenarán junto con el resto de la información.

**Nota: Es posible editar o eliminar esta informacion adicional en cualquier momento.**

![Imagen de informacion adicional](/assets/arrendadores/InformacionAdicional.png)


## Videos de las funcionalidades

Por mas detalles de las funciones descriptas en este modulo accede a las guias de video [Arrendadores](/administrator/videos.md#arrendadores)


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
