var connexion = require('../config/connexion');

/**
 * gère le CRUD de user coté base de données
 * 
 * @author : Francois Macko
 */
class userRequest {

    constructor() {

    }

    /**
     * rajoute un user en base de données
     */
    create(user) {

        connexion.query("INSERT INTO user set ?", user);
    }
}

module.exports.userRequest = userRequest;
