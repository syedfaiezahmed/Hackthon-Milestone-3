// get reference to the form and preview area
var Resumeform = document.getElementById("Resume-form");
var ResumepreviewElement = document.getElementById("Resume-preview");
// handle form submission
Resumeform.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload
    //collect the form submission values
    var name = document.getElementById('name').value;
    var fathersname = document.getElementById('fathersname').value;
    var gender = document.getElementById('gender').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var birthday = document.getElementById('birthday').value;
    var address = document.getElementById('address').value;
    var degree = document.getElementById('degree').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //gernerate the resume content dynamically
    var resumehtml = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name :</b>".concat(name, "</p>\n    <p><b>Father's Name :</b>").concat(fathersname, "</p>\n    <p><b>Gender :</b>").concat(gender, "</p>\n    <p><b>Email :</b>").concat(email, "</p>\n    <p><b>Phone :</b>").concat(phone, "</p>\n    <p><b>Birthday :</b>").concat(birthday, "</p>\n    <p><b>Address :</b>").concat(address, "</p>\n    <h3>Education</h3>\n    <p>").concat(degree, "</p>\n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n    ");
    //display the resume in the preview area
    if (ResumepreviewElement) {
        ResumepreviewElement.innerHTML = resumehtml;
    }
});
