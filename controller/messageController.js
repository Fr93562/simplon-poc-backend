var messageEntity = require('../model/message');
var messageRequest = require('../model/messageRequest');


/**
 * vérifie si la requête Json correponds à l'objet message
 * @param {*} req : Utilise l'objet requête en paramètre 
 */
function verify (req) {

    let status = false;

    if ( (req.body.username != null ) && (req.body.content != null) ) {

        status = true;
    }
    return status;    
}

/**
 * Renvoie un objet message
 * @param {*} req  : Utilise l'objet requête en paramètres
 */
function hydrate(req) {

    return new messageEntity.message(req.body.id, req.body.username, req.body.content);
}

function find(req) {

    let status = false;

    if ( messageRequest.find(req.body.id) != null) {

        status = true;
    }
    return status;
}

/**
 * Corresponds à la path /message avec la méthode POST
 * Permet la création d'un message
 */
exports.create = function (req, res) {

    let output = "The message has not been sent";
    res.status(401);

    if (verify(req)) {

        let message = hydrate(req);
        messageRequest.create(message);
        
        output = "The message has been sent";
        res.status(200);
    }    

    res.send(output);
}

/**
 * Corresponds à la path /message avec la méthode GET
 * Récupère les messages en base auprès du modèle
 */
exports.read = function ( req, res) {

    messageRequest.read().then(function(result){

        return res.status(200).send(result);
    });
}

/**
 * Corresponds à la path /message avec la méthode PUT
 * Permet la mise à jour d'un message en base auprès du modèle
 */
exports.update = function(req, res) {

    let output = "The message has not been update";
    res.status(401);

    if (verify(req)) {
        
        output = "The message has not been found.";

        if (find(req)) {

            let message = hydrate(req);
            messageRequest.update(message.id, message.content);

            output = "The message has been update";
            res.status(200);
        }
    }    
    res.send(output);
}

/**
 * Corresponds à la path /message avec la méthode DELETE
 * Permet la suppression d'un message en base auprès du modèle
 */
exports.delete = function (req, res) {

    let output = "The message has not been delete";
    res.status(401);

    if (verify(req)) {
        
        output = "The message has not been found.";

        if (find(req)) {

            let message = hydrate(req);
            messageRequest.delete(message.id);

            output = "The message has been delete";
            res.status(200);
        }
    }    
    res.send(output);
}
