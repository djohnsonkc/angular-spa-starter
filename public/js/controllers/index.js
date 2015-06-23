// create the controller and inject Angular's $scope
app.controller('indexController', ['$scope', '$rootScope', '$location', 'dataFactory', 'cookieFactory', 
    function ($scope, $rootScope, $location, dataFactory, cookieFactory) {

    console.log("-------------------- index.js ------------------------")

	//This sets the appropriate nav link to active
	$scope.isActive = function (viewLocation) {
	    var active = false;
	    if($location.path() === viewLocation){
	    	active = true;
	    }
	    return active;
	};

	//use this show/hide links in the site navigation sections
    $scope.resetHeaderLinks = function(action) {

        if(action == 'login') { 
            $scope.login = true; 
            $rootScope.loggedInUser = true;
        }
        else { 
            $scope.login = false; 
            $rootScope.loggedInUser = null;
        }

        $scope.user_name = cookieFactory.getCookie('user_name') || "";
        $scope.first_name = cookieFactory.getCookie('first_name') || "";
        $scope.last_name = cookieFactory.getCookie('last_name') || "";

    }

    //this executes when the index.html page is first loaded
    //use this to show/hide certain navigation links when the user is logged in or logged out
    var login = cookieFactory.getCookie('login')
    if(login && login == '1') { 
        $scope.login = true; 
        $rootScope.loggedInUser = true;
        $scope.resetHeaderLinks('login');
    }
    else { 
        $scope.login = false; 
        $rootScope.loggedInUser = null;
        $scope.resetHeaderLinks('logout');
    }

    //listener for an event that can be emitted from other controllers
    $rootScope.$on('login', function(event, args) {
        console.log('$rootScope.$on login');
        $scope.resetHeaderLinks('login');
        
    });

    //listener for an event that can be emitted from other controllers
    $rootScope.$on('logout', function(event, args) {
        console.log('$rootScope.$on logout');
        $scope.resetHeaderLinks('logout');
    });

}]);