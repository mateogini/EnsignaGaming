const productos = [
    {
        id: 1,
        nombre: "Procesador Intel i7",
        categoria: "Productos",
        especificaciones: "8 núcleos, 3.6 GHz, LGA 1200",
        precio: 320.99,
        stock: 15,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_916794-MLU72531679336_102023-O.webp"
    },
    {
        id: 2,
        nombre: "Computadora de Escritorio HP",
        categoria: "PC's de Escritorio",
        especificaciones: "Intel i5, 8GB RAM, 256GB SSD",
        precio: 549.99,
        stock: 10,
        imagen: "https://d22k5h68hofcrd.cloudfront.net/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/6/B/6B9D1LA-3_T1679651756.png"
    },
    {
        id: 3,
        nombre: "Notebook Dell Inspiron",
        categoria: "Notebook",
        especificaciones: "Intel i5, 8GB RAM, 512GB SSD, 15.6\"",
        precio: 699.99,
        stock: 7,
        imagen: "https://pccenter.com.ar/cdn/shop/files/FotosTiend2faOnline333_1.jpg?v=1690815205"
    },
    {
        id: 4,
        nombre: "Monitor Samsung 24\"",
        categoria: "Monitores",
        especificaciones: "Resolución 1920x1080, 75Hz, HDMI",
        precio: 129.99,
        stock: 20,
        imagen: "https://images.fravega.com/f1000/32397e21c5240c13f2d32ad3842cd3e8.jpg"
    },
    {
        id: 5,
        nombre: "Tarjeta Gráfica NVIDIA GTX 1660",
        categoria: "Productos",
        especificaciones: "6GB GDDR5, 192-bit, PCIe 3.0",
        precio: 229.99,
        stock: 12,
        imagen: "https://fullh4rd.com.ar/img/productos/3/video-geforce-gtx-1660-6gb-gigabyte-oc-nv-0.jpg"
    },
    {
        id: 6,
        nombre: "Computadora de Escritorio Lenovo",
        categoria: "PC's de Escritorio",
        especificaciones: "Intel i7, 16GB RAM, 512GB SSD, GTX 1650",
        precio: 849.99,
        stock: 8,
        imagen: "https://p1-ofp.static.pub/medias/bWFzdGVyfHJvb3R8MjYxMDM5fGltYWdlL3BuZ3xoYmQvaGIwLzE0MjU3NjUzMzE3NjYyLnBuZ3wwM2U2ZTY5MmEwMGVkYzM0ZjMxMzA2OTMxYWM3OGFjZGFmYjI5ODQ2NjUxODUzY2I2YTZiMmNhMDUxODExZDVk/lenovo-monitor-ideacentre-aio-3-21.5-amd-subseries-hero.png"
    },
    {
        id: 7,
        nombre: "Notebook HP Pavilion",
        categoria: "Notebook",
        especificaciones: "AMD Ryzen 5, 8GB RAM, 256GB SSD, 14\"",
        precio: 599.99,
        stock: 5,
        imagen: "https://ar-media.hptiendaenlinea.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/6/N/6N1B2LA-1_T1683065780.png"
    },
    {
        id: 8,
        nombre: "Monitor LG 27\"",
        categoria: "Monitores",
        especificaciones: "Resolución 2560x1440, 75Hz, HDMI, DisplayPort",
        precio: 249.99,
        stock: 10,
        imagen: "https://s3-sa-east-1.amazonaws.com/saasargentina/9w5fMOuihRfDYhHx2KM0/imagen"
    },
    // Productos adicionales
    {
        id: 9,
        nombre: "Memoria RAM Corsair Vengeance LPX",
        categoria: "Productos",
        especificaciones: "16GB (2x8GB) DDR4, 3200MHz",
        precio: 89.99,
        stock: 25,
        imagen: "https://mla-s1-p.mlstatic.com/872608-MLA52050811717_102022-F.jpg"
    },
    {
        id: 10,
        nombre: "Computadora de Escritorio Dell OptiPlex",
        categoria: "PC's de Escritorio",
        especificaciones: "Intel i3, 4GB RAM, 1TB HDD",
        precio: 399.99,
        stock: 15,
        imagen: "https://m.media-amazon.com/images/I/81MJdOFj+mL.jpg"
    },
    {
        id: 11,
        nombre: "Notebook ASUS ZenBook",
        categoria: "Notebook",
        especificaciones: "Intel i7, 16GB RAM, 1TB SSD, 13.3\"",
        precio: 1199.99,
        stock: 4,
        imagen: "https://http2.mlstatic.com/D_NQ_NP_896421-MLA46546043157_062021-O.webp"
    },
    {
        id: 12,
        nombre: "Monitor Acer Predator 27\"",
        categoria: "Monitores",
        especificaciones: "Resolución 2560x1440, 144Hz, G-Sync, HDMI, DisplayPort",
        precio: 499.99,
        stock: 6,
        imagen: "https://images-cdn.ubuy.co.in/6350e32d2b423d5a0e351fe4-acer-predator-xb271hu-abmiprz-27-inch.jpg"
    }
];



export const getProducts = () => {
    return new Promise((resolve) => {
        resolve(productos);
    });
}
export const getCategory = (cat) => { 
    const category = cat.toLowerCase();
    return new Promise((resolve) => {
        resolve(productos.filter((prod) => prod.categoria.toLowerCase() === category));
    });
}
export const getProduct = (nombre) => {
    return productos.find((prod) => prod.nombre === nombre);
};


