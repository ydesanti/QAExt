function opc(){
	(function(){
		if(window&&window.mmcore){
			var o=window.mmcore;
			"qa"!=o.GetCookie("un")?o.SetCookie("un","qa",90):(o.SetCookie("un","",-1),o.SetCookie("cfgid","",-1),o.SetCookie("cfgID","",-1)),window.location.reload()
		}else 
			alert("Maxymiser is not implemented on this page. mmcore.js is not present.")
	})()
};