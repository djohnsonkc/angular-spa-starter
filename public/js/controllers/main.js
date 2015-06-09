// create the controller and inject Angular's $scope
app.controller('mainController', ['$scope', '$rootScope', '$location', 'dataFactory', 'cookieFactory', 
    function ($scope, $rootScope, $location, dataFactory, cookieFactory) {

	$scope.pageClass = 'page-home';


	$scope.message = 'Welcome to our home page!';


	//This sets the appropriate nav link to active
	$scope.isActive = function (viewLocation) {
	    var active = false;
	    if($location.path() === viewLocation){
	    	active = true;
	    }
	    return active;
	};


}]);

