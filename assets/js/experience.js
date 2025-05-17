AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
   {
    title: "Senior Engineer 2",
    cardImage: "assets/images/experience-page/saviynt.png",
    place: "Saviynt",
    time: "(Oct, 2024 - Dec 2024)",
    desp: "<li> Improved file security by 20% by resolving security vulnerabilities in Saviynt Security Manager, including file directory issues.</li> <li>Built a Go microservice ingesting and routing daily security events via Kafka, cutting analytics latency by 35%.</li> <li> Ensured compliance with API password policies and prevented authentication failures, resulting in a 15% increase in user satisfaction and a 5% reduction in system downtime. </li>",
  },
   {
    title: "Member of Technical Staff 2",
    cardImage: "assets/images/experience-page/vmware.png",
    place: "VMware By Broadcom",
    time: "(Aug, 2021 - Dec, 2023)",
    desp: "<li> Spearheaded Kubernetes MP costing to enable cost analysis across namespaces, nodes, and clusters, driving cost-optimization decisions. </li> <li> Launched Server Tagging feature for on-demand pricing, improving cost estimation accuracy and reducing errors by 30%. </li><li>Built Prometheus dashboards to monitor cluster health, capacity trends, and cost anomalies, which were adopted team-wide.</li> <li> Implemented Reference-Based and Reclamation Costing for VMC on Dell, resulting in reduction of infrastructure costs.</li>",
  },
   {
    title: "Member of Technical Staff",
    cardImage: "assets/images/experience-page/vmware.png",
    place: "VMWare By Broadcom",
    time: "(July, 2019 - July, 2021)",
    desp: "<li> Collaborated with cross-functional teams to implement Realized Costing for VMs, reducing VM costs by 20%. </li> <li> Prototyped a Costing as a Service stateless service, eliminating tight coupling from the costing module. </li> <li>Improved product performanceby 40% by implementing python telemetry on Kubernetes for usability analysis, enabling data-driven decisions. </li>",
  },
  {
    title: "Research and Development Intern",
    cardImage: "assets/images/experience-page/vmware.png",
    place: "VMWare By Broadcom",
    time: "(Jan, 2019 - June, 2019)",
    desp: "<li>Collaborated with team to enhance calendar sync in Boxer (Android) and resolve bugs, cutting backlog by 30% in 3 months. </li> <li>Validated feature flows in Android Boxer by developing test cases using Behavioral Driven Development in Ruby. </li>",
  }
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
      ({ title, cardImage, place, time, desp }) =>
          (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Women Who Code",
    cardImage: "assets/images/experience-page/whc.png",
    description: "",
  },
  {
    title: "National Service Scheme 2015-2019",
    cardImage: "assets/images/experience-page/nss.png",
    description: " ",
  }
];
const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
      ({ title, cardImage, description }) =>
          (output += `
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section
const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
    {
    title: "At Our Best Recognition",
    subtitle: "",
    image: "assets/images/experience-page/aob.png",
    desp: "Earned company-wide award for performance excellence, mentorship, and solo delivery of product feature in 2021 and 2023.",
  }
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
         
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);