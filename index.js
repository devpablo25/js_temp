document.getElementById("convert").addEventListener("click", convert)

function convert() {

    var input = document.getElementById("textbox").value
    if (document.getElementById("toF").checked === true) {
            console.log("to f");
            document.getElementById("Output").textContent = (input * 9/5 ) + 32;

    } else if (document.getElementById("toC").checked === true){ 
        
        
        document.getElementById("Output").textContent = (input - 32) * 5/9;
       
    }
} 

