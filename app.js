
document.getElementById("submit_btn").addEventListener('click', render);

// constructor
function Patient(fullname, password, dob, gender, phone, chronic_diseases,email) {
    this.fullname = fullname;
    this.password = password;
    this.dob = dob;
    this.gender = gender;
    this.phone = phone;
    this.chronic_diseases = chronic_diseases;
}

// render method
function render(event) {
    event.preventDefault(); 

    // get element
    const fullname = document.getElementById('fullname').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const phone = document.getElementById('phone').value;
    const chronic_diseases = document.getElementById('chronic_diseases').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message');

// create object
    const patient = new Patient(fullname, password, dob, gender, phone, chronic_diseases,email);
// create array
    let patients = JSON.parse(localStorage.getItem('patients')) || [];

    patients.push(patient);

    localStorage.setItem('patients', JSON.stringify(patients));

    localStorage.setItem("name", patient.fullname);
    localStorage.setItem("password", patient.password);
    localStorage.setItem("dob", patient.dob);
    localStorage.setItem("gender", patient.gender);
    localStorage.setItem("phone", patient.phone);
    localStorage.setItem("chronic_diseases", patient.chronic_diseases);
    localStorage.setItem("email",email);
    
if (!validateUsername(fullname)) {
    if (message) {
        message.style.color = 'red';
        message.textContent = ' Username must be  without spaces';
    }
    return;
}

if (!validatePassword(password)) {
    if (message) {
        message.style.color = 'red';
        message.textContent = 'Password must be  more than 8 characters, with at least 1 number, uppercase, and special characters';
    }
    return;
}

if (!validateBirthday(dob)) {
    if (message) {
        message.style.color = 'red';
        message.textContent = 'DOB must be with this format is YYYY-MM-DD';

    }
    return;
}

if (!validateEmail(email)) {
    if (message) {
        message.style.color = 'red';
        message.textContent = 'Email must follows email format';
    }
    return;
}

if (!validatePhone(phone)) {
    if (message) {
        message.style.color = 'red';
        message.textContent = 'password must be with 10 digits starts with 07';

    return;
}


if (message) {
    message.style.color = 'green';
    message.textContent = 'تم التسجيل بنجاح.';
}

displayPatientCard(patient);
}

function validateUsername(username) {
return /^[^\s]+$/.test(username);
}

function validatePassword(password) {
const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{9,}$/;
return regex.test(password);
}

function validateBirthday(dob) {
const regex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
return regex.test(dob);
}

function validateEmail(email) {
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
return regex.test(email);
}

function validatePhone(phone) {
const regex = /^07\d{8}$/;
return regex.test(phone);
}


// DOM
    const card = document.createElement('div');
    card.className = 'card';

    const cardTitle = document.createElement('h2');
    cardTitle.className = 'card-title';
cardTitle.textContent = patient.fullname;;
   

    const img = document.createElement('img');
    img.src = 'assets/women.jpg'; 
    img.alt = 'Patient Image';
    img.style.width = "300px";
    img.style.height = "200px";
    


    const cardContentDob = document.createElement('p');
    cardContentDob.className = 'card-content';
    cardContentDob.innerHTML = `<strong>Date of Birth:</strong> ${patient.dob}`;


    const cardContentGender = document.createElement('p');
    cardContentGender.className = 'card-content';
    cardContentGender.innerHTML = `<strong>Gender:</strong> ${patient.gender}`;

    const cardContentPhone = document.createElement('p');
    cardContentPhone.className = 'card-content';
    cardContentPhone.innerHTML = `<strong>Phone Number:</strong> ${patient.phone}`;

    const cardContentDisease = document.createElement('p');
    cardContentDisease.className = 'card-content';
    cardContentDisease.innerHTML = `<strong>Chronic Diseases:</strong> ${patient.chronic_diseases}`;

    
    card.appendChild(img);
    card.appendChild(cardTitle);
    card.appendChild(cardContentDob);
    card.appendChild(cardContentGender);
    card.appendChild(cardContentPhone);
    card.appendChild(cardContentDisease);

    document.getElementById('cardContainer').appendChild(card);
    document.getElementById('body').appendChild(cardContainer);
}



// let t = "asd fg  ";
// let res = t.match(/\s/g);
// console.log(res);


// function validatePassword(password) {
//     // تعبير عادي للتحقق من الشروط
//     const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{9,}$/;
//     return regex.test(password);
// }


// if (validateBirthday(birthday)) {
//     message.style.color = 'green';
//     message.textContent = 'تاريخ الميلاد صحيح.';
// } else {
//     message.style.color = 'red';
//     message.textContent = 'تاريخ الميلاد غير صحيح. الرجاء إدخال التاريخ بالصيغة YYYY-MM-DD.';
// }


