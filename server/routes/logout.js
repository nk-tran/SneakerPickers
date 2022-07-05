const { Router } = require('express')
const passport = require('passport')
const router = Router()


router.post('/logout', function(req, res){
  const {logout} = req
  logout()

  res.status(200)
});


module.exports = router;