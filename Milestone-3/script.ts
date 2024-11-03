// get reference to the form and preview area
const Resumeform = document.getElementById("Resume-form") as HTMLFormElement;
const ResumepreviewElement = document.getElementById("Resume-preview") as HTMLDivElement;

// handle form submission
Resumeform.addEventListener('submit', (event: Event) => {
    event.preventDefault(); //prevent page reload
    
    //collect the form submission values
    const name = (document.getElementById('name') as HTMLInputElement).value
    const fathersname = (document.getElementById('fathersname') as HTMLInputElement).value
    const gender = (document.getElementById('gender') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const birthday = (document.getElementById('birthday') as HTMLInputElement).value
    const address = (document.getElementById('address') as HTMLInputElement).value
    const degree = (document.getElementById('degree') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value
   
    //gernerate the resume content dynamically
    const resumehtml = `
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p><b>Name :</b>${name}</p>
    <p><b>Father's Name :</b>${fathersname}</p>
    <p><b>Gender :</b>${gender}</p>
    <p><b>Email :</b>${email}</p>
    <p><b>Phone :</b>${phone}</p>
    <p><b>Birthday :</b>${birthday}</p>
    <p><b>Address :</b>${address}</p>
    <h3>Education</h3>
    <p>${degree}</p>
    <h3>Experience</h3>
    <p>${experience}</p>
    <h3>Skills</h3>
    <p>${skills}</p>
    `;

    //display the resume in the preview area
    if (ResumepreviewElement){
     ResumepreviewElement.innerHTML = resumehtml;
    } 
});