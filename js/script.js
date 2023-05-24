function minhaResposta() {
    const btn = document.querySelector("#btn");
    const rpt = document.querySelector("#rpt");
    const resultFinal = [];
    
    function conta(e) {
        e.preventDefault();
        const altura = document.querySelector(".altura").value;
        const peso = document.querySelector(".peso").value;

        if(!peso){
            rpt.innerHTML = "Peso não definido"
            return
        }
        if(!altura){
            rpt.innerHTML = "Altura não definida"
            return
        }
        if(altura !== Number || peso !== Number){
            rpt.innerHTML = "Não foi possível realizar essa operação"
        }

        const math = {
           rpts: peso / (altura **2), 
        };

        resultFinal.push(math)

        if(math.rpts<18.5){
            rpt.innerHTML = "Abaixo do peso";

        }else if(math.rpts>18.5 && math.rpts<24.9){
            rpt.innerHTML = "Peso Normal";

        }else if(math.rpts>25 && math.rpts<29.9){
            rpt.innerHTML = "Sobrepeso"

        }else if(math.rpts>30 && math.rpts<34.9){
            rpt.innerHTML = "Obesidade grau 1"
            
        }else if(math.rpts>35 && math.rpts<39.9){
            rpt.innerHTML = "Obesidade grau 2"

        }else if(math.rpts>40){
            rpt.innerHTML = "Obesidade grau 3"
        }
    }

    btn.addEventListener('click', conta)
}

minhaResposta();