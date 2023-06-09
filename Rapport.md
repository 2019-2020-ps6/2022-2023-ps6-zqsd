# Rapport PS6

# ZQSD : Soutien interactif pour la démence vasculaire

ZQSD est un site web dédié au soutien des patients atteints de démence vasculaire, qui a pour conséquences des problèmes de mémoire, de concentration et de capacités de raisonnement. Le site offre une variété d'activités basées sur quatre types de questions : Classique, Analyse, Puzzle et Chronologique. Les utilisateurs peuvent se connecter, jouer à des quiz aléatoires ou spécifiques, ainsi que créer leurs propres quiz.

Le site propose des paramètres avancés qui permettent d'adapter l'expérience utilisateur en fonction des besoins et des handicaps de chaque individu. Ces paramètres permettent de personnaliser différentes caractéristiques du site.

# Partie 1 : Personas et scénarios

### Persona 1 : Pierre Oranje
**Age** : 76 ans 
___

#### Présentation :
Pierre est un ancien travailleur du bâtiment. À de nombreuse reprises il a fait des heures supplémentaires afin de rattraper les différents retards des projets, ce qui lui a  causé  de  multiple  AVC  et  entrainé  une démence vasculaire. Pierre souffre donc d’une perte de quelques fonctions cognitives.
___
#### Relation  à  la  technologie  :
Pierre  n’a  pas  de  connaissances  dans  les  domaines  technologiques.  Les concepts de connexion, site web, périphériques sont assez abstraits pour lui. 
___
#### Tâches avec l’application :
Pierre  souhaiterait  limiter  la  perte  des  capacités  cognitives  dans  le  futur voire essayer de retrouver des capacités perdues. Le quiz est donc un moyen d’entrainer les 
capacités  cognitives  de  Pierre  tout  en  s’amusant.  De plus,  la  personnalisation  des  questions  permet de renforcer l’efficacité du quiz en stimulant des souvenirs forts.
____
### Persona 2 : Alice Gomez
Age : 32 ans. 
___ 
#### Présentation  : 
Alice est enseignante en école primaire et elle aime aider  son  prochain. En tant qu’enseignante, elle est bienveillante, sociable et sait s’occuper des enfants. Elle est la fille d'un patient. Lors  d’un  repas  de  famille,  le  père  d’Alice eut  un  AVC.  Il  souffre maintenant d’une démence vasculaire. Il a donc principalement des troubles de mémoire qui lui posent  problème  pour  la  vie  quotidienne.
___
#### Relation à la technologie : 
Alice est capable d’utiliser un ordinateur correctement comme la plupart des  gens  de  son  âge.  Elle  possède  des  connaissances  basiques  pour  une  utilisation  journalière  et pratique de la technologie. 
___
#### Tâches avec  l’application  :
Alice  rend visite à son père pendant son  temps  libre et l’aide à combattre sa maladie en lui faisant travailler par exemple sa mémoire. Le quiz est par conséquent une activité ludique qu’ils peuvent faire ensemble et qui aide le père à combattre sa maladie.
___
### Persona 3 : André Bouchard
Age: 80 ans. 
___
#### Présentation :
Ancien prof de musique au collège, maintenant à la retraite. Suite à un AVC survenu 4 ans plus tôt, André souffre de  démence vasculaire. Même s'il souffre d'une légère perte de mémoire, ses principaux symptômes sont un trouble majeur de l'attention ainsi qu'une capacité de réflexion ralentie.
___
#### Relation à la technologie
André avait un ordinateur chez lui et sa famille lui avait offert une tablette pour qu'il puisse prendre des photos et les regarder. il est donc plutôt à l'aise avec la technologie et en particulier les tablettes.
___
#### Tache avec l'application

