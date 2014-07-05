function checkForLocalStorage() {
    var temphasWebStorage = false;
    
    if(typeof(Storage) !== "undefined") {
    	console.log("local storage supported");
    	temphasWebStorage = true;
    } else {
  	console.log("Oh-Noes: local storage unsupported!");
    }
    return temphasWebStorage;
}

function getTeamList(temphasWebStorage) {
    if(temphasWebStorage) {
      var retrievedObject = localStorage.getItem('teamList');
      console.log('retrievedObject: ', JSON.parse(retrievedObject));
      var tempteamList = JSON.parse(retrievedObject);
    }	
    if (tempteamList === null) {
      console.log("nothing was there");
      tempteamList = new Array();
    }
    return tempteamList;
}

function storeTeamList(temphasWebStorage, tempTeamList) {
    console.log('parse v2');
    if(temphasWebStorage) {
      localStorage.setItem('teamList', JSON.stringify(tempTeamList));
    } else {
      console.log("localStorage not supported! :(");
    }  
}
