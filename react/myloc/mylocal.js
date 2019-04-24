function clear() {
    localStorage.clear();
	console.log(localStorage);
}

function setItem(key, value) {
	var value = { 
      item1: 1,
      item2: [123, "two", 3.0],
      item3:"hello"
    };
    
    var serialObj = JSON.stringify(value); 
    
    //var returnObj = JSON.parse(localStorage.getItem("myKey"));

    localStorage.setItem(key, serialObj);
	
    
	console.log(localStorage);
}

function getItem(key, _default) {
    var localValue = localStorage.getItem(key);
    console.log(localValue);
}

function removeItem(key) {
    localStorage.removeItem("key");
console.log(localStorage);
}
