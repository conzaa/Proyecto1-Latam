$(document).ready(function(){

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    $('#Enviar').click(function() { 
        alert("El correo fue enviado correctamente...");
      });

   $("p").click(function() {
     $("h3").toggle()
   })

   $("h3").on("dblclick", function(){
    $(this).css(
      {"color":"cyan"}
    )
  })
}); 