

function checkForLocalStorage() {
    var hasWebStorage = false;
    
    if(typeof(Storage) !== "undefined") {
    	console.log("local storage supported");
    	hasWebStorage = true;
    } else {
  	console.log("Oh-Noes: local storage unsupported!");
    }
    return hasWebStorage;
}

function getTeamList() {
    if(hasWebStorage) {
      var retrievedObject = localStorage.getItem('teamList');
      console.log('retrievedObject: ', JSON.parse(retrievedObject));
      teamList = JSON.parse(retrievedObject);
    }	
    if (teamList === null) {
      console.log("nothing was there");
      teamList = new Array();
    }
    return teamList;
}

function storeTeamList(teamList) {
    if(hasWebStorage) {
      localStorage.setItem('teamList', teamList);
    } else {
      console.log("localStorage not supported! :(");
    }  
}
