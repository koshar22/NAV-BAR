let btn = document.getElementById('abc')
// let btn_2 = document.getElementById('xyz')
let links = document.getElementsByClassName('links')[0]
let isOpen = false

btn.addEventListener('click', () => {
    if(isOpen) {
        links.style.left = '-100%';
        isOpen = false
    }
    else{
        links.style.left = '0';
        isOpen = true
    }
})



// btn_2.addEventListener('click', () => {
//     if(isOpen) {
//         btn.style.display = 'inline';
//         isOpen = false
//     }
//     else{
//         btn.style.display = 'none';
//         isOpen = true
//     }
// })