function solve() {
    let textAreaElement = document.getElementsByTagName('textarea')[0];
    let addButtonElements = Array.from(document.querySelectorAll('button.add-product'));
    addButtonElements.forEach(x => x.addEventListener("click", onClickAddButtonEventHandler));

    let checkoutElement = document.querySelector("button.checkout");
    checkoutElement.addEventListener("click", onClickCheckoutButtonEventHandler);

    let productNames = [];
    let productPrices = [];

    /**
     * 
     * @param {Event} e 
     */
    function onClickCheckoutButtonEventHandler(e) {
        addButtonElements.forEach(x => x.removeEventListener("click", onClickAddButtonEventHandler));
        checkoutElement.removeEventListener("click", onClickCheckoutButtonEventHandler);

        productNames = productNames.filter(onlyUnique);
        textAreaElement.value += `You bought ${productNames.join(", ")} for ${productPrices.reduce((a, b) => a + +b, 0).toFixed(2)}.`;
    }

    /**
     * 
     * @param {Event} e
     */
    function onClickAddButtonEventHandler(e) {
        let productElement = e.target.parentElement.parentElement;

        let productNameElement = productElement.querySelector('div.product-title');
        let productNameValue = productNameElement.textContent;

        let productMoneyElement = productElement.querySelector('div.product-line-price');
        let productMoneyValue = Number(productMoneyElement.textContent).toFixed(2);

        productNames.push(productNameValue);
        productPrices.push(productMoneyValue);
        textAreaElement.value += `Added ${productNameValue} for ${productMoneyValue} to the cart.\n`;
    }

    function onlyUnique(value, index, arr) {
        return arr.indexOf(value) === index;
    }
}