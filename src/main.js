
import {sortData, filterAll} from './dataFunctions.js';
import { renderItems,filter } from './view.js';
import data from './data/rickandmorty/rickandmorty.js';

const arrayData = data.results;
filter.filterInfo(arrayData)

window.onload = ()=> {
  renderItems(arrayData);
};
 

const orderType = document.querySelector("select[name='order']"); //tipo - asc o desc
const ordenBy = document.querySelector("select[name='By']"); // por nombre o por id
const resetButton = document.querySelector("button[data-testid='button-clear']");


orderType.addEventListener("change",  () => {
  sortData(arrayData,ordenBy.value ,orderType.value);
});
ordenBy.addEventListener("change",  () => {
  sortData(arrayData,ordenBy.value ,orderType.value); 
});
resetButton.addEventListener('click',() =>{window.location.reload()});


//filtro
const filterstatus = document.querySelector('#status');
const filterspecies = document.querySelector('#species');
const filtergender = document.querySelector('#gender');
//contenedor de tarjetas
//const tarjetasContainer = document.getElementById("root");


// Agregar un evento de cambio a todos los filtros que llame a applyFilters
filterstatus.addEventListener("change", () => {
  filterAll(arrayData, filterstatus.value, filterspecies.value, filtergender.value)
});
filterspecies.addEventListener("change", ()=> {
  filterAll(arrayData, filterstatus.value, filterspecies.value, filtergender.value)
});
filtergender.addEventListener("change", () => {
  filterAll(arrayData, filterstatus.value, filterspecies.value, filtergender.value)
});




//console.log(typeof(filterstatus.id))
/*
filterstatus.addEventListener("change", ()=> {
  filterData(arrayData, filterstatus.id, filterstatus.value)
});

filterspecies.addEventListener("change", ()=> {  
  filterData(arrayData, filterspecies.id, filterspecies.value)
 
})

filtergender.addEventListener("change" , ()=> {
  filterData(arrayData, filtergender.id, filtergender.value)
})*/

/*const ctx = document.getElementById('acquisitions').getAnimations("2d");

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});*/