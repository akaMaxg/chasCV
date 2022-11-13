
//Function to retrieve data from data.json
const getInformation = async () => {
    const request = new Request('data.json');
    const response = await fetch(request);
    //Returns content in json format. (Is this necessary if its already in json?)
    const cvElements = await response.json();
return cvElements;
}

//initiate dataJson
const cvElements = await getInformation()

//Store different objects in json
const employments = cvElements.employment
const educations = cvElements.education
const portfolio = cvElements.portfolio

//DOM-targets och initialiserar variabler för listhantering
let homelink = document.querySelector('.homelink')
let careerLink = document.querySelector('.careerlink')
let educationLink = document.querySelector('.educationlink')
let portfolioLink = document.querySelector('.portfoliolink')
let container = document.querySelector('.container')

//Modal
let dogBtn = document.querySelector('.dogButton')
let modal = document.querySelector('.modalPop')
let carouselSlide = document.querySelector('.carousel-slide');
const carouselImg = document.querySelectorAll('.carousel-slide img');

//buttons
const prevBtn = document.querySelector('.previousBtn')
const nextBtn = document.querySelector('.nextBtn')
const modalClose = document.querySelector('.modal-close')

//arrayCounter
let carouselImageIndex = 0;

//Variables for posting data from Json
let postJobItem = ``;
let postEduItem = ``;
let postPortItem = ``;

//At load, hide certain elements
modal.classList.add('hide')
carouselImg.forEach((element, index) => {
    carouselImg[index].classList.add('hide');
})

//Ensure first picture shows at modal open
carouselImg[0].classList.remove('hide');

//button listeners for picture slides
nextBtn.addEventListener('click',() => {
        nextImg()
    })

prevBtn.addEventListener('click',() => {
        prevImg()
    })

//Button to fade out the main page when dog-button is pressed
dogBtn.addEventListener('click', function() {
    fadeMain()
    //Shows the modal
    toggleModal()
})

//Button that closes the modal also fades in/out main page
modalClose.addEventListener('click',function(){
    fadeMain()
    toggleModal()
})



//Frontpage
//Fills startpage with some breadtext
document.querySelector('.mainContent').innerHTML = `<p><b><Em>Välkommen till mitt CV. Använd navigationsmenyn för att navigera sidan.</Em><br></b><br> Lorem ipsum si alias!</p>`

//Click-function to enter same information if "home" is clicked
homelink.addEventListener('click',()=> {
    document.querySelector('.mainContent').innerHTML = `<p><b><Em>Välkommen till mitt CV. Använd navigationsmenyn för att navigera sidan.</Em><br></b><br> Lorem ipsum si alias!</p>
`
//Empties the other variables that post information to avoid duplicates
postJobItem = ``;
postEduItem = ``;
postPortItem = ``;
})


//When career link is pressed
//Get information from career in JSON
//Formats and posts employments in main page.
careerLink.addEventListener('click', function() {

//Checks so that job page is not filled
    if (postJobItem.length == 0) {
        const fillCv = (cvElements) => {
            employments.forEach(element => {
                const newItem = `
                    <li>
                        <p><b>${element.jobTitle}</b></p>
                        <em><b>${element.company}</b></em>
                        <p><em>${element.time}</em></p>
                        <p>${element.text}</p>
                    </li><br>`
                postJobItem += newItem
            })
        }
//fills page
    fillCv(cvElements)
    document.querySelector('.mainContent').innerHTML = postJobItem
}
//Clears other variables to avoid duplicates
postEduItem = ``;
postPortItem = ``;
})

//When Education link is pressed
//Get information from education in JSON
//Formats and posts education in main page.
educationLink.addEventListener('click', function() { 
    //Checks so that job page is not filled
    if (postEduItem.length == 0) {
    const fillCvEdu = (cvElements) => {
        educations.forEach(element => {
            const newItem = `
                <li>
                <p><em><b>${element.institute}</b></em></p>
                <p><em>${element.time}</em></p>
                <p><em<b>${element.program}</b></em></p>
                </li>`
            postEduItem += newItem
            console.log(postEduItem)
        })
    }
    fillCvEdu(cvElements)
    document.querySelector('.mainContent').innerHTML = postEduItem
}
//Clears other variables to avoid duplicates
    postJobItem = ``;
    postPortItem = ``;
})

//When Portfoli link is pressed
//Get information from Portfolio in JSON
//Formats and posts Portfolio in main page.
portfolioLink.addEventListener('click', function() { 
        //Checks so that job page is not filled
    if (postPortItem.length == 0) {
    const fillCvPort = (cvElements) => {
        portfolio.forEach(element => {
            const newItem = `
                <li>
                    <p><em><b>${element.title}</b></em></p>
                    Using: ${element.language}
                    <p><em>${element.description}</em></p>
                    <a class = "clicked" href="${element.link}"><u>Click here to see ${element.title} repo!</u></a>
                </li><br>`
            postPortItem += newItem
            console.log(postPortItem)
            })
        }
    fillCvPort(cvElements)
    document.querySelector('.mainContent').innerHTML = postPortItem
}
//Clears other variables to avoid duplicates
    postJobItem = ``;
    postEduItem = ``;
})

//function that toggles the modal
function toggleModal(){
    modal.classList.toggle('hide')
}

//Function that makes fades out main page
function fadeMain(){
    container.classList.toggle('reducedOpac')    
    container.classList.toggle('unclickable')
}

//Image slide manage functions
function nextImg() {
    if (carouselImageIndex==1) {
        carouselImg[1].classList.add('hide')
        carouselImg[2].classList.remove('hide')
    }
    if (carouselImageIndex==0) {
        carouselImg[0].classList.add('hide')
        carouselImg[1].classList.remove('hide')
        carouselImageIndex++
        }
}

function prevImg() {
    if (carouselImageIndex==0) {
        carouselImg[0].classList.remove('hide');
        carouselImg[1].classList.add('hide');
    }
    if (carouselImageIndex==1) {
        carouselImg[1].classList.remove('hide');
        carouselImg[2].classList.add('hide')
        carouselImageIndex--
    }
    if (carouselImageIndex==2) {
        carouselImg[0].classList.add('hide');
        carouselImg[1].classList.remove('hide');
        carouselImg[2].classList.add('hide');
        carouselImageIndex--
    }
    if (carouselImageIndex <=0) return;
    if(carouselImageIndex == 1){
        carouselImg[1].classList.remove('hide')
        carouselImg[0].classList.add('hide')
        carouselImageIndex++
    }
}