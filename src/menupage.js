function MenuItem(name, price, img){
    this.name = name;
    this.price = price;
    this.img = img;
}

const pizza = new MenuItem('pizza', 15, '');
const pasta = new MenuItem('pasta', 5, '');
const steak = new MenuItem('steak', 19, '');
const burger = new MenuItem('burger', 12, '');

const menu = [burger, pasta, steak, pizza];


function setMenuPage() {
    const content = document.querySelector('#content');
    function createTitle(){
        let div = document.createElement('div');
        div.classList.add('title');
        
        let title = document.createElement('h1');
        title.innerText = 'Our Menu:';

        div.appendChild(title);
        return div;
    };
     function createMenuItem(name, price, img){
        let div = document.createElement('div');
        div.classList.add('container');

        let itemName = document.createElement('h2');
        itemName.innerText = name.toUpperCase();

        let itemPrice = document.createElement('p');
        itemPrice.innerText = `$${price}`;

        let itemImg = document.createElement('img');
        itemImg.src = img;
        itemImg.alt = `Picture of ${itemName.innerText}`;

        div.appendChild(itemName);
        div.appendChild(itemImg);
        div.appendChild(itemPrice);
        return div;
    };
    function createMenu(menu){
        for (let item of menu){
            content.appendChild(createMenuItem(item.name, item.price, item.img));
        }
    };
    createTitle();
    createMenu(menu); 
};

export {setMenuPage as default};