//Fetch data from JSON server

const BASE_URL = ("http://localhost:3000/ramens/")

fetch(BASE_URL)
    .then (resp => resp.json())
    .then (ramen => {
        ramen.forEach(renderRamen);
        console.log(ramen)
    });


function renderRamen(ramen){

// Devlierable 1: Display ramen images

// grab main pic location
const picsLocation = document.getElementById("ramen-menu")
// console.log(picsLocation);

// create image elements
const ramenPics = document.createElement("img");
// pics source
ramenPics.src = ramen.image

// attach pics to location
picsLocation.appendChild(ramenPics);






// Deliverable 2: Click on images to see all info(comment, rating, img, name, restaurant)
ramenPics.addEventListener('click', () => {clickInfo(ramen)});


    function clickInfo(ramen){

        //grab comment location
        const commentLocation = document.getElementById("comment-display")

        //grab rating location
        const ratingLocation = document.getElementById("rating-display")

        //create comments element
        // const comments = document.createElement("h3")

        //create rating element
        // const rating = document.createElement("h3")

        //comment source
        commentLocation.textContent = ramen.comment

        //rating source
        ratingLocation.textContent = ramen.rating

        // attach comments
        // commentLocation.append(comments)

        // attach rating
        // ratingLocation.append(rating)

        const nameLocation = document.getElementById("original-name")

        // const ramenName = document.createElement("h2")

        nameLocation.textContent = ramen.name

        // nameLocation.append(ramenName);

        const restaurantLocation = document.getElementById("old-restaurant")

        restaurantLocation.textContent = ramen.restaurant


        //main pic location
        const displayPic = document.querySelector(".detail-image")

        // const ramenPics = document.createElement("img");

        displayPic.src = ramen.image

        // //attach pic
        // displayPic.append(ramenPics);

        // ramen.forEach(renderRamen);


    }

    

}

// Deliverable 3: Create new ramen

let newForm = document.getElementById("new-ramen")

    function createRamen(e){
        e.preventDefault();

        let newRamenName = document.getElementById("new-name").value;
        let newRestaurant = document.getElementById("new-restaurant").value;
        let newImage = document.getElementById("new-image").value;
        let newRating = document.getElementById("new-rating").value;
        let newComment = document.getElementById("new-comment").value;
        // let lastRamenId = ramen.id.length -1;

        let newRamen = {
            // id: lastRamenId +1,
            name: newRamenName,
            restaurant: newRestaurant,
            image: newImage,
            rating: newRating,
            comment: newComment,
        }

        // name.textContent = newRamenName;
        // restaurant.textContent = newRestaurant;
        // image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Shoyu_Ramen.jpg/1200px-Shoyu_Ramen.jpg",


        const picsLocation = document.getElementById("ramen-menu") //redefined again
        // add newRamen to JSON.. or not, just append to DOM
        // picsLocation.append(newRamen);
        document.getElementById("ramen-menu").append(newRamen);

        //render new ramen
        renderRamen(newRamen);

        // clear out form inputs
        newForm.reset();

        

    }

    newForm.addEventListener('submit', createRamen)

    // newImage example: https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Shoyu_Ramen.jpg/1200px-Shoyu_Ramen.jpg





