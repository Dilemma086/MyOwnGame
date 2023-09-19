const arr = [ 
    {
        "name": "oneHundredRow1",
        "question": "Что однажды было сказано Юбиляром, когда из-под него был убран стул?",
        "answer": "Кто приказал"
    },
    {
        "name": "threeHundredRow1",
        "question": "Какое высказывание послужило, перед знаменитым падением с потолка сарайки?",
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
            let div = document.createElement('div')
            body.append(div)
            div.classList.add('modal')
            div.innerHTML=`
                <h1>${arr[i].question}</h1>
            
            `
        }
    }
})