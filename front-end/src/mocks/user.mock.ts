import { User,TimeToAnswer } from '../models/user.model';

export const Users: User[] = [
    {
        id: "1",
        prenom: "pierre",
        nom: "paul",
        identifiant : "Pieropaul",
        motDePasse : "pastis51",
        status: "user"
    },
    {
        id: "2",
        prenom: "frederic",
        nom: "rallo",
        identifiant : "frallo",
        motDePasse : "ihm",
        status: "staff"
    },
    {
        id: "3",
        prenom: "albert",
        nom: "oranj",
        identifiant : "Albertor",
        motDePasse : "ricard",
        status: "user"
    },
    {
        id: "4",
        prenom: "lou",
        nom: "paul",
        identifiant : "loupaul",
        motDePasse : "poney",
        status: "familly"
    },
    {
        id: "5",
        prenom: "Default",
        nom: "Default",
        identifiant : "Default",
        motDePasse : "Default",
        status: "user"
    },
    {
      id: "6",
      prenom:"Joelle",
      nom:"Bekhe",
      identifiant:"JoelleB",
      motDePasse:"123456",
      status:"staff"
    },
    {
      id: "7",
      prenom:"Admin",
      nom:"Admin",
      identifiant:"Admin",
      motDePasse:"Admin",
      status:"Admin"
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
