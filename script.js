const buttons = document.querySelectorAll('.button')
// console.log(buttons)

const body = document.querySelector('body');

buttons.forEach( (button) => {
    button.addEventListener('click' , (e) =>{
        const color = e.currentTarget.id
        body.style.backgroundColor = color;
        if (color === 'black' || color==="maroon" || color==="purple") {
            body.style.color = 'white';
            button.style.border = "2px solid white";
        } else {    
            body.style.color = 'black';
        }
        
    })
    button.addEventListener('mouseover' , (e) =>{
        const color = e.currentTarget.id
        body.style.backgroundColor = color;
        if (color === 'black' || color==="maroon" || color==="purple") {
            body.style.color = 'white';
            button.style.border = "2px solid white";
        } else {    
            body.style.color = 'black';
        }
    })
})
