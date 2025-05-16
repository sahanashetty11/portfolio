AOS.init();


let currentItem = 0;

const img = document.getElementById("image");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");




/* Timeline Section*/

const timeline = document.querySelector(".timeline-container");
const timelinesection = [
  {
    heading: "University of Massachusetts at Amherst",
    image: "assets/images/education-page/umass.png",
    subheading: "Masters of Science, Computer Science, (2025-Present) ",
    description:
      "<li>CGPA: 4/4</li><li>Distributed and Operating Systems, Database Design and Implementation, Artificial Intelligence</li>",
  },
  {
    heading: "Ramaiah Institute of Technology",
    image: "assets/images/education-page/rit.png",
    subheading: "Bachelor of Engineering, Information Science, (2015-2019) ",
    description:
      "<li>CGPA: 9.43/10</li><li>Data Structures, Machine Learning, Data Mining, Distributed Storage Technologies, Operating Systems etc</li><li>Member of Coding Club, Debugging Club</li>",
  }
];

const showCards2 = () => {
  let output = "";
  timelinesection.forEach(
    ({ heading, image, subheading, description }) =>
      (output += `       
    <div class="timeline-item">
    <div class="timeline-img">
        
    </div>

    <div class="timeline-content js--fadeInLeft">
        <img src="${image}" class="featured-image">
    <div class="timeline-content-text">
      <h2>${heading}</h2>
      <h6>${subheading}</h6>
      <p>${description}</p>
     
    </div>
    </div>
  </div>`)
  );
  timeline.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);