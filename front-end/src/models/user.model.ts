

//model for each user

export interface User {
    id: string; //id of the user in the database
    prenom: string;
    nom: string;
    identifiant : string; //id to log in
    motDePasse : string;
    status: string;
}