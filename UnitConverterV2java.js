//Declaring Variables that will be used in the value comparison 
//(insideTheDev,2018) 
var InputValue = document.getElementById('InputValue');        //the Id's stated in the html code before for both the input and select interactive devices
var OutputValue = document.getElementById('OutputValue');       
var InputUnit = document.getElementById('InputUnitType');
var OutputUnit = document.getElementById('OutputUnitType');
var InputUnitType,OutputUnitType;




InputValue.addEventListener('keyup',OutputResult);             //These observes any changes that occur in the case of InputValue it observes "the release of the key" to which it'll carry out the function OutputResult
InputUnit.addEventListener('change',OutputResult);             //Due to tehse two bottom values being select boxes 
OutputUnit.addEventListener('change',OutputResult);

InputUnitType = InputUnit.value;
OutputUnitType = OutputUnit.value;                             //These Declare the variables we had previously mentioned being equal to the value from the select functions

function OutputResult(){
    
    InputUnitType = InputUnit.value;
    OutputUnitType = OutputUnit.value;

    //miles conversion

if( InputUnitType==="Miles" && OutputUnitType==="Kilometers"){     //If or else code used to play out the combinations and the outcome of each  
    OutputValue.value = Number(InputValue.value)*1.609344;         //the triple = is used to confirm that the UnitType must be equalvalue and equaltype. 
}
else if( InputUnitType==="Miles" && OutputUnitType==="Meters"){    //&& is the equivilant of the AND logic gate connecting the two variables together to create a situation.
    OutputValue.value = Number(InputValue.value)*1609.344;
}
else if( InputUnitType==="Miles" && OutputUnitType==="Centimeters"){
    OutputValue.value = Number(InputValue.value)*160934.4;
}
else if( InputUnitType==="Miles" && OutputUnitType==="Millimeters"){
    OutputValue.value = Number(InputValue.value)*1609344;
}
else if( InputUnitType==="Miles" && OutputUnitType==="Micrometers"){
    OutputValue.value = Number(InputValue.value)*16093440;
}
else if( InputUnitType==="Miles" && OutputUnitType==="Miles"){
    OutputValue.value = Number(InputValue.value)*1;
}
else if( InputUnitType==="Miles" && OutputUnitType==="Pounds"){       //For the weight due to them not being able to be converted into mass a alert is shown to show the user this conversion can not happen
    alert("This can not be converted pls refresh page");
}
else if( InputUnitType==="Miles" && OutputUnitType==="Kilograms"){
    alert("This can not be converted pls refresh page");
}
else if( InputUnitType==="Miles" && OutputUnitType==="Grams"){
    alert("This can not be converted pls refresh page");
}
//Kilometers

if( InputUnitType==="Kilometers" && OutputUnitType==="Kilometers"){
    OutputValue.value = Number(InputValue.value)*1;
}
else if( InputUnitType==="Kilometers" && OutputUnitType==="Miles"){
    OutputValue.value = Number(InputValue.value)/1.609344;
}
else if( InputUnitType==="Kilometers" && OutputUnitType==="Meters"){
    OutputValue.value = Number(InputValue.value)*1000;
}
else if( InputUnitType==="Kilometers" && OutputUnitType==="Millimeters"){
    OutputValue.value = Number(InputValue.value)*1000000;
}
else if( InputUnitType==="Kilometers" && OutputUnitType==="Micrometers"){
    OutputValue.value = Number(InputValue.value)*1000000000;
}
else if( InputUnitType==="Kilometers" && OutputUnitType==="Centimeters"){
    OutputValue.value = Number(InputValue.value)*100000;

}
else if( InputUnitType==="Kilometers" && OutputUnitType==="Pounds"){
    alert("This can not be converted pls refresh page");
}
else if( InputUnitType==="Kilometers" && OutputUnitType==="Kilograms"){
    alert("This can not be converted pls refresh page");
}
else if( InputUnitType==="Kilometers" && OutputUnitType==="Grams"){
    alert("This can not be converted pls refresh page");
}
//Meters

if( InputUnitType==="Meters" && OutputUnitType==="Meters"){
    OutputValue.value = Number(InputValue.value)*1;
}
else if( InputUnitType==="Meters" && OutputUnitType==="Miles"){
    OutputValue.value = Number(InputValue.value)/1609.344;
}
else if( InputUnitType==="Meters" && OutputUnitType==="Kilometers"){
    OutputValue.value = Number(InputValue.value)/1000;
}
else if( InputUnitType==="Meters" && OutputUnitType==="Millimeters"){
    OutputValue.value = Number(InputValue.value)*1000;
}
else if( InputUnitType==="Meters" && OutputUnitType==="Micrometers"){
    OutputValue.value = Number(InputValue.value)*1000000;
}
else if( InputUnitType==="Meters" && OutputUnitType==="Centimeters"){
    OutputValue.value = Number(InputValue.value)*100;
}
else if( InputUnitType==="Meters" && OutputUnitType==="Pounds"){
    alert("This can not be converted pls refresh page");
}
else if( InputUnitType==="Meters" && OutputUnitType==="Kilograms"){
    alert("This can not be converted pls refresh page");
}
else if( InputUnitType==="Meters" && OutputUnitType==="Grams"){
    alert("This can not be converted pls refresh page");
}


//Centimeters

if( InputUnitType==="Centimeters" && OutputUnitType==="Centimeters"){
    OutputValue.value = Number(InputValue.value)*1;
}
else if( InputUnitType==="Centimeters" && OutputUnitType==="Miles"){
    OutputValue.value = Number(InputValue.value)/160934.4;
}
else if( InputUnitType==="Centimeters" && OutputUnitType==="Kilometers"){
    OutputValue.value = Number(InputValue.value)/100000;
}
else if( InputUnitType==="Centimeters" && OutputUnitType==="Millimeters"){
    OutputValue.value = Number(InputValue.value)*10;
}
else if( InputUnitType==="Centimeters" && OutputUnitType==="Micrometers"){
    OutputValue.value = Number(InputValue.value)*10000;
}
else if( InputUnitType==="Centimeters" && OutputUnitType==="Meters"){
    OutputValue.value = Number(InputValue.value)*100;
}
else if( InputUnitType==="Centimeters" && OutputUnitType==="Pounds"){
    alert("This can not be converted pls refresh page");
}
else if( InputUnitType==="Centimeters" && OutputUnitType==="Kilograms"){
    alert("This can not be converted pls refresh page");
}
else if( InputUnitType==="Centimeters" && OutputUnitType==="Grams"){
    alert("This can not be converted pls refresh page");
}

//Millimeters

if( InputUnitType==="Millimeters" && OutputUnitType==="Millimeters"){
    OutputValue.value = Number(InputValue.value)*1;
}
else if( InputUnitType==="Millimeters" && OutputUnitType==="Miles"){
    OutputValue.value = Number(InputValue.value)/1609344;
}
else if( InputUnitType==="Millimeters" && OutputUnitType==="Kilometers"){
    OutputValue.value = Number(InputValue.value)/1000000;
}
else if( InputUnitType==="Millimeters" && OutputUnitType==="Centimeters"){
    OutputValue.value = Number(InputValue.value)/10;
}
else if( InputUnitType==="Millimeters" && OutputUnitType==="Micrometers"){
    OutputValue.value = Number(InputValue.value)*1000;
}
else if( InputUnitType==="Millimeters" && OutputUnitType==="Meters"){
    OutputValue.value = Number(InputValue.value)*1000;
}
else if( InputUnitType==="Millimeters" && OutputUnitType==="Pounds"){
    alert("This can not be converted pls refresh page");
}
else if( InputUnitType==="Millimeters" && OutputUnitType==="Kilograms"){
    alert("This can not be converted pls refresh page");
}
else if( InputUnitType==="Millimeters" && OutputUnitType==="Grams"){
    alert("This can not be converted pls refresh page");
}

//Micrometers

if( InputUnitType==="Micrometers" && OutputUnitType==="Micrometers"){
    OutputValue.value = Number(InputValue.value)*1;
}
else if( InputUnitType==="Micrometers" && OutputUnitType==="Miles"){
    OutputValue.value = Number(InputValue.value)/16093440;
}
else if( InputUnitType==="Micrometers" && OutputUnitType==="Kilometers"){
    OutputValue.value = Number(InputValue.value)/1000000000;
}
else if( InputUnitType==="Micrometers" && OutputUnitType==="Millimeters"){
    OutputValue.value = Number(InputValue.value)*100;
}
else if( InputUnitType==="Micrometers" && OutputUnitType==="Centimeters"){
    OutputValue.value = Number(InputValue.value)/10000;
}
else if( InputUnitType==="Micrometers" && OutputUnitType==="Meters"){
    OutputValue.value = Number(InputValue.value)*1000;
}
else if( InputUnitType==="Micrometers" && OutputUnitType==="Pounds"){
    alert("This can not be converted pls refresh page");
}
else if( InputUnitType==="Micrometers" && OutputUnitType==="Kilograms"){
    alert("This can not be converted pls refresh page");
}
else if( InputUnitType==="Micrometers" && OutputUnitType==="Grams"){
    alert("This can not be converted pls refresh page");
}

//Pounds

if( InputUnitType==="Pounds" && OutputUnitType==="Kilograms"){       
    OutputValue.value = Number(InputValue.value)*0.453592;
}
else if( InputUnitType==="Pounds" && OutputUnitType==="Grams"){
    OutputValue.value = Number(InputValue.value)*453.592;
}
else if( InputUnitType==="Pounds" && OutputUnitType==="Pounds"){
    OutputValue.value = Number(InputValue.value)*1;
}

else if( InputUnitType==="Pounds" && OutputUnitType==="Miles"){                 //For the weight due to them not being able to be converted into mass a alert is shown to show the user this conversion can not happen
    alert("This can not be converted pls refresh page");
}
else if( InputUnitType==="Pounds" && OutputUnitType==="Kilometers"){
    alert("This can not be converted pls refresh page");
}
else if( InputUnitType==="Pounds" && OutputUnitType==="Millimeters"){
    alert("This can not be converted pls refresh page");
}
else if( InputUnitType==="Pounds" && OutputUnitType==="Centimeters"){
    alert("This can not be converted pls refresh page");
}
else if( InputUnitType==="Pounds" && OutputUnitType==="Meters"){
    alert("This can not be converted pls refresh page");
}
else if( InputUnitType==="Pounds" && OutputUnitType==="Micrometers"){
    alert("This can not be converted pls refresh page");
}

//Kilograms

if( InputUnitType==="Kilograms" && OutputUnitType==="Pounds"){
    OutputValue.value = Number(InputValue.value)/0.453592;
}
else if( InputUnitType==="Kilograms" && OutputUnitType==="Grams"){
    OutputValue.value = Number(InputValue.value)*1000;
}
else if( InputUnitType==="Kilograms" && OutputUnitType==="Kilograms"){
    OutputValue.value = Number(InputValue.value)*1;
}

else if( InputUnitType==="Kilograms" && OutputUnitType==="Miles"){
    alert("This can not be converted pls refresh page");
}
else if( InputUnitType==="Kilograms" && OutputUnitType==="Kilometers"){
    alert("This can not be converted pls refresh page");
}
else if( InputUnitType==="Kilograms" && OutputUnitType==="Millimeters"){
    alert("This can not be converted pls refresh page");
}
else if( InputUnitType==="Kilograms" && OutputUnitType==="Centimeters"){
    alert("This can not be converted pls refresh page");
}
else if( InputUnitType==="Kilograms" && OutputUnitType==="Meters"){
    alert("This can not be converted pls refresh page");
}
else if( InputUnitType==="Kilograms" && OutputUnitType==="Micrometers"){
    alert("This can not be converted pls refresh page");
}

//Grams

if( InputUnitType==="Grams" && OutputUnitType==="Pounds"){
    OutputValue.value = Number(InputValue.value)/453.592;
}
else if( InputUnitType==="Grams" && OutputUnitType==="Grams"){
    OutputValue.value = Number(InputValue.value)*1;
}
else if( InputUnitType==="Grams" && OutputUnitType==="Kilograms"){
    OutputValue.value = Number(InputValue.value)/1000;
}

else if( InputUnitType==="Grams" && OutputUnitType==="Miles"){
    alert("This can not be converted pls refresh page");
}
else if( InputUnitType==="Grams" && OutputUnitType==="Kilometers"){
    alert("This can not be converted pls refresh page");
}
else if( InputUnitType==="Grams" && OutputUnitType==="Millimeters"){
    alert("This can not be converted pls refresh page");
}
else if( InputUnitType==="Grams" && OutputUnitType==="Centimeters"){
    alert("This can not be converted pls refresh page");
}
else if( InputUnitType==="Grams" && OutputUnitType==="Meters"){
    alert("This can not be converted pls refresh page");
}
else if( InputUnitType==="Grams" && OutputUnitType==="Micrometers"){
    alert("This can not be converted pls refresh page");
}















}