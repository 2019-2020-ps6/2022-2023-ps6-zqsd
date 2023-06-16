import { test, expect } from '@playwright/test';
import {connexionPage, homepage} from 'e2e/e2e.config';

test.describe('test the connexion system', () => {

  //identifiant incorrecte
  test("wrong identifiant",async ({page}) =>{
    await page.goto(homepage);
    await page.locator("#header").getByText('Connexion').click()
    await page.locator("#connexion-name").fill("JoelleB")
    await page.locator("#connexion-password").fill("1234567")
    await page.getByRole('button',({name:"Connexion"}))
    expect(page.getByText('Le mot de passe est incorrect')).toBeTruthy()
    await page.waitForTimeout(3000)
  })

  test ("mdp oublié",async ({page}) =>{
    await page.goto(homepage);
    await page.locator("#header").getByText('Connexion').click()
    await page.getByRole('button', { name: 'Mot de passe oublié ?' }).click()
    await page.locator('#forgetpassword-surname').fill("Joelle")
    await page.locator('#forgetpassword-name').fill("Bekhe")
    await page.locator('#forgetpassword-id').fill("JoelleB")
    await page.getByRole('button', { name: 'Confirmer' }).click()

    expect(page.getByText('Votre mot de passe est')).toBeTruthy()
    expect(page.getByText('123456')).toBeTruthy()
    await page.waitForTimeout(3000)
    await page.getByRole('button', { name: 'Quitter' }).click()
    expect(page.url()).toBe(homepage);

  })


  //connexion de Joelle Boekhe et vérification de son statut
  test("existing user",async ({page}) =>{
    await page.goto(homepage);
    await page.locator("#header").getByText('Connexion').click()
    await page.locator("#connexion-name").fill("JoelleB")
    await page.locator("#connexion-password").fill("123456")
    await page.getByRole('button',({name:"Connexion"})).click()
    expect(page.url()).toBe(homepage);
    expect(page.getByText('Bienvenue Joelle')).toBeTruthy()
    await page.waitForTimeout(3000)
  })

  test('Créer un quiz Astérix', async ({ page }) => {
    await page.goto(homepage);
    await page.click('button.btn-liste');;

    const quizName = "Astérix";
    const quizItems = await page.$$('li.quizz-item');
    for (const quizItem of quizItems) {
      const h2Element = await quizItem.$('h2');
      if (h2Element) {
        const h2Text = await h2Element.textContent();
        if (h2Text === quizName) {
          console.log("Quiz déjà existant");
          await page.getByRole('listitem').filter({ hasText: 'AstérixThème: FilmJouerSupprimer' }).getByRole('button', { name: 'Supprimer' }).click();
          await page.getByRole('button', { name: 'Confirmer' }).click();
          console.log("Quiz supprimé")

        }
      }
    }
    let isDeleted = true;
    for (const quizItem of quizItems) {
      const h2Element = await quizItem.$('h2');
      if (h2Element) {
        const h2Text = await h2Element.textContent();
        if (h2Text === quizName) {
          isDeleted = false;
        }
      }
    }

    expect(isDeleted).toBeTruthy;

    await page.goto(homepage);
    await page.click('button.btn-creer');;



    const question1 = "Qui est le compagnon d'Astérix ?";
    const question2 = "Comment s'appelle le chien d'Astérix ?";
    const question3 = "Quel est le nom du druide du village ?";

    const answer1_1 = "Jules César";
    const answer1_2 = "Gragas";
    const answer1_3 = "Obélix";
    const answer1_4 = "Astérix";
    const answer2_1 = "Milou";
    const answer2_2 = "Idéfix";
    const answer2_3 = "Bill";
    const answer2_4 = "Rex";
    const answer3_1 = "Panoramix";
    const answer3_2 = "Kirkis";
    const answer3_3 = "Dumbledore";
    const answer3_4 = "Gandalf";

    const inputQuizName = await page.$('#name');
    await inputQuizName?.type(quizName);
    const inputValue = await inputQuizName?.inputValue();
    expect(inputValue).toBe(quizName);
    const themeOption = "Film";
    await page.selectOption('select[formControlName="theme"]',themeOption);
    await page.selectOption('#numberOfQuestions',"3");
    const typeSelector = 'button:has-text("Classique")';
    const typeButton = await page.$(typeSelector);
    await typeButton?.click();

    const inputQuestionName = await page.getByLabel('Question :');
    const inputAnswer1 = await page.locator('app-createquestion form div').filter({ hasText: 'Réponse 1 : Vrai Faux' }).getByRole('textbox');
    const inputAnswer2 = await page.locator('app-createquestion form div').filter({ hasText: 'Réponse 2 : Vrai Faux' }).getByRole('textbox');
    const inputAnswer3 = await page.locator('app-createquestion form div').filter({ hasText: 'Réponse 3 : Vrai Faux' }).getByRole('textbox');
    const inputAnswer4 = await page.locator('app-createquestion form div').filter({ hasText: 'Réponse 4 : Vrai Faux' }).getByRole('textbox');
    const buttonVrai1 = await page.locator('app-createquestion form div').filter({ hasText: 'Réponse 1 : Vrai Faux' }).getByRole('button', { name: 'Vrai' });
    const buttonVrai2 = await page.locator('app-createquestion form div').filter({ hasText: 'Réponse 2 : Vrai Faux' }).getByRole('button', { name: 'Vrai' });
    const buttonVrai3 = await page.locator('app-createquestion form div').filter({ hasText: 'Réponse 3 : Vrai Faux' }).getByRole('button', { name: 'Vrai' });
    const buttonVrai4 = await page.locator('app-createquestion form div').filter({ hasText: 'Réponse 4 : Vrai Faux' }).getByRole('button', { name: 'Vrai' });
    const buttonFaux1 = await page.locator('app-createquestion form div').filter({ hasText: 'Réponse 1 : Vrai Faux' }).getByRole('button', { name: 'Faux' });
    const buttonFaux2 = await page.locator('app-createquestion form div').filter({ hasText: 'Réponse 2 : Vrai Faux' }).getByRole('button', { name: 'Faux' });
    const buttonFaux3 = await page.locator('app-createquestion form div').filter({ hasText: 'Réponse 3 : Vrai Faux' }).getByRole('button', { name: 'Faux' });
    const buttonFaux4 = await page.locator('app-createquestion form div').filter({ hasText: 'Réponse 4 : Vrai Faux' }).getByRole('button', { name: 'Faux' });
    const addQuestionSelector = 'button:has-text("Ajouter la question")';
    const nextQuestionSelector = 'button:has-text("Prochaine question")';
    const createQuizSelector = 'button:has-text("Créer le quiz")';
    const addQuestionButton = await page.$(addQuestionSelector);
    const nextQuestionButton = await page.$(nextQuestionSelector);
    const createQuizButton = await page.$(createQuizSelector);

    await inputQuestionName?.type(question1);
    await inputAnswer1?.type(answer1_1);
    await inputAnswer2?.type(answer1_2);
    await inputAnswer3?.type(answer1_3);
    await inputAnswer4?.type(answer1_4);
    await buttonFaux1?.click();
    await buttonFaux2?.click();
    await buttonVrai3?.click();
    await buttonFaux4?.click();
    await page.waitForTimeout(1000);
    await addQuestionButton?.click();
    await nextQuestionButton?.click();

    await typeButton?.click();
    await inputQuestionName.type(question2);
    await inputAnswer1?.type(answer2_1);
    await inputAnswer2?.type(answer2_2);
    await inputAnswer3?.type(answer2_3);
    await inputAnswer4?.type(answer2_4);
    await buttonFaux1?.click();
    await buttonVrai2?.click();
    await buttonFaux3?.click();
    await buttonFaux4?.click();
    await page.waitForTimeout(1000);
    await addQuestionButton?.click();
    await nextQuestionButton?.click();

    await typeButton?.click();
    await inputQuestionName?.type(question3);
    await inputAnswer1?.type(answer3_1);
    await inputAnswer2?.type(answer3_2);
    await inputAnswer3?.type(answer3_3);
    await inputAnswer4?.type(answer3_4);
    await buttonVrai1?.click();
    await buttonFaux2?.click();
    await buttonFaux3?.click();
    await buttonFaux4?.click();
    await page.waitForTimeout(1000);
    await addQuestionButton?.click();
    await createQuizButton?.click();

    await page.goto(homepage);
    await page.click('button.btn-liste');;

    let isPresent = false;
    const quizItemsAfterCreate = await page.$$('li.quizz-item');
    for (const quizItem of quizItemsAfterCreate) {
      const h2Element = await quizItem.$('h2');
      if (h2Element) {
        const h2Text = await h2Element.textContent();
        console.log(h2Text);
        if (h2Text === quizName) {
          isPresent = true;
        }
      }
    }
    expect(isPresent).toBeTruthy;

  });


  test('Créer un quiz démonstration avec une question chrnologique', async ({ page }) => {
    await page.goto(homepage);
    await page.click('button.btn-liste');;

    const quizName = "Organisation";
    const quizItems = await page.$$('li.quizz-item');
    for (const quizItem of quizItems) {
      const h2Element = await quizItem.$('h2');
      if (h2Element) {
        const h2Text = await h2Element.textContent();
        if (h2Text === quizName) {
          console.log("Quiz déjà existant");
          await page.getByRole('listitem').filter({ hasText: 'OrganisationThème: AutreJouerSupprimer' }).getByRole('button', { name: 'Supprimer' }).click();
          await page.getByRole('button', { name: 'Confirmer' }).click();
          console.log("Quiz supprimé")

        }
      }
    }
    let isDeleted = true;
    for (const quizItem of quizItems) {
      const h2Element = await quizItem.$('h2');
      if (h2Element) {
        const h2Text = await h2Element.textContent();
        if (h2Text === quizName) {
          isDeleted = false;
        }
      }
    }

    expect(isDeleted).toBeTruthy;

    await page.goto(homepage);
    await page.click('button.btn-creer');;


    const question2 = " Remettez dans l'ordre les étapes";


    const answer2_1 = "Mélanger les ingrédients";
    const answer2_2 = "Préchauffer le four";
    const answer2_3 = "Enfourner le gâteau";
    const answer2_4 = "Décorer le gâteau";


    const inputQuizName = await page.$('#name');
    await inputQuizName?.type(quizName);
    const inputValue = await inputQuizName?.inputValue();
    expect(inputValue).toBe(quizName);
    const themeOption = "Autre";
    await page.selectOption('select[formControlName="theme"]',themeOption);
    await page.selectOption('#numberOfQuestions',"3");
    const typeSelector = 'button:has-text("Chronologique")';
    const typeButton = await page.$(typeSelector);
    await typeButton?.click();

    const inputQuestionName = await page.locator('#questionChronological');
    const inputURL = await page.getByPlaceholder('Enter image URL');
    const inputAnswer1 = await page.locator('app-createquestion').getByRole('textbox').nth(1);
    const inputAnswer2 = await page.locator('div').filter({ hasText: /^Réponses 2 :1234$/ }).getByRole('textbox');
    const inputAnswer3 = await page.locator('div').filter({ hasText: /^Réponses 3 :1234$/ }).getByRole('textbox');
    const inputAnswer4 = await page.locator('div').filter({ hasText: /^Réponses 4 :1234$/ }).getByRole('textbox');
    const answer1Order = await page.locator('app-createquestion').getByRole('combobox').first();
    const answer2Order = await page.locator('div').filter({ hasText: /^Réponses 2 :1234$/ }).getByRole('combobox');
    const answer3Order = await page.locator('div').filter({ hasText: /^Réponses 3 :1234$/ }).getByRole('combobox');
    const answer4Order = await page.locator('div').filter({ hasText: /^Réponses 4 :1234$/ }).getByRole('combobox');


    const addQuestionSelector = 'button:has-text("Ajouter la question")';
    const nextQuestionSelector = 'button:has-text("Prochaine question")';
    const createQuizSelector = 'button:has-text("Créer le quiz")';
    const addQuestionButton = await page.$(addQuestionSelector);
    const nextQuestionButton = await page.$(nextQuestionSelector);
    const createQuizButton = await page.$(createQuizSelector);

    await inputQuestionName?.type(question2);
    await inputAnswer1?.type(answer2_1);
    await inputAnswer2?.type(answer2_2);
    await inputAnswer3?.type(answer2_3);
    await inputAnswer4?.type(answer2_4);
    await answer1Order?.selectOption("1");
    await answer2Order?.selectOption("2");
    await answer3Order?.selectOption("3");
    await answer4Order?.selectOption("4");
    await page.waitForTimeout(1000);
    await addQuestionButton?.click();
    await nextQuestionButton?.click();

    await createQuizButton?.click();

    await page.goto(homepage);
    await page.click('button.btn-liste');;

    let isPresent = false;
    const quizItemsAfterCreate = await page.$$('li.quizz-item');
    for (const quizItem of quizItemsAfterCreate) {
      const h2Element = await quizItem.$('h2');
      if (h2Element) {
        const h2Text = await h2Element.textContent();
        console.log(h2Text);
        if (h2Text === quizName) {
          isPresent = true;
        }
      }
    }
    expect(isPresent).toBeTruthy;

  });



  test('Creer un quiz démonstration avec questions analyse', async ({ page }) => {
    await page.goto(homepage);
    await page.click('button.btn-liste');;

    const quizName = "Chanteurs français";
    const quizItems = await page.$$('li.quizz-item');
    for (const quizItem of quizItems) {
      const h2Element = await quizItem.$('h2');
      if (h2Element) {
        const h2Text = await h2Element.textContent();
        if (h2Text === quizName) {
          console.log("Quiz déjà existant");
          await page.getByRole('listitem').filter({ hasText: 'Chanteurs françaisThème: AutreJouerSupprimer' }).getByRole('button', { name: 'Supprimer' }).click();
          await page.getByRole('button', { name: 'Confirmer' }).click();
          console.log("Quiz supprimé")

        }
      }
    }
    let isDeleted = true;
    for (const quizItem of quizItems) {
      const h2Element = await quizItem.$('h2');
      if (h2Element) {
        const h2Text = await h2Element.textContent();
        if (h2Text === quizName) {
          isDeleted = false;
        }
      }
    }

    expect(isDeleted).toBeTruthy;

    await page.goto(homepage);
    await page.click('button.btn-creer');;



    const question1 = "Qui est ce chanteur ?";
    const question2 = "Qui est ce chanteur ?";
    const question3 = "Qui est ce chanteur ?";

    const answer1_1 = "Jacques Brel";
    const answer1_2 = "Charles Aznavour";
    const answer1_3 = "Johnny Hallyday"; // VRAI
    const answer1_4 = "Michel Sardou";

    const answer2_1 = "Jacques Brel";
    const answer2_2 = "Patrick Bruel"; //VRAI
    const answer2_3 = "Alain Souchon";
    const answer2_4 = "Eddy Mitchell";

    const answer3_1 = "Renaud"; // VRAI
    const answer3_2 = "Indochine";
    const answer3_3 = "Francis Cabrel";
    const answer3_4 = "Claude François";

    const inputQuizName = await page.$('#name');
    await inputQuizName?.type(quizName);
    const inputValue = await inputQuizName?.inputValue();
    expect(inputValue).toBe(quizName);
    const themeOption = "Autre";
    await page.selectOption('select[formControlName="theme"]',themeOption);
    await page.selectOption('#numberOfQuestions',"3");
    const typeSelector = 'button:has-text("Analyse")';
    const typeButton = await page.$(typeSelector);
    await typeButton?.click();

    const inputQuestionName = await page.locator('#questionSearching');
    const inputURL = await page.getByPlaceholder('Enter image URL');
    const inputAnswer1 = await page.locator('app-createquestion form div').filter({ hasText: 'Réponse 1 : Vrai Faux' }).getByRole('textbox');
    const inputAnswer2 = await page.locator('app-createquestion form div').filter({ hasText: 'Réponse 2 : Vrai Faux' }).getByRole('textbox');
    const inputAnswer3 = await page.locator('app-createquestion form div').filter({ hasText: 'Réponse 3 : Vrai Faux' }).getByRole('textbox');
    const inputAnswer4 = await page.locator('app-createquestion form div').filter({ hasText: 'Réponse 4 : Vrai Faux' }).getByRole('textbox');
    const buttonVrai1 = await page.locator('app-createquestion form div').filter({ hasText: 'Réponse 1 : Vrai Faux' }).getByRole('button', { name: 'Vrai' });
    const buttonVrai2 = await page.locator('app-createquestion form div').filter({ hasText: 'Réponse 2 : Vrai Faux' }).getByRole('button', { name: 'Vrai' });
    const buttonVrai3 = await page.locator('app-createquestion form div').filter({ hasText: 'Réponse 3 : Vrai Faux' }).getByRole('button', { name: 'Vrai' });
    const buttonVrai4 = await page.locator('app-createquestion form div').filter({ hasText: 'Réponse 4 : Vrai Faux' }).getByRole('button', { name: 'Vrai' });
    const buttonFaux1 = await page.locator('app-createquestion form div').filter({ hasText: 'Réponse 1 : Vrai Faux' }).getByRole('button', { name: 'Faux' });
    const buttonFaux2 = await page.locator('app-createquestion form div').filter({ hasText: 'Réponse 2 : Vrai Faux' }).getByRole('button', { name: 'Faux' });
    const buttonFaux3 = await page.locator('app-createquestion form div').filter({ hasText: 'Réponse 3 : Vrai Faux' }).getByRole('button', { name: 'Faux' });
    const buttonFaux4 = await page.locator('app-createquestion form div').filter({ hasText: 'Réponse 4 : Vrai Faux' }).getByRole('button', { name: 'Faux' });
    const addQuestionSelector = 'button:has-text("Ajouter la question")';
    const nextQuestionSelector = 'button:has-text("Prochaine question")';
    const createQuizSelector = 'button:has-text("Créer le quiz")';
    const addQuestionButton = await page.$(addQuestionSelector);
    const nextQuestionButton = await page.$(nextQuestionSelector);
    const createQuizButton = await page.$(createQuizSelector);

    await inputQuestionName?.type(question1);
    await inputURL?.type("https://media.nrj.fr/1900x1200/2017/11/johnny-hallyday_785.jpg");
    await inputAnswer1?.type(answer1_1);
    await inputAnswer2?.type(answer1_2);
    await inputAnswer3?.type(answer1_3);
    await inputAnswer4?.type(answer1_4);
    await buttonFaux1?.click();
    await buttonFaux2?.click();
    await buttonVrai3?.click();
    await buttonFaux4?.click();
    await page.waitForTimeout(1000);
    await addQuestionButton?.click();
    await nextQuestionButton?.click();

    await typeButton?.click();
    await inputQuestionName.type(question2);
    await inputURL?.type("https://img.lamontagne.fr/_R2ObpbuLbxzD17Ks3WPoNXpopLbmRO11mFI9tXjoHA/fit/657/438/sm/0/bG9jYWw6Ly8vMDAvMDAvMDQvMjMvNTcvMjAwMDAwNDIzNTc3Mw.jpg");
    await inputAnswer1?.type(answer2_1);
    await inputAnswer2?.type(answer2_2);
    await inputAnswer3?.type(answer2_3);
    await inputAnswer4?.type(answer2_4);
    await buttonFaux1?.click();
    await buttonVrai2?.click();
    await buttonFaux3?.click();
    await buttonFaux4?.click();
    await page.waitForTimeout(1000);
    await addQuestionButton?.click();
    await nextQuestionButton?.click();

    await typeButton?.click();
    await inputQuestionName?.type(question3);
    await inputURL?.type("https://img-4.linternaute.com/ZYgeJ9RV0MoksUeqehQU--lmw1U=/1500x/smart/1c378cc61a6f4baf87d5597145fcc09c/ccmcms-linternaute/41299118.jpg");
    await inputAnswer1?.type(answer3_1);
    await inputAnswer2?.type(answer3_2);
    await inputAnswer3?.type(answer3_3);
    await inputAnswer4?.type(answer3_4);
    await buttonVrai1?.click();
    await buttonFaux2?.click();
    await buttonFaux3?.click();
    await buttonFaux4?.click();
    await page.waitForTimeout(1000);
    await addQuestionButton?.click();
    await createQuizButton?.click();

    await page.goto(homepage);
    await page.click('button.btn-liste');;

    let isPresent = false;
    const quizItemsAfterCreate = await page.$$('li.quizz-item');
    for (const quizItem of quizItemsAfterCreate) {
      const h2Element = await quizItem.$('h2');
      if (h2Element) {
        const h2Text = await h2Element.textContent();
        console.log(h2Text);
        if (h2Text === quizName) {
          isPresent = true;
        }
      }
    }
    expect(isPresent).toBeTruthy;

  });


})
