function ContactController($scope, $timeout) {
	$scope.name = 'Tyler Machen';
	$timeout(function() {
		$scope.name = 'The person Formerly known as Tyler Machen';
	}, 2000);
}

angular
	.module('app')
	.controller('ContactController', ContactController);
