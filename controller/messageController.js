var jsonCheckService = require('../service/jsonCheck');
var contentService = require('../service/contentCheck');
var hydrateService = require('../service/hydrate');
var messageService = require('../service/message');
var messageRequest = require('../model/messageRequest');

/**
 * gères les paths de message
 * 
 * @author : Francois Macko
 */
class messageController {

    constructor() {

    }

    /**
     * rajoute un user en base de données
     */
    create(req, res) {

        let service = {
            'verifyBody': new jsonCheckService.jsonCheck(),
            'verifyData': new contentService.contentCheck("message", req.body),
            'generateObject': new hydrateService.hydrate("message", req.body),
            'message': new messageService.message(),
            'messageRequest': new messageRequest.messageRequest(),
        };

        let output = service.message.getFailed();

        if (service.verifyBody.content(req.body)) {

            if (service.verifyData.checkMessage() == true) {

                /*
                service.messageRequest.find(req.body.id).then(function(result){

                    console.log(result);
                    return result; 
                });
                */
                service.messageRequest.create(service.generateObject.getObject());
                output = service.message.getSuccess();
            }
        }
        return res.status(200).send(output);
    }

    /**
     * renvoie tout les objets messages en base de données
     */
    read(req, res) {

        let service = { 'messageRequest': new messageRequest.messageRequest() };

        service.messageRequest.read().then(function (result) {

            return res.status(200).send(result);
        });
    }

    /**
     * Corresponds à la path /message avec la méthode PUT
     * Permet la mise à jour d'un message en base auprès du modèle
     */
    update(req, res) {

        let service = {
            'verifyBody': new jsonCheckService.jsonCheck(),
            'verifyData': new contentService.contentCheck("message", req.body),
            'generateObject': new hydrateService.hydrate("message", req.body),
            'message': new messageService.message(),
            'messageRequest': new messageRequest.messageRequest(),
        };

        let output = service.message.getFailed();

        if (service.verifyBody.content(req.body)) {

            if (service.verifyData.checkMessage() == true) {

                service.messageRequest.find(req.body.id).then(function (result) {

                    if (result == true) {

                        service.messageRequest.update(service.generateObject.getObject());
                        output = service.message.getSuccess();

                        return res.status(200).send(output);
                    }
                });

            }
        }
    }

    /**
    * Corresponds à la path /message avec la méthode PUT
    * Permet la mise à jour d'un message en base auprès du modèle
    */
    delete(req, res) {

        let service = {
            'verifyBody': new jsonCheckService.jsonCheck(),
            'verifyData': new contentService.contentCheck("message", req.body),
            'generateObject': new hydrateService.hydrate("message", req.body),
            'message': new messageService.message(),
            'messageRequest': new messageRequest.messageRequest(),
        };

        let output = service.message.getFailed();

        if (service.verifyBody.content(req.body)) {

            if (service.verifyData.checkMessage() == true) {

                service.messageRequest.find(req.body.id).then(function (result) {

                    if (result == true) {

                        service.messageRequest.delete(service.generateObject.getObject());
                        output = service.message.getSuccess();

                        return res.status(200).send(output);
                    }
                });

            }
        }
    }
}

module.exports.messageController = messageController;
