const html = {
    counter:document.querySelector('h2'),
    name:document.querySelector('input[type=text]'),
    amount:document.querySelector('input[type=text]'),
    add:document.querySelector('button'),
    list:document.querySelector('ul'),
    item:document.querySelector('li'),
    
};
var total=0;
var data=[];
html.add.addEventListener('click',function(){
    console.log(html.name.value,html.amount.value);
    total+=parseFloat(html.amount.value);
    html.counter.textContent=`Viso: ${total}`;
    var id =_.uniqueId();
    var obj={
        id:id,
        name:html.name.value,
        amount:parseFloat(html.amount.value)
    };
 date.push(obj);
var li = `<li>${html.name.value} ${html.amount.value}$ <span data-id="${id}">x</span></li> `;
    html.list. insertAdjacentHTML('beforeend',li)
});
html.items.forEach((item) => {
    item.addEventListener('click', function(){
        console.log('item was clicked')
    })
    
});
html.list.addEventListener('click', function(e){
    console.log ('list was click', e.target);
   if(e.target.matches('span')) return;
   //surandame trinamo elemento id
   var id =e.target.dataset.id;
 html.list.removeChild(e.target.parentNode);
 // istrinam objekta is data saraso su kurio id yra lygus html elemento id
 data=data.filter(item=>item.id!=id);
 var sum =0;
 data. forEach(item=> sum+=item.amount);
 html.counter.textContent=`Viso: ${sum}`;
 console.log(data)

});