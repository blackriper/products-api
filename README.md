# inventory-crud

Crud para agregar productos a una base de datos usando typeorm para el modelado de datos 

# Endpoints

* New Product : `POST /api/newproduct` agrega un nuevo producto a la base de datos

* Products : `GET /api/products` trae todas los productos de la base de datos

* Delete Task : `DELETE /api/deleteproduct/:sku` eliminar un producto en base a su sku

* Rest Cant : `PUT /api/restcant` resta de la cantidad total del producto

* Update product : `PUT /api/updateproduct` actualiza los datos de un producto
