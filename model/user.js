/**
 * objet qui représente les users
 * est utilisé par userController
 * 
 * @param {*} id : corresponds à l'id de l'objet, corresponds à 0 de base
 * @param {*} username : corresponds au pseudo de l'user
 * @param {*} password : corresponds à son mot de passe. sera hashé
 * @param {*} email : corresponds à l'adresse mail, sera utilisé pour l'inscription
 * 
 * @author : Francois Macko
 */
class user {

    id = 0;
    username = "";      // fixé à 30 caractères maximum à l'aide des méthodes de la classe
    password = "";      // fixé à 30 caractères maximum à l'aide des méthodes de la classe
    email = "";

    constructor(id, username, password, email) {

        this.setId(id);
        this.setUsername(username);
        this.setPassword(password);
        this.setEmail(email);
    }

    // getters et setters
    getId(){

        return this.id;
    }

    setId(id) {

        this.id = id;
    }

    getUsername(){

        return this.username;
    }

    setUsername(username) {

        if ( this.stringLength(30, username) == true ) {

            this.username = this.stringSlice(30, username);

        } else {

            this.username = username;
        }
    }

    getPassword() {

        // Décryptage à rajouter
        return this.password;
    }

    setPassword(password) {

        if ( this.stringLength(30, password) == true ) {

            this.password = this.stringSlice(30, password);

        } else {

            this.password = password;
        }
        // Hashage à rajouter
    }

    getEmail() {

        return this.email;
    }

    setEmail(email) {

        this.email = email;
    }

    /**
     * compare la taille d'une chaine de caractère par rapport à sa limite
     * renvoie un booléen en fonction du résultat
     * 
     * true: limite dépassée
     * false: limite non atteinte
     * 
     * @param {*} limit : corresponds à la limite du nombre de caractère
     * @param {*} comparison : corresponds au string analysé
     */
    stringLength(limit, comparison) {

        let output = false;

        if (comparison.length > limit) {

            output = true;
        }

        return output;
    }

    /**
     * renvoie une liste de string à la taille correspondante
     * transforme le string en tableau en comptant les caractères puis reforme un string
     * 
     * renvoie un string
     * 
     * @param {*} limit : corresponds à la limite du nombre de caractère
     * @param {*} comparison : corresponds au string analysé
     */
    stringSlice(limit, comparison) {

        let output = "";

        let split = comparison.split("", limit);
        output = split.join('');
        
        return output;
    }
}

module.exports.user = user;