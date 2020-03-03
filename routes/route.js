'use strict';

module.exports = function (app) {

  // UserController

  var userController = require('../controller/userController');
  var userPath = new userController.userController();

  app.route('/user').post(userPath.create);

  // MessageController

  var messageController = require('../controller/messageController');
  var messagePath = new messageController.messageController();

  app.route('/message').post(messagePath.create)
    .get(messagePath.read)
    .put(messagePath.update)
    .delete(messagePath.delete);

  // SecurityController

  var securityController = require('../controller/securityController');
  var securityPath = new securityController.securityController();

  app.route('/login').post(securityPath.login);
  app.route('/logout').post(securityPath.logout);

  /**
   * Path par défaut, affiche des informations sur la requête précédente 
   */
  app.use(function (req, res) {

    res.setHeader('Content-Type', 'application/json');

    let content = {
      'Path demandé': req.originalUrl,
      'Methode demandée': req.method,
      'Body envoyé': req.body,
      'Message: ': "Path non trouvée"
    };

    res.status(404).send(content);
  });


};

