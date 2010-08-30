document.observe("dom:loaded", function() {
    $(document.body).observe("click", function(event) {
        element = event.findElement();
        toggleSelector = element.readAttribute('data-toggle')
        if(toggleSelector) {
            toggleElements = $$(toggleSelector);
            for(var i=0; i< toggleElements.size(); i++) {
                toggleElements[i].toggle();
            }
            event.stop();
            return false;
        }
        return true;
    });
});
