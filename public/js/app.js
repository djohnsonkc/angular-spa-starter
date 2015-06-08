// create the module and name it app
var app = angular.module('app', ['ngRoute', 'ipCookie', 'ngResource', 'ui.bootstrap']);

// configure our routes
app.config(function($routeProvider) {
	$routeProvider

		// route for the home page
		.when('/', {
			templateUrl : 'html/pages/home.html',
			controller  : 'mainController',
			title: 'Angular SPA Starter Project'
		})

		// route for the about page
		.when('/about', {
			templateUrl : 'html/pages/about.html',
			controller  : 'aboutController',
			title: 'About - Angular SPA Starter Project'
		})

		// route for the contact page
		.when('/contact', {
			templateUrl : 'html/pages/contact.html',
			controller  : 'contactController',
			title: 'Contact - Angular SPA Starter Project'
		});
});

//IMPORTANT: This is what changes the page title
app.run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
        window.scrollTo(0,0); //this will refresh the scroll bar and show/hide it as necessary
    });
}]);