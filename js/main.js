const products = [
    {
        product_name : "Frambuesas",
        description : "Paquete de frambuesas de 500gr",
        image: "https://picsum.photos/id/102/600/400",
        price: "$100"
    },
    {
        product_name : "Cobertor",
        description : "Cobertor calientito y muy suave para protegerse del frío",
        image: "https://picsum.photos/id/1025/600/400",
        price: "$600"
    },
    {
        product_name : "Cafetera",
        description : "Practica cafetera para preparar un buen café Veracruzano todas las mañanas",
        image: "https://picsum.photos/id/1060/600/400",
        price: "$300"
    },
    {
        product_name : "Fresas",
        description : "500gr de fresas frescas",
        image: "https://picsum.photos/id/1080/600/400",
        price: "$150"
    },
     {
        product_name : "Bicicleta",
        description : "Bonita bicicleta para salir a hacer ejercicio",
        image: "https://picsum.photos/id/146/600/400",
        price: "$1200"
    },
    {
        product_name : "Zapatos",
        description : "Lindos zapatos, para la novia, para la esposa...",
        image: "https://picsum.photos/id/21/600/400",
        price: "$800"
    },
     {
        product_name : "Miel de abeja natural",
        description : "1lt de miel natural",
        image: "https://picsum.photos/id/312/600/400",
        price: "$120"
    },
     {
        product_name : "Atrapasueños",
        description : "Atrapasueños para la decoración de la habitación del niño, de la niña...",
        image: "https://picsum.photos/id/104/600/400",
        price: "$50"    
    },
    
]

const nodoLista = document.getElementById('lista-productos')
let productosSeleccionadosCarrito = []

//DOMContentLoaded

document.addEventListener('DOMContentLoaded', e => traerListaProductos(e))
nodoLista.addEventListener( 'click', e => agregarCarrito( e ) )

function traerListaProductos(event) {

    let htmlFragment = ""

    products.forEach( item =>{
        htmlFragment += `
            <article class="producto-card">
                <img src=${ item.image } alt="">
                <div class="producto-info">
                    <h2>${ item.product_name }</h2>
                    <p>${ item.description }</p>
                    <b>PRECIO:</b><span>${item.price }</span>
                    <button class="btn-agregar">Agregar al carrito</button>
                </div>
            </article>
        `
    })
    nodoLista.innerHTML = htmlFragment 
}

function agregarCarrito( event ) {

    if( event.target.classList.contains( 'btn-agregar' ) ){
        const nodoCard = event.target.parentElement
        
        const productoSeleccionado = {
            name : nodoCard.querySelector('h2').textContent,
            precio: nodoCard.querySelector('span').textContent
        }

        productosSeleccionadosCarrito.push( productoSeleccionado )
        
        document.getElementById('compras-carrito').textContent = productosSeleccionadosCarrito.length

    }
}
