/**
 * centralise les réponses de l'api
 */
class message {

    success = {"response": "success"};
    failed = {"response": "failed"};

    constructor () {

    }

    /**
     * renvoie le message de succes formaté en Json
     */
    getSuccess() {

        return JSON.stringify(this.success);
    }

    /**
     * renvoie le message d'echec formaté en Json
     */
    getFailed() {

        return JSON.stringify(this.failed);
    }
}

module.exports.message = message;