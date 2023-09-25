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
const cnt1 = document.querySelector('.cnt1')
const cnt2 = document.querySelector('.cnt2')
const cnt3 = document.querySelector('.cnt3')
let conunt1 = 0
let conunt2 = 0
let conunt3 = 0
cnt1.innerText = conunt1
cnt2.innerText = conunt2
cnt3.innerText = conunt3

document.addEventListener('click', (e, conunt1) =>{
    let target = e.target
    let count = target.innerText
    if(!target.dataset.val) return
    let id = target.dataset.val
    for(let i=0; i<arr.length;i++ ){
        if(arr[i].name === id){
           
            let div = document.createElement('div')
            let divDiv = document.createElement('div')
            let imgBlock = document.createElement('div')
            body.append(div)
            div.classList.add('modalWindow')
            div.innerHTML=`
                <div class="modal">
                    <div class="btn">
                        <p> Верный ответ дал:</p>
                        <button class="btn1">Игрок 1</button>
                        <button class="btn2">Игрок 2</button>
                        <button class="btn3">Игрок 3</button>
                    </div>
                    <span class="close"><img src='close.png'></span>
                    <h1>${arr[i].question}</h1>
                    <button class="otvet">Ответ</button>
                    
                    <h2 hidden="true">${arr[i].answer}</h2>
                </div>    
            `
            const btn1 = document.querySelector('.btn1')
            const btn2 = document.querySelector('.btn2')
            const btn3 = document.querySelector('.btn3')


            btn1.addEventListener('click', () =>{
                conunt1 = conunt1 + count
                cnt1.innerText = conunt1
                
            })
            const close = document.querySelector('.close')
            if(arr[i].img!=undefined){
                close.after(divDiv)
                divDiv.innerHTML=`
                    <img class="picture" src="${arr[i].img}">
                `
            }    
           
            const otvet = document.querySelector('.otvet')
            const h2 = document.querySelector('h2')
            otvet.addEventListener('click', () => {
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