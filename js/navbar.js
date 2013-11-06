function getPageName() {
  var urlParts = location.pathname.split('/');
  return urlParts[urlParts.length -1];
}

function displayNavbar(pageName) {
  //check to see which page the user is on, and set that tab to "active"
  var indexActive;
  if (pageName=="index.html") {
    indexActive = 'class="active"';
  }
  var teamsActive;
  if (pageName=="teams.html") {
    teamsActive = 'class="active"';
  }
  var allianceSelectionActive;
  if (pageName=="allianceSelection.html") {
    allianceSelectionActive = 'class="active"';
  }
  var settingsActive;
  if (pageName=="settings.html") {
    settingsActive='class="active"';
  }
  
  //draw the navbar with an "active" tab
  document.write("\
    <div class='navbar navbar-inverse navbar-fixed-top'>\
    <div class='container'>\
      <div class='navbar-header'>\
        <button type='button' class='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>\
          <span class='icon-bar'></span>\
          <span class='icon-bar'></span>\
          <span class='icon-bar'></span>\
          <span class='icon-bar'></span>\
        </button>\
        <a class='navbar-brand' href='index.html'>Scouting App</a>\
      </div>\
      <div class='navbar-collapse collapse'>\
        <ul class='nav navbar-nav'>\
          <li " + indexActive + "> <a href='index.html'><span class='glyphicon glyphicon-home'></span> Home</a></li>\
          <li " + teamsActive + "> <a href='teams.html'><span class='glyphicon glyphicon-user'></span> Teams </a></li>\
          <li " + allianceSelectionActive + "> <a href='allianceSelection.html'><span class='glyphicon glyphicon-list-alt'></span> Alliance Selection</a></li>\
          <li " + settingsActive + "> <a href='settings.html'><span class='glyphicon glyphicon-cog'></span> Settings </a></li>\
        </ul>\
      </div>\
    </div>\
  </div>\
  ");

}
