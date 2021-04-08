$("body").on("click", ".elementDelete",function(e) {
  $(this).parents('.elementList').remove();
});

$("body").on("click", ".elementCheck",function(e) {
  $(this).parents('.elementList').toggleClass('elementList1');
});

$(".agregar").on("click", function(e) {
  e.preventDefault();
  let name = $(".newText").val();
  $(".todoList").append("<div class='elementList'> <p id='elementTitle'> "+name+" </p> <p> <button class='elementCheck'> Check </button> <button class='elementDelete'> Delete </button>  </p> </div>");
});
