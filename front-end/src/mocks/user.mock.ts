import { User,TimeToAnswer } from '../models/user.model';

export const Users: User[] = [
    {
        id: "1",
        prenom: "Pierre",
        nom: "Paul",
        identifiant : "Pieropaul",
        motDePasse : "pastis51",
        status: "user"
    },
    {
        id: "2",
        prenom: "Frederic",
        nom: "Rallo",
        identifiant : "frallo",
        motDePasse : "ihm",
        status: "staff"
    },
    {
        id: "3",
        prenom: "Albert",
        nom: "Oranj",
        identifiant : "Albertor",
        motDePasse : "ricard",
        status: "user"
    },
    {
        id: "4",
        prenom: "Lou",
        nom: "Paul",
        identifiant : "loupaul",
        motDePasse : "poney",
        status: "familly"
    }
];

export const PierreTime: TimeToAnswer[] = [
    {
        id :"1",
        time : new Date(0,0,0,0,2,15)
    },
    {
        id :"2",
        time : new Date(0,0,0,0,1,27)
    },
    {
        id :"3",
        time : new Date(0,0,0,0,0,49)
    },
    {
        id :"4",
        time : new Date(0,0,0,0,2,3)
    }
];