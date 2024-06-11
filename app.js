
document.getElementById("submit_btn").addEventListener('click', render);

function Patient(fullname, password, dob, gender, phone, chronic_diseases) {
    this.fullname = fullname;
    this.password = password;
    this.dob = dob;
    this.gender = gender;
    this.phone = phone;
    this.chronic_diseases = chronic_diseases;
}

function render(event) {
    event.preventDefault(); // منع السلوك الافتراضي للنموذج

    // الحصول على القيم المدخلة
    const fullname = document.getElementById('fullname').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;
    const phone = document.getElementById('phone').value;
    const chronic_diseases = document.getElementById('chronic_diseases').value;

   
    const patient = new Patient(fullname, password, dob, gender, phone, chronic_diseases);

    // تخزين القيم في localStorage
    localStorage.setItem("name", patient.fullname);
    localStorage.setItem("password", patient.password);
    localStorage.setItem("dob", patient.dob);
    localStorage.setItem("gender", patient.gender);
    localStorage.setItem("phone", patient.phone);
    localStorage.setItem("chronic_diseases", patient.chronic_diseases);

    // إنشاء عناصر البطاقة
    const card = document.createElement('div');
    card.className = 'card';

    const cardTitle = document.createElement('h2');
    cardTitle.className = 'card-title';
    cardTitle.textContent = patient.fullname;
   

    const img = document.createElement('img');
    img.src = 'assets/women.jpg'; // قم بتغيير هذا إلى رابط الصورة الخاصة بك
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

    // إلحاق محتويات البطاقة بالبطاقة
    card.appendChild(img);
    card.appendChild(cardTitle);
    card.appendChild(cardContentDob);
    card.appendChild(cardContentGender);
    card.appendChild(cardContentPhone);
    card.appendChild(cardContentDisease);

    // إلحاق البطاقة بالحاوية
    document.getElementById('cardContainer').appendChild(card);
    document.getElementById('body').appendChild(cardContainer);
}
