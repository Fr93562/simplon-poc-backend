var userEntity = require('../model/user');
var messageEntity = require('../model/message');


/**
 * génère un objet à partir des données reçue
 * 
 * @author : Francois Macko
 */
class hydrate {

    selected = "";
    data = null;
    object = null;

    constructor(selected, data) {

        this.setSelected(selected);
        this.setData(data);
    }

    // méthodes getters et setters
    getSelected() {

        return this.selected;
    }

    setSelected(selected) {

        this.selected = selected;
    }

    getData() {

        return this.data;
    }

    setData(data) {

        this.data = data;
    }

    /**
     * crée un objet en fonction de la construction de la classe
     * renvoie le résultat
     */
    getObject() {

        switch (this.selected) {

            case "user":
                this.createUser();
                break;

            case "message":
                this.createMessage();
                break;

            default:
                break;
        }
        return this.object;
    }

    /**
     * ajoute un objet user à l'objet hydrate
     */
    createUser() {

        this.object = new userEntity.user(this.data.id, this.data.username, this.data.password, this.data.email);
    }

    /**
     * ajoute un objet message à l'objet hydrate
     */
    createMessage() {

        this.object = new messageEntity.message(this.data.id, this.data.title, this.data.content);
    }
}

module.exports.hydrate = hydrate;