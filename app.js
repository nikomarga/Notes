const input = document.getElementById('ingresar-tarea');
const listaDeTareas = document.getElementById('lista-de-tareas');

function agregarTarea() {
    if (input.value) {
        //crear tarea
        let tareaNueva = document.createElement('div');
        tareaNueva.classList.add('tarea');

        //texto ingresado por el usuario
        let texto = document.createElement('p');
        texto.innerText = input.value;
        tareaNueva.appendChild(texto);

        //crea y agrega contenedor de iconos
        let iconos = document.createElement('div');
        iconos.classList.add('iconos');
        tareaNueva.appendChild(iconos);

        //iconos
        let completar = document.createElement('i');
        completar.classList.add('bi','bi-check-circle-fill', 'icono-completar');
        completar.addEventListener('click', completarTarea);

        let eliminar = document.createElement('i');
        eliminar.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar');
        eliminar.addEventListener('click', eliminarTarea)

        let editar = document.createElement('i');
        editar.classList.add('bi', 'bi-pencil-square', 'icono-editar');
        editar.addEventListener('click', editarTarea)

        iconos.append(completar,eliminar,editar);

        //agregar tarea a la lista 
        listaDeTareas.appendChild(tareaNueva);

        //limpiar el input
        input.value = "";

    }else{
        alert('Por favor ingresa una tarea')
    }
}


function completarTarea(e) {
    let tarea = e.target.parentNode.parentNode;
    tarea.classList.toggle('completada');
}

function eliminarTarea(e) {
    let tarea = e.target.parentNode.parentNode;
    tarea.remove();
}

function editarTarea(e) {
    let tarea = e.target.parentNode.parentNode;
    let texto = tarea.querySelector('p');

    // Crear un input para edición
    let inputEdicion = document.createElement('input');
    inputEdicion.type = 'text';
    inputEdicion.value = texto.innerText;
    inputEdicion.classList.add('input-edicion');

    // Reemplazar el texto por el input
    tarea.replaceChild(inputEdicion, texto);
  

    // Guardar cambios al presionar Enter 
    inputEdicion.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            guardarEdicion();
        }
    });

    function guardarEdicion() {
        if (inputEdicion.value !== '') {
            texto.innerText = inputEdicion.value;
        }
        tarea.replaceChild(texto, inputEdicion);
    }
}


input.addEventListener('keydown', (e)=> {
    if (e.key === 'Enter') {
        agregarTarea();
    }
}) 

