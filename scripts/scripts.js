const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav__links');
const questionQuestions = document.querySelectorAll('.questions__wrapper');
const questionsAnswers = document.querySelectorAll('.question__answer');
const links = document.querySelectorAll('.nav__links li');
//On toggle hamburger animation
hamburger.addEventListener('click', () =>{
    navLinks.classList.toggle('open');
    links.forEach((link,index) => {
        if(link.style.animation){
            link.style.animation = '';
        } else {
            link.style.animation = 'navLinkfadeIn 0.5s ease forwards '+(index /6 + 0.5)+'s';
        }
        
    });
});
navLinks.addEventListener('click',() =>{
  installMediaQueryWatcher("(max-width: 768px)", function(matches) {
    if (matches) {
  navLinks.classList.toggle('open');
  links.forEach((link,index) => {
    if(link.style.animation){
        link.style.animation = '';
    } else {
        link.style.animation = 'navLinkfadeIn 0.5s ease forwards '+(index /6 + 0.5)+'s';
    }
  });
    } else {}
  });
});
function addClass(el, cl){
  el.classList.add(cl);
};
function removeClass(el, cl){
  el.classList.remove(cl);
};
questionQuestions.forEach(function(question){

  const questionRow = question.firstElementChild;

  questionRow.addEventListener('click', toggleAnswer);
});

function toggleAnswer(e){
  questionsAnswers.forEach(function(content){
    console.log(content.previousElementSibling);
    if(content.previousElementSibling === e.target){
      if(content.classList.contains('hidden')){
        removeClass(content, 'hidden');
        addClass(content.parentElement, 'active');
      }else{
        addClass(content, 'hidden');
      }
    }
  });
}
