const mongoose = require('mongoose');
require('../config/db_mongo') // Conexión a BBDD MongoDB


const objectSchema = {
    company_name: { 
        type: String, 
        required: true,
        unique: true 
    },
    CIF: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    url_web: {
        type: String,
        required: true,
        validate: {
            validator: function(url){
                if(url.indexOf('http') != -1)
                    return true;
                else {
                    return false;
                }
            }, 
            message: "Porfa, introduce una URL válida"
        }
    },
}

// Crear el esquema
const providerSchema = mongoose.Schema(objectSchema);
// Crear el modelo
const Provider = mongoose.model('Provider', providerSchema);

module.exports = Provider;


// Insertar un proveedor
/*const p = new Provider({
    companyName: "La casa de las flores",
    website: "https://www.lacasadelasflores.com",
    image:"https://www.lacasadelasflores.com/imagen.jpg"
});

 //Guardar en la BBDD
p.save()
.then((data)=>console.log(data))
.catch(err=>console.log(err))

// Insertar otro proveedor
const p2 = new Provider({
    companyName: "La casa de las plantas",
    website: "https://www.lacasadelasplantas.com",
    image:"https://www.lacasadelasplantas.com/imagen.jpg"
});

// Guardar en la BBDD
p2.save()
.then((data)=>console.log(data))
 */

 /*const p3 = new Provider({
    "company_name": "Teatro Marquina",
    "CIF": "B40236882",
    "address": "Calle de Prim 11",
    "url_web":"https://www.tortillasmarquina.com"
})
p3.save()
.then((data)=>console.log(data));*/

/*const p4 = new Provider({
    "company_name": "Peluqueria Divina",
    "CIF": "B40236982",
    "address": "Calle Princesa 45",
    "url_web":"https://www.peluqueriadivina.com"
})
p4.save()
.then((data)=>console.log(data));*/

/*const p5 = new Provider({
    "company_name": "Restaurante Lempira",
    "CIF": "B40288523",
    "address": "Calle Benita Juarez 23",
    "url_web":"https://www.restaurantelempira.com"
})
p5.save()
.then((data)=>console.log(data));*/

/*const p6 = new Provider({
    "company_name": "Autoescuela Pirata",
    "CIF": "B40236894",
    "address": "Calle Francisco 12",
    "url_web":"https://www.autoescuelapirata.com"
})
p6.save()
.then((data)=>console.log(data));*/

/*const p7 = new Provider({
    "company_name": "Restaurante La Garan Muralla",
    "CIF": "B40896894",
    "address": "Calle Matilde Salvador 16",
    "url_web":"https://www.restaurantelagranmuralla.com",
})
p7.save()
.then((data)=>console.log(data));*/