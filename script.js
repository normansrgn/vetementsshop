const list = document.querySelector('.catalog_filt_btns')
items = document.querySelectorAll('.vetments_cards')
listitems = document.querySelectorAll('.catalog_btn')

function filter() {

    list.addEventListener('click', event => {
        const targetId = event.target.dataset.id
        // console.log(targetId)
        const target = event.target

        listitems.forEach(listitems => listitems.classList.remove('active'))
        target.classList.add('active')

        switch (targetId) {
            case 'hoodie':
                items.forEach(item => {
                    if (item.classList.contains('hoodie')) {
                        item.style.display = 'flex'
                    } else {
                        item.style.display = 'none'
                    }
                })
                break

            case 'pants':
                items.forEach(item => {
                    if (item.classList.contains('pants')) {
                        item.style.display = 'flex'
                    } else {
                        item.style.display = 'none'
                    }
                })
                break

            case 'boots':
                items.forEach(item => {
                    if (item.classList.contains('boots')) {
                        item.style.display = 'flex'
                    } else {
                        item.style.display = 'none'
                    }
                })
                break
        }


    })


}
filter()


//ПОИСК ТОВАРОВ//

window.onload = () => {
    let input = document.querySelector('#input')
    input.oninput = function () {
        let value = this.value.trim();
        let cardlist = document.querySelectorAll('.vetments_cards div');
        console.log(cardlist);

        if(value != '') {
            cardlist.forEach(elem => {
                if(elem.innerText.search(value) == -1 ) {
                    elem.classList.add('hide');
                }
            })
        }

        console.log(this.value);
    }
};