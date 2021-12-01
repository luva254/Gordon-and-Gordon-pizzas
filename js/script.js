function order(){

var delivery=document.getElementById("delivery").value


        if(delivery=='yes'){
            var location=prompt('Enter Your Location')
            alert('Your pizza will be delivered at ' + location)
        }
        else{
            alert('Come pick your pizza at Gordons&Gordons store')
        }


}
function checkout(){
    var pizzaSize=document.getElementById("pizza-sizes").value
var pizzaCrust=document.getElementById("pizza-crusts").value
var pizzaTopping=document.getElementById("pizza-toppings").value
var numberOfPizzas=parseInt(document.getElementById("number").value)
var delivery=document.getElementById("delivery").value

if(pizzaSize=='small'){
    price1=300
}
else if(pizzaSize=='medium'){
    price1=600
}
else(price1=900)

if(pizzaCrust=='stuffed'){
    price2=100
}
else if(pizzaCrust=='thin'){
    price2=150
}
else if(pizzaCrust=='thick'){
    price2=250
}
else(price2=180)

if(pizzaTopping=='brocolli'){
    price3=150
}
else if(pizzaTopping=='sausage and pancetta'){
    price3=300
}
else if(pizzaTopping=='mushroom'){
    price3=100
}

else(price3=260)
var pizzaPrices=(price3+price3+price3)*numberOfPizzas
alert('Your total price is ' + pizzaPrices)
}





