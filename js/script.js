let acc = document.getElementsByClassName("block-accordion-btn");
let block__panel = document.querySelectorAll("block-accordion-text");
const items__btn_active = document.querySelectorAll('.block-accordion-btn.active');
const items__panel = document.querySelectorAll('.block-accordion-text');
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
  	console.log('sdfsdf');
    var panel = this.nextElementSibling;
    if(this.classList.contains('active')) {
    	panel.style.display = "none";
    	this.classList.remove("active");
    } else {
    	Array.from(acc).forEach(item => {
		  	item.classList.remove('active')
		})
		Array.from(items__panel).forEach(item => {
		  	item.style.display = "none";
		})
    	this.classList.add("active");
    	panel.style.display = "block";
    }
  });
};