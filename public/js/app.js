// create the module and name it app
var app = angular.module('app', ['ngRoute']);

// configure our routes
app.config(function($routeProvider) {
	$routeProvider

		// route for the home page
		.when('/', {
			templateUrl : 'pages/home.html',
			controller  : 'mainController'
		})

		// route for the about page
		.when('/about', {
			templateUrl : 'pages/about.html',
			controller  : 'aboutController'
		})

		// route for the contact page
		.when('/contact', {
			templateUrl : 'pages/contact.html',
			controller  : 'contactController'
		});
});

// create the controller and inject Angular's $scope
app.controller('mainController', function($scope) {
	//create a message to display in our view
	//not a good idea to mix content and script - keep the concerns separated
	$scope.message = 'Welcome to our home page!';
});

app.controller('aboutController', function($scope) {
	// create a message to display in our view
	//not a good idea to mix content and script - keep the concerns separated
	$scope.message = 'Welcome to our about page!';
});

app.controller('contactController', function($scope) {
	//create a message to display in our view
	//not a good idea to mix content and script - keep the concerns separated
	$scope.message = 'Welcome to our contact page!';
});