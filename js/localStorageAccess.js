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

function getTeamList(hasWebStorage) {
    if(hasWebStorage) {
      var retrievedObject = localStorage.getItem('teamList');
      console.log('retrieving teamList');
      console.log('retrievedObject Raw: ', retrievedObject);
      console.log('retrievedObject Parsed: ', JSON.parse(retrievedObject));
      teamList = JSON.parse(retrievedObject);
    }	
    if (teamList === null) {
      console.log("nothing was there");
      teamList = new Array();
    }
    return teamList;
}

function storeTeamList(hasWebStorage, teamList) {
    if(hasWebStorage) {
      localStorage.setItem('teamList', JSON.stringify(teamList));
    } else {
      console.log("localStorage not supported! :(");
    }  
}