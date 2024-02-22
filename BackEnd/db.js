    import mysql from 'mysql2';
    import { Sequelize } from 'sequelize';

    // Configurar la conexión a MySQL
    const db = new Sequelize("maskota","root","",{
        host: 'localhost',
        dialect:"mysql",
    });
    export default db;