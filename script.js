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
        "answer": "Выпить компот - 'В рот компот!'",
        "img": "jooce.png"
    },
    {
        "name": "oneHundredRow2",
        "question": "Сколько месяцев в году имеют 28 дней?",
        "answer": "12 месяцев",
        "img": "kalehdar.jpg"
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
        "answer": "Любимому Юбиляру 70! (I + 69)",
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
        "answer": "Приобрел в euroShop несколько пар обуви одной модели и менял только одну туфлю при износе",
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
const zagluhka = document.querySelector('.zagluhka')
const btnZagluhka = document.querySelector('.btnZagluhka')
let conunt1 = 0
let conunt2 = 0
let conunt3 = 0
cnt1.innerText = conunt1
cnt2.innerText = conunt2
cnt3.innerText = conunt3

btnZagluhka.addEventListener('click', () => {
    zagluhka.hidden = true
})


const num1 = (count) =>{
    conunt1 = conunt1 + count
    cnt1.innerHTML = conunt1
}
const num2 = (count) =>{
    conunt2 = conunt2 + count
    cnt2.innerHTML = conunt2
}
const num3 = (count) =>{
    conunt3 = conunt3 + count
    cnt3.innerHTML = conunt3
}

document.addEventListener('click', (e) =>{
    let target = e.target
    let count = +(target.innerText)
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
                        <button class="btn1" data-btn="btn1">Боб</button>
                        <button class="btn2">Юби</button>
                        <button class="btn3">Изя</button>
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
                num1(count)
                
            })
            btn2.addEventListener('click', () =>{
                num2(count)
                
            })
            btn3.addEventListener('click', () =>{
                num3(count)
                
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