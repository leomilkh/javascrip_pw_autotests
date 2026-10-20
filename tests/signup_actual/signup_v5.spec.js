import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { MainPage } from '../srk/pages/main.page.js';
import { RegisterPage } from '../srk/pages/register.page.js';
import { YourFeedPage } from '../srk/pages/yourfeed.page.js';

const registerPage = {
    async register(page, user) {
        await page.getByRole('textbox', { name: 'Your Name' }).fill(user.name);
        await page.getByRole('textbox', { name: 'Email' }).fill(user.email);
        await page.getByRole('textbox', { name: 'Password' }).fill(user.password);
        await page.getByRole('button', { name: 'Sign up' }).click();
    },
};

test('Пользователь может зарегистрироваться, используя email и пароль', async ({ page }) => {
    const user = {
        email: faker.internet.email(),
        name: faker.person.fullName(),
        password: faker.internet.password(),
    };

const main = new MainPage(page);
const register = new RegisterPage(page);
const yourFeed = new YourFeedPage(page);
    await main.open();
    await main.signup();
    await register.register(user);

    // await expect(yourFeed.profileText).toContainText(user.name);
    await expect(yourFeed.profileText).toContainText(user.name);

    // await expect(page.getByRole('navigation')).toContainText(user.name);
});

/*
class Burger {
  // поля класса
  brand = 'Sniper';
constructor (price) {
// свойства
 this.name = 'Вкусный бургер'
 this.price = price;
 //this.brand = 'mnml.tech'
}
getInfo() {
  console.log(`Стоимость ${this.price}`)
}
}
// вызов класса
const newObject = new Burger(1000);
console.log(newObject);
newObject.getInfo();

// {}
// {} - class (Burger)
// инициализируются поля если они есть
// вызываются конструктор и инициализируются свойства
// привязываются методы и возвращается объект
// объект готов, есть поля, свойства и методы
*/