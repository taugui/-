let guests = [];

$(".addButton").click(function() {
    let guest = $(".guestName").val();
    guests.push(guest) ;
	$(".numberOfGuests").text(guests.length);
    $(".guestList").append(`<p>  ${guest} </p>`);


});