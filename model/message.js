
/**
 * Objet manipulé par messageController et messageRequest
 * @param {*} id : optionnel dans le cas de la création d'un message
 * @param {*} username : corresponds au pseudo de la personne qui l'a posté
 * @param {*} content : corresponds au corps du message
 */
class message {

    constructor(id, username, content) {

        this.id = id;
        this.username = username;
        this.content = content;
    }
}
module.exports.message = message;
