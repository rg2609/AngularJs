(function(){
'use strict';
angular.module("LunchCheck",[])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject= ['$scope'];
function LunchCheckController($scope) {
	$scope.checkLunch=function () {
		var items=$scope.lunchItem;
		$scope.resp="";
		if(items)
		{
			var itemNo= splitString(items,",");
			console.log(itemNo);
			if(itemNo>3)
			{
				$scope.resp="Too much!";
			}
			else
			{
				$scope.resp="Enjoy!";
			}
			$scope.lunchClass="text-success";
		}
		else
		{
			$scope.resp="Please enter data first";
			$scope.lunchClass="text-danger";
		}
	};

	var splitString=function (stringToSplit, separator) {
	  var arrayOfStrings = stringToSplit.split(separator);
	  return arrayOfStrings.length;
	};
}

})();