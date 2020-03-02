// Revenir plus tard pour factoriser les méthodes de vérification

/**
 * contrôle les donées dans le body de la requête http
 * 
 * @param {*} templateSelected : corresponds à la réference
 * @param {*} content : corresponds aux datas analysées
 */
class contentCheck {

    templates = { 'message': ['id', 'username', 'content'], 'user': ['id', 'username', 'password', 'email'] }; // tableau des clés associés aux valeurs d'un objet
    selected = "";      // template sélectionné, récupéré à la construction
    content = null;         // body du json, récupéré à la construction

    constructor(selected, content) {

        this.setSelected(selected);
        this.setContent(content);
    }

    // méthodes getters et setters
    getSelected() {

        return this.selected;
    }

    setSelected(selected) {

        this.selected = selected;
    }

    getContent() {

        return this.content();
    }

    setContent(content) {

        this.content = content;
    }

    /**
     * effectue une série de vérification sur les datas avec le template user
     * 
     * valeur de base: true
     * si une des conditions n'est pas remplie, la valeur passe en false
     */
    checkUser() {

        console.log("entrée check user");

        let output = false;

        if (this.checkSelected()) {

            console.log("passage condition checkselected");

            output = true;
            /*
            if (this.value(this.content.id, "number", null) == false) {

                output = false;
            } */ if (this.value(this.content.username, "string", null) == false) {

                output = false;
            } if (this.value(this.content.password, "string", null) == false) {

                output = false;
            } if (this.value(this.content.email, "string", "email") == false) {

                output = false;
            }
        }
        return output;
    }

    /**
     * effectue une série de vérification sur les datas avec le template message
     * 
     * valeur de base: true
     * si une des conditions n'est pas remplie, la valeur passe en false
     */
    checkMessage() {

        let output = false;

        if (this.checkSelected()) {

            output = true;
 
            if (this.value(this.content.username, "string", null) == false) {

                output = false;

            } if (this.value(this.content.content, "string", null) == false) {

                console.log("here");
                output = false;
            } 
        }
        return output;
    }


    /**
     * vérifie si le template sélectionné existe dans le tableau
     * 
     * valeur de base false
     * si les données correspondent, la valeur de retour passe à true
     */
    checkSelected() {

        let output = false;
        let template = null;

        for (template in this.templates) {

            if (this.selected == template) {

                output = true;
                break;
            }
        }
        return output;
    }

     /**
     * vérifie le type de la variable en fonction du type et de sa specification
     * 
     * valeur de base false
     * si les données correspondent, la valeur de retour passe à true
     * 
      * @param {*} testValue : valeur qui sera vérifiée
      * @param {*} type  : type de valeur attendue (string, number, booleen etc..)
      * @param {*} specification : specification ( email, numéro de tél ..)
      */
    value(testValue, type, specification) {

        let output = false;

        if (typeof (testValue) === type) {

            if (specification == null) {

                output = true;
            }
            if (specification == "email") {

                if (testValue.includes('@')) {

                    output = true;
                }
            }
        }
        return output;
    }
}

module.exports.contentCheck = contentCheck;
