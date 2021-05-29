let value;
let result;

    function button(num){
        value = document.calc.display.value += num;
    }

    function calculating(){
        result = eval(value);
        document.calc.display.value = result.toLocaleString('pt-BR');
    }
    