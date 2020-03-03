var jwt = require('jsonwebtoken');
var messageRequest = require('../model/messageRequest');


//  fonctionnalité en pause

/**
 * service qui gère la connexion et déconnexion
 * permet la création de token et le décodage
 * 
 * @author : Francois Macko
 * 
 * @param {*} username : corresponds à l'username de l'utilisateur
 * @param {*} password : corresponds au mot de passe de l'utilisateur
 * @param {*} token : corresponds au token qui sera génré ou décodé
 */
class authentification {

    secretWord = "tumetrouveraspas";

    constructor(username, password, token) {

        this.setUsername(username);
        this.setPassword(password);
        this.setToken(token);
    }

    // méthodes getters et setters
    getUsername() {

        return this.username;
    }

    setUsername(username) {

        this.username = username;
    }

    getPassword() {

        return this.password;
    }

    setPassword(password) {

        this.password = password;
    }

    getToken() {

        return this.token;
    }

    setToken() {

        this.token = token;
    }

    connexion() {

        let service = {
            'messageRequest': new messageRequest.messageRequest()
        };
        //let token = jwt.sign({ foo: 'bar' }, 'shhhhh');




    }

    decode() {

    }
}

module.exports.authentification = authentification;
