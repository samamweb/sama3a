var script_url = "https://script.google.com/macros/s/AKfycbzuCGf06sC9DaeEL7ZcppySnwpLBE1xcrL9Aj1EVsXiSTiUBZY/exec";
function insert_value(){
	var id1 =$("#product").val();
	var name =$("#name").val();
	var name2 =$("#phone").val();
	var email =$("#address").val();
	var city =$("#country option:selected").val();
	var url = script_url+"?callback=ctrl&name=" + name + "&id=" + "&email=" + email + "&city=" + city + "&action=insert";
	var request =jQuery.ajax({
		crossDomain: true,
		url: url, 
		method: "GET",
		dataType: "jsonp"
	});
	$("#resetForm").reset();
}
fuction ctrlq(e){
	alert("congrats! Rehhh succesfully")
}
