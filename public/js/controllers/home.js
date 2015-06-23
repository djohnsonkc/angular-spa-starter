// create the controller and inject Angular's $scope
app.controller('homeController', ['$scope', '$rootScope', '$location', 'dataFactory', 'cookieFactory', 
    function ($scope, $rootScope, $location, dataFactory, cookieFactory) {

    console.log("-------------------- home.js ------------------------")

	//This sets the appropriate nav link to active
	// $scope.isActive = function (viewLocation) {
	//     var active = false;
	//     if($location.path() === viewLocation){
	//     	active = true;
	//     }
	//     return active;
	// };


}]);

