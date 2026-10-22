export class YourFeedPage {
constructor (page) {
// техническое описание страницы, браузер, элементы
// описываем браузер
    this.page = page;
    this.profileText = page.getByRole('navigation');
}

// методы, бизнесовое описание страницы
    async getProfileName() {
        return this.profileText;
    }
}