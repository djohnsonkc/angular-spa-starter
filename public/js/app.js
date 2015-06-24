// create the module and name it app
var app = angular.module('app', ['ngRoute', 'ngAnimate', 'ngCookies', 'ngResource', 'ui.bootstrap']);

// configure our routes
app.config(function($routeProvider) {
	$routeProvider

		// route for the home page
		.when('/', {
			templateUrl : 'html/pages/home.html',
			controller  : 'homeController',
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
		})

		.when('/tips', {
			templateUrl : 'html/pages/tips.html',
			title: 'Tips - Angular SPA Starter Project'
		})

		;//keep the final semi-colon here 
});


app.run(['$location', '$rootScope', function($location, $rootScope) {

	//this is how you can enforce login on the entire site, or just for portions of it such as account features (e.g. /account)
	//make sure and set $rootScope.loggedInUser=true on the signin page. Set to null as default and on signout
    $rootScope.$on('$routeChangeStart', function(event, next, current) {
    
      // if (!$rootScope.loggedInUser) {
        
      //   //if not a signin or signup page
      //   if (next.templateUrl == "html/pages/signin.html" ||
      //   	next.templateUrl == "html/pages/signup.html") {
      //   	//dont redirect to signin
      //   } 
      //   else {
      //     $location.path("/signin");
      //   }
      // }

    });

	//IMPORTANT: This is what changes the page title
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
        window.scrollTo(0,0); //this will refresh the scroll bar and show/hide it as necessary
    });
}]);