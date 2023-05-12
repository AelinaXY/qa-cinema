module.exports = {
    HOST: "35.246.113.74",
    USER: "root",  //Change user if you need by default root user
    PASSWORD: "",  // Enter Password you entered while creating instance
    DB: "cinema",  //Database name you want to connect with
    // Leave As it is or configure according to your need
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
