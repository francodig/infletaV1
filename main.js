const { wfFinanceToolbox } = require('wf-finance-toolbox');
const calculator = new wfFinanceToolbox;

alert(calculator)


const submitForm = document.getElementById('form')
submitForm.addEventListener('submit', function(e) {


});




function calcular(){
     let precioContado = document.getElementById("precioContado")
     let precioCuotas = document.getElementById("precioCuotas")
      let inflacion = document.getElementById("inflacion")
      let cuotas = document.getElementById("cuotas") 

     finance.PV(inflacion, precioCuotas, cuotas)

 } 

// calcular()