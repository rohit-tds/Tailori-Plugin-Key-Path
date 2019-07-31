if (typeof(Worker) !== 'undefined') {

	onmessage = function(e) {
		var urls = e.data;
		if(typeof urls == 'object' && urls.length > 0){
			
			var request = new XMLHttpRequest();
			
			var height = 0;
			var width = 0;
			
			loadUrl(0,urls);
		}
	}
	
	function loadUrl(i,urls){
		var xhr = new XMLHttpRequest();

		xhr.open('GET', urls[i].replace('w_500/','w_700/'), true);
		//xhr.open('GET', urls[i], true);

		xhr.responseType = 'blob';

		xhr.onload = function() {
		  
		  var url = URL.createObjectURL(this.response);
		  postMessage(url);
		  
		  i++;
		  
		  if(i < urls.length){
			loadUrl(i,urls)
		  }
		  
		};

		xhr.send();
	}

}else{
	console.error('Worker not support');
}