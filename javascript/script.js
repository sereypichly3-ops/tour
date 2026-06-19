 $(function(){
  $(".send").click(function(){
    let valid = true;

    $("#name, #email, #country, #message").each(function(){
      if($(this).val().trim() === ""){
        $(this).css("border", "2px solid red");
        valid = false;
      } else {
        $(this).css("border", ""); 
      }
    });

    if(!valid){
        alert("Please Input Your Information before send message!")
      return; 
    }
    alert("Thanks! Your message has been received. We'll reply to you shortly.!");
  });
});