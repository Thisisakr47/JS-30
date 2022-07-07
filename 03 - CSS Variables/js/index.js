const variables = document.querySelectorAll('.var-container input');

function update(){
    suffix = this.dataset.sizing || '';
    console.log(this.value);
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

variables.forEach(input => input.addEventListener('mousemove', update));
variables.forEach(input => input.addEventListener('change', update));