document.getElementById("nome")
let NomeDaPessoa = document.getElementById("nome")
let texto = document.getElementById("textoEnvio")

function Enviar()
{
    texto.innerHTML = "Olá, " + NomeDaPessoa.value + ", tudo bem?"
}

let metros = document.getElementById("metros")
let resultadoo = document.getElementById("resultadoo")

function Metros()
{
    
    resultadoo.innerHTML = metros.value / 100 + " metros"
}


let numero = document.getElementById("numero");
let proximo = document.getElementById("proximo");
let anterior = document.getElementById("anterior");

function Calcular()
{
   proximo.innerHTML = "Sucessor: " + (parseInt(numero.value) + parseInt(1));
    anterior.innerHTML = "Antecessor: " + (parseInt(numero.value) - parseInt(1));


}

let numero1 = document.getElementById("numero1")
let numero2 = document.getElementById("numero2")
let resultado = document.getElementById("resultado")

function Valor()
{
    if(numero1.value > numero2.value)
        {
        resultado.innerHTML = "O maior número é: " + numero1.value
        }
    else
        {
        resultado.innerHTML = "O maior número é: " + numero2.value
        }
}

let salario = document.getElementById("salario")
let resultado2 = document.getElementById("resultado2")
let percentual1 = 0.10
let percentual2 = 0.15

function Aumento()
{
if(salario.value > 1250)
    {
    resultado2.innerHTML = "Seu salário por ser acima de R$1250, terá um aumento de 10%, logo, seu aumento será de R$" + parseInt(salario.value) * 0.10 + "."
    }

else
    {
    resultado2.innerHTML = "Seu salário por ser abaixo ou igual à R$1250, terá um aumento de 15%, logo, seu aumento será de R$" + parseInt(salario.value) * 0.15 + "."
    }

}


var a = 1;
while (a < 101)
    {
        console.log(a)
        a = a + 1;
    }


var b = 0;
while (b < 55)
    {
        console.log(b)
        b = b + 5;
    }


var c = 100;
while (c > 0 )
        {
            console.log(c)
            c = c - 10;
        }