// function validateBirthday(birthday) {
// // تعبير عادي للتحقق من الصيغة YYYY-MM-DD
// const regex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
// return regex.test(birthday);
// }


//   document.addEventListener('DOMContentLoaded', function() {
//             document.getElementById("submit_btn").addEventListener('click', render);
//         });

//         function Patient(fullname, password, dob, gender, phone, chronic_diseases, email) {
//             this.fullname = fullname;
//             this.password = password;
//             this.dob = dob;
//             this.gender = gender;
//             this.phone = phone;
//             this.chronic_diseases = chronic_diseases;
//             this.email = email;
//         }

//         function render(event) {
//             event.preventDefault(); 

//             const fullname = document.getElementById('fullname').value;
//             const password = document.getElementById('password').value;
//             const dob = document.getElementById('dob').value;
//             const gender = document.getElementById('gender').value;
//             const phone = document.getElementById('phone').value;
//             const chronic_diseases = document.getElementById('chronic_diseases').value;
//             const email = document.getElementById('email').value;
//             const message = document.getElementById('message');

//             if (!validateUsername(fullname)) {
//                 if (message) {
//                     message.style.color = 'red';
//                     message.textContent = ' Username must be  without spaces';
//                 }
//                 return;
//             }

//             if (!validatePassword(password)) {
//                 if (message) {
//                     message.style.color = 'red';
//                     message.textContent = 'Password must be  more than 8 characters, with at least 1 number, uppercase, and special characters';
//                 }
//                 return;
//             }

//             if (!validateBirthday(dob)) {
//                 if (message) {
//                     message.style.color = 'red';
//                     message.textContent = 'DOB must be with this format is YYYY-MM-DD';

//                 }
//                 return;
//             }

//             if (!validateEmail(email)) {
//                 if (message) {
//                     message.style.color = 'red';
//                     message.textContent = 'Email must follows email format';
//                 }
//                 return;
//             }

//             if (!validatePhone(phone)) {
//                 if (message) {
//                     message.style.color = 'red';
//                     message.textContent = 'password must be with 10 digits starts with 07';
            
//                 return;
//             }

//             const patient = new Patient(fullname, password, dob, gender, phone, chronic_diseases, email);
//             let patients = JSON.parse(localStorage.getItem('patients')) || [];

//             patients.push(patient);
//             localStorage.setItem('patients', JSON.stringify(patients));

//             if (message) {
//                 message.style.color = 'green';
//                 message.textContent = 'تم التسجيل بنجاح.';
//             }

//             displayPatientCard(patient);
//         }

//         function validateUsername(username) {
//             return /^[^\s]+$/.test(username);
//         }

//         function validatePassword(password) {
//             const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{9,}$/;
//             return regex.test(password);
//         }

//         function validateBirthday(dob) {
//             const regex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
//             return regex.test(dob);
//         }

//         function validateEmail(email) {
//             const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//             return regex.test(email);
//         }

//         function validatePhone(phone) {
//             const regex = /^07\d{8}$/;
//             return regex.test(phone);
//         }

//         function displayPatientCard(patient) {
//             const cardContainer = document.getElementById('cardContainer');

//             const card = document.createElement('div');
//             card.className = 'card';

//             const cardTitle = document.createElement('h2');
//             cardTitle.className = 'card-title';
//             cardTitle.textContent = patient.fullname;

//             const img = document.createElement('img');
//             img.src = 'assets/women.jpg';
//             img.alt = 'Patient Image';
//             img.style.width = "300px";
//             img.style.height = "200px";

//             const cardContentDob = document.createElement('p');
//             cardContentDob.className = 'card-content';
//             cardContentDob.innerHTML = `<strong>Date of Birth:</strong> ${patient.dob}`;

//             const cardContentGender = document.createElement('p');
//             cardContentGender.className = 'card-content';
//             cardContentGender.innerHTML = `<strong>Gender:</strong> ${patient.gender}`;

//             const cardContentPhone = document.createElement('p');
//             cardContentPhone.className = 'card-content';
//             cardContentPhone.innerHTML = `<strong>Phone Number:</strong> ${patient.phone}`;

//             const cardContentDisease = document.createElement('p');
//             cardContentDisease.className = 'card-content';
//             cardContentDisease.innerHTML = `<strong>Chronic Diseases:</strong> ${patient.chronic_diseases}`;

//             card.appendChild(img);
//             card.appendChild(cardTitle);
//             card.appendChild(cardContentDob);
//             card.appendChild(cardContentGender);
//             card.appendChild(cardContentPhone);
//             card.appendChild(cardContentDisease);

//             cardContainer.appendChild(card);
//         }}