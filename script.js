let items = document.querySelectorAll('.сlass')

for(let сlass of items){
    сlass.querySelector('.pane').insertAdjacentHTML("beforeend",'<button class="remove-botton"> &times;<button>')
    сlass.querySelector('.remove-botton').onclick =() => сlass.remove()


}