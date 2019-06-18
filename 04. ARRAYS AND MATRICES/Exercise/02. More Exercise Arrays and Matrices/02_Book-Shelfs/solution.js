function solve() {
    let inputArr = JSON.parse(document.getElementById("arr").value);
    let resultElement = document.getElementById("result");
    let result = [];

    inputArr.forEach(element => {
        if (element.includes(" -> ")) {
            proccessShelf(element);
        } else {
            proccessBook(element);
        }
    });

    outputShelfs(result);

    function proccessBook(inputString) {
        let bookArgs = inputString.split(", ");

        let bookGenre = bookArgs[1];

        if (result.filter(e => e.genre === bookGenre).length > 0) {
            let bookTokens = bookArgs[0].split(": ");
            let bookTitle = bookTokens[0];
            let bookAuthor = bookTokens[1];

            let book = {
                title: bookTitle,
                author: bookAuthor
            };

            result.find(e => e.genre === bookGenre).books.push(book);
        }
    }

    function proccessShelf(inputString) {
        let tokens = inputString.split(' -> ');
        let id = tokens[0];
        let genre = tokens[1];

        if (result.filter(e => e.id === id).length === 0) {
            let newGenre = {
                id: id,
                genre: genre,
                books: []
            };

            result.push(newGenre);
        }
    }

    function outputShelfs(shelfs) {

        shelfs
            .sort(sortShelfs)
            .forEach(x => x.books.sort(bookSort));

        for (const i in shelfs) {
            let currentShelf = shelfs[i];

            let shelfPElement = document.createElement('p');
            shelfPElement.textContent = `${currentShelf.id} ${currentShelf.genre}: ${currentShelf.books.length}`;
            resultElement.appendChild(shelfPElement);

            let shelfBooks = currentShelf.books;

            for (const key in shelfBooks) {
                let currentBook = shelfBooks[key];

                let bookPElement = document.createElement('p');
                bookPElement.textContent = `--> ${currentBook.title}: ${currentBook.author}`;
                resultElement.appendChild(bookPElement);
            }
        }
    }

    function bookSort(a, b) {
        return a.title.localeCompare(b.title);
    }

    function sortShelfs(a, b) {
        return b.books.length - a.books.length;
    }

    document.getElementById("arr").value = "";
}