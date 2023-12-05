## Notas para el usuario
#### Para mejorar su experiencia, desde el lado de proyectos dejamos algunos comentarios respecto de posibles bugs que podrian encontrarse al correr el programa:
* es posible que cuando borran un proyecto y vuelvan a la pagina principal, se muestre el proyecto eliminado. Creemos que esto se debe a que la funcion no espera el retorno de la eliminacion, y es asincronica por lo que no controlamos el orden de las llamadas, y se puede llegar a re-renderizar mientras sigue estando. Si recargan la pagina, el proyecto no debería aparecer más.
* si modifican un proyecto o una tarea, al clickear en cualquier boton que debería realizar alguna accion (aceptar, cancelar o cualquiera de la sidebar) se cambia la URL pero no te lleva a esa pagina. Esto no sabemos a qué se debe, pero haciendo f5 pueden continuar con el funcionamiento de la pagina. Si se clickea en aceptar, los valores efectivamente se modifican, tanto en su estado como en el kanban, etc, simplemente no podemos lograr que se recargue la pagina correctamente.
* en la pagina de visualizacion de una tarea, se pueden observar los tickets asociados, pero deben esperar un rato.
* esto no es un bug nuestro, pero al correr por primera vez la aplicación, es muy probable que les tome un rato en cargar. Pedimos paciencia, render no tiene una gran velocidad.

Pedimos disculpas por los inconvenientes.
