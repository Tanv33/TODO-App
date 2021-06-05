// var addAtribute = document.createAttribute('onclick', 'adding(this)')

// function adding(e) {
//     var e = li.parentNode.appendChild('ul')
//     console.log(e)
// }


// var ul = document.getElementById('ul')

// var text = document.getElementById('input')
// var li = document.createElement('li')
// var li_text = document.createTextNode(text.value)
// li.appendChild(li_text)
// console.log(text.value)
// console.log(li)
// console.log(li_text)
// console.log(ul)

// var addbtn = document.createAttribute('onclick', 'adding()')



// function adding() {

// }


// function edit() {
// var a = prompt('Change what you want to')
// var call = document.getElementById('call')
// call.innerHTML =
// var b = document.createElement('input')
// var c = document.createTextNode(a)
// b.appendChild(c.)
//   document.write(a)
// }

// Input 
var input = document.getElementById('input');
// Ul
var ul = document.getElementById('ul');
// Add button
function add() {
    var li = document.createElement('li')
    var liText = document.createTextNode(input.value)
    li.appendChild(liText)
    ul.appendChild(li)

    if (input.value == '') {
        ul.appendChild(li).remove()
    }
    input.value = '';
    // Edit Button 
    var editBtn = document.createElement('button')
    var editBtnText = document.createTextNode('Edit')
    editBtn.appendChild(editBtnText)
    li.appendChild(editBtn);
    // edit button input + attribute
    editBtn.setAttribute('onclick', 'editing(this)')
    editBtn.setAttribute('id', 'dis')
        // Delete button
    var deleteBtn = document.createElement('button')
    var deleteBtnText = document.createTextNode('Delete')
    deleteBtn.appendChild(deleteBtnText)
    li.appendChild(deleteBtn);
    // Delete button attribute
    deleteBtn.setAttribute('onclick', 'deleting(this)')

}


function editing(a) {
    var editInp = document.createElement('input');
    editInp.setAttribute('type', 'text')
    editInp.setAttribute('id', 'toSend')
    var save = document.createElement('button')
    var save1 = document.createTextNode('Save')
    save.appendChild(save1)
    a.parentNode.appendChild(editInp)
    a.parentNode.appendChild(save)
    save.setAttribute('onclick', 'saving(this)')
    document.getElementById('dis').disabled = true;


}


function saving(d) {
    var finish = document.getElementById('toSend')
    d.parentNode.textContent = finish.value

}

function deleting(b) {
    b.parentNode.remove()
}

function deleteAll() {
    ul.remove()
}