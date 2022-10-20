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
/*var priceafter = [
Math.round(((price[0] * 12) - (price[0] * 12) * 25 /100 )).toFixed(2),
Math.round(((price[1] * 12) - (price[1] * 12) * 25 /100 )).toFixed(2), 
Math.round(((price[2] * 12) - (price[2] * 12) * 25 /100 )).toFixed(2),
Math.round(((price[3] * 12) - (price[3] * 12) * 25 /100 )).toFixed(2),
Math.round(((price[4] * 12) - (price[4] * 12) * 25 /100 )).toFixed(2),
];
*/

toggle.onclick = function() {
  if((toggle).checked == true){  

     slider.oninput = function() {
      valPercent = (this.value / this.max)  * 100;
      var color = `linear-gradient(to right,  hsl(174, 86%, 45%), ${valPercent}%, rgb(214,214,214) ${valPercent}%)`;
      slider.style.background = color;
      
      var priceafter = Math.round(((this.value * 12) - (this.value * 12) * 25 /100 )).toFixed(2);

      if (this.value == 8) {
       demo.innerHTML = '$' + priceafter
       views.innerHTML = "10k pageviews"
     } 
      if (this.value == 12) {
       demo.innerHTML = '$' + priceafter  
       views.innerHTML = "50k pageviews"
     } 
      if (this.value == 16) {
       demo.innerHTML = '$' + priceafter
       views.innerHTML = "100k pageviews"
     } 
      if (this.value == 24) {
       demo.innerHTML = '$' + priceafter
       views.innerHTML = "500k pageviews"
     } 
      if (this.value == 36) {
       demo.innerHTML = '$' + priceafter
       views.innerHTML = "1M pageviews"
     } 


     
     else if((toggle).checked == false){

      slider.oninput = function() {
        valPercent = (this.value / this.max)  * 100;
        var color = `linear-gradient(to right,  hsl(174, 86%, 45%), ${valPercent}%, rgb(214,214,214) ${valPercent}%)`;
        slider.style.background = color;
        
        if (this.value == 8) {
          demo.innerHTML = '$' + price[0] 
          views.innerHTML = "10k pageviews"
      } 
        if (this.value == 12) {
          demo.innerHTML = '$' + price[1] 
          views.innerHTML = "50k pageviews"
      } 
        if (this.value == 16) {
          demo.innerHTML = '$' + price[2] 
          views.innerHTML = "100k pageviews"
      } 
        if (this.value == 24) {
          demo.innerHTML = '$' + price[3]
          views.innerHTML = "500k pageviews"
      } 
        if (this.value == 36) {
          demo.innerHTML = '$' + price[4] 
          views.innerHTML = "1M pageviews"
      } 
        }
      } 
    }
  }
}  

