function compute() {
    //Get the values and calculate 
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);
    var interest = principal * years * rate / 100;
    var yearInTheFuture = new Date().getFullYear() + years;

    //Text result
    document.getElementById("result").innerHTML = "Interest : If you deposit <mark>" + principal + "</mark>,<br/>" +
            "at an interest rate of <mark>" + rate + "</mark>,<br/>" +
            "You will receive an amount of <mark>" + interest + "</mark>,<br/> " +
            "in the year <mark>" + yearInTheFuture + "</mark>";
    }
//update the rate value
function getSliderValue() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

//Check for positive values
function validateAmount() {
    var principal = document.getElementById("principal").value;
    var positive = parseInt(principal) > 0;
    if (!positive) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }

}
