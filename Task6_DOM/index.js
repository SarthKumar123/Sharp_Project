// Write the code as shown in the video below:

// Write answer to the questions asked below:
const h= document.querySelector('#main-heading');
h.style.textAlign='right';
const basket= document.querySelector('#basket-heading');
 basket.style.color='brown';

 const fruits = document.querySelector('.fruits');
 fruits.style.backgroundColor='gray';
 fruits.style.padding='30px';
 fruits.style.margin='30px'
 fruits.style.width='50%'
 fruits.style.borderRadius='5px'
 fruits.style.listStyleType='none';

const Fruiti =document.querySelectorAll('.fruit');
for(let i=0;i<Fruiti.length;i++){
    Fruiti[i].style.padding='10px';
    Fruiti[i].style.margin='10px';
    Fruiti[i].style.borderRadius='5px'; 

}


const Fruit =document.querySelectorAll('.fruit:nth-child(even)');
for(let i=0;i<Fruit.length;i++){

  Fruit[i].style.backgroundColor='brown';
  Fruit[i].style.color='white';
}
const Fruitii =document.querySelectorAll('.fruit:nth-child(odd)');
for(let i=0;i<Fruitii.length;i++){

  Fruitii[i].style.backgroundColor='lightgray';
  Fruitii[i].style.color='white';
}
