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

setInterval(changePlaceholderText, 2000);

// location input element 

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

// scroll progress bar

const jobOpeningCompanyCardsContainer = document.querySelector('.job-opening-company-cards-container');

const jobOpeningScrollProgressContainer = document.querySelector('.job-opening-scroll-progress-container');

const jobOpeningScroll = document.querySelector(".job-opening-scroll");

jobOpeningCompanyCardsContainer.addEventListener('scroll', () => {
    const scrollLeft = jobOpeningCompanyCardsContainer.scrollLeft;
    // console.log(scrollLeft);
    const scrollWidth = jobOpeningCompanyCardsContainer.scrollWidth - jobOpeningCompanyCardsContainer.clientWidth;
    const scrollPercentage = (scrollLeft/scrollWidth) * 100;
    // console.log(scrollPercentage);
    const mainProgressBarWidth = jobOpeningScrollProgressContainer.clientWidth
    const progressBarWidth = jobOpeningScroll.clientWidth
    const maxLeft = mainProgressBarWidth - progressBarWidth
    const leftPosition = (scrollPercentage/100) * maxLeft
    // console.log(leftPosition)
    jobOpeningScroll.style.left = leftPosition + 'px';
});

// trending job opening infinite scroll section

const trendingJobInfiniteScrollList = [
    {
        imgUrl: '',
        jobText: 'Nurse / Patient Care',
        numText: '115 openings'
    },
    {
        imgUrl: '',
        jobText: 'Interior Designer',
        numText: '119 openings'
    },
    {
        imgUrl: '',
        jobText: 'Beautician / Hair Stylist',
        numText: '119 openings'
    },
    {
        imgUrl: '',
        jobText: 'Labour / Factory Worker',
        numText: '122 openings'
    },
    {
        imgUrl: '',
        jobText: 'Hospitality/ Hotel/ Event Management',
        numText: '169 openings'
    },
    {
        imgUrl: '',
        jobText: 'Machine Operator',
        numText: '186 openings'
    },
    {
        imgUrl: '',
        jobText: 'Office Help / Peon',
        numText: '186 openings'
    },
    {
        imgUrl: '',
        jobText: 'Software / Web Developer',
        numText: '204 openings'
    },
    {
        imgUrl: '',
        jobText: 'Housekeeping',
        numText: '217 openings'
    },
    {
        imgUrl: '',
        jobText: 'Counsellor (Career / Visa)',
        numText: '247 openings'
    },
    {
        imgUrl: '',
        jobText: 'Civil Engineer / Architect',
        numText: '249 openings'
    },
    {
        imgUrl: '',
        jobText: 'Graphic Designer',
        numText: '272 openings'
    },
    {
        imgUrl: '',
        jobText: 'Computer / Data Entry Operator / COPA',
        numText: '315 openings'
    },
]

const hoverListDiffColors = [
    'list-hover-1', 'list-hover-2', 'list-hover-3' 
]

const trendingJobScrollEl = document.querySelectorAll('.trending-job-roles-infinite-scroll-list-items');

trendingJobInfiniteScrollList.map((item) => {
    const trendingJobScrollListEl = document.createElement('li');
    trendingJobScrollListEl.addEventListener('mouseenter', () => {
        const randomValue = Math.floor(Math.random() * hoverListDiffColors.length);
        trendingJobScrollListEl.classList.add(`${hoverListDiffColors[randomValue]}`)
    });
    trendingJobScrollListEl.addEventListener('mouseleave', () => {
        for(let i = 0; i < hoverListDiffColors.length; i++){
            // console.log(trendingJobScrollListEl.classList[1] === hoverListDiffColors[i]);
            if(trendingJobScrollListEl.classList[1] === hoverListDiffColors[i]){
                trendingJobScrollListEl.classList.remove(hoverListDiffColors[i]);
            }
        }
    });
    trendingJobScrollListEl.classList.add('trending-job-roles-list');
    const paraText_1 = document.createElement('p');
    const paraText_2 = document.createElement('p');
    paraText_1.textContent = `${item.jobText}`;
    paraText_2.textContent = `${item.numText}`;
    trendingJobScrollListEl.appendChild(paraText_1);
    trendingJobScrollListEl.appendChild(paraText_2);
    trendingJobScrollEl[0].appendChild(trendingJobScrollListEl);
});

trendingJobInfiniteScrollList.map((item) => {
    const trendingJobScrollListEl = document.createElement('li');
    trendingJobScrollListEl.addEventListener('mouseenter', () => {
        const randomValue = Math.floor(Math.random() * hoverListDiffColors.length);
        trendingJobScrollListEl.classList.add(`${hoverListDiffColors[randomValue]}`)
    });
    trendingJobScrollListEl.addEventListener('mouseleave', () => {
        for(let i = 0; i < hoverListDiffColors.length; i++){
            if(trendingJobScrollListEl.classList[1] === hoverListDiffColors[i]){
                trendingJobScrollListEl.classList.remove(hoverListDiffColors[i]);
            }
        }
    });
    trendingJobScrollListEl.classList.add('trending-job-roles-list')
    const paraText_1 = document.createElement('p');
    const paraText_2 = document.createElement('p');
    paraText_1.textContent = `${item.jobText}`;
    paraText_2.textContent = `${item.numText}`;
    trendingJobScrollListEl.appendChild(paraText_1);
    trendingJobScrollListEl.appendChild(paraText_2);
    trendingJobScrollEl[1].appendChild(trendingJobScrollListEl);
});

trendingJobInfiniteScrollList.map((item) => {
    const trendingJobScrollListEl = document.createElement('li');
    trendingJobScrollListEl.addEventListener('mouseenter', () => {
        const randomValue = Math.floor(Math.random() * hoverListDiffColors.length);
        trendingJobScrollListEl.classList.add(`${hoverListDiffColors[randomValue]}`)
    });
    trendingJobScrollListEl.addEventListener('mouseleave', () => {
        for(let i = 0; i < hoverListDiffColors.length; i++){
            if(trendingJobScrollListEl.classList[1] === hoverListDiffColors[i]){
                trendingJobScrollListEl.classList.remove(hoverListDiffColors[i]);
            }
        }
    });
    trendingJobScrollListEl.classList.add('trending-job-roles-list')
    const paraText_1 = document.createElement('p');
    const paraText_2 = document.createElement('p');
    paraText_1.textContent = `${item.jobText}`;
    paraText_2.textContent = `${item.numText}`;
    trendingJobScrollListEl.appendChild(paraText_1);
    trendingJobScrollListEl.appendChild(paraText_2);
    trendingJobScrollEl[2].appendChild(trendingJobScrollListEl);
});

trendingJobInfiniteScrollList.map((item) => {
    const trendingJobScrollListEl = document.createElement('li');
    trendingJobScrollListEl.addEventListener('mouseenter', () => {
        const randomValue = Math.floor(Math.random() * hoverListDiffColors.length);
        trendingJobScrollListEl.classList.add(`${hoverListDiffColors[randomValue]}`)
    });
    trendingJobScrollListEl.addEventListener('mouseleave', () => {
        for(let i = 0; i < hoverListDiffColors.length; i++){
            if(trendingJobScrollListEl.classList[1] === hoverListDiffColors[i]){
                trendingJobScrollListEl.classList.remove(hoverListDiffColors[i]);
            }
        }
    });
    trendingJobScrollListEl.classList.add('trending-job-roles-list')
    const paraText_1 = document.createElement('p');
    const paraText_2 = document.createElement('p');
    paraText_1.textContent = `${item.jobText}`;
    paraText_2.textContent = `${item.numText}`;
    trendingJobScrollListEl.appendChild(paraText_1);
    trendingJobScrollListEl.appendChild(paraText_2);
    trendingJobScrollEl[3].appendChild(trendingJobScrollListEl);
});