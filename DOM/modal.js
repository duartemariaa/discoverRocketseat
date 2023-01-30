const buttonOpenModal = document.getElementById('openModal')

const modalWrapper = document.getElementById('modal-wrapper') 

buttonOpenModal.onclick = function() {
    modalWrapper.classList.remove('invisible')
}

document.addEventListener('keydown', function(event) {
    const isEscKey = event.key === 'Escape'

    if(ifEscKey) {
        modalWrapper.classList.add('invisible')
    }
})