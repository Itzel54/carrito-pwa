function agregarProducto() {
  const input = document.getElementById("producto");
  const valor = input.value;

  if (!valor) return;

  agregarDB(valor);
  input.value = "";

  setTimeout(mostrarProductos, 200);
}

function mostrarProductos() {
  obtenerProductos(productos => {
    const lista = document.getElementById("lista");
    lista.innerHTML = "";

    productos.forEach(p => {
      const li = document.createElement("li");
      li.textContent = p.nombre;
      lista.appendChild(li);
    });
  });
}