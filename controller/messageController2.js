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
class messageController2 {

    constructor() {

    }

    /**
     * rajoute un user en base de données
     */
    create(req, res) {

        console.log("rentrée dans create");


        let service = {
            'verifyBody' : new jsonCheckService.jsonCheck(),
            'verifyData' : new contentService.contentCheck("message", req.body),
            'generateObject' : new hydrateService.hydrate("message", req.body),
            'message' : new messageService.message()
        }
        let output = service.message.getFailed();

        console.log("avant verifybody dans create");

        
        if ( service.verifyBody.content(req.body) ) {

            console.log("avant verifydata dans create");

            if (service.verifyData.checkMessage()) {

                console.log("rentrée dans msg");


                //service.userRequest.create(service.generateObject.getObject());
                output = res.status(200).send(service.message.getSuccess());
            }
        }

        return output;
       // return res.status(200).send("return");
    }
}

module.exports.messageController2 = messageController2;
 