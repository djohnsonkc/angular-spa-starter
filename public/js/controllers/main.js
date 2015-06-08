// create the controller and inject Angular's $scope
app.controller('mainController', ['$scope', '$rootScope', '$location', 'dataFactory', 'cookieFactory', 
    function ($scope, $rootScope, $location, dataFactory, cookieFactory) {
	//create a message to display in our view
	//not a good idea to mix content and script - keep the concerns separated
	$scope.message = 'Welcome to our home page!';


	$scope.isActive = function (viewLocation) {
	    var s=false;

	    console.log(viewLocation + " ?= " + $location.path());

	    if($location.path() === viewLocation){
	     s = true;
	     //console.log('found: ' + viewLocation);
	    }
	    return s;
	};


}]);

