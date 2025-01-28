// https://courses.wesbos.com/account/access/677c7c5f99510455b38d6297/view/194130480
// https://github.com/wesbos/JavaScript30/tree/master/03%20-%20CSS%20Variables

const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));