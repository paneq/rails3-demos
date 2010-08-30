document.observe("dom:loaded", function() {
    $(document.body).observe("click", function(event) {
        element = event.findElement();
        resetWhat = element.readAttribute('data-remove')
        if(resetWhat) {
            resetable = $$(resetWhat);
            for(var i=0; i< resetable.size(); i++) {
                resetable[i].remove();
            }
            event.stop();
            return false;
        }
        return true;
    });
});
