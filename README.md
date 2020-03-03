# POC back-end Simplon



![poc](https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2015/07/messagerie-instantanee-travers-le-monde-770x577__w770.jpg)



* Auteur du projet: François M. 	
* Contexte: Parcours développeur web et mobile / simplon
* Date: 02/03/20

* Version: 0.1
* Etat du projet: En cours
-----------------

## Résumé du projet:


Ce projet est une API Rest qui propose des fonctionnalités pour une application web de discussion instantané. Elle respecte 3 niveaux de maturité du modèle de Richardson.



## Langages & librairies utilisées:

* Node.js version 12.13.1

* Librairies: ExpressJS, MySQL, Body-Parser, Nodemon, Mocha


## Qualité du code

* A venir


## Installation du projet:

- Récupérer le repository à l'aide de gitclone

- Commencer créer une base de données nommée "messagerie" 

- Importer le data SQL

- Depuis l'éditeur de code, mettre à jour l'accès à la base de données depuis ``` config/connexion.js ```

- Utiliser la commande ``` npm install ``` pour récupérer les différents modules

- Lancer ``` nodemon app ```

- Le projet est prêt à l'emploi!

## Fonctionnalités:

Cette API propose deux types de ressources: 

* Messages: CRUD de cette ressource

* Users: Création et suppression de cette ressource


## Fonctionnement de l'API:

/

## Ressources disponibles

## Utilisation

L'API propose de consulter messages et users. En dehors des requêtes GET, vous recevez une réponse coté serveur à chaque fois.

En cas de réussite:

```json 
{
  'response': "success"
  }
```

En cas d'échec:

```json 
{
  'response': "failed"
  }
```

### Créer un message

Adresse: 
 ```  /message  ```
 

Méthode: ``` POST ``` 


Body envoyé:

```json
    {
        "id": 1,
        "username": "falseusername",
        "content": "test"
    
```

### Lire les messages

Adresse: 
 ```  /message  ```
 

Méthode: ``` GET ``` 

Réponse:

```json
[
    {
        "id": 1,
        "username": "falseusername",
        "content": "test"
    }, ...
```

### Mettre à jour un message

Adresse: 
 ```  /message  ```
 

Méthode: ``` PUT ``` 


Body envoyé:

```json
    {
        "id": 1,
        "username": "falseusername",
        "content": "test"
    
```

### Supprimer un message

Adresse: 
 ```  /message  ```
 

Méthode: ``` DELETE ``` 


Body envoyé:

```json
    {
        "id": 1,
        "username": "falseusername",
        "content": "test"
    
```

### Créer un user


Adresse: 
 ```  /user  ```
 

Méthode: ``` POST ``` 


Body envoyé:

```json
    {
        "username": "falseusername",
        "password": "test",
        "email": "fake@test.fr"
    
```

### Supprimer un user


Adresse: 
 ```  /user  ```
 

Méthode: ``` DELETE ``` 


Body envoyé:

```json
    {
        "id": 1,
        "username": "falseusername",
        "password": "test",
        "email": "fake@test.fr"
    
```

### Connexion

Feature en cours

-----------------

### Mises à jour:

- Création du projet: 25/11/19
- Installation des différents bundles + mise à jour du README: 26/11/19
- Mises à jour diverses: 31/01/20


