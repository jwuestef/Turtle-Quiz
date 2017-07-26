(function() {



angular.module("turtleFacts")
	.controller("listCtrl", ListController);

ListController.$inject = ['quizMetrics', 'DataService'];


function ListController(quizMetrics, DataService) {

	var vm = this;   // vm = View Model
	vm.quizMetrics = quizMetrics;
	vm.data = DataService.turtlesData;
	vm.activeTurtle = {};
	vm.changeActiveTurtle = changeActiveTurtle;
	vm.activateQuiz = activateQuiz;
	vm.search = "";


	// Set the activeTurtle equal to the turtle being passed in (from being clicked on in the master list of turtles)
	function changeActiveTurtle(turtle) {
		vm.activeTurtle = turtle;
	};

	// Using our factory, change the quiz active variable to true - hides the home view and shows quiz
	function activateQuiz() {
		quizMetrics.changeState("quiz", true);
	}





};













})();  // End of wrapper IIFE