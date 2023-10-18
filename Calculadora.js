class Calculadora{
    sumar(num1, num2){
        return num1 + num2
    }

    restar(num1, num2){
        return num1 - num2
    }

    dividir(num1, num2){
        return num1 / num2
    }

    multiplicar(num1, num2){
        return num1 * num2
    }

    raiz(x){
        x = Math.sqrt(x);
        return x;
    }

    potencia(num1, num2){
        var p;
        p = num1**num2;
        return p; 
    }
}