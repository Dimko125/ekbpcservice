function SendOrder()
{
	var name = document.getElementById("name").value;
	var cont = document.getElementById("cont").value;
	var prob = document.getElementById("prob").value;
	var addr = document.getElementById("addr").value;
	
	window.location.href="order.php?data=name=" + name + "?cont=" + cont + "?prob=" + prob + "?addr=" + addr + "?";
}