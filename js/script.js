
// const cont = document.querySelector('#container');


let color = "#ff0000";

document.addEventListener('DOMContentLoaded',function(e){

    const range = document.querySelector('#grid-range');

    createGrid(range.value);

    const cont = document.querySelector('#grid');
    let changeColor = cont.addEventListener('mouseover', function(e) {
        // one color e.target.style.backgroundColor = color;

        // random color
        e.target.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;

        // shades of grey
        
        e.target.style.backgroundColor = color;
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


    document.querySelector('#favcolor').addEventListener('input', function(e){
        color = e.target.value;
    });

    document.querySelector('#clear').addEventListener('click', function() {
        cont.innerHTML = '';
        createGrid(range.value);
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