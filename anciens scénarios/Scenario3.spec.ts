import { test, expect } from '@playwright/test';
import { homepage,testURL } from 'e2e/e2e.config';
import { QuizzListComponent } from 'src/app/quizz-list/quizz-list.component';
import { ParameterService } from 'src/services/Parameter/ParameterService';


test('Créer un quiz Astérix3', async ({ page }) => {
  await page.goto(homepage);
  await page.click('button.btn-liste');;

  const quizName = "Astérix3";
  const quizItems = await page.$$('li.quizz-item');
  for (const quizItem of quizItems) {
    const h2Element = await quizItem.$('h2');
    if (h2Element) {
      const h2Text = await h2Element.textContent();
      if (h2Text === quizName) {
        console.log("Quiz déjà existant");
        await page.getByRole('listitem').filter({ hasText: 'Astérix3Thème: FilmJouerSupprimer' }).getByRole('button', { name: 'Supprimer' }).click();
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

test('Tester la musique activée', async ({ page }) => {
  await page.goto(homepage);
  await page.click('button.btn-jouer');
  await page.waitForTimeout(2000);
  const element = await page.$('span:has-text("Paramètres")');
  if (element) {
    await element.click();
  } else {
    console.log("Le span contenant le texte Paramètres n'a pas été trouvé.");
  }
  const optionValue = 'Musique 4';
  await page.selectOption('select', optionValue);
  const element2 = await page.$('span:has-text("Retour")');
  if (element2) {
    await element2.click();
  } else {
    console.log("Le span contenant le texte Retour n'a pas été trouvé.");
  }
  await page.waitForTimeout(5000);
  /*const musicOn = await page.evaluate(() => {
    const parameterService = (window as any).ng.getService('ParameterService');
    return parameterService.getCurrentMusic();
  });
  console.log("musicOn : " + musicOn)
  expect(musicOn).toBe('true');*/
});

test('Tester la musique désactivée', async ({ page }) => {
  await page.goto(homepage);
  await page.click('button.btn-jouer');
  await page.waitForTimeout(2000);
  const element = await page.$('span:has-text("Paramètres")');
  if (element) {
    await element.click();
  } else {
    console.log("Le span contenant le texte Paramètres n'a pas été trouvé.");
  }
  const optionValue = 'Musique 4';
  await page.selectOption('select', optionValue);
  const image = await page.waitForSelector('img[src="assets/Parameter/Son_Enable.png"]');
  // Sélectionnez l'élément de l'image
  if (image) {
    await image.click(); // Cliquez sur l'image
  } else {
    console.log("L'image n'a pas été trouvée.");
  }
  await page.waitForTimeout(1000);
  const element2 = await page.$('span:has-text("Retour")');
  if (element2) {
    await element2.click();
  } else {
    console.log("Le span contenant le texte Retour n'a pas été trouvé.");
  }
  await page.waitForTimeout(5000);
  /*const musicOn = await page.evaluate(() => {
    const parameterService = (window as any).ng.getService('ParameterService');
    return parameterService.getCurrentMusic();
  });

  expect(musicOn).toBe(false);*/
});
test('Tester la police', async ({ page }) => {
  await page.goto(homepage);
  await page.click('button.btn-jouer');
  await page.waitForTimeout(2000);
  const element = await page.$('span:has-text("Paramètres")');
  if (element) {
    await element.click();
  } else {
    console.log("Le span contenant le texte Paramètres n'a pas été trouvé.");
  }
  await page.click('mat-slider');
  //on augmente 3 fois la police (plus le click d'avant donc 4)
  await page.keyboard.press('ArrowRight');
  await page.keyboard.press('ArrowRight');
  await page.keyboard.press('ArrowRight');
  await page.waitForTimeout(1000);
  let fontSize;
  const texte = await page.$('span:has-text("Ceci est un texte pour tester la taille.")');
  fontSize = await texte?.evaluate((element) => {
    const styles = window.getComputedStyle(element);
    return styles.fontSize;
  });
  console.log("font : " + fontSize)
  expect(fontSize).toBe('28px');
});

