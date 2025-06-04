const update = document.querySelector('#update-button');

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

const data = {
    name: 'Darth Vader',
    quote: 'I find your lack of faith disturbing.',
};