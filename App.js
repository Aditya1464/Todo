let input = document.querySelector('input');
let addBtn = document.querySelector('.addBtn');
let ol = document.querySelector('ol');
let trash = document.querySelector('.trash');
let div2 = document.querySelector('.div2');
let label = document.querySelector('label');
let deleteBtn = document.querySelector('.delete');
let div1 = document.querySelector('.div1');
let selectAll = div1.querySelector('label');

addBtn.addEventListener('click', function(event){

    if(input.value != ""){
         addtasks();
    }
})

function addtasks(){

    deselectTasks();

    let li = document.createElement('li');
    li.innerText = input.value;

    li.style.marginBottom = '10px';
    li.style.paddingLeft = '5px';

    ol.appendChild(li);

    input.value = "";
}

let count = 0;

trash.addEventListener('click', function(){
    // console.log(ol.children.length);

    if(ol.children.length != 0){
        if(count % 2 == 0){
            selectTasks();
        }
        else{
            deselectTasks();
        }
    }
})

function selectTasks(){
    label.style.visibility = "visible";
    deleteBtn.style.visibility = "visible";
    
    let items = ol.querySelectorAll('li');

    for(let i=0; i<items.length; i++){
        items[i].innerHTML ='<input type="checkbox">'+ items[i].innerText;
    }
    
    count ++;
}

function deselectTasks(){
    deleteBtn.style.visibility = "hidden";
    label.style.visibility = "hidden";
    
    let items = ol.querySelectorAll('li');

    for(let i=0; i<items.length; i++){
        items[i].innerHTML = items[i].innerText;
    }

    count ++;
}

deleteBtn.addEventListener('click', function(){
    
    if(ol.children.length != 0){
        removeTasks();
    }
});

function removeTasks(){

    let items = ol.querySelectorAll('li');

    for(let i=0; i<items.length; i++){
        let checkbox = items[i].children[0];

        if(checkbox.checked){
            ol.removeChild(items[i]);
        }
    }

    deselectTasks();
};

selectAll.addEventListener('click', function(){

    let items = ol.querySelectorAll('li');

    console.dir(items);

    for(let i=0; i<items.length; i++){
        let checkbox = items[i].children[0];
        checkbox.checked = 'true';
    }
});
