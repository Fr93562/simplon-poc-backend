var connexion = require('../config/connexion');

/**
 * gère le CRUD de user coté base de données
 * 
 * @author : Francois Macko
 */
class messageRequest {

    constructor() {

    }

    /**
     * recherche un message en base de données
     * 
     * @param {*} id : corresponds à l'id du message recherché
     */
    find(id) {

        var query = new Promise(function(resolve, reject){

            connexion.query("Select * from messages where id = ?", id, function (error, results, fields, callback) { 
                
                resolve(results);
            });
        });

        return  query.then(function(cache){ 

            if( cache[0] != undefined) {

                return true;
            } else {

                return false;
            }
        }); 
    }


    /**
     * rajoute un user en base de données
     */
    create(message) {

        connexion.query("INSERT INTO messages set ?", message);
    }

    /**
     * Renvoie tout les objets messages en base de données
     */
    read() {

        var query = new Promise(function(resolve, reject){

            connexion.query("Select * from messages", function (error, results, fields, callback) { 
                
                resolve(results);
            });
        });

        return  query.then(function(cache){ 

            return cache;
        });
    }

    /**
     * Mets à jour un objet message un objet en base de données
     */
    update(message) {

        connexion.query("Update messages set content =? where id = ?", [message.content, message.id ] , function (err, result) {});
        // code incomplet! change uniquement le contenu de content
        // peut-être directement injecter l'objet message?
    }

    /**
     * Supprime un objet message de la base de données
     */
    delete(message) {

        console.log(message.id);

        connexion.query("delete from messages where id = ?" , message.id, function (err, result) {});
    }

    /**
     * Supprime un objet message de la base de données
     */
    deleteByUsername(username) {

        connexion.query("delete from messages where username = ?" , username, function (err, result) {});
    }
}

module.exports.messageRequest = messageRequest;
