
function load(){
    const checkBoxes = document.querySelectorAll('.inbox input[type="checkbox"]');
    
    checkBoxes.forEach(checkBox => checkBox.addEventListener('click', handleCheck));


    let lastChecked;
    function handleCheck(e){
        let inBetween = false;
        if(e.shiftKey && this.checked){
            checkBoxes.forEach(checkBox => {
                if (checkBox === this || checkBox === lastChecked) {
                    inBetween = !inBetween;
                }
                if (inBetween){
                    checkBox.checked = true;
                }
                
            })
        }
        lastChecked = this
        // console.log(lastChecked);
        // console.log(e);
    }
}