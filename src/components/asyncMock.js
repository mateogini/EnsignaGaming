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
        imagen: "https://www.hp.com/us-en/shop/app/assets/images/product/4ce49aa_1_2.png"
    },
    {
        id: 3,
        nombre: "Notebook Dell Inspiron",
        categoria: "Nootebook",
        especificaciones: "Intel i5, 8GB RAM, 512GB SSD, 15.6\"",
        precio: 699.99,
        stock: 7,
        imagen: "https://i.dell.com/sites/csimages/Marketing/hp-laptops-inspiron-15-3593-hero.png"
    },
    {
        id: 4,
        nombre: "Monitor Samsung 24\"",
        categoria: "Monitores",
        especificaciones: "Resolución 1920x1080, 75Hz, HDMI",
        precio: 129.99,
        stock: 20,
        imagen: "https://images.samsung.com/is/image/samsung/p5/uk/monitor/27t35f-01.jpg"
    },
    {
        id: 5,
        nombre: "Tarjeta Gráfica NVIDIA GTX 1660",
        categoria: "Productos",
        especificaciones: "6GB GDDR5, 192-bit, PCIe 3.0",
        precio: 229.99,
        stock: 12,
        imagen: "https://www.nvidia.com/content/dam/en-zz/Solutions/geforce-gtx-1660ti/gtx1660ti-gtx1660ti-600x600.png"
    },
    {
        id: 6,
        nombre: "Computadora de Escritorio Lenovo",
        categoria: "PC's de Escritorio",
        especificaciones: "Intel i7, 16GB RAM, 512GB SSD, GTX 1650",
        precio: 849.99,
        stock: 8,
        imagen: "https://static.lenovo.com/medias/2021/10/21/lenovo-ideacentre-5i-01.jpg"
    },
    {
        id: 7,
        nombre: "Notebook HP Pavilion",
        categoria: "Notebook",
        especificaciones: "AMD Ryzen 5, 8GB RAM, 256GB SSD, 14\"",
        precio: 599.99,
        stock: 5,
        imagen: "https://www.hp.com/us-en/shop/app/assets/images/product/1c7d7aa_1.png"
    },
    {
        id: 8,
        nombre: "Monitor LG 27\"",
        categoria: "Monitores",
        especificaciones: "Resolución 2560x1440, 75Hz, HDMI, DisplayPort",
        precio: 249.99,
        stock: 10,
        imagen: "https://www.lg.com/us/images/monitors/md06009722/gallery/desktop-01.jpg"
    },
    // Productos adicionales
    {
        id: 9,
        nombre: "Memoria RAM Corsair Vengeance LPX",
        categoria: "Productos",
        especificaciones: "16GB (2x8GB) DDR4, 3200MHz",
        precio: 89.99,
        stock: 25,
        imagen: "https://www.corsair.com/medias/sys_master/images/hfc/h0d/10362293637214/CMK16GX4M2B3200C16_hero.png"
    },
    {
        id: 10,
        nombre: "Computadora de Escritorio Dell OptiPlex",
        categoria: "PC's de Escritorio",
        especificaciones: "Intel i3, 4GB RAM, 1TB HDD",
        precio: 399.99,
        stock: 15,
        imagen: "https://www.dell.com/support/home/en-us/product-support/product/optiplex-3060-mini-desktop/overview"
    },
    {
        id: 11,
        nombre: "Notebook ASUS ZenBook",
        categoria: "Notebook",
        especificaciones: "Intel i7, 16GB RAM, 1TB SSD, 13.3\"",
        precio: 1199.99,
        stock: 4,
        imagen: "https://www.asus.com/media/global/products/MV6YwAOdHIlmZQeo/P_500.png"
    },
    {
        id: 12,
        nombre: "Monitor Acer Predator 27\"",
        categoria: "Monitores",
        especificaciones: "Resolución 2560x1440, 144Hz, G-Sync, HDMI, DisplayPort",
        precio: 499.99,
        stock: 6,
        imagen: "https://www.acer.com/ac/en/US/content/series/predator-x27"
    }
];



export const getProducts = () => {
    return new Promise((resolve) => {
        resolve(productos);
    });
}
export const getCategory = (cat) => { 
    
    return new Promise ((resolve) =>{
        resolve(productos.filter((prod) => prod.categoria == cat))
    })
}

