import { test, expect } from '@playwright/test';
import { homepage,testURL } from 'e2e/e2e.config';
import { QuizzListComponent } from 'src/app/quizz-list/quizz-list.component';


test('Jouer un quiz démonstration avec questions chrnologiques', async ({ page }) => {
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



  const question1 = " Remettez dans l'ordre les étapes";
  const question2 = " Remettez dans l'ordre les étapes";
  const question3 = " Remettez dans l'ordre les étapes";

  const answer1_1 = "Petit déjeuné";
  const answer1_2 = "Déjeuné";
  const answer1_3 = "Goûter";
  const answer1_4 = "Dîner";

  const answer2_1 = "Mélanger les ingrédients";
  const answer2_2 = "Préchauffer le four";
  const answer2_3 = "Enfourner le gâteau";
  const answer2_4 = "Décorer le gâteau";

  const answer3_1 = "Envoyer les invitations";
  const answer3_2 = "Préparer les décorations";
  const answer3_3 = "Faire les courses";
  const answer3_4 = "Accueillir les invités";

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

  await inputQuestionName?.type(question1);
  await inputAnswer1?.type(answer1_1);
  await inputAnswer2?.type(answer1_2);
  await inputAnswer3?.type(answer1_3);
  await inputAnswer4?.type(answer1_4);
  await answer1Order?.selectOption("1");
  await answer2Order?.selectOption("2");
  await answer3Order?.selectOption("3");
  await answer4Order?.selectOption("4");
  await page.waitForTimeout(1000);
  await addQuestionButton?.click();
  await nextQuestionButton?.click();

  await typeButton?.click();
  await inputQuestionName.type(question2);
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

  await typeButton?.click();
  await inputQuestionName?.type(question3);
  await inputAnswer1?.type(answer3_1);
  await inputAnswer2?.type(answer3_2);
  await inputAnswer3?.type(answer3_3);
  await inputAnswer4?.type(answer3_4);
  await answer1Order?.selectOption("1");
  await answer2Order?.selectOption("2");
  await answer3Order?.selectOption("3");
  await answer4Order?.selectOption("4");
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
