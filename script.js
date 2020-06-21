const big = document.querySelector('#big')


  function defaultGridMaker(){
        for(let i= 0;i<256; i++){
            const defaultNewDiv = document.createElement('div');
            defaultNewDiv.classList.add('small')
            big.appendChild(defaultNewDiv);
        }

    }

    defaultGridMaker();

   
let color = 'black';



//paints squares

    function paintGrid(color){
const square = document.querySelectorAll('.small')

    square.forEach((elem) =>{   
        
       elem.addEventListener('mouseenter', (e) => {
           e.target.style.background = color;
       })}) 
    }
    paintGrid(color);

 
   
 // color changing button

const changeButton = document.getElementById('change')

    changeButton.addEventListener('click', ()=>{       
        color = prompt('Type color in Hex');
        paintGrid(color);
        console.log(color)
    })

//random color

const randomButton = document.getElementById('randomColor');

 function randColor(){
        let letters = "0123456789ABCDEF";
        let kolor = '#';
            for(let i=0; i<6; i++){
                kolor += letters[Math.floor(Math.random() * 16 )];
            }
        return kolor;
    }

    randomButton.addEventListener('click',() =>{
        paintGrid(randColor());
    })

//resizes container

    function removeGrid(){
        while(big.firstChild){
            big.removeChild(big.firstChild);
        }
    } 
// makes resized container
    
    function resizeGrid(){
        let size = prompt("Choose Size", "")
              for(let i= 0;i<size*size; i++){
                const NewDiv = document.createElement('div');
                NewDiv.classList.add('small')
                big.setAttribute('style', `grid-template-rows: repeat(${size}, 2fr); grid-template-columns: repeat(${size}, 2fr)`);
                 big.appendChild(NewDiv);
                 
            }
    }

// reset button
const resetButton = document.getElementById('reset')
    
       resetButton.addEventListener('click', () =>{
        removeGrid();
        resizeGrid();
        paintGrid(color);
       })


