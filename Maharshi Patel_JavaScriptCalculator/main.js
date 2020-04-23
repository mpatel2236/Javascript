var $ = function(id){
    return document.getElementById(id);
}




function final(y) {
    y.display.value = eval(y.display.value);
}




function character(input, character) {
    if (input.value == null)
    {
           input.value = character
    }
    
    else
        input.value += character
}



function cos(form) {
    form.display.value = Math.cos(form.display.value );
}



function sin(form) {
    form.display.value = Math.sin(form.display.value );
}



function tan(form) {
    form.display.value = Math.tan(form.display.value);
}



function square(form) {
    form.display.value = eval(form.display.value) * eval(form.display.value)
}




function sqrt(form) {
    form.display.value = Math.sqrt(form.display.value);
}



function log(form) {
    form.display.value = Math.log10(form.display.value);
}


    
function exp(form) {
    form.display.value = Math.exp(form.display.value);
}

function deleteval(a) {
    a.value = a.value.substring(0, a.value.length - 1)
}



var x = 0;

function percent(input) 
{
    x = input.value;
    input.value = input.value + "%";
}




function sign(input)
{
   if(input.value.substring(0,1)=="-")
       input.value=input.value.substring(1, input.value.length)
    else
        input.value="-"+input.value
        
}
