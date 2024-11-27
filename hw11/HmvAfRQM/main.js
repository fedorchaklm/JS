/**
 #HmvAfRQM
 - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
 **/
const cartsContainer = document.getElementsByClassName('carts')[0];

fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(({carts}) => writerCarts(carts));

function writerCarts(carts) {
    for (const cart of carts) {
        const {id, total, discountedTotal, userId, totalProducts, totalQuantity, products} = cart;
        const cartItem = document.createElement('p');
        cartItem.classList.add('cart');
        cartItem.innerText = `
            id: ${id},
            total: ${total},
            discountedTotal: ${discountedTotal},
            userId: ${userId},
            totalProducts: ${totalProducts},
            totalQuantity: ${totalQuantity}
             `;
        const productsContainer = document.createElement('div');
        productsContainer.classList.add('products');
        const productsTitle = document.createElement('h4');
        productsTitle.innerText = 'Products:';
        productsContainer.appendChild(productsTitle)

        for (const product of products) {
            const {id, title, price, quantity, total, discountPercentage, discountedTotal, thumbnail} = product;
            const productItem = document.createElement('p');
            productItem.classList.add('product');
            productItem.innerText = `
                id: ${id},
                title: ${title},
                price: ${price},
                quantity: ${quantity},
                total: ${total},
                discountPercentage: ${discountPercentage},
                discountedTotal: ${discountedTotal}
                  `;
            const productImage = document.createElement('img');
            productImage.setAttribute('src', thumbnail);
            productItem.appendChild(productImage);
            productsContainer.appendChild(productItem);
        }
        cartItem.appendChild(productsContainer);
        cartsContainer.appendChild(cartItem);
    }
}