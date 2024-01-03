
L'objectif de ce projet était de créer un jeu pour permettre a des patients en Hepad souffrant de certains problèmes liés à l'age (dans notre cas la démence vasculaire) d'avoir un moment ludique en adaptant les jeux à leur maladie. 
le projet a été terminé mais nous avions après tenté de le dockerisé et avons eu des problèmes dans ce travail. 


# Votre Readme doit au minimun contenir:

## Le statut lors de la livraison :
- Étape 1 : Done
- Étape 2 : Done
- Étape 3 : Commencée mais pas fonctionnelle
- Étape 4 : pas commencée 

## Les healthchecks utilisées par chaque service

les services de front font des healthcheck sur le back toutes les dix secondes et c'est le seul healthcheck qu'on fait actuellement



## L'utilisateur avec lequel chaque service tourne

tous nos services tournent avec l'utilisateur node inclut dans l'image node alpine


## Une explication sur les services accessibles et les urls (si vous avez choisi à l'étape 4 un domaine local de test par exemple) /ports

dans le compose de production il y a deux services, front-end et back-end et ils sont respectivement disponible sur http://front-end:8080 et http://back-end:8000. le service front end permet d'avoir accès au site web et le service back-end s'occupe de toutes les requetes vers la base de donnée qui est en volume 

dans le compose de test  il y a il y a trois services,les deux premiers sont, comme dans la production,front-end et back-end et ils sont respectivement disponible sur http://front-end:8580 et http://back-end:8500. J'ai décidé de changer leurs numéros de ports pour pouvoir faire tourner test et production en meme temps. il y a aussi un servce appelé playwright mais il ne s'expose pas vraiment il écrit juste ses résultats dans un volume du projet.




Vous pouvez ajouter toute explication qui vous semble pertinente si vous deviez livrer cette partie à une équipe en charge de la maintenir. Par exemple : des scripts utilisés pour de la configuration qui n'auraient pas été présentés durant le cours.
