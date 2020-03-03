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

        /**
     * Renvoie tout les objets messages en base de données
     */
    readByUsername(username) {

        var query = new Promise(function(resolve, reject){

            connexion.query("Select * from user where username = ?", username , function (error, results, fields, callback) { 
                
                resolve(results);
            });
        });

        return  query.then(function(cache){ 

            return cache;
        });
    }
}

module.exports.userRequest = userRequest;
