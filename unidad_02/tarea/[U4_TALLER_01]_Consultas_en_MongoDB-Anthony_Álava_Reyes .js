const { MongoClient, ObjectId } = require('mongodb');

const uri="mongodb+srv://anthony1:12345@practica6.hjh57.mongodb.net/"
const dbName = "TALLER01-BASEDEDATOS";
async function main() {
    const client = new MongoClient(uri);

    try {
        
        await client.connect();

        console.log(`Conectado a MongoDB, creando base de datos: ${dbName}`);

       
        const db = client.db(dbName);

        
        await db.createCollection("Empleados");
        await db.createCollection("Facturas");
        await db.createCollection("Pais");
        await db.createCollection("Ciudades");
        await db.createCollection("Clientes");
        await db.createCollection("Productos");

        console.log("Colecciones creadas exitosamente");

        
        const empleadosCollection = db.collection("Empleados");
        await empleadosCollection.insertMany([
            {
                Cedula: "1250217294",
                Nombre: "Anthony",
                Apellido: "Álava",
                Usuario:"aalava",
                clave:"12345"
            },
            {
                Cedula: "1272354591",
                Nombre: "Danilo",
                Apellido: "Morocho",
                Usuario:"mdanilo",
                clave:"67891"
            },
            {
                Cedula: "1282217295",
                Nombre: "Isaa",
                Apellido: "Arboleda",
                Usuario:"Iarboleda",
                clave:"02346"
            },
            {
                Cedula: "0250217252",
                Nombre: "Anna",
                Apellido: "Betancourt",
                Usuario:"banna1",
                clave:"00256"
            },
            {
                Cedula: "1280887294",
                Nombre: "Oscar",
                Apellido: "Chancay",
                Usuario:"coscar",
                clave:"56565"
            },
            {
                Cedula: "2280887294",
                Nombre: "Chuan",
                Apellido: "Liao",
                Usuario:"lchuan",
                clave:"56565"
            }
        ]);


        console.log("Empleados agregados exitosamente");

        

        const paisCollection= db.collection("Pais");
        await paisCollection.insertMany([
            {
                nombre:'Ecuador'
            },
            {
                nombre:'México'
            },
            {
                nombre:'Estados Unidos'
            },
            {
                nombre:'Venezuela'
            },
            {
                nombre:'Colombia'
            }
        ])
        console.log("Países ingresados correctamente")
        const ciudadCollection = db.collection("Ciudades");
        await ciudadCollection.insertMany([
            {
                nombre:'Guayaquil',
                pais: new ObjectId('66d7de5c40eb3e8b4220f07f')
            },
            {
                nombre:'Monterrey',
                pais: new ObjectId('66d7de5c40eb3e8b4220f080')
            },
            {
                nombre:'Quevedo',
                pais: new ObjectId('66d7de5c40eb3e8b4220f07f')
            },
            {
                nombre:'Salinas',
                pais: new ObjectId('66d7de5c40eb3e8b4220f07f')
            },
            {
                nombre:'Quito',
                pais: new ObjectId('66d7de5c40eb3e8b4220f07f')
            }
        ])
        console.log("Ciudades ingresadas correctamente")

        const clientesCollection = db.collection("Clientes")
        await clientesCollection.insertMany([
            {
                cedula: '1202386163',
                nombre: 'Axel ',
                apellido: 'Castillo',
                domicilio:'Guasmo Sur',
                ciudad: new ObjectId('66d7e12b8be89b145cbdf1f9')
            },
            {
                cedula: '1202206163',
                nombre: 'Camila ',
                apellido: 'Andrade',
                domicilio:'Cdla. El Cóndor',
                ciudad: new ObjectId('66d7e12b8be89b145cbdf1f9')
            },
            {
                cedula: '1230386163',
                nombre: 'Carlos ',
                apellido: 'Hernandez',
                domicilio:'Pradera',
                ciudad: new ObjectId('66d7e12b8be89b145cbdf1f9')
            },
            {
                cedula: '1202384168',
                nombre: 'Camila ',
                apellido: 'Cordova',
                domicilio:'El Fortin',
                ciudad: new ObjectId('66d7e12b8be89b145cbdf1f9')
            },
            {
                cedula: '1802386563',
                nombre: 'Analia',
                apellido: 'Morales',
                domicilio:'Cdla. Naval Norte',
                ciudad: new ObjectId('66d7e12b8be89b145cbdf1f9')
            }
        ])
        console.log("Clientes ingresados correctamente")

        const productosCollection= db.collection("Productos");
        await productosCollection.insertMany([
            {
                nombre: 'Mouse Logitch',
                valor:50.0
            },
            {
                nombre: 'Teclado HP - Mecánico',
                valor:20.0
            },
            {
                nombre: 'Laptop ASUS TUF GAMING A15',
                valor:900.0
            },
            {
                nombre: 'Celular Infinix GT20 PRO',
                valor:300.0
            },
            {
                nombre: 'Keyboard Wifi',
                valor:50.0
            }
        ])
        console.log("Productos Ingresados Correctamente")
        
        const facturasCollection = db.collection("Facturas");
        await facturasCollection.insertMany([
            {
                codigo:"0001-002-0001",
                fecha_emision: new Date(),
                valor_subtotal:300.0,
                valor_iva:12.0,
                valor_total:336.0,
                empleado: new ObjectId('66cecf67d05cff303ede5809'),
                cliente: new ObjectId('66d7e34789708d9f879cb3f5'),
                detalles:[
                    {
                        producto:new ObjectId('66d91837bbbd184f6081c6d8'),
                        cantidad:1,
                        valor_x_cantidad:300.0
                    }
                ]
            },
            {
                codigo:"0001-002-0002",
                fecha_emision: new Date(),
                valor_subtotal:1000.0,
                valor_iva:12.0,
                valor_total:1120.0,
                empleado: new ObjectId('66cecf67d05cff303ede580a'),
                cliente: new ObjectId('66d7e34789708d9f879cb3f6'),
                detalles:[
                    {
                        producto:new ObjectId('66d91837bbbd184f6081c6d5'),
                        cantidad:2,
                        valor_x_cantidad:100.0
                    },
                    {
                        producto:new ObjectId('66d91837bbbd184f6081c6d7'),
                        cantidad:1,
                        valor_x_cantidad:900.0
                    }
                ]
            },
            {
                codigo:"0001-002-0003",
                fecha_emision: new Date(),
                valor_subtotal:100.0,
                valor_iva:12.0,
                valor_total:112.0,
                empleado: new ObjectId('66cecf67d05cff303ede580b'),
                cliente: new ObjectId('66d7e34789708d9f879cb3f8'),
                detalles:[
                    {
                        producto:new ObjectId('66d91837bbbd184f6081c6d9'),
                        cantidad:2,
                        valor_x_cantidad:100.0
                    }
                ]
            },
            {
                codigo:"0001-002-0004",
                fecha_emision: new Date(),
                valor_subtotal:970.0,
                valor_iva:12.0,
                valor_total:1086.4,
                empleado: new ObjectId('66cecf67d05cff303ede580d'),
                cliente: new ObjectId('66d7e34789708d9f879cb3f9'),
                detalles:[
                    {
                        producto:new ObjectId('66d91837bbbd184f6081c6d7'),
                        cantidad:1,
                        valor_x_cantidad:900.0
                    },
                    {
                        producto:new ObjectId('66d91837bbbd184f6081c6d5'),
                        cantidad:1,
                        valor_x_cantidad:50.0
                    },
                    {
                        producto:new ObjectId('66d91837bbbd184f6081c6d6'),
                        cantidad:1,
                        valor_x_cantidad:20.0
                    }
                ]
            },
            {
                codigo:"0001-002-0005",
                fecha_emision: new Date(),
                valor_subtotal:300.0,
                valor_iva:12.0,
                valor_total:336.0,
                empleado: new ObjectId('66cecf67d05cff303ede580d'),
                cliente: new ObjectId('66d7e34789708d9f879cb3f7'),
                detalles:[
                    {
                        producto:new ObjectId(),
                        cantidad:1,
                        valor_x_cantidad:300.0
                    }
                ]
            }
        ])
        console.log("Facturas generadas correctamente")

    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }
}

main().catch(console.error);