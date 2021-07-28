let idNumber = 0;

const main = () => {
    domElements();
    domEvents();
}

const domElements = () => {
    shoppingInput = document.querySelector('.shoppingInput')
    alertInfo = document.querySelector('.alert')
    btnAdd = document.querySelector('.addBtn')
    ulList  = document.querySelector('.shoppingList ul')    
    allTasks = document.getElementsByTagName('li')
}

const domEvents = () => {
    btnAdd.addEventListener('click' , addNewProducts)
    ulList.addEventListener('click' , checkClick)
}
  
const addNewProducts = () => {
    if(shoppingInput.value !== ''){
        idNumber++
        newTask = document.createElement('li')
        newTask.innerText = shoppingInput.value;
        newTask.setAttribute('id', `todo-${idNumber}`)
        ulList.appendChild(newTask)

        shoppingInput.value = '';
        alertInfo.innerText = '';
        createToolsArea()
    }else{
        alertInfo.innerText = 'Wpisz nazwę produktu!'
    }
}

const createToolsArea = () => {
    const toolsPanel = document.createElement('div');
    toolsPanel.classList.add('tools');
    newTask.appendChild(toolsPanel);
  
    const completeBtn = document.createElement('button')
    completeBtn.classList.add('complete')
    completeBtn.innerHTML = '<i class="fas fa-check"></i>'
  
    const deleteBtn = document.createElement('button')
    deleteBtn.classList.add('delete')
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
  
    toolsPanel.appendChild(completeBtn);
    toolsPanel.appendChild(deleteBtn);
}



const checkClick = e => {
    if(e.target.closest('button').classList.contains('complete')){
      e.target.closest('li').classList.toggle('completed');
      e.target.closest('button').classList.toggle('completed');
    }else if (e.target.closest('button').className === 'edit'){
      editTask(e);
    }else if(e.target.closest('button').className === 'delete'){
      deleteTask(e);
    }
  }


const deleteTask = (e) => {
  const deleteTodo = e.target.closest('li')
  deleteTodo.remove()

  if(allTasks.length ===  0){
    alertInfo.innerText = 'Brak produktów na liście'
  }
}

  
document.addEventListener('DOMContentLoaded' , main)