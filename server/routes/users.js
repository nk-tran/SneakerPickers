const router = require('express').Router();

const users = ['Bob', 'Alex', 'Will', 'Tristan'];

module.exports = (db) => {
  // all routes will go here 
  router.get('/', (req, res) => {
      if (req.user) {
        console.log("logged in as:", req.user)
      } else {
        console.log("not logged in")
      }
  });

  return router;
}