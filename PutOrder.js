function PutOrder(){
	
	var url = window.location;
	url=url.toString();
	
	var index = url.indexOf("prob");
	var endIndex = index + "prob".length;
	
	var res="";
	
	for(var i = endIndex+1; i < url.length; i++)
	{
		if(url[i] == '?')
			break;
		res+=url[i];
	}
	
	res = unescape(res);
	
	document.getElementById("prob").value = res;
	
}