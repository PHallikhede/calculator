document.addEventListener("DOMContentLoaded", function () {
    let result = document.getElementById("result"); 
    let buttons = document.querySelectorAll("input[type='button']"); 
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            let value = button.value;

            if (value === "=") {
                try {
                    result.value = eval(result.value); 
                } catch {
                    result.value = "Error"; 
                }
            } else if (value === "C") {
                result.value = ""; 
            } else {
                result.value += value; 
            }
        });
    });
});
