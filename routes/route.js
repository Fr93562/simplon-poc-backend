'use strict';

module.exports = function (app) {

  /**
   * Appel la méthode messageController qui est associée à la path demandée
   */
  var messageController = require('../controller/messageController');

  app.route('/message')
    .post(messageController.create)
    .get(messageController.read)
    .put(messageController.update)
    .delete(messageController.delete);

  // User controller

  var userController = require('../controller/userController');
  var userPath = new userController.userController();

  app.route('/user').post(userPath.create);

  // Message controller

  var messageController2 = require('../controller/messageController2');
  var messagePath = new messageController2.messageController2();

  app.route('/message2').post(messagePath.create); 
   /*
  .get(messagePath.read)
    .put(messagePath.update)
    .delete(messagePath.delete);
  */

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

