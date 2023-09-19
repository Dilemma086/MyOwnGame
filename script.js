const arr = [ 
    {
        "name": "oneHundredRow1",
        "question": "Что однажды было сказано Юбиляром, когда из-под него был убран стул?",
        "answer": "Кто приказал",
        "img": "chair.png"
    },
    {
        "name": "threeHundredRow1",
        "question": "Какое высказывание послужило, знаменитому падению с чердака сарайки?",
        "answer": "Можно строить без гвоздей"
    },
    {
        "name": "fiveHundredRow1",
        "question": "Любимый напиток, который предлагает выпить Юбиляр в некотором гневе?",
        "answer": "В рот компот"
    }
]
    
const body = document.querySelector('body')
document.addEventListener('click', (e) =>{
    let target = e.target
    if(!target.dataset.val) return
    let id = target.dataset.val
    for(let i=0; i<arr.length;i++ ){
        if(arr[i].name === id){
            body.classList.add('tone')
            let div = document.createElement('div')
            body.append(div)
            div.classList.add('modalWindow')
            div.innerHTML=`
            <div class="modal">
                <span class="close"><img src='close.png'></span>
                <img class="picture" src="${arr[i].img}">
                <h1>${arr[i].question}</h1>
                <button>Ответ</button>
                <h2 hidden="true">${arr[i].answer}</h2>
            </div>    
            `
            const button = document.querySelector('button')
            const h2 = document.querySelector('h2')
            button.addEventListener('click', () => {
                h2.hidden = false
            })
            const modalWindow = document.querySelector('.modalWindow')
            const close = document.querySelector('.close')
            close.addEventListener('click', () => {
                modalWindow.remove()
               
            })
        }
    }
})