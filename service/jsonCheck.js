/**
 * verifie les données passées dans le body de la requête http
 * 
 * @author : Francois Macko
 */
class jsonCheck {

    constructor() {

    }

    /**
     * verifie si des données existent dans le body
     * renvoie un booleen en fonction du résultat
     * 
     * false: aucune data n'est présente dans le body
     * true: des datas existent
     * 
     * @param {*} body : variable qui sera vérifiée, corresponds à req.body
     */
    content(body) {
        
        let output = false;

        if (body !== null) {

            output = true;
        }
        return output;
    }
}

module.exports.jsonCheck = jsonCheck;
