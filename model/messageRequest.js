var connexion = require('../config/connexion');
//var message = require('../model/message');


/**
 * Gère le CRUD de request coté base de données
 */
var messageRequest = {

    response : null,

    connection: require('../config/connexion'),

    /**
     * Vérifie si un objet existe en base, renvoie un booléen
     */
    find: (id) => {

        var query = new Promise(function(resolve, reject){

            connexion.query("Select * from messages where id = ?", id, function (error, results, fields, callback) { 
                
                resolve(results);
            });
        });

        return  query.then(function(cache){ 

            if(cache.length != 0) {

                return true;
            } else {

                return false;
            }
        }); 
    },

    /**
     * Crée un objet message en base de données
     */
    create: (message) => {

        connexion.query("INSERT INTO messages set ?", message);
    },

    /**
     * Renvoie tout les objets messages en base de données
     */
    read: () => {

        var query = new Promise(function(resolve, reject){

            connexion.query("Select * from messages", function (error, results, fields, callback) { 
                
                resolve(results);
            });
        });

        return  query.then(function(cache){ 

            return cache;
        });
    },

    /**
     * Mets à jour un objet message un objet en base de données
     */
    update: (id) => {

        //connexion.query("Update messages set content = ? where id = ?", content , id);
        connexion.query("Update messages set content = 'test' where id = ?", id, function (err, result) {});
    },

    /**
     * Supprime un objet message de la base de données
     */
    delete: (id) => {

        console.log(id);

        connexion.query("delete messages where id = ?" , id, function (err, result) {});
    },
};

module.exports = messageRequest;
