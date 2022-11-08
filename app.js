//Funktion för att hämta data från data.json
const getInformation = async () => {
    const request = new Request('data.json');

    const response = await fetch(request);

    const cvElements = await response.json();

//returnerar innehåll i .json format (behövs denna när filen redan är JSON formatterad?)
return cvElements;
}

/* 
const fillCV = (cvElements) => {
    let employmentHtml = ``;
    cvObj.employment.forEach(element => {
        const listItem =`
        <li>
        <h4>${element.time}</h4>
        <p>
        <span>${element.jobTitle}</span>
        <span>${element.location}</span><br>
        ${element.text}
        </p>
        </li>
        `;
        employmentHtml += listItem
        console.log(cvObj)
    })
    document.querySelector(".employment-list").innerHTML = employmentHtml

    let educationHtml = ``;
    cvObj.education.forEach(element => {
    let listItem = `<li> ${element}</li>`;
    educationHtml += listItem
})
document.querySelector('.education-list').innerHTML = educationHtml

let internshipsHtml = ``;
cvObj.internships.forEach(element => {
let listItem = `<li> ${element.text}</li>`;
internshipsHtml += listItem
})
document.querySelector('.internship-list').innerHTML = internshipsHtml
}

const cvObj = await getInfo();
populateCv(cvObj); */