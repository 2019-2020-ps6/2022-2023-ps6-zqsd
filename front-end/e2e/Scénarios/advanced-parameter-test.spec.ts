import { Parameter } from 'src/models/Parameter/parameter.model';
import { test, expect } from '@playwright/test';
import { homepage,testURL } from 'e2e/e2e.config';



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







