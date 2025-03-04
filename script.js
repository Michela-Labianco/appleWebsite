
//querySelectorAll metod returns an array so we use for each to loop trough the list
//the callback function will have control as the argument
document.querySelectorAll('.watch-controls, .controls a, .iphone-btn')
.forEach(control => { //forEach takes one argument
    control.addEventListener('click', (e) => { //e = event object
        e.preventDefault()
    })
})
//because controls are created using the link elements once we click them, we will navigate to the top of the page by default.
//So after this 4 lines of code, we remove the default event so they will do nothing and we won't navigate to the top of the page.


//cube
const cube = document.querySelector('.cube');

let x = 0;
let y = 20; //so once we reload the page, 
// the cube is slightly rotated at the starting point.
let z = 0;

let bool = true; 
/*to stop the cube from rotating once we hover over the controls */

let interval; //no value
//to clear the interval, we need to store it into the variable and then we have
//to pass this variable into the clear interval function.

const firsArrow = document.querySelector('.top-x-control');
firsArrow.addEventListener('click', () => {
    /*we're going to increase the value by 20 degrees on each click */
    cube.style.transform = `rotateX(${x += 20}deg)
    rotateY(${y}deg) rotateZ(${z}deg)`; /*added other directions so the cube works properly*/

//so if we click the left arrow and then if we click the top control 
// the cube won't go back toits default position
// To maintain the previous position of the cube
// we define all three directions, no matter which direction we're changing.
})


const secondArrow = document.querySelector('.bottom-x-control');
secondArrow.addEventListener('click', () => {
    cube.style.transform = `rotateX(${x -= 20}deg)
    rotateY(${y}deg) rotateZ(${z}deg)`; 
})

const thirdArrow = document.querySelector('.left-y-control');
thirdArrow.addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg)
    rotateY(${y -= 20}deg) rotateZ(${z}deg)`; 
})

const forthArrow = document.querySelector('.right-y-control');
forthArrow.addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg)
    rotateY(${y += 20}deg) rotateZ(${z}deg)`; 
})

const fifthArrow = document.querySelector('.top-z-control');
fifthArrow.addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg)
    rotateY(${y}deg) rotateZ(${z -= 20}deg) `; 
})

const sixthArrow = document.querySelector('.bottom-z-control');
sixthArrow.addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg)
    rotateY(${y}deg) rotateZ(${z += 20}deg)`; 
})

//we will rotate the cube according to the y axis by 1 degree, 
// and we will rotate it with very little intervals -> 100 milliseconds.
const PlayPause = () => {
    if(bool){ //if true
        //we run this function
        interval = setInterval(() =>{
            cube.style.transform = `rotateX(${x}deg) 
            rotateY(${y++}deg) rotateZ(${z}deg)`; 
        /*to rotate the cube by 1 degree after each interval, 
        we create a variable y and assign the value of 0 to it
        Then we pass rotateY() function 
        and because in each interval we need to increase the value by 1 we write ${y++} */
        },100)
    } else{ //if false
        clearInterval(interval); //so it stop executing the above function
    }
}
PlayPause();

const mouseOver = document.querySelector('.controls');
mouseOver.addEventListener('mouseover', () => {
    bool = false; //when we mouse over the controls, we have to stop rotating
    PlayPause(); //call again the function in order to clear the interval and stop rotating
})

const mouseOut = document.querySelector('.controls');
mouseOut.addEventListener('mouseout', () => {
    bool = true; //so it will go back to rotating
    PlayPause();
})

const slideshowDivs = () => {
    for(let i = 1; i <= 5; i++){
        const div = document.createElement('div');//create a new element = div

        //to assign to that newly created element a proper background image
        div.style.backgroundImage = `url(/images/slideshow/section-1-bg-${i}.jpg)`;
        //in the image path, we pass the variable i instead of the number so 
        //on the first iteration [i] will be equal to one and the first background image will be used and so on.

        //For loop will continue working until all five images are used.

        
        //to display the first image by default. So when I is equal to 1 -> first iteration 
        // and the first div element is created, then we need to assign to it the class change.
        i === 1 && div.classList.add('change'); 

        //to add the new div to the wrapper
        document.querySelector('.slide-show').appendChild(div);                 
    }
}

slideshowDivs();



