
//Check off tasks by clicking text
//Add listender on element that exists when page loads so it is applied to all li's
$('ul').on('click', 'li', function() {
	$(this).toggleClass('completed');
});

//Remove task when X clicked
$('ul').on('click', 'span', function(event) {
	event.stopPropagation();
	$(this).parent().fadeOut(300, function() {
		$(this).remove();
	});
});

//Create new tasks and add with enter key
$("input[type='text']").on('keypress', function(event){
	if(event.which === 13) {
		var newTask = $(this).val();
		$(this).val("");
		$('ul').append("<li><span><i class=\"fa fa-trash\"></i> </span>" + newTask + "</li>");
	}
});

//Plus sign fade
$('.fa-plus').on('click', function() {
	$("input[type='text']").fadeToggle(300);
});