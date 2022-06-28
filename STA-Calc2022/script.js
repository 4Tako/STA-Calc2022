function get_calc(btn) {
    if(btn.value == "=") {
      document.calculator.display.value = eval(document.calculator.display.value);
    }else if(btn.value == "√") {
        document.calculator.display.value = eval(document.calculator.display.value **0.5);
    }else if(btn.value == "π") {
        document.calculator.display.value = eval(document.calculator.display.value *3.14);
    }else if(btn.value == "+/-") {
        document.calculator.display.value = eval(document.calculator.display.value *-1);
    }else if(btn.value == "%") {
        document.calculator.display.value = eval(document.calculator.display.value *0.01);
    }else if(btn.value == "AC") {
      document.calculator.display.value = "";
    }else{
        if (btn.value == "×"){
            btn.value = "*";
        }else if (btn.value == "÷"){
            btn.value = "/";
        }
        document.calculator.display.value += btn.value;
        document.calculator.multi_btn.value = "×";
        document.calculator.div_btn.value = "÷";
    }
}