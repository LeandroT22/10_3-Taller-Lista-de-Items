document.addEventListener("DOMContentLoaded", () => {
    let valorIngresado = document.getElementById("item");
    let botonAgregar = document.getElementById("agregar");
    let contenedor = document.getElementById("contenedor");
    let botonLimpiar = document.getElementById("limpiar");
  
    // obtención de datos
    function obtenerItems() {
      let items = localStorage.getItem("items");
      return items ? JSON.parse(items) : [];
    }
  
    // Guardado de datos
    function guardarItems(items) {
      localStorage.setItem("items", JSON.stringify(items));
    }
  
    //  Mostrar items
    function actualizarListado() {
      let items = obtenerItems();
      contenedor.innerHTML = "";
      items.forEach((item) => {
        let li = document.createElement("li");
        li.className =
          "list-group-item d-flex justify-content-between align-items-center";
        li.textContent = item;
        contenedor.appendChild(li);
      });
    }
    // Agregar items
    function agregarItem() {
      let nuevoItem = valorIngresado.value.trim();
      if (nuevoItem) {
        let items = obtenerItems();
        items.push(nuevoItem);
        guardarItems(items);
        actualizarListado();
        valorIngresado.value = "";
      }
    }
  
    botonAgregar.addEventListener("click", agregarItem);
  
    // Vaciar lista
    botonLimpiar.addEventListener("click", () => {
      localStorage.removeItem("items");
      actualizarListado();
    });
  
    actualizarListado();
  });
  