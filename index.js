// 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


//Dropdown effect when the 'more...' button is clicked
document.querySelectorAll('.card-text').forEach(cardText => {
    cardText.style.display = 'none';
});
document.querySelectorAll('.btn-primary').forEach((button, index) => {
    button.addEventListener('click', () => {
        const cardText = document.querySelectorAll('.card-text')[index];
        if (cardText.style.display === 'none') {
            cardText.style.display = 'block';
            button.textContent = 'Less...';
        } else {
            cardText.style.display = 'none'; 
            button.textContent = 'More...';
        }
    });
});



//image hover blur effect
document.querySelectorAll('.card-img-top').forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.opacity = '0.8';
    });
    image.addEventListener('mouseout', () => {
        image.style.opacity = '1';
    });
});

//greeting depending on the time of day
const greetingMessage = document.createElement('div');
greetingMessage.classList.add('greeting-message');
greetingMessage.style.padding = '10px';
greetingMessage.style.textAlign = 'center';
greetingMessage.style.fontWeight = 'bold';
greetingMessage.style.backgroundColor = '#f8f9fa';
greetingMessage.style.color = '#333';

const time = new Date().getHours();
if (time < 12) {
    greetingMessage.textContent = 'Good morning! Welcome to My Website!';
} else if (time < 18) {
    greetingMessage.textContent = 'Good afternoon! Hope you are having a great day!';
} else {
    greetingMessage.textContent = 'Good evening! Thanks for visiting!';
}
document.body.insertBefore(greetingMessage, document.body.firstChild);