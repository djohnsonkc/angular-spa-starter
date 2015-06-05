
app.controller('aboutController', function($scope) {
	// create a message to display in our view
	//not a good idea to mix content and script - keep the concerns separated
	$scope.message = 'Welcome to our about page!';
});

