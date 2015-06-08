// create the module and name it app
var app = angular.module('app', ['ngRoute', 'ipCookie', 'ngResource', 'ui.bootstrap']);

// configure our routes
app.config(function($routeProvider) {
	$routeProvider

		// route for the home page
		.when('/', {
			templateUrl : 'html/pages/home.html',
			controller  : 'mainController'
		})

		// route for the about page
		.when('/about', {
			templateUrl : 'html/pages/about.html',
			controller  : 'aboutController'
		})

		// route for the contact page
		.when('/contact', {
			templateUrl : 'html/pages/contact.html',
			controller  : 'contactController'
		});
});

