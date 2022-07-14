
// const cont = document.querySelector('#container');

document.addEventListener('DOMContentLoaded',function(e){
    let colorOption = 'one';
    const range = document.querySelector('#grid-range');
    let color = document.querySelector('#pen-color').value;

    createGrid(range.value);

    const cont = document.querySelector('#grid');
    let changeColor = cont.addEventListener('mouseover', function(e) {
        // one color e.target.style.backgroundColor = color;
        if (colorOption == 'random') {
            e.target.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
        } else if (colorOption == 'shades') {
            let currentColor = window.getComputedStyle(e.target).backgroundColor;
            let rgbColors = /rgb\((.*)\)/i.exec(currentColor);
            let rgbColorArray = rgbColors[1].split(', ');
            rgbColorArray = rgbColorArray.map(e => Math.round(parseInt(e) - 25));
            rgbColors = rgbColorArray.toString();
            e.target.style.backgroundColor = `rgb(${rgbColors})`;
        } else {
            e.target.style.backgroundColor = color;
        } 
        

        // shades of grey

        
        
    });

    
    
    range.addEventListener('mousedown',function(e){

        range.addEventListener('input', function() {
            document.querySelector('#grid-size-value').textContent = range.value;
            cont.innerHTML = '';
            createGrid(range.value);
        });

        // window.addEventListener('mouseup',function(e){
        //     cont.innerHTML = '';
        //     createGrid(range.value);
        // });
    });


    document.querySelector('#pen-color').addEventListener('input', function(e){
        color = e.target.value;
    });

    document.querySelector('#clear').addEventListener('click', function() {
        cont.innerHTML = '';
        createGrid(range.value);
    });

    const colorButtons = document.querySelectorAll('#choose-color button');
    colorButtons.forEach((b) => {
        b.addEventListener('click', function(e){
            document.querySelectorAll('.selected').forEach(e => e.classList.remove('selected'));
            e.target.classList.add('selected');
            
            colorOption = e.target.getAttribute('id');
        });
    });

})

function createGrid(resolution) {
    let size = 100 / resolution;
    let grid = [];

    for (let i = 0; i < resolution * resolution; i++) {
        let div = document.createElement('div');
        div.style.width = size + '%';
        grid.push(div);
    }

    const cont = document.querySelector('#grid');

    grid.forEach(e => cont.appendChild(e));
}

function randomColor() {
    return Math.floor(Math.random()*255);
}

// grid.forEach(e => cont.appendChild(e));

// cont.appendChild('huj');


// select num of squares
// divide 100% to num of squares
// paste