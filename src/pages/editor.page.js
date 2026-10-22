export class EditorPage {
    constructor(page) {
        this.page = page;
        this.titleInput = page.getByRole('textbox', { name: 'Article Title' });
        this.descriptionInput = page.getByRole('textbox', { name: "What's this article about?" });
        this.bodyInput = page.getByRole('textbox', { name: 'Write your article (in markdown)' });
        this.publishButton = page.getByRole('button', { name: 'Publish Article' });
        this.updateButton = page.getByRole('button', { name: 'Update Article' });
    }

    async fill(article) {
        await this.titleInput.fill(article.title);
        await this.descriptionInput.fill(article.description);
        await this.bodyInput.fill(article.body);
    }

    async publish() {
        await this.publishButton.click();
    }

    async createArticle(article) {
        await this.fill(article);
        await this.publish();
    }

    async update() {
    await this.updateButton.click();
    }
}