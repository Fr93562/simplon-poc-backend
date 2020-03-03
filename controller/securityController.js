var userEntity = require('../model/user');
var jsonCheckService = require('../service/jsonCheck');
var contentService = require('../service/contentCheck');
var hydrateService = require('../service/hydrate');
var messageService = require('../service/message');
var userRequest = require('../model/userRequest');
var messageRequest = require('../model/messageRequest');

/**
 * gère les paths de la connexion / déconnexion
 * 
 * @author : Francois Macko
 */
class securityController{

    constructor () {

    }

    /**
     * rajoute un user en base de données
     */
    login(req, res) {

        console.log("login est fonctionnel");

    }

    /**
     * rajoute un user en base de données
     */
    logout(req, res) {

        console.log("log out est fonctionnel");

    }
}

module.exports.securityController = securityController;