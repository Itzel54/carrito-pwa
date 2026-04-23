let db;

const request = indexedDB.open("CarritoDB", 1);

request.onupgradeneeded = function (e) {
  db = e.target.result;
  db.createObjectStore("productos", { keyPath: "id", autoIncrement: true });
};

request.onsuccess = function (e) {
  db = e.target.result;
  mostrarProductos();
};

function agregarDB(producto) {
  const tx = db.transaction("productos", "readwrite");
  const store = tx.objectStore("productos");
  store.add({ nombre: producto });
}

function obtenerProductos(callback) {
  const tx = db.transaction("productos", "readonly");
  const store = tx.objectStore("productos");
  const request = store.getAll();

  request.onsuccess = () => callback(request.result);
}