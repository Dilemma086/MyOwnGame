const arr = [ 
    {
        "name": "oneHundredRow1",
        "question": "Что однажды было сказано Юбиляром, когда из-под него был убран стул?",
        "answer": "Кто приказал",
        "img": "chair.png"
    },
    {
        "name": "threeHundredRow1",
        "question": "Какое высказывание предвещало, знаменитому падению с чердака сарайки?",
        "answer": "Можно строить без гвоздей",
        "img": "upindown.png"
    },
    {
        "name": "fiveHundredRow1",
        "question": "Напиток, с которым предлагает что-то сделать Юбиляр в некотором гневе?",
        "answer": "В рот компот",
        "img": "jooce.png"
    },
    {
        "name": "oneHundredRow2",
        "question": "",
        "answer": "",
        "img": ""
    },
    {
        "name": "threeHundredRow2",
        "question": "Что значать эти числа?",
        "answer": "Даты дней рождений членов семьи Юбиляра",
        "img": "number.png"
    },
    {
        "name": "fiveHundredRow2",
        "question": "Разгадайте ребус",
        "answer": "Сегодня Юбиляру I + 69 = 70!",
        "img": "69.png"
    },
    {
        "name": "oneHundredRow3",
        "question": "Эти предметы очень хотел приобрести Юбиляр, но что то в дороге пошло не так",
        "answer": "Покупка колес неожиданно прервалась в Свердловске",
        "butdown": "vaz2121kolesa.png"
    },
    {
        "name": "threeHundredRow3",
        "question": "Какой предмет одежды Юбиляр планировал носить много лет, не смотря на их износ, применяя хитрую тактику?",
        "answer": "Иметь несколько пар обуви одной модели, менять левую или правую туфлю при износе",
        "butdown": "euroshop.png"
        
    },
    {
        "name": "fiveHundredRow3",
        "question": "С помощью какого предмета однажды Юбиляр потерял любимую?",
        "answer": "Выронил при перевозке на мотороллере 'Турист'",
        "butdown": "motoroller.png"
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
            let divDiv = document.createElement('div')
            let imgBlock = document.createElement('div')
            body.append(div)
            div.classList.add('modalWindow')
            div.innerHTML=`
                <div class="modal">
                    <span class="close"><img src='close.png'></span>
                    <h1>${arr[i].question}</h1>
                    <button>Ответ</button>
                    <div class="btn">
                        <p> Верный ответ дал:</p>
                        <button class="btn1">Первый игрок</button>
                        <button class="btn2">Второй игрок</button>
                        <button class="btn3">Третий игрок</button>
                    </div>
                    <h2 hidden="true">${arr[i].answer}</h2>
                </div>    
            `
            const close = document.querySelector('.close')
            if(arr[i].img!=undefined){
                close.after(divDiv)
                divDiv.innerHTML=`
                    <img class="picture" src="${arr[i].img}">
                `
            }    
           
            const button = document.querySelector('button')
            const h2 = document.querySelector('h2')
            button.addEventListener('click', () => {
                h2.hidden = false
                if(arr[i].butdown!=undefined){
                    h2.after(imgBlock)
                    imgBlock.innerHTML=`
                        <img class="butdown" src="${arr[i].butdown}"/>
                    `
                }
            })
           
            const modalWindow = document.querySelector('.modalWindow')
            
            close.addEventListener('click', () => {
                modalWindow.remove()
               
            })
            target.classList.add('covert')
        }
    }
})