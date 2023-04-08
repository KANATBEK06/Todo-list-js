let main = document.createElement('main')
main.className = 'container'
document.body.append(main)

let projectName = document.createElement('h1')
projectName.innerHTML = "Let's do it"
main.append(projectName)

let listBlock = document.createElement('div')
listBlock.className = 'mainBlock'
main.append(listBlock)

let firstDiv = document.createElement('div')
listBlock.append(firstDiv)

let textIn = document.createElement('input')
textIn.className = 'textIn'
textIn.setAttribute('placeholder', 'Gonna do...')
firstDiv.append(textIn)

let dateInput = document.createElement('input')
dateInput.setAttribute('type', 'date')
firstDiv.append(dateInput)

let addBtn = document.createElement('button')
addBtn.innerHTML = 'ADD'
addBtn.id = 'addBtn'
firstDiv.append(addBtn)

let list = document.createElement('ul')
list.id = 'list'
listBlock.append(list)
