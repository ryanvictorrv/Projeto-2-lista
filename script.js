const localStoragekey = 'list'

function newtask()
{
    let input = document.getElementById('task')

    if(!input.value)
    {
        alert('Digite algo para inserir a sua lista')
    }
    // else if()
    else
    {
        // increment to localstorage
        let values = JSON.parse(localStorage.getItem(localStoragekey) || "[]")
        console.log(values)
        values.push({
            name: input.value
        })
        localStorage.setItem(localStoragekey,JSON.stringify(values))
    }
}
function showValues()
{
    let values = JSON.parse(localStorage.getItem(localStoragekey) || "[]")
    let list = document.getElementById('to-do-list')
    list.innerHTML = ''
    
}