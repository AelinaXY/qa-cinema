
  module.exports = {
    dbConfig1: {
      HOST: "35.246.113.74",
      USER: "root",  
      PASSWORD: "",  
      DB: "cinema",  
      dialect: "mysql",
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
    },
    dbConfig2: {
      HOST: "35.246.117.173", 
      USER: "root",  
      PASSWORD: "",  
      DB: "cinema_test",  
      dialect: "mysql",
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
    }
  };
  