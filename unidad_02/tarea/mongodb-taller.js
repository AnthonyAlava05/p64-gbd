const { MongoClient, ObjectId } = require('mongodb');

const uri="mongodb+srv://anthony1:12345@practica6.hjh57.mongodb.net/"
const dbName = "TALLER01-BASEDEDATOS";
async function main() {
    const client = new MongoClient(uri);

    try {
        // Conectar al servidor de MongoDB
        await client.connect();

        console.log(`Conectado a MongoDB, creando base de datos: ${dbName}`);

        // Crear o acceder a la base de datos
        const db = client.db(dbName);

        // Crear las colecciones
        /*await db.createCollection("Empleados");
        await db.createCollection("Facturas");
        await db.createCollection("Pais");
        await db.createCollection("Ciudades");
        await db.createCollection("Clientes");
        await db.createCollection("Productos");

        console.log("Colecciones creadas exitosamente");

        // Insertar documentos en las colecciones
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

        // Puedes seguir agregando más documentos en otras colecciones de manera similar

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
        console.log("Clientes ingresados correctamente")*/
        

    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }
}

main().catch(console.error);