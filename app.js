//Funktion för att hämta data från data.json
const getInformation = async () => {
    const request = new Request('data.json');

    const response = await fetch(request);

    const cvElements = await response.json();

//returnerar innehåll i .json format (behövs denna när filen redan är JSON formatterad?)
return cvElements;
}

//initierar JSON
const cvElements = await getInformation()
console.log(cvElements)
//lagrar delar av JSON i separata variabler
const employments = cvElements.employment
console.log(employments)
const educations = cvElements.education
console.log(educations)
const portfolio = cvElements.portfolio
console.log(portfolio)

//DOM-länkar och initialiserar variabler för listhantering
let homelink = document.querySelector('.homelink')
let careerLink = document.querySelector('.careerlink')
let educationLink = document.querySelector('.educationlink')
let portfolioLink = document.querySelector('.portfoliolink')
let postJobItem = ``;
let postEduItem = ``;
let postPortItem = ``;

//Careerlänk
//Hämtar information från career, som hämtar från json.
//formatterar och sen i slutet på clickfunktion lägger formaterad lista
careerLink.addEventListener('click', function() { 
    
    const fillCv = (cvElements) => {
        employments.forEach(element => {
            const newItem = `
            <li>
                    <p><em><b>${element.time}</b></em></p> <br>
                    ${element.jobTitle}
                    <p><em><b>${element.company}</b></em></p> <br>
                    ${element.jobTitle}
                    <p>${element.text}</p><br>
            </li>`
            postJobItem += newItem
            console.log(postJobItem)
        })

    }
    console.log(postJobItem)
    fillCv(cvElements)
    document.querySelector('.testing123').innerHTML = postJobItem
})

//Ska göras om, skriver just nu över hela main och förstör UL för resterande click
homelink.addEventListener('click',()=> document.querySelector('.Main').innerHTML = `<main class="Main">
<p><b><Em>Välkommen till mitt CV. Använd navigationsmenyn för att navigera sidan.</Em><br></b><br> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit voluptatibus beatae ad accusantium non. Quod sit dolorum beatae sint quaerat excepturi vel culpa voluptates doloremque, est porro similique autem neque in optio ab perspiciatis accusamus aliquam, mollitia iusto natus reiciendis minima magni enim? Natus dolorem facilis voluptas labore animi. Harum libero vel saepe neque dolores quae ab molestiae odio, enim voluptates quisquam nisi at, atque nemo quam corporis minus aliquam dolorum veniam delectus voluptatibus autem cum fugiat! Earum nam architecto ex facilis nesciunt nihil, fugit aperiam, consequatur commodi, distinctio saepe tempore? Quos inventore, dolore sint neque earum laborum nisi alias!</p>
`
)

//Utbildningslänk 
//Hämtar information från educations, som hämtar från json.
//formatterar och sen i slutet på clickfunktion lägger formaterad lista
educationLink.addEventListener('click', function() { 

    const fillCvEdu = (cvElements) => {
        educations.forEach(element => {
            const newItem = `
                <li>
                    <p><em><b>${element.time}</b></em></p> <br>
                    ${element.institute}
                    <p><em><b>${element.program}</b></em></p> <br>
                </li>`
        postEduItem += newItem
        console.log(postEduItem)
    })
}

fillCvEdu(cvElements)
document.querySelector('.testing123').innerHTML = postEduItem
})


//Portfoliolänk
//Hämtar information från portfolio, som hämtar från json.
//formatterar och sen i slutet på clickfunktion lägger formaterad lista
portfolioLink.addEventListener('click', function() { 

    const fillCvPort = (cvElements) => {
        portfolio.forEach(element => {
            const newItem = `
                <li>
                    <p><em><b>${element.title}</b></em></p> <br>
                    ${element.language}
                    <p><em><b>${element.description}</b></em></p> <br>
                    ${element.link}
                </li>`
        postPortItem += newItem
        console.log(postPortItem)
    })
}

fillCvPort(cvElements)
document.querySelector('.testing123').innerHTML = postPortItem
})
