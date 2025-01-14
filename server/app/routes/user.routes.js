module.exports = app => {
    const user = require("../controllers/user.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/as", user.create);
  
    // Retrieve all Tutorials
    router.get("/", user.findAll);
  
    // Retrieve all published Tutorials
    router.get("/published", user.findAllPublished);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", user.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", user.update);
  
    // Delete a Tutorial with id
    router.delete("/:id", user.delete);
  
    // Delete all Tutorials
    router.delete("/", user.deleteAll);
  
    app.use('/api/user', router);
  };
