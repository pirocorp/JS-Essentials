function createArticle() {
    let createTitleElement = document.getElementById('createTitle');
    let createContentElement = document.getElementById('createContent');

    let createTitleValue = createTitleElement.value;
    let createContentValue = createContentElement.value;

    if (!createTitleValue || !createContentValue) {
        return
    }

    let titleElement = document.createElement('h3');
    titleElement.textContent = createTitleValue;

    let contentElement = document.createElement('p');
    contentElement.textContent = createContentValue;

    let articleElement = document.createElement('article');
    articleElement.appendChild(titleElement);
    articleElement.appendChild(contentElement);

    let articlesSectionElement = document.getElementById('articles');
    articlesSectionElement.appendChild(articleElement);

    createTitleElement.value = '';
    createContentElement.value = '';
}