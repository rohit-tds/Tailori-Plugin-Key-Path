onmessage = function(e) {
	var urls = e.data;
	if(typeof urls == 'object' && urls.length > 0){
		
		var request = new XMLHttpRequest();
		
		var height = 0;
		var width = 0;
		
		loadUrl(0,urls);
	}
}

function loadUrl(c,urls){
	
	var xhr = new XMLHttpRequest();
	
	xhr.open('GET',urls[c].replace('w_1000','w_1200') , true);

	xhr.responseType = 'arraybuffer';

	xhr.onload = function(e) {
	  if (this.status == 200) {
		var uInt8Array = new Uint8Array(this.response);
		var i = uInt8Array.length;
		var binaryString = new Array(i);
		while (i--)
		{
		  binaryString[i] = String.fromCharCode(uInt8Array[i]);
		}
		var data = binaryString.join('');

		//var base64 = btoa(data);
		
		//postMessage("data:image/png;base64,"+base64);
		postMessage(data);
		
		c++;
	  
		if(c < urls.length){
			loadUrl(c,urls)
		}
		
	  }
	  
	  //postMessage("hello");
	};

	xhr.send();
}