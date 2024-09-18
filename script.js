const localStoragekey = 'list'
function ValidateNewtask()
{
    let values = JSON.parse(localStorage.getItem(localStoragekey) || "[]")
    let inputvalue = document.getElementById('task').value
    let existe =values.find(x => x.name == inputvalue)
    return ! existe ? false : true

}

function newtask()
{
    let input = document.getElementById('task')
    input.style.border = ''
    

    if(!input.value)
    {
        input.style.border = '1px solid red'
        alert('Digite algo para inserir a sua lista')
    }
    else if(ValidateNewtask())
    {
        alert('Ja existe uma task com esta descrição')
    }
    else
    {
        // increment to localstorage
        let values = JSON.parse(localStorage.getItem(localStoragekey) || "[]")
        console.log(values)
        values.push({
            name: input.value
        })
        localStorage.setItem(localStoragekey,JSON.stringify(values))
        showValues()
    }
    input.value = ''
}
function showValues()
{
    let values = JSON.parse(localStorage.getItem(localStoragekey) || "[]")
    let list = document.getElementById('to-do-list')
    list.innerHTML = ''
    for(let i = 0; i < values.length; i++)
    {
        list.innerHTML += `<li>${values[i]['name']}<button id = 'btn' onclick='remove("${values[i]['name']}")'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
                                                            <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9"/>
                                                            <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"/>
                                                        </svg>
                                                    </button></li>`
    }
}
function remove (data)
{
    //console.log(data)
    let values = JSON.parse(localStorage.getItem(localStoragekey) || "[]")
    let index = values.findIndex(x => x.name == data)
    values.splice(index,1)
    localStorage.setItem(localStoragekey,JSON.stringify(values))
    showValues()
}

showValues()