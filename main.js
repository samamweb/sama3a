var script_url = "";
function insert_value(){
	var id1 =$("#id").val();
	var name =$("#name").val();
	var name2 =$("#name2").val();
	var email =$("#email").val();
	var city =$("#city option:selected").val();
	var url = script_url+"?callback=ctrl&name=" + name + "&id="+
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