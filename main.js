const add = document.querySelector('.add')
const notes = JSON.parse(localStorage.getItem('notes'))

if (notes) {
    notes.forEach((note)=> {
        addNewNote(note)
    })
}


add.addEventListener('click',() => {
    addNewNote()
})

function addNewNote(text = '') {
    const elBaru = document.createElement('div')
    elBaru.classList.add('elBaru')
    elBaru.innerHTML = `<div class="elBaru">
    <div class="note-tools">
    <button class="edit"><i class="fa-solid fa-pen-to-square"></i></button>
    <button class="delete"><i class="fa-solid fa-trash"></i></button>
    </div>
    <div class="main hidden"></div>
    <textarea placeholder="Tulis Note Disini...!!" class="text"></textarea>
    </div>`
    
    const main = elBaru.querySelector('.main')
    const editEL = elBaru.querySelector('.edit')
    const textEl = elBaru.querySelector('.text')
    const deleteEL = elBaru.querySelector('.delete')
 
    const textArea = elBaru.querySelector('textarea')
    textArea.value = text
    
    editEL.addEventListener('click',() => {
        main.classList.toggle('hidden')
        textEl.classList.toggle('hidden')
    })  
    deleteEL.addEventListener('click',()=> {
            elBaru.remove()
            updateLs()
        })
        
        textEl.addEventListener('input',(e) => {
            const {value}  = e.target ;
            main.innerHTML = value;
            updateLs()
        })
        document.body.appendChild(elBaru)
}

function updateLs() {
    const noteText = document.querySelectorAll('textarea')
    const notes = []
    noteText.forEach((note)=> {
        notes.push(note.value)
    })
    localStorage.setItem('notes', JSON.stringify(notes))

}