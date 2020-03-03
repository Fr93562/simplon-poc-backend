
/**
 * Objet manipulé par messageController et messageRequest
 * @param {*} id : optionnel dans le cas de la création d'un message
 * @param {*} username : corresponds au pseudo de la personne qui l'a posté
 * @param {*} content : corresponds au corps du message
 */
class message {

    constructor(id, username, content) {

        this.setId(id);
        this.setUsername(username);
        this.setContent(content);
    }

    // méthodes getters et setters
    getId() {

        return this.id;
    }

    setId(id) {

        this.id = id;
    }

    getUsername() {

        return this.username;
    }

    setUsername(username) {

        this.username = username;
    }

    getContent() {

        return this.content;
    }

    setContent(content) {

        this.content = content
    }
}
module.exports.message = message;
