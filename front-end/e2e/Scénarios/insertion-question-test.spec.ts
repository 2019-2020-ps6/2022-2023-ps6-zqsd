import { test, expect } from '@playwright/test';
import { homepage,testURL } from 'e2e/e2e.config';
import { QuizzListComponent } from 'src/app/quizz-list/quizz-list.component';

const BASE_URL = 'http://localhost:4200';

test.use({
  baseURL: BASE_URL,
});

test('Jouer un quiz démonstration avec toutes les questions', async ({ page }) => {
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
