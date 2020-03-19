
function load(){
    const checkBoxes = document.querySelectorAll('.inbox input[type="checkbox"]');
    
    checkBoxes.forEach(checkBox => checkBox.addEventListener('click', handleCheck))
    window.addEventListener('keydown', e => {
        if (e.keyCode === 16){
        console.log(checkBoxes);
        } 

    
    });

}
let lastChecked
function handleCheck(e){
    console.log(e);
}