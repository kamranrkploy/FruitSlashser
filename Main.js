$(function(){
    
      $("#start,#quit").button();
       $("#Help,#About").accordion({
            collapsible:true,
            icon:{
                header:"ui-icon-circle-arrow-e",
                activeHeader:"ui-icon-circle-arrow-s"
            },
            heightStyle:"content"
    });  
  $("#quit").click(function(){
        location.close();
    });
});
