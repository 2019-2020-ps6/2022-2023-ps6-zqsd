import {expect, test} from "@playwright/test";
import {connexionPage, homepage} from "../e2e.config";
import {times} from "underscore";



test('Créer un quiz Astérix4', async ({ page }) => {
  await page.goto(homepage);
  await page.click('button.btn-liste');;

  const quizName = "Astérix4";
  const quizItems = await page.$$('li.quizz-item');
  for (const quizItem of quizItems) {
    const h2Element = await quizItem.$('h2');
    if (h2Element) {
      const h2Text = await h2Element.textContent();
      if (h2Text === quizName) {
        console.log("Quiz déjà existant");
        await page.getByRole('listitem').filter({ hasText: 'Astérix4Thème: FilmJouerSupprimer' }).getByRole('button', { name: 'Supprimer' }).click();
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

test("delete account LeonelG", async ({ page }) => {
  await page.goto(homepage);
  await page.locator("#header").getByText('Connexion').click();
  await page.locator("#connexion-name").fill("Admin");
  await page.locator("#connexion-password").fill("Admin");
  await page.getByRole('button', { name: "Connexion" }).click();
  await page.getByRole('button', { name: "Gestion des utilisateurs" }).click();

  const deleteButton = page
    .getByRole('listitem')
    .filter({ hasText: 'Prenom: LeonelNom: GomezStatus: userSupprimer' })
    .getByRole('button', { name: 'Supprimer' });

  if (await deleteButton.isVisible()) {
    await deleteButton.click();
    await page.getByRole('button', { name: 'Confirmer' }).click();
  } else {
    await page.goto(homepage); // Return to the homepage if the delete button is not visible
  }
});


//Alice veut inscrire son père en tant qu'utilisateur et tester le compte
test("non existing user inscription",async ({page}) =>{
  await page.goto(homepage);
  await page.locator("#header").getByText('Connexion').click()
  await page.getByRole('button', { name: 'Inscription' }).click()
  await page.locator('#inscription-surname').fill("Leonel")
  await page.locator('#inscription-name').fill("Gomez")
  await page.locator("#inscription-id").fill("LeonelG")
  await page.locator('#inscription-password').fill("123456")
  await page.locator('#inscription-Rpassword').fill("123456")

  //afficher mdp et non
  await page.locator('#inscription-image-password-eye').click()
  await page.locator('#inscription-image-password-eye').click()

  await page.locator('#button-down-up-profile').click()
  await page.waitForTimeout(1000)
  await page.getByRole('button', { name: 'Utilisateur' }).click()
  await page.waitForTimeout(1000)
  expect (page.getByRole('button', { name: 'Utilisateur' })).toBeTruthy()
  await page.waitForTimeout(1000)
  await page.locator('#button-down-up-profile').click()
  //wait a bit
  await page.waitForTimeout(1000)
  await page.getByRole('button', { name: 'Inscription' }).click()
  //expect url to be connexion
  expect(page.url()).toBe(connexionPage);
  await page.locator("#header").getByText('Connexion').click()
  await page.locator("#connexion-name").fill("LeonelG")
  await page.locator("#connexion-password").fill("123456")
  await page.getByRole('button',({name:"Connexion"})).click()
  expect(page.url()).toBe(homepage);
  expect(page.getByText('Bienvenue Leonel')).toBeTruthy()
  await page.waitForTimeout(3000)
})



test('Tester le fond', async ({ page }) => {
  await page.goto(homepage);
  const parametres = await page.$('span:has-text("Paramètres")');
  if (parametres) {
    await parametres.click();
  } else {
    console.log("Le span contenant le texte Paramètres n'a pas été trouvé.");
  }
  await page.getByRole('button', { name: 'Paramètres Avancés' }).click();
  await page.getByRole('button', { name: 'ATTENTION' }).click();
  await page.getByRole('button', { name: 'Clair' }).click();
  expect(page.getByRole('button', { name: 'Sombre' })).toBeVisible();
});

test('Tester animation question enabled', async ({ page }) => {
  await page.goto(homepage);
  const parametres = await page.$('span:has-text("Paramètres")');
  if (parametres) {
    await parametres.click();
  } else {
    console.log("Le span contenant le texte Paramètres n'a pas été trouvé.");
  }
  await page.getByRole('button', { name: 'Paramètres Avancés' }).click();
  await page.getByRole('button', { name: 'ATTENTION' }).click();
  await page.locator('#questionAnimationFocusWork').getByRole('button', { name: 'Désactiver' }).click();
  expect(page.locator('#questionAnimationFocusWork').getByRole('button', { name: 'Activer' })).toBeVisible();
  await page.locator('#questionAnimationFocusWork').getByRole('button', { name: 'Activer' }).click();
  expect(page.locator('#questionAnimationFocusWork').getByRole('button', { name: 'Désactiver' })).toBeVisible();
  const accueil = await page.$('span:has-text("Accueil")');
  if (accueil) {
    await accueil.click();
  }
  await page.click('button.btn-jouer');
  // Sélectionner la div parent
  const question = await page.$('div#question');
  const hasClass = await question?.evaluate((element) => {
    return element.classList.contains("questionTitle");
  });
  expect(hasClass).toBe(true);
});


test('Tester animation question disabled', async ({ page }) => {
  await page.goto(homepage);
  const parametres = await page.$('span:has-text("Paramètres")');
  if (parametres) {
    await parametres.click();
  } else {
    console.log("Le span contenant le texte Paramètres n'a pas été trouvé.");
  }
  await page.getByRole('button', { name: 'Paramètres Avancés' }).click();
  await page.getByRole('button', { name: 'ATTENTION' }).click();
  await page.locator('#questionAnimationFocusWork').getByRole('button', { name: 'Désactiver' }).click();
  expect(page.locator('#questionAnimationFocusWork').getByRole('button', { name: 'Activer' })).toBeVisible();
  const accueil = await page.$('span:has-text("Accueil")');
  if (accueil) {
    await accueil.click();
  }
  await page.click('button.btn-jouer');
  // Sélectionner la div parent
  const question = await page.$('div#question');
  const hasClass = await question?.evaluate((element) => {
    return element.classList.contains("questionTitle");
  });
  expect(hasClass).toBe(false);
});

test('Tester animation right answer enabled', async ({ page }) => {
  await page.goto(homepage);
  const parametres = await page.$('span:has-text("Paramètres")');
  if (parametres) {
    await parametres.click();
  } else {
    console.log("Le span contenant le texte Paramètres n'a pas été trouvé.");
  }
  await page.getByRole('button', { name: 'Paramètres Avancés' }).click();
  await page.getByRole('button', { name: 'ATTENTION' }).click();
  await page.locator('#rightAnswerAnimationFocusWork').getByRole('button', { name: 'Désactiver' }).click();
  expect(page.locator('#rightAnswerAnimationFocusWork').getByRole('button', { name: 'Activer' })).toBeVisible();
  await page.locator('#rightAnswerAnimationFocusWork').getByRole('button', { name: 'Activer' }).click();
  expect(page.locator('#rightAnswerAnimationFocusWork').getByRole('button', { name: 'Désactiver' })).toBeVisible();
  await page.selectOption("#timeSelector","3 secondes");
  const accueil = await page.$('span:has-text("Accueil")');
  if (accueil) {
    await accueil.click();
  }
  await page.click('button.btn-liste');
  const quizName = 'Astérix';

  await page.$$eval('li.quizz-item', (listItems, name) => {
    for (const listItem of listItems) {
      const h2Element = listItem.querySelector('h2');
      if (h2Element && h2Element.textContent === name) {
        const button = listItem.querySelector('button');
        button?.click();
        break;
      }
    }
  }, quizName);

  const answer = await page.getByRole('button', { name: 'Obélix' });
  if (answer) {
    await answer.click();
    await page.waitForTimeout(500);

    const Border = await answer.evaluate((element) => {
      return window.getComputedStyle(element).getPropertyValue("border");
    });

    await expect(Border).toBe("4.8px solid rgb(0, 128, 0)");

  } else {
    console.log('Le bouton avec le texte "Obélix" n\'a pas été trouvé.');
  }
});

test('Tester animation wrong answer enabled', async ({ page }) => {
  await page.goto(homepage);
  const parametres = await page.$('span:has-text("Paramètres")');
  if (parametres) {
    await parametres.click();
  } else {
    console.log("Le span contenant le texte Paramètres n'a pas été trouvé.");
  }
  await page.getByRole('button', { name: 'Paramètres Avancés' }).click();
  await page.getByRole('button', { name: 'ATTENTION' }).click();
  await page.locator('#rightAnswerAnimationFocusWork').getByRole('button', { name: 'Désactiver' }).click();
  expect(page.locator('#rightAnswerAnimationFocusWork').getByRole('button', { name: 'Activer' })).toBeVisible();
  await page.locator('#rightAnswerAnimationFocusWork').getByRole('button', { name: 'Activer' }).click();
  expect(page.locator('#rightAnswerAnimationFocusWork').getByRole('button', { name: 'Désactiver' })).toBeVisible();
  await page.selectOption("#timeSelector","3 secondes");
  const accueil = await page.$('span:has-text("Accueil")');
  if (accueil) {
    await accueil.click();
  }
  await page.click('button.btn-liste');
  const quizName = 'Astérix';

  await page.$$eval('li.quizz-item', (listItems, name) => {
    for (const listItem of listItems) {
      const h2Element = listItem.querySelector('h2');
      if (h2Element && h2Element.textContent === name) {
        const button = listItem.querySelector('button');
        button?.click();
        break;
      }
    }
  }, quizName);

  const answer = await page.getByRole('button', { name: 'Gragas' });
  if (answer) {
    await answer.click();
    await page.waitForTimeout(500);

    const Border = await answer.evaluate((element) => {
      return window.getComputedStyle(element).getPropertyValue("border");
    });
    console.log(Border)
    await expect(Border).toBe("4.8px solid rgb(255, 0, 0)");

  } else {
    console.log('Le bouton avec le texte "Gragas" n\'a pas été trouvé.');
  }
});

test('Tester texte majuscule', async ({ page }) => {
  await page.goto(homepage);
  const parametres = await page.$('span:has-text("Paramètres")');
  if (parametres) {
    await parametres.click();
  } else {
    console.log("Le span contenant le texte Paramètres n'a pas été trouvé.");
  }
  await page.getByRole('button', { name: 'Paramètres Avancés' }).click();
  await page.getByRole('button', { name: 'ATTENTION' }).click();
  await page.locator('#uppercase_button').getByRole('button', { name: 'Activer' }).click();
  expect(page.locator('#uppercase_button').getByRole('button', { name: 'Désactiver' })).toBeVisible();
  const accueil = await page.$('span:has-text("Accueil")');
  if (accueil) {
    await accueil.click();
  }
  await page.click('button.btn-liste');
  const quizName = 'Astérix';

  await page.$$eval('li.quizz-item', (listItems, name) => {
    for (const listItem of listItems) {
      const h2Element = listItem.querySelector('h2');
      if (h2Element && h2Element.textContent === name) {
        const button = listItem.querySelector('button');
        button?.click();
        break;
      }
    }
  }, quizName);

  const answer = await page.getByRole('button', { name: 'Gragas' });
  if (answer) {
    const upperCase = await answer.evaluate((element) => {
      return window.getComputedStyle(element).getPropertyValue("text-transform");
    });
    console.log(upperCase);
    await expect(upperCase).toBe("uppercase");

  } else {
    console.log('Le bouton avec le texte "Gragas" n\'a pas été trouvé.');
  }
});

test('Tester police texte', async ({ page }) => {
  await page.goto(homepage);
  const parametres = await page.$('span:has-text("Paramètres")');
  if (parametres) {
    await parametres.click();
  } else {
    console.log("Le span contenant le texte Paramètres n'a pas été trouvé.");
  }
  await page.getByRole('button', { name: 'Paramètres Avancés' }).click();
  await page.getByRole('button', { name: 'ATTENTION' }).click();
  await page.selectOption("#policeSelector","Times New Roman");
  const accueil = await page.$('span:has-text("Accueil")');
  if (accueil) {
    await accueil.click();
  }
  await page.click('button.btn-liste');
  const quizName = 'Astérix';

  await page.$$eval('li.quizz-item', (listItems, name) => {
    for (const listItem of listItems) {
      const h2Element = listItem.querySelector('h2');
      if (h2Element && h2Element.textContent === name) {
        const button = listItem.querySelector('button');
        button?.click();
        break;
      }
    }
  }, quizName);

  const answer = await page.getByRole('button', { name: 'Gragas' });
  if (answer) {
    const police = await answer.evaluate((element) => {
      return window.getComputedStyle(element).getPropertyValue("font-family");
    });
    console.log(police);
    await expect(police).toBe("\"Times New Roman\"");

  } else {
    console.log('Le bouton avec le texte "Gragas" n\'a pas été trouvé.');
  }
});
