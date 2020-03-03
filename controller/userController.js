var userEntity = require('../model/user');
var jsonCheckService = require('../service/jsonCheck');
var contentService = require('../service/contentCheck');
var hydrateService = require('../service/hydrate');
var messageService = require('../service/message');
var userRequest = require('../model/userRequest');
var messageRequest = require('../model/messageRequest');

/**
 * gère les paths des users
 * 
 * @author : Francois Macko
 */
class userController{

    constructor () {

    }

    /**
     * rajoute un user en base de données
     */
    create(req, res) {

        let service = {
            'verifyBody' : new jsonCheckService.jsonCheck(),
            'verifyData' : new contentService.contentCheck("user", req.body),
            'generateObject' : new hydrateService.hydrate("user", req.body),
            'message' : new messageService.message(),
            'userRequest' : new userRequest.userRequest()        }
        let output = null;
        
        if ( service.verifyBody.content(req.body) ) {

            if (service.verifyData.checkUser()) {

                service.userRequest.create(service.generateObject.getObject());
                output = res.status(200).send(service.message.getSuccess());
            }
        }
        return output;
    }

    /**
     * rajoute un user en base de données
     */
    delete(req, res) {

        let service = {
            'verifyBody' : new jsonCheckService.jsonCheck(),
            'verifyData' : new contentService.contentCheck("user", req.body),
            'generateObject' : new hydrateService.hydrate("user", req.body),
            'message' : new messageService.message(),
            'userRequest' : new userRequest.userRequest(),
            'messageRequest': new messageRequest.messageRequest()
        }
        let output = null;
        
        if ( service.verifyBody.content(req.body) ) {

            if (service.verifyData.checkUser()) {

                service.messageRequest.deleteByUsername(service.generateObject.getObject());
                service.userRequest.delete(service.generateObject.getObject());
                
                output = res.status(200).send(service.message.getSuccess());
            }
        }
        return output;
    }
}

module.exports.userController = userController;
