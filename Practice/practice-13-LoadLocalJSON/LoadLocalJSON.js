var test;




function setup() {
  $(document).ready(function(){
    $.ajax({url: "AllElements.txt", success: function(result){
        $("#div1").html(result);
    }});
  })
}
