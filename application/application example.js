<!DOCTYPE html>
<html ng-app="myNoteApp">
	<body>
	<div ng-controller="myNoteCtrl">
		<h2>My Note</h2>
		<p><textarea ng-model="message" cols="40" rows="10"></textarea></p>
		
		<p>
			<button ng_click="save()">Save</button>
			<button ng-click="clear()">Clear</button>
		</p>
		
		<p>Number of characters left: <span ng-bind="left()"></span></p>
		
	</div>
<script src="js/angular.js"></script>
<script src="myNoteApp.js"></script>
<script src="myNoteCtrl.js"></script>
</body>
</html>