// label effects only
window.addEventListener('load', function() {
    var col3Inputs = document.querySelector('.content-input input');
    var inputEffectInputs = document.querySelectorAll('.input-effect input');

    col3Inputs.forEach(function(input) {
        input.value = '';
    });

    function handleFocusOut() {
        if (this.value !== '') {
            this.classList.add('has-content');
        } else {
            this.classList.remove('has-content');
        }
    }

    inputEffectInputs.forEach(function(input) {
        input.addEventListener('focusout', handleFocusOut);
    });
});