const {connection2} = require('../dbutils/dbConnect.js');

const cleanUpDb = async () => {
    try {
        await connection2.query("DELETE FROM films WHERE film_title ='TestFilm' ");
        console.log('Database cleanup completed');
    } 
    catch (error) {
        console.error('Database cleanup error:', error);
        throw error;
    }
};

module.exports = {cleanUpDb};
