function setHomePage() {
    const content = document.querySelector('#content');
    function createTitle(){
        let div = document.createElement('div');
        div.classList.add('title');
        
        let title = document.createElement('h1');
        title.innerText = 'Welcome to this Restaurant!';

        let text = document.createElement('p');
        text.innerText = 'We hope you enjoy our food!';

        div.appendChild(title);
        div.appendChild(text);
        return div;
    }
    function createQuote(){
        let div = document.createElement('div');
        div.classList.add('container');

        let quote = document.createElement('p');
        quote.classList.add('quote');
        quote.innerText = 'This is a little quote about how great our restaurant is! You should definitely visit!';

        let author = document.createElement('p');
        author.classList.add('author');
        author.innerText = '-quote author';

        div.appendChild(quote);
        div.appendChild(author);
        return div;
    }
    function createAddress(){
        let div = document.createElement('div');
        div.classList.add('container');

        let title = document.createElement('h2');
        title.innerText = 'Visit us!';

        let address1 = document.createElement('p');
        address1.classList.add('address');
        address1.innerText = '123 Restaurant Street';

        let address2 = document.createElement('p');
        address2.classList.add('address');
        address2.innerText = 'City, State';

        div.appendChild(title);
        div.appendChild(address1);
        div.appendChild(address2);
        return div;
    }
    content.appendChild(createTitle());
    content.appendChild(createQuote());
    content.appendChild(createAddress());
};

export {setHomePage as default};


