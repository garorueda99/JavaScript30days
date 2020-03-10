function load(){
    const inputs = document.querySelectorAll('.controls input');
    inputs.forEach(input => input.addEventListener('change', handleUpdate))
    inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))
    
    // console.log(inputs);
}

function handleUpdate(){
    // console.log(this.value);
    const suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}