# Rapport du PS6

# Partie 1 : Personas et scénarios

### Persona 1 : Pierre Oranje
**Age** : 76 ans 
___

#### Présentation :
Pierre est un ancien travailleur du bâtiment. A de nombreuse reprise, par le passé, il à 
travailler en heure supplémentaire afin de rattraper les différents retards des projets. 
    Ces différentes  heures  supplémentaires  ont  causé  de  multiple  AVC  et  entrainé  une 
démence vasculaire. Pierre souffre donc d’une perte de quelques fonctions cognitives. 
___
#### Relation  à  la  technologie  :
Pierre  n’a  pas  de  connaissance  dans  les  domaines  technologiques.  Les concepts de connexion, site web, périphériques sont assez abstraits pour lui. 
___
#### Tâches avec l’application :
Pierre  souhaiterais  limiter  la  perte  des  capacités  cognitives  dans  le  futur voire essayer de retrouver des capacités perdu. Le quizz est dès lors un moyen d’entrainer les 
capacités  cognitives  de  Pierre  tout  en  s’amusant.  De plus,  la  personnalisation  des  questions  permet de renforcer l’efficacité du quizz en stimulant des souvenirs forts.
____
### Persona 2 : Alice Gomez
Age : 32 ans. 
___ 
#### Présentation  : 
Alice est enseignante en école primaire et elle aime  bien  aider  son  prochain. En tant qu’enseignante, elle est bienveillante, sociable et sait s’occuper des enfants. Elle est la fille d'un patient. Lors  d’un  repas  de  famille,  le  père  d’Alice eut  un  AVC.  Il  souffre maintenant d’une démence vasculaire. Il a donc principalement des troubles de mémoire qui lui posent  problème  pour  la  vie  quotidienne
___
#### Relation à la technologie : 
Alice est capable d’utiliser un ordinateur correctement comme la plupart des  gens  de  son  âge.  Elle  possède  des  connaissances  basiques  pour  une  utilisation  journalière  et pratique de la technologie. 
___
#### Tâches avec  l’application  :
Alice  rends visite à son père pendant son  temps  libre et l’aide à combattre sa maladie en lui faisant travailler par exemple sa mémoire. Le quizz est par conséquent une activité ludique qu’ils peuvent faire ensemble et qui aide le père à combattre sa maladie.
___
### Persona 3 : André Bouchard
Age: 80 ans. 
___
#### Présentation :
ancien prof d'histoire géographie au collège, maintenant à la retraite. Suite  à un AVC survenu 4 ans plus tôt, André souffre de  démence vasculaire. Même s'il souffre d'une légère perte de mémoire, ses principaux symptômes sont un trouble majeur de l'attention ainsi qu'une capacité de réflexion ralentie.
___
#### Relation à la technologie
André avait un ordinateur chez lui et sa famille lui avait offert une tablette pour qu'il puisse prendre des photos et les regarder. il est donc plutôt à l'aise avec la technologie et en particulier les tablettes.
___
#### Tache avec l'application

André  aimerait pouvoir faire travailler son cerveau pour que ses capacités cognitives ne chutent pas.
___
### Persona 4 : Joelle Boekhe
Age: 30 ans 
___
#### Présentation:
Joelle est une aide qui travaille dans un EHPAD. elle veut soigner ses patients du mieux possible et elle est trés motivée. Ceci étant dit elle est aussi trés fatigué. 
___
#### Relation à la technologie 
Joelle est une femme qui vit avec son temps elle est trés à l'aise avec la technologie, elle a un smartphone depuis 2012. et elle a été entrainée pendant ses études à utiliser les outils informatiques 
___
#### Tache avec l'application
Joelle voudrait pouvoir permettre a ses patients de faire une chose ludique, adaptée à leurs problème. 

___
## Scenarios :

Les scénarios suivants sont numérotés dans l'ordre d'exécution. Certains sont nécessaires afin que d'autres marchent comme par exemple crée un certain quizz qu'un autre persona jouera derrière. Cela évite des problèmes comme un quiz ou un utilisateur n'étant pas dans la base de donnéee.
___
### Scénario 1 : 
Joelle veux se connecter à son compte. Cependant, lorsqu'elle rentré son mot de passe, elle se rends compte que ce n'est pas le bon. Elle veut donc le retrouver pour pouvoir se connecter. Une fois connecté, elle va vouloir créer un quiz composé uniquement de question Classiques et Order.
___
### Scénario 2 : 
-Pierre veut jouer un quiz spécifique qu'il avait vu auparavant, il va dans la sélection de quiz et il choisit le quiz de culture générale "Connaissances Globales".
___
### Scénario 3 :
André ne veut pas se prendre la tête, il veut juste jouer un quiz aléatoire sans se prendre la tête.
___
### Scénario 4 :
Alice, fille de Leonel Gomez veut crée le compte pour son père. Elle va ensuite tester que ses identifiants fonctionnent bien. 
Elle souhaite personnaliser les paramètres pour son père, et va tester cela en jouant un quiz aléatoire.
___
# Partie 2 : Scénario de tests et mise en place

## Tests automatiques

### Choix d'implémentation :

Nous avons décidé d'effectuer plusieurs tests afin de couvrir les différentes fonctionnalités que nous avons implémenté. Voici nos fonctionnalités ainsi que les tests qui correspondent :

- Connexion : Scénario 1; Joelle, aide soignante veut se connecter afin de pouvoir créer un quiz personnalisé pour son patient. Elle se trompe de mot de passe et veut le retrouver. On test donc ici la connexion avec un mauvais mot de passe ainsi que la récupération d'un mot de passe. Une fois le mot de passe récupéré, Joelle réussira à se connecter et pourra vérifier qu'elle est bien sur son compte à l'accueil en lisant le message "Bienvenue JoelleB"

- Inscription : Scénario 4, Alice inscrit son père sur le site. Ce test est important car il permet de tester si on peut bien ajouter un utilisateur à notre base de données. On va tester cette création par la suite en se connectant avec l'identifiant et le mot de passe utilisé. Si tout se passe bien, on se retrouve normalement sur la page d'accueil avec un message d'accueil "Bienvenue LeonelG" 

- Jouer un quiz : Scénario 2,3; On test ici les différentes questions que nous avons implémenté ainsi que les bonnes et mauvaises réponses. On attends un certains score selon le quiz effectué pour bien vérifier par exemple que le score sera le même.  

- Créer un quiz : Scénario 2; après s'être connectée, Joelle va crée un quiz composé de questions classiques et order. (Test des questions analyse et puzzle non implémenté car non fonctionnelle avec le lien du back à cause du stockage d'image)
On va ensuite vérifier dans la liste des quizz que le quiz est bien ajouté puis le jouer afin de vérifier que les questions sont bien les bonnes avec les réponses correctes. On va par exemple vérifier que la bonne réponse est bien entourée en vert ou l'inverse pour une réponse fausse. On définit certaines réponses juste et fausses et on attends un score précis qu'on vérifie.


- Paramétrer pour un utilisateur : Scénario 5; Alice personnalise les paramètres, cela change certaines fonctionnalités du quiz que nous allons vérifier après en jouant à un quiz aléatoire et en vérifiant que cela a bien été appliqué. On va par exemple désactiver l'animation liée aux questions puis vérifier cela en localisant la question.
___
### Pour résumer :

Nous avons décidé en priorité de tester la prise en compte de trouble c'est à dire le changement qu'effectuent nos paramètres avancés sur les quiz que nous jouons.

Cependant, pour cela il nous fallait d'abord crée un quiz afin de bien pouvoir le tester. Une fois que nous avons pu effectuer ces tests, nous avons fini par implémneter les tests de connexions afin de bien vérifier que cette partie du site marche.

### Recul :

Finalement, nous avons pu tester la majorité des fonctionnalités du site. Cependant, certaines parties n'ont pas pu être testés par difficulté technique.
On peut citer par exemple : 
- Les questions de type puzzle : résoudre un puzzle en faisant un drag and drop est trop compliqué à tester
- Les questions de type chronologique : même problème que puzzle avec le drag and drop
- Création de questions puzzle : On importe un fichier local mais dur à tester car les fichiers locaux dépendent donc de la machine sur laquelle le test est effectué

Ce sont des tests qu'il aurait été important d'implémenter car ce sont les questions les plus difficiles à coder et donc les plus à même à rencontrer des problèmes. Cependant par manque de temps et de maîtrise technique, il nous a été conseillé d'abandonner de tester ces fonctionnalités.
___

# Partie 3 : Présentation de l'évaluation coopérative

## Tests utilisateurs

### Retours et analyse

IL FAut REGARDER LA DIAPO ET NE UTILISER LES TERMES TECHNIQUES

#### Retours : 

Nous avons eu plusieurs retours à propos de l'apparence de notre site. Ainsi, nous avons décidé de changer plusieurs éléments que nous avions pensé pour la maquette pour les raisons suivantes :
- Changement du Fond : Choix entre fond clair et fond sombre selon la préférence de l'utilisateur
- Changement de Police : Implémentation du choix de la police 
- Boutons Activer/Désaciver : 
- Refactor de l'anglais au français :
- Changement du Pop-up d'inactivité : Implémentation des 3 boutons Réessayer/Passer/Quitter
- 
- A méditer ?

# Partie 4 : Conclusion 

# Annexe

## Répartition des tâches 


Guillaume Arrigoni:
- Logique pour questions de type puzzle
- Système de connexion
- Paramètres avancés et logique appliqués au quiz
- Deletion de quiz ou d'utilisateurs
-
-
-
-
Drid Loris :
- SCSS global
- Implémentation et prise en compte des retours
- Test paramètres/jeux/création quiz
- Animation trouble tels que le Pop-up, animations questions/réponses, Chronomètre
- 
-
Tho Romain :
- Formulaire de création de quiz et de questions
- API back-end
- Tests connexion/inscription
- Lien front/back-end
- Jouer quiz/résultats
Benziane Swann :
- Lien front/back-end
- Docker
- Logique pour questions de type Chronologique/analyse
- Jouer quiz

Le reste du projet a été développé en collaboration, en incluant des aspects tels que la logique de jeu, le routing et l'architecture générale. Ces éléments ont été créés conjointement en utilisant une approche collaborative pour assurer une mise en œuvre cohérente et efficace du site ZQSD.


## Bibliographie

Liste des sites consultés :
- StackOverflow
- ChatGPT
- Docker.com
- Angular.io
- https://lms.univ-cotedazur.fr/2022/course
- https://github.com/NablaT/ps6-correction-td1-td2-v2
- https://github.com/NablaT/starter-ps6-full-stack
-
-
-
