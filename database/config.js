const mongoose = require('mongoose');

const connection = async () => {

    try {
        await mongoose.connect(process.env.DB_URI);
        console.log('DB connect succesful!')
        
    } catch (error) {
        console.log(error);
        throw new Error ('Error al conectar a la base de datos.');
    }

}

module.exports = {
    connection
};