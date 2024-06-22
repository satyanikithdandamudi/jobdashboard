const searchInputEl = document.querySelector('.search-input-el');
            
const infiteScrollData = [
    {
        "imgUrl": "assets/profile.jpg",
        "text": "Jafri Zain has fixed an interview"
    },
    {
        "imgUrl": "assets/profile.jpg",
        "text": "Riya Singh has fixed an interview"
    },
    {
        "imgUrl": "assets/profile.jpg",
        "text": "Suman Biswas got job 3 hours ago"
    },
    {
        "imgUrl": "assets/profile.jpg",
        "text": "As Swathi has fixed an interview"
    },
    {
        "imgUrl": "assets/profile.jpg",
        "text": "Zill Macwan got job 3 hours ago"
    },
    {
        "imgUrl": "assets/profile.jpg",
        "text": "Foridul got job 6 hours ago"
    },
    {
        "imgUrl": "assets/profile.jpg",
        "text": "Dharmender has fixed an interview"
    },
    {
        "imgUrl": "assets/profile.jpg",
        "text": "Riya Comfort has fixed an interview"
    },
    {
        "imgUrl": "assets/profile.jpg",
        "text": "Vikash kumar got job 4 hours ago"
    },
    {
        "imgUrl": "assets/profile.jpg",
        "text": "Ashirwad got job 8 hours ago"
    },
    {
        "imgUrl": "assets/profile.jpg",
         "text": "Swarup DAS has fixed an interview"
    }
];


const infiniteScrollListItems = document.querySelectorAll('.infinite-scroll-list-items');

// infinite scroll

infiteScrollData.map((item, index) => {
    const infiniteScrolllistEl = document.createElement('li');
    const userProfileEl = document.createElement('img');
    const userTextEl = document.createElement('p');
    userProfileEl.src = `${item.imgUrl}`;
    userTextEl.textContent = `${item.text}`;
    infiniteScrolllistEl.appendChild(userProfileEl);
    infiniteScrolllistEl.appendChild(userTextEl);
    infiniteScrolllistEl.classList.add('infinite-scroll-list');
    infiniteScrollListItems[0].appendChild(infiniteScrolllistEl)
});

infiteScrollData.map((item, index) => {
    const infiniteScrolllistEl = document.createElement('li');
    const userProfileEl = document.createElement('img');
    const userTextEl = document.createElement('p');
    userProfileEl.src = `${item.imgUrl}`;
    userTextEl.textContent = `${item.text}`;
    infiniteScrolllistEl.appendChild(userProfileEl);
    infiniteScrolllistEl.appendChild(userTextEl);
    infiniteScrolllistEl.classList.add('infinite-scroll-list');
    infiniteScrollListItems[1].appendChild(infiniteScrolllistEl)
});


// placeholder text changer

const placeholderTextArray = [
    "'skill'",
    "'title'",
    "'company'",
]

const constantText = 'Search jobs by '

let index = 0;

function changePlaceholderText() {
    searchInputEl.placeholder = constantText + placeholderTextArray[index];
    index = (index + 1) % placeholderTextArray.length;
}

setInterval(changePlaceholderText, 1000);

const optionsInputEl = document.querySelector('.options-input-el');
const clearTextLocationInBtn = document.querySelector('.clear-text-locationIn-btn');

optionsInputEl.value = 'Anywhere in india';

optionsInputEl.addEventListener('focus', () => {
    clearTextLocationInBtn.style.visibility = 'visible';
});

clearTextLocationInBtn.addEventListener('click', () => {
    optionsInputEl.value = '';
    clearTextLocationInBtn.style.visibility = 'hidden';
});