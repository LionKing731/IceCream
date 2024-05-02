document.addEventListener("DOMContentLoaded", ()=>{

    function updateDisplay(){
        let cone = document.getElementById("coneElement");
        let table = document.getElementById("toppingsBox");
        if(cone.checked){
            table.style.display = "none";
        } else{
            table.style.display = "block";
        }
    }
    
    coneElement.onclick = updateDisplay;
    cupElement.onclick = updateDisplay;

    
    submitOrderButton.addEventListener("click", ()=>{
        const scoops = Number(numScoopsElement.value);
        const cone = coneElement.checked;
        const cup = cupElement.checked;
        const sprinkles = sprinklesElement.checked;
        const whipped = whippedElement.checked;
        const fudge = fudgeElement.checked;
        const cherry = cherryElement.checked;

        let basePrice = 0;
        let tax = 0;
        let totalDue = 0;

        basePrice = 2.25;
        if(scoops > 1){
            basePrice += 1.25 * (scoops - 1);
        }

        if(cup){
            if(sprinkles){
               basePrice += 0.50;
            }
            if(whipped){
                basePrice += 0.25;
            }
            if(fudge){
                basePrice += 1.25;
            }
            if(cherry){
                basePrice += 0.25;
            }
        }
        tax = basePrice * .07;
        totalDue = basePrice + tax;

        basePriceElement.innerText = basePrice.toFixed(2);
        taxElement.innerText = tax.toFixed(2);
        totalDueElement.innerText = totalDue.toFixed(2);
        
    })
})