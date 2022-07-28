const menu = document.querySelector('.menu-icon');
const closeBtns = document.querySelectorAll('.close-menu');
const performers = [
  {
    name: 'Shawn Mendes',
    description: 'Wonder: The World Tour • March 14-Oct. 27 the fifth concert tour by Canadian singer-songwriter Shawn Mendes, in support of his fourth studio album Wonder (2020). The concert cycle, presented by Disney+, begin in Portland on June 27, 2022, and was scheduled to end in Dublin on August 1, 2023;',
    image: './images/shawnMendes.jpg',
  },
  {
    name: 'Mitski',
    description: 'The last time Mitski went on tour, she strapped knee pads to her legs like a goalie prepping for the Stanley Cup Finals and literally threw herself into her art. There’s no predicting what or how Mitski will perform on her tour in support of Laurel Hell • Jul 26 - 31. Tue • 8:00pm',
    image: './images/mitski.jpg',
  },
  {
    name: 'Billie Eilish',
    description: 'Last summer, Billie Eilish dropped her highly-anticipated sophomore album Happier Than Ever. On February 3, she commenced a massive world tour in support of the record. Eilish will perform over 50 shows throughout the United States, Canada, Europe, and the United Kingdom • Sep 8-10',
    image: ' ./images/BillieEilish.jpg',
  },
  {
    name: 'Kendric Lamar',
    description: 'Kendrick Lamar used his long-awaited return to wrestle with the complexities and contradictions of hero worship, commanding the spotlight even as he sidestepped its glare. This summer, he will be thrust back to centerstage: • Jul. 27, 29, 30',
    image: './images/KendrickLamar.jpg',
  },
];

window.onload = () => {
  const featuredPerformers = document.querySelector('.featured-performers');
  featuredPerformers.innerHTML = `<h2>Featured Performers</h2>
  <div class="performers-container">
    <div class="performers">
      <div class="performer-img">
      </div>
      <div class="performance-descrtiption">
      <div class="performer-name"></div>
        <p class="performance-info"></p>
      </div>
    </div>
    <div class="performers">
      <div class="performer-img">
        
      </div>
      <div class="performance-descrtiption">
      <div class="performer-name"></div>
        <p class="performance-info"></p>
      </div>
    </div>
    <div class="performers">
      <div class="performer-img">
        
      </div>
      <div class="performance-descrtiption">
      <div class="performer-name"></div>
        <p class="performance-info"></p>
      </div>
    </div>
    <div class="performers">
      <div class="performer-img">
      </div>
      <div class="performance-descrtiption">
      <div class="performer-name"></div>
        <p class="performance-info"></p>
      </div>
    </div>
  </div>`;
  const performerImg = document.querySelectorAll('.performer-img');
  const performanceInfo = document.querySelectorAll('.performance-info');
  const performerName = document.querySelectorAll('.performer-name');

  performers.forEach((performer, index) => {
    const img = document.createElement('img');
    img.setAttribute('src', performer.image);
    img.setAttribute('alt', performer.name);
    performerImg[index].appendChild(img);
    performanceInfo[index].appendChild(document.createTextNode(performer.description));
    performerName[index].appendChild(document.createTextNode(performer.name));
  });
};

menu.addEventListener('click', () => {
  const sideMenu = document.querySelector('.menu-items');
  sideMenu.classList.toggle('open');
});

closeBtns.forEach((closeBtn) => {
  closeBtn.addEventListener('click', () => {
    const sideMenu = document.querySelector('.menu-items');
    sideMenu.classList.toggle('open');
  });
});