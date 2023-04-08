addBtn.addEventListener('click', onBtn)

let localData = JSON.parse(localStorage.getItem('todos'))

let data = localData ? [...localData]: []

function createAddTodo({ id, task, deadline }) {
	let li = document.createElement('li')
	li.className = 'lishka'

	let deleteBtn = document.createElement('button')
	deleteBtn.id = `${id}`
    deleteBtn.className = 'deleteBtn'
	deleteBtn.innerHTML = 'delete'
	deleteBtn.addEventListener('click', onDelete)

	let checkbox = document.createElement('input')
	checkbox.type = 'checkbox'
	checkbox.addEventListener('change', onDone)

	let txt = document.createTextNode(`${task} ${deadline}`)
	let label = document.createElement('label')

	label.className = 'task'

	label.append(txt)

	li.append(label)
	li.append(checkbox)
	li.append(deleteBtn)
	list.append(li)
}
function renderTodos() {
    list.innerHTML = ''
	data.map((todoItem) => {
		createAddTodo(todoItem)
	})
}
let lasId = localData && localData[localData.length - 1].id


let counter = localData ? lasId: 0
function onBtn() {
	let newTask = textIn.value
	if (newTask !== '') {
		// createAddTodo(newTask, dateInput.value)
		data.push({
			id: counter++,
			task: newTask,
			deadline: dateInput.value,
		})
        localStorage.setItem('todos', JSON.stringify(data))
		renderTodos()
	}
	textIn.value = ''
}
function onDelete(event) {
	
	let currentid = Number(event.target.id)
	let filterArray = data.filter(el=> el.id!==currentid)
	data = filterArray
	localStorage.setItem('todos', JSON.stringify(data))

	renderTodos()
}
function onDone(event) {
		
	if (event.target.checked) {
		event.target.parentElement.classList.add('done')
	} else {
		event.target.parentElement.classList.remove('done')
	}
}

textIn.addEventListener('keyup',(e)=>{
if(e.key =='Enter'){
    onBtn()
}
})
renderTodos()