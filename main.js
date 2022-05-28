const menu = document.querySelector('.nav-bars');
const bars = document.querySelector('#menuLink');
const closeMenu = document.querySelector('.fa-times');
const navLink = document.querySelector('.navLink');
bars.addEventListener('click', () => {
  menu.classList.toggle('show-menu');
  document.body.style.overflowY = 'hidden';
});
closeMenu.addEventListener('click', () => {
  menu.classList.remove('show-menu');
  document.body.style.overflowY = 'scroll';
});
navLink.addEventListener('click', () => {
  document.body.style.overflowY = 'scroll';
  menu.classList.toggle('show-menu');
});
const supportList = [
  {
    name: 'Aster Alemu',
    postion: 'Hair stylist and makeup artist at Faya beauty salon',
    imagePath: 'Image/featured-speaker.png',
    description: 'Aster,is one of a dedicated support team who solves any issue related to GSP and speedlimeter. He has a long time experice in this domain.',
  },
  {
    name: 'Aster Alemu',
    postion: 'Hair stylist and makeup artist at Faya beauty salon',
    imagePath: 'Image/featured-speaker.png',
    description: 'Aster,is one of a dedicated support team who solves any issue related to GSP and speedlimeter. He has a long time experice in this domain.',
  },
  {
    name: 'Aster Alemu',
    postion: 'Hair stylist and makeup artist at Faya beauty salon',
    imagePath: 'Image/featured-speaker.png',
    description: 'Aster,is one of a dedicated support team who solves any issue related to GSP and speedlimeter. He has a long time experice in this domain.',
  },
  {
    name: 'Aster Alemu',
    postion: 'Hair stylist and makeup artist at Faya beauty salon',
    imagePath: 'Image/featured-speaker.png',
    description: 'Aster,is one of a dedicated support team who solves any issue related to GSP and speedlimeter. He has a long time experice in this domain.',
  },
  {
    name: 'Aster Alemu',
    postion: 'Hair stylist and makeup artist at Faya beauty salon',
    imagePath: 'Image/featured-speaker.png',
    description: 'Aster,is one of a dedicated support team who solves any issue related to GSP and speedlimeter. He has a long time experice in this domain.',
  },
  {
    name: 'Aster Alemu',
    postion: 'Hair stylist and makeup artist at Faya beauty salon',
    imagePath: 'Image/featured-speaker.png',
    description: 'Aster,is one of a dedicated support team who solves any issue related to GSP and speedlimeter. He has a long time experice in this domain.',
  },
];
const expandSupport = (start, end) => {
  if (start === 0) {
    document.querySelector('#support-list').innerHTML = '';
  }
  for (let i = start; i < end; i += 1) {
    document.querySelector('#support-list').innerHTML += `
        <li class="support-item">
          <div class="avator">
            <img src="${supportList[i].imagePath}" alt="">
          </div>
          <div class="biography">
            <h3 class="names">${supportList[i].name}</h3>
            <p class="job-title">${supportList[i].postion}</p>
            <hr class="support-info-separator">
            <p class="experience">${supportList[i].description}</p>
          </div>
        </li>
      `;
  }
};

if (window.screen.width < 768) {
  expandSupport(0, 2);
} else {
  expandSupport(0, supportList.length);
}

document.querySelector('.more').addEventListener('click', (e) => {
  if (!e.target.classList.contains('show-more')) {
    e.target.classList.add('show-more');
    expandSupport(2, supportList.length);
    e.target.innerHTML = 'Less <i class="fa fa-angle-up"></i>';
  } else {
    e.target.innerHTML = 'More <i class="fa fa-angle-down"></i>';
    e.target.classList.remove('show-more');
    expandSupport(0, 2);
  }
});
window.addEventListener('resize', () => {
  if (window.screen.width < 768) {
    expandSupport(0, 2);
  } else {
    expandSupport(0, supportList.length);
  }
});