const jsonPromise  = fetch('./data.json')
    .then((response) => response.json())
    

document.addEventListener('click', (e) =>{
    let target = e.target
    if(!target.dataset.val) return
    let id = target.dataset.val
    jsonPromise.then((data) => {
        console.log(data[0].name);
    }); 
    
})