var slider = document.getElementById('myRange');
var output = document.getElementById('demo');
var views = document.getElementById('views');

slider.oninput = function() {
    var price = new Array(5);
        price[0] = 500;
        price[1] = 100;
        price[2] = 50;
        price[3] = 10;
        price[4] = 1;
        
        if (this.value == 36) {
        output.innerHTML = "$" + this.value + "/month"
        views.innerHTML = price[4] + "M pageviews"
        } 

        if (this.value == 24) {
            output.innerHTML = "$" + this.value + "/month"
            views.innerHTML = price[0] + "k pageviews"
        }
   
        if (this.value == 16) {
            output.innerHTML = "$" + this.value + "/month"
            views.innerHTML = price[1] + "k pageviews"
        } 

        if (this.value == 12) {
            output.innerHTML = "$" + this.value + "/month"
            views.innerHTML = price[2] + "k pageviews"
        }

        if (this.value == 8) {
            output.innerHTML = "$" + this.value + "/month"
            views.innerHTML = price[3] + "k pageviews"
        }
}