André  aimerait pouvoir faire travailler son cerveau pour que ses capacités cognitives ne chutent pas. Il veut pouvoir jouer en essayant de rester concentré le plus possible.
___
### Persona 4 : Joelle Boekhe
Age: 30 ans 
___
#### Présentation:
Joelle est une aide qui travaille dans un EHPAD. elle veut soigner ses patients du mieux possible et elle est très motivée. Ceci étant dit elle est aussi trés fatiguée. 
___
#### Relation à la technologie 
Joelle est une femme qui vit avec son temps elle est très à l'aise avec la technologie, elle a un smartphone depuis 2012. et elle a été entrainée pendant ses études à utiliser les outils informatiques.
___
#### Tache avec l'application
Joelle voudrait pouvoir permettre a ses patients de faire des exercices ludique, adaptés à leurs symptomes. 

___
## Scenarios :

Les scénarios suivants sont numérotés dans l'ordre d'exécution. Certains sont nécessaires afin que d'autres marchent comme par exemple créer un certain quiz qu'un autre persona jouera derrière. Cela évite des problèmes comme un quiz ou un utilisateur n'étant pas dans la base de donnéee.
___
### Scénario 1 : 
Joelle veux se connecter à son compte. Cependant, lorsqu'elle rentré son mot de passe, elle se rends compte que ce n'est pas le bon. Elle veut donc le retrouver pour pouvoir se connecter. Une fois connecté, elle va vouloir créer un quiz composé uniquement de question Classiques, un autre composé de questions chronologique et classique, et un uniquement composé de questions analyse.
___
### Scénario 2 : 
Pierre veut jouer un quiz spécifique qu'il avait vu auparavant, il va dans la sélection de quiz et il choisit le quiz "Astérix" car il est aime les BD.
___
### Scénario 3 :
André joue un quiz au hasard, puis se rend compte qu'il n'y a pas de musique, et que le texte est trop petit. Il va donc configurer les paramètres et aller rejouer le quiz.
___
### Scénario 4 :
Alice, fille de Leonel Gomez veut créer le compte pour son père. Elle va ensuite tester que ses identifiants fonctionnent bien. 
Elle souhaite personnaliser les paramètres avancés pour son père, et va tester cela en jouant un quiz aléatoire.
___
# Partie 2 : Scénario de tests et mise en place

## Tests automatiques

### Choix d'implémentation :

Nous avons décidé d'effectuer plusieurs tests afin de couvrir les différentes fonctionnalités que nous avons implémenté. Voici nos fonctionnalités ainsi que les tests qui correspondent :

- Connexion : Scénario 1. Joelle, aide soignante veut se connecter afin de pouvoir créer un quiz personnalisé pour son patient. Elle se trompe de mot de passe et veut le retrouver. On test donc ici la connexion avec un mauvais mot de passe ainsi que la récupération d'un mot de passe. Une fois le mot de passe récupéré, Joelle réussira à se connecter et pourra vérifier qu'elle est bien sur son compte à l'accueil en lisant le message "Bienvenue JoelleB".

- Créer un quiz : Scénario 1. Après s'être connectée, Joelle va créer un quiz composé de questions classiques et order. (Test des questions analyse et puzzle non implémenté car non fonctionnelle avec le lien du back à cause du stockage d'image). On va ensuite vérifier dans la liste des quiz que le quiz est bien ajouté. 

- Jouer un quiz : Scénario 2. On lance un quiz parmis la liste des quiz, on joue les différentes questions et on vérifie lors des résultats que le score affiché correspond bien au score qu'on est supposé avoir par rapport aux réponses sélectionnées lorsque le quiz est joué.

- Paramètres : Scénario 3. On lance un quiz au hasard, puis on va dans les paramètres pour changer par exemple la musique ou encore la taille du texte. On retourne sur le quiz joué et on vérifie que les changements dans les paramètres sont bien effectifs.

- Inscription : Scénario 4. Alice inscrit son père sur le site. Ce test est important car il permet de tester si on peut bien ajouter un utilisateur à notre base de données. On va tester cette création par la suite en se connectant avec l'identifiant et le mot de passe utilisé. Si tout se passe bien, on se retrouve normalement sur la page d'accueil avec un message d'accueil "Bienvenue LeonelG".

- Paramètres avancés: Scénario 4. Alice personnalise les paramètres, cela change certaines fonctionnalités du quiz que nous allons vérifier après en jouant à un quiz aléatoire et en vérifiant que cela a bien été appliqué. On va par exemple activer l'animation liée aux questions, ou aux réponses, changer la police ou encore mettre le texte en majuscule, puis vérifier que ces changements sont bien effectifs quand un quiz est joué.
___
### Pertinance des tests :
Dans tous les tests effectués, nous nous assurons de vérifier la pertinence et le bon fonctionnement des fonctionnalités testées dans des scénarios end-to-end. Cela garantit que les modifications apportées à ces fonctionnalités ne compromettent pas leur bon fonctionnement lorsqu'elles sont utilisées dans le contexte réel de l'application.

Par exemple, prenons le test où nous activons le texte en majuscule. Après avoir activé l'option dans les paramètres, nous jouons un quiz pour vérifier si le texte est réellement en majuscule lorsqu'il est affiché à l'utilisateur. Cette approche de test end-to-end nous permet de valider le bon fonctionnement de la fonctionnalité dans le contexte global de l'application.

En incluant ces tests end-to-end dans notre processus de test, nous nous assurons que les fonctionnalités répondent aux exigences fonctionnelles et offrent une expérience utilisateur cohérente. Cela renforce la qualité et la fiabilité de l'application, en garantissant que les fonctionnalités ne se limitent pas à une validation unitaire isolée, mais sont testées dans des conditions réelles d'utilisation.

Cependant, il y a quand même quelques tests qui posent problème pour cette vérification end-to-end, notamment la musique car c'est assez compliqué de vérifier si la musique est joué car on a pas accès aux variable dans les services qui pourraient indiquer que le quiz est bien joué.


___
### Recul :

Finalement, nous avons pu tester la majorité des fonctionnalités du site. Cependant, certaines parties n'ont pas pu être testés par difficulté technique.
On peut citer par exemple : 
- Les questions de type puzzle : résoudre un puzzle en faisant un drag and drop est trop compliqué à tester
- Les questions de type chronologique : même problème que puzzle avec le drag and drop
- Création de questions puzzle : On importe un fichier local mais dur à tester car les fichiers locaux dépendent donc de la machine sur laquelle le test est effectué

Ce sont des tests qu'il aurait été important d'implémenter car ce sont les questions les plus difficiles à coder et donc les plus à même à rencontrer des problèmes. Cependant par manque de temps et de maîtrise technique, il nous a été conseillé d'abandonner de tester ces fonctionnalités.

Enfin, nous nous sommes aperçus bien trop tard que même si nos tests automatiques fonctionnaient tous quand on les lancaient de manière isolée, il y avait un problème lorsque on a rassemblé ces tests pour en faire les scénarios définis auparavant. En effet, nos tests ne sont pas entièrement indépendants, par exemple un test créé dans le scénario 1 est joué dans le scénario 2, le problème étant que quand les tests des scénarios sont lancés, ils sont exécutés en parallèle donc le quiz censé être joué dans le scénario 2 n'existe pas encore car il est en train d'être créé dans le scénario 1. Par manque de temps, nous avons donc choisi de rassembler les 4 scénarios test dans un gros test, pour qu'ils puissent s'executer les uns après les autres.
___

# Partie 3 : Présentation de l'évaluation coopérative

## Tests utilisateurs

### Retours et analyse



#### Retours : 

