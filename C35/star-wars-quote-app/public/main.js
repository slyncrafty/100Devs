const update = document.querySelector('#update-button');
const deleteButton = document.querySelector('#delete-button');
const message = document.querySelector('#message');
update.addEventListener('click', _ => {
    fetch('/quotes', {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
    })
    .then( res => {
        if (res.ok) return res.json();
    })
    .then( response => {
        // console.log(response);      // Debugging log message from server in the browser console
        window.location.reload(true);
    })
})

deleteButton.addEventListener('click', _ => {
    fetch('/quotes', {
        method: 'delete',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify(
            { name: data.name }
        ),
    })
    .then(res => {
        if(res.ok) return res.json()
    })
    .then( response => {
        if( response === 'No quote to delete') {
            message.textContent = 'No Darth Vader quote to delete'
        } else {
            window.location.reload(true);
        }
    })
    .catch( err => console.error(err))
})

const data = {
    name: 'Darth Vader',
    quote: 'I find your lack of faith disturbing.',
};