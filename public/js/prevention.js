window.onload = function prevention(){
    db.collection('Data-Facts').get().then((snapshot) => {
snapshot.forEach(doc=>{
console.log(doc.data());
html = `<div class="dropdown">
<div class="trigger" onclick="myfunction()"><strong>Question:</strong> ${doc.data().Q}</div>
  <div class="content" style="margin-left: 8px;">
 <strong>Answer:</strong> ${doc.data().Facts} </div>
<br>`;
document.querySelector('.container').innerHTML += html;

});
    });
       
}

class Dropdown {
            constructor(container){
              this.container = container;
              this.trigger = container.querySelector('.trigger');
              this.content = container.querySelector('.content');
            }
            init(){
              this.trigger.addEventListener('click', () => {
                
                this.trigger.classList.toggle('active');
                this.content.classList.toggle('active');
              });
            }
          }
  
  
function myfunction(){
    console.log("hello");     
    const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
   const instance = new Dropdown(dropdown);
   instance.init();
  });
 }
