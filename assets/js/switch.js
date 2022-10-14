var slider = document.getElementById('myRange');
var toggle = document.getElementById('checked');
var output = document.getElementById('demo');
var views = document.getElementById('views');
var price = new Array(5);
            price[0] = 8;
            price[1] = 12;
            price[2] = 16;
            price[3] = 24;
            price[4] = 36;
var priceafter = [
Math.round(((price[0] * 12) - (price[0] * 12) * 25 /100 )).toFixed(0),
Math.round(((price[1] * 12) - (price[1] * 12) * 25 /100 )).toFixed(0), 
Math.round(((price[2] * 12) - (price[2] * 12) * 25 /100 )).toFixed(0),
Math.round(((price[3] * 12) - (price[3] * 12) * 25 /100 )).toFixed(0),
Math.round(((price[4] * 12) - (price[4] * 12) * 25 /100 )).toFixed(0),
];

toggle.onclick = function() {

    
    if((toggle).checked == true){

     slider.oninput = function() {
      if (this.value == 8) {
       demo.innerHTML = '$' + priceafter[0] + '/year';
       views.innerHTML = "10k pageviews"
     } 
      if (this.value == 12) {
       demo.innerHTML = '$' + priceafter[1] + '/year';
       views.innerHTML = "50k pageviews"
     } 
      if (this.value == 16) {
       demo.innerHTML = '$' + priceafter[2] + '/year';
       views.innerHTML = "100k pageviews"
     } 
      if (this.value == 24) {
       demo.innerHTML = '$' + priceafter[3] + '/year';
       views.innerHTML = "500k pageviews"
     } 
      if (this.value == 36) {
       demo.innerHTML = '$' + priceafter[4] + '/year';
       views.innerHTML = "1M pageviews"
     } 



     else if((toggle).checked == false){
      slider.oninput = function() {
        if (this.value == 8) {
          demo.innerHTML = '$' + price[0] + '/month';
          views.innerHTML = "10k pageviews"
      } 
        if (this.value == 12) {
          demo.innerHTML = '$' + price[1] + '/month';
          views.innerHTML = "50k pageviews"
      } 
        if (this.value == 16) {
          demo.innerHTML = '$' + price[2] + '/month';
          views.innerHTML = "100k pageviews"
      } 
        if (this.value == 24) {
          demo.innerHTML = '$' + price[3] + '/month';
          views.innerHTML = "500k pageviews"
      } 
        if (this.value == 36) {
          demo.innerHTML = '$' + price[4] + '/month';
          views.innerHTML = "1M pageviews"
      } 
        }
      } 
    }
  }
}  
