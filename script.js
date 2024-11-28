// htmlcss progress circular bar 
document.addEventListener('DOMContentLoaded', function() {
  // HTML & CSS Progress
  let htmlProgress = document.querySelector(".html-css"),
      htmlValue = document.querySelector(".html-progress");

  let htmlStartValue = 0,
      htmlEndValue = 55,
      htmlspeed = 30;

  let progresshtml = setInterval(() => {
    htmlStartValue++;
    htmlValue.textContent = `${htmlStartValue}%`;
    htmlProgress.style.background = `conic-gradient(#fca61f ${
      htmlStartValue * 3.6
    }deg, #ededed 0deg)`;

    if (htmlStartValue == htmlEndValue) {
      clearInterval(progresshtml);
    }
  }, htmlspeed);

  // JavaScript Progress
  let javascriptProgress = document.querySelector(".javascript"),
      javascriptValue = document.querySelector(".javascript-progress");

  let javascriptStartValue = 0,
      javascriptEndValue = 45,
      jsspeed = 30;

  let progressjs = setInterval(() => {
    javascriptStartValue++;
    javascriptValue.textContent = `${javascriptStartValue}%`;
    javascriptProgress.style.background = `conic-gradient(#7d2ae8 ${
      javascriptStartValue * 3.6
    }deg, #ededed 0deg)`;

    if (javascriptStartValue == javascriptEndValue) {
      clearInterval(progressjs);
    }
  }, jsspeed);

  // PHP Progress
  let phpProgress = document.querySelector(".php"),
      phpValue = document.querySelector(".php-progress");

  let phpStartValue = 0,
      phpEndValue = 40,
      phpspeed = 30;

  let progressphp = setInterval(() => {
    phpStartValue++;
    phpValue.textContent = `${phpStartValue}%`;
    phpProgress.style.background = `conic-gradient(#20c997 ${
      phpStartValue * 3.6
    }deg, #ededed 0deg)`;

    if (phpStartValue == phpEndValue) {
      clearInterval(progressphp);
    }
  }, phpspeed);

  // ReactJS Progress
  let reactProgress = document.querySelector(".reactjs"),
      reactValue = document.querySelector(".reactjs-progress");

  let reactStartValue = 0,
      reactEndValue = 45,
      rjsspeed = 30;

  let progressreact = setInterval(() => {
    reactStartValue++;
    reactValue.textContent = `${reactStartValue}%`;
    reactProgress.style.background = `conic-gradient(#3f396d ${
      reactStartValue * 3.6
    }deg, #ededed 0deg)`;

    if (reactStartValue == reactEndValue) {
      clearInterval(progressreact);
    }
  }, rjsspeed);

  // MySQL Progress
  let mysqlProgress = document.querySelector(".mysql"),
      mysqlValue = document.querySelector(".mysql-progress");

  let mysqlStartValue = 0,
      mysqlEndValue = 70,
      mysqlspeed = 30;

  let progressmysql = setInterval(() => {
    mysqlStartValue++;
    mysqlValue.textContent = `${mysqlStartValue}%`;
    mysqlProgress.style.background = `conic-gradient(#00758f ${
      mysqlStartValue * 3.6
    }deg, #ededed 0deg)`;

    if (mysqlStartValue == mysqlEndValue) {
      clearInterval(progressmysql);
    }
  }, mysqlspeed);

  // XML Progress
  let xmlProgress = document.querySelector(".xml"),
      xmlValue = document.querySelector(".xml-progress");

  let xmlStartValue = 0,
      xmlEndValue = 65,
      xmlspeed = 30;

  let progressxml = setInterval(() => {
    xmlStartValue++;
    xmlValue.textContent = `${xmlStartValue}%`;
    xmlProgress.style.background = `conic-gradient(#ff6600 ${
      xmlStartValue * 3.6
    }deg, #ededed 0deg)`;

    if (xmlStartValue == xmlEndValue) {
      clearInterval(progressxml);
    }
  }, xmlspeed);

  // Rest API Progress
  let restApiProgress = document.querySelector(".rest-api"),
      restApiValue = document.querySelector(".rest-api-progress");

  let restApiStartValue = 0,
      restApiEndValue = 50,
      restApispeed = 30;

  let progressrestApi = setInterval(() => {
    restApiStartValue++;
    restApiValue.textContent = `${restApiStartValue}%`;
    restApiProgress.style.background = `conic-gradient(#8b5a2b ${
      restApiStartValue * 3.6
    }deg, #ededed 0deg)`;

    if (restApiStartValue == restApiEndValue) {
      clearInterval(progressrestApi);
    }
  }, restApispeed);

  // Machine Learning Progress
  let machineLearningProgress = document.querySelector(".machine-learning"),
      machineLearningValue = document.querySelector(".machine-learning-progress");

  let machineLearningStartValue = 0,
      machineLearningEndValue = 40,
      machineLearningspeed = 30;

  let progressmachineLearning = setInterval(() => {
    machineLearningStartValue++;
    machineLearningValue.textContent = `${machineLearningStartValue}%`;
    machineLearningProgress.style.background = `conic-gradient(#2ca02c ${
      machineLearningStartValue * 3.6
    }deg, #ededed 0deg)`;

    if (machineLearningStartValue == machineLearningEndValue) {
      clearInterval(progressmachineLearning);
    }
  }, machineLearningspeed);
});



// filter using javascript
$(document).ready(function () {
  $(".filter-item").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".post").show("1000");
    } else {
      $(".post")
        .not("." + value)
        .hide("1000");
      $(".post")
        .filter("." + value)
        .show("1000");
    }
  });
});


// javascript for sticky navbar even if u scroll the navbar will be fixed
document.addEventListener("DOMContentLoaded", function(){
  window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        document.getElementById('navbar-top').classList.add('fixed-top');
        // add padding top to show content behind navbar
        navbar_height = document.querySelector('.navbar').offsetHeight;
        document.body.style.paddingTop = navbar_height + 'px';
      } else {
        document.getElementById('navbar-top').classList.remove('fixed-top');
         // remove padding top from body
        document.body.style.paddingTop = '0';
      } 
  });
}); 


// adding funtionality to back to top button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click",function(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});