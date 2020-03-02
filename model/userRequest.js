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
     * recherche un message en base de données
     * 
     * @param {*} id : corresponds à l'id du message recherché
     */
    find(username) {

        var query = new Promise(function(resolve, reject){

            connexion.query("Select * from messages where id = ?", username, function (error, results, fields, callback) { 
                
                resolve(results);
            });
        });

        return  query.then(function(cache){ 

            return cache;
        }); 
    }

    /**
     * rajoute un user en base de données
     */
    create(user) {

        connexion.query("INSERT INTO user set ?", user);
    }
}

module.exports.userRequest = userRequest;