//To make the slideshow work
//we remove and add class change to the div elements in order, 
// with some intervals and we need to make it infinite.

//select all the div elements
const divs = document.querySelectorAll('.slide-show div');

let a = 1; //counter variable

const slideShow = () => {
    setInterval(() => {
        a++; //to increase a by 1
    
        //select the div element that have the class change
        const div = document.querySelector('.slide-show .change');
        //once is selected we need to remove the class
        div.classList.remove('change');

        if(a < divs.length){ //if true that is less then the length of the div elements
            // we add to the next div element
            div.nextElementSibling.classList.add('change');
        }else{
            //we have to access the first div element [index 0] and add to it class change
            divs[0].classList.add('change');
            a = 1;
        }
    },10000);
}

slideShow(); //to execute the code

//Once all five images are shown up, we get an error and the slideshow stops working.
//so we move this line of code: div.nextElementSibling.classList.add('change'); in the if statement



const section3Content = document.querySelector('.section-3-content');
//attach to an event to the global object (window) 
window.addEventListener('scroll', () => { // function executed once we scroll down the page

    //statement where we specify whether we scroll down to the section 3 content or not
    //scrollY returns the number of pixels by which the document is currently scrolled vertically
    if(window.scrollY 
        //innerHeight returns the height of a window's content area and we add to the scrollY
        //so it will give us the total distance from the top edge of the web page
        //the part which was scrolled up plus the height of the viewport.
        + window.innerHeight 

        // >= because we need to figure out whether we scroll down to the needed part of the web page or not.
        >= section3Content.offsetTop
        //offsetTop it gives us the position of the element in pixels
        //so it measures the distance from the top edge of the web page and if this condition is true it means that we scroll down to section3content

        //offsetHeight it gives us the height of the element in pixels and we need to divide it by two
        // so we can start effects when we scroll down and we reach to the half of the section3content
        + section3Content.offsetHeight /2){
            //to add a new class to the section3content
            section3Content.classList.add('change');
    }
})


/*if(window.scrollY + window.innerHeight >= section3Content.offsetTop + section3Content.offsetHeight /2){ */



const watchBands = document.querySelector('.bands');
const watchCases = document.querySelector('.cases');

//select controls
const topControl = document.querySelector('.watch-top-control');
const rightControl = document.querySelector('.watch-right-control');
const leftControl = document.querySelector('.watch-left-control');
const bottomControl = document.querySelector('.watch-bottom-control');

//vertical direction 
let axisY = 0; // it will increase or decrease by 70rem according to the direction.

//horizontal direction
let axisX= 0; // it will increase or decrease by 70rem according to the direction.


const hideControls = () => {
    if(axisY === -350){
        topControl.classList.add('hideControl'); //created a new class that has styles in css
    } else{ //if false
        topControl.classList.remove('hideControl');
    }
    if(axisY === 280){
        bottomControl.classList.add('hideControl');
    } else{
        bottomControl.classList.remove('hideControl');
    }
    if(axisX === 280){
        rightControl.classList.add('hideControl');
    } else{
        rightControl.classList.remove('hideControl');
    }
    if(axisX === -280){
        leftControl.classList.add('hideControl');
    } else{
        leftControl.classList.remove('hideControl');
    }
}

/*When we click the controls, we have to move the wrapper elements -> 
watch bands and watch cases and we will do that using margin.

So the width and height of each image are = to 35rem.
And in order to move one image and fit it to the band, we have to move the entire element by 70 0r 35rem.

So in order to control the distance -> the movement of the elements, 
we create two different variables:
One for the vertical direction -> for the cases
One for the horizontal direction -> for the bands */

topControl.addEventListener('click', () => {
    watchCases.style.marginTop = `${axisY -= 70}rem`;
    //console.log(axisY);
    hideControls();
})

bottomControl.addEventListener('click', () => {
    watchCases.style.marginTop = `${axisY += 70}rem`;
    //console.log(axisY);
    hideControls();
})

rightControl.addEventListener('click', () => {
    watchBands.style.marginRight = `${axisX += 70}rem`;
    // console.log(axisX);
    hideControls();
})
leftControl.addEventListener('click', () => {
    watchBands.style.marginRight = `${axisX -= 70}rem`;
    // console.log(axisX);
    hideControls();
})