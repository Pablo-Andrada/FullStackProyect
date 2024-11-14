// CarritoCompra.test.js
const CarritoCompra = require('../CarritoCompra');

describe('CarritoCompra', () => {
  let carrito;

  beforeEach(() => {
    carrito = new CarritoCompra(); 
  });
//Inicialización del carrito: Verifica que el carrito esté vacío al crear una instancia de la clase.
  test('inicializa el carrito vacío', () => {
    expect(carrito.carrito).toEqual([]);
  });
//Agregar productos: Comprueba que un producto se agregue correctamente al carrito.
  test('agregarProducto() agrega un producto al carrito', () => {
    const producto = { nombre: 'Producto 1', precio: 100 };
    carrito.agregarProducto(producto);
    expect(carrito.carrito).toContain(producto);
  });
//Calcular total: Asegura que el total de la compra se calcule correctamente al sumar los precios de los productos.
  test('calcularTotal() devuelve el total correcto', () => {
    const producto1 = { nombre: 'Producto 1', precio: 100 };
    const producto2 = { nombre: 'Producto 2', precio: 200 };
    carrito.agregarProducto(producto1);
    carrito.agregarProducto(producto2);
    expect(carrito.calcularTotal()).toBe(300);
  });
//Aplicar descuento: Valida que el descuento se aplique de manera correcta sobre el total.
  test('aplicarDescuento() aplica correctamente el descuento', () => {
    const producto1 = { nombre: 'Producto 1', precio: 100 };
    const producto2 = { nombre: 'Producto 2', precio: 200 };
    carrito.agregarProducto(producto1);
    carrito.agregarProducto(producto2);
    const totalConDescuento = carrito.aplicarDescuento(10); // 10% de descuento
    expect(totalConDescuento).toBe(270); // 300 - 10% de 300
  });
//Aplicar descuento de 0%: Verifica que si el descuento es del 0%, el total no cambia.
  test('aplicarDescuento() con 0% devuelve el total sin cambios', () => {
    const producto = { nombre: 'Producto 1', precio: 100 };
    carrito.agregarProducto(producto);
    const totalConDescuento = carrito.aplicarDescuento(0); // 0% de descuento
    expect(totalConDescuento).toBe(100); // Total no cambia
  });
});
