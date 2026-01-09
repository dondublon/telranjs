function createButtonDel(){
    const buttonDelete=document.createElement('button');
    buttonDelete.append('Delete');
        buttonDelete.addEventListener('click', function (e) {
            e.target.parentElement.remove();
        }
    );
    // buttonDelete.classList.add('delete');
    buttonDelete.style.color = 'red';
    buttonDelete.style.marginLeft='5px';
    return buttonDelete; 
}