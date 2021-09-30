

const init = () => {
    fetch("http://localhost:3000/ramens")
        .then(response => response.json())
        // .then(data => console.log(data)) // to check for error
        .then(data => displayRamens(data)) 

    const form = document.getElementById('new-ramen');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const ramenObj = {}
        ramenObj.name = document.getElementById('new-name').value;
        ramenObj.restaurant = document.getElementById('new-restaurant').value;
        ramenObj.image = document.getElementById('new-image').value;
        ramenObj.rating = document.getElementById('new-rating').value;
        ramenObj.comment = document.getElementById('new-comment').value;

        form.reset();

        displayRamen(ramenObj)

        // console.log(ramenObj); //to check

    })

}

function displayRamen(ramen){

    //grab the element to which you want to add ramens images to
    const ramenMenu = document.getElementById('ramen-menu');

    const image = document.createElement('img')
        image.src = ramen.image;

        image.addEventListener('click', () =>{
            document.querySelector('#detail-image').src = ramen.image;
            document.querySelector('#name').innerHTML = ramen.name;
            document.querySelector('#restaurant').innerHTML = ramen.restaurant;
            document.querySelector('#rating-display').innerHTML = ramen.rating;
            document.getElementById('comment-display').innerHTML = ramen.comment;
        })

        ramenMenu.appendChild(image);
}

function displayRamens(ramens){

    

    ramens.forEach(ramen => {

        displayRamen(ramen)

    });

}

document.addEventListener("DOMContentLoaded", init)