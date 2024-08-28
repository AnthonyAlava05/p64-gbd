const { MongoClient } = require('mongodb');

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
        //await db.createCollection("Empleados");
        //await db.createCollection("Facturas");
        //await db.createCollection("Pais");
        //await db.createCollection("Ciudades");
        //await db.createCollection("Clientes");
        //await db.createCollection("Productos");

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

    } catch (err) {
        console.error(err);
    } finally {
        await client.close();
    }
}

main().catch(console.error);