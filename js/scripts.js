$(document).ready(function () {
    $("#design").click(function () {
      $(".pic1-onclick").toggle();
      $(".design-pic").toggle();
    });
  
  
    $(".dev").click(function () {
      $(".pic2-onclick").toggle();
      $(".develop-pic").toggle();
    })
    
  
    $("#product").click(function () {
      $(".pic3-onclick").toggle();
      $(".product-pic").toggle();
    })

    $("#sbmt").click(function(event)
    {
      event.preventDefault();
  
      var email=$("#contact-email").val();
  
      if($("#user-name").val()==""){
        alert("Please input name")
      }
      else if($("#contact-email").val()==""){
        alert("Please input email")
      }
      else if($("#message").val()==""){
        alert("Please input your message")
      }
    
      else{
      alert("Hello "+ email + "," + "Thank you for reaching out to us,will get intouch with you soon");}
    });
    
  });
  
