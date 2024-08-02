fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => {
    let user = data.results[0];
    let fullName = user.name.first + ' ' + user.name.last;
    let imageSrc = user.picture.large;

    let nameElement = document.createElement('h2');
    nameElement.textContent = fullName;
    document.body.appendChild(nameElement);

    let imageElement = document.createElement('img');
    imageElement.src = imageSrc;
    document.body.appendChild(imageElement);
  });

let ageButton = document.createElement('button');
ageButton.textContent = 'Age';
ageButton.dataset.attr = 'age';
document.body.appendChild(ageButton);

let emailButton = document.createElement('button');
emailButton.textContent = 'Email';
emailButton.dataset.attr = 'email';
document.body.appendChild(emailButton);

let phoneButton = document.createElement('button');
phoneButton.textContent = 'Phone';
phoneButton.dataset.attr = 'phone';
document.body.appendChild(phoneButton);

let infoSection = document.createElement('section');
infoSection.id = 'additional-info';
document.body.appendChild(infoSection);

ageButton.addEventListener('click', () => {
  infoSection.textContent = user.dob.age;
});

emailButton.addEventListener('click', () => {
  infoSection.textContent = user.email;
});

phoneButton.addEventListener('click', () => {
  infoSection.textContent = user.phone;
});