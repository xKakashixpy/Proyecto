   // Variables para almacenar los productos y el total
   let productos = [];
   let total = 0;

   // Función para agregar un producto al carrito
   function agregarAlCarrito(nombre, precio) {
     // Crear objeto producto
     const producto = {
       nombre: nombre,
       precio: precio
     };

     // Agregar producto al arreglo de productos
     productos.push(producto);

     // Actualizar el carrito
     actualizarCarrito();
   }