Nous avons eu plusieurs retours lors de l'évaluation croisée faite par Virginie. Grâce à cela, nous avons pu améliorer plusieurs éléments :
- Couleur du texte adaptative: En fonction du mode sombre ou clair du fond d'écran, le texte des paramètres est affiché avec une couleur qui vient contraster avec le fond pour plus de lisibilité.
- Changement de Police : Implémentation du choix de la police, qui est appliquée dans les questions et le texte des réponses. 
- Changement de Police : Implémentation du choix de la police, qui est appliquée dans les questions et le texte des réponses.
- Boutons Activer/Désactiver : Originalement les boutons n'étaient pas clair car il était marqué "Activer/Désactiver". Maintenant le texte des boutons indiquent l'action qui sera executée lorsque le bouton sera cliqué.
- Refactor de l'anglais au français : Certains boutons étaient en anglais, ils ont été passés en français pour plus de cohérence.
- Changement du Pop-up d'inactivité : Au lieu d'avoir simplement un pop-up qui demande si l'utilisateur est toujours présent, il propose désormais soit de quitter le quiz et donc de revenir au menu, soit d'essayer à nouveau la question ce qui réinitialise le compte à rebours, ou alors de passer à la question suivante.
- 
- Bien sur, d'autres fonctionnalités ont été ajouté sans avoir été mentionées dans les retours, par exemple le fait d'avoir une possiblité de lancer une démonstration de la musique sélectionnée en restant dans les paramètres, les phrases de la page résulat qui s'adaptent en fonction du score, ou encore l'ajout de texte cliquable en plus des émoticones pour la barre de navigation après avoir observé une certaine tendance à vouloir par exemple cliquer d'abord sur le texte "Paramètres" plutôt que sur l'émoticone des paramètres lors de l'évaluation croisée. Pour résumer, beaucoup de retours ont été implémentés, ces retours sont certes dans la majorités des cas des détails et non des réels problèmes, mais ils permettent de fluidifier l'expérience utilisateur sur le site et de dissiper certains doutes potentiels lors de l'utilisation.

#### Analyse : 

# Partie 4 : Conclusion 

# Annexe

## Répartition des tâches 


Arrigoni Guillaume:
- Logique pour questions de type puzzle
- Système de connexion
- Paramètres avancés et logique appliqués au quiz
- Semaine à plein temps : Suppression de quiz ou d'utilisateurs 
- 
-
Drid Loris :
- SCSS global
- Implémentation des retours fais à la suite de la vidéo, et après l'évaluation croisée.
- Traitement des trouble de l'attention avec le Pop-up, animations questions/réponses, chronomètre, musique.
- Semaine à plein temps : Tests paramètres/jeux/création quiz, explication de la pertinance des tests dans le rapport
-
Tho Romain :
- Formulaire de création de quiz et de questions
- API back-end
- Lien front/back-end
- Jouer quiz/résultats
- Semaine à plein temps : Tests connexion/inscription, majeure partie du rapport

Benziane Swann :
- Lien front/back-end
- Docker
- Logique pour questions de type Chronologique/analyse
- Jouer quiz
- Semaine à plein temps : Docker

Le reste du projet a été développé en collaboration, en incluant des aspects tels que la logique de jeu, le routing et l'architecture générale.
___
## Bibliographie

Liste des sites consultés :
- StackOverflow
- ChatGPT
- Docker.com
- Angular.io
- https://lms.univ-cotedazur.fr/2022/course
- https://github.com/NablaT/ps6-correction-td1-td2-v2
- https://github.com/NablaT/starter-ps6-full-stack
- https://www.msdmanuals.com/fr/accueil/troubles-du-cerveau,-de-la-moelle-%C3%A9pini%C3%A8re-et-des-nerfs/syndrome-confusionnel-et-d%C3%A9mence/d%C3%A9mence-vasculaire
- https://www.msdmanuals.com/fr/professional/troubles-neurologiques/syndrome-confusionnel-et-d%C3%A9mence/troubles-cognitifs-et-d%C3%A9mence-vasculaires
- https://autonome-a-domicile.com/demence-vasculaire/
- https://swissheart.ch/fr/maladies-et-urgences/maladies-de-c%C5%93ur-et-attaque-c%C3%A9r%C3%A9brale/d%C3%A9mence-vasculaire