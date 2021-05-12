const items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('click', () => {
        const selectedItem = document.querySelector('.selected-item');
        const selectedIcon = selectedItem.children[0];

        if(selectedItem.classList.contains('appear')){
            selectedItem.classList.add('disappear');
            setTimeout(function(){ selectedItem.classList.remove('appear')},1001);
            selectedIcon.classList.toggle('rotate');
        }
        else{
            selectedItem.classList.add('appear');
            selectedItem.classList.remove('disappear');
            selectedIcon.classList.toggle('rotate');
        }
    })
});