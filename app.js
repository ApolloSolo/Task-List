const list = document.querySelector('.list-ul');
const listGrid = document.querySelector('.list');
const form = document.querySelector('#form')
let btn =document.querySelector('.btn')

function addLI(todo) {
    let newLI = document.createElement("p");
    let today = new Date();
    newLI.classList.add('text');
    newLI.innerText = todo + "\n" + "- "+today.toLocaleDateString("en-US")+" -";
    listGrid.append(newLI);
}

const date = () => {
    let currentDate = new Date();
    let dateTime = `${currentDate.getDate()}/${currentDate.getMonth()}/${currentDate.getFullYear()}`
    return dateTime;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = form.elements[0].value
    addLI(formData)
    let pees = document.querySelectorAll('p');
    for(let p of pees){
        p.addEventListener('click', () => {
            p.classList.add('complete');
            if(p.classList.contains('complete')){
                btn.addEventListener('click', () => {
                    p.classList.add('delete');
                })
            }
        })
    }
})

// let lis = document.querySelectorAll('p');
//     let btns =document.querySelectorAll('.btn')
//     for(let btn of btns){
//         for(let l of lis){
//             l.addEventListener('click', () => {
//                 l.classList.add('complete');
//                 if(l.classList.contains('complete')){
//                     btn.addEventListener('click', () => {
//                         l.classList.add('delete');
//                     })
//                 }
//             })
//         }
//     }
