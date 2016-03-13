window.App = angular.module('App', ['ui.bootstrap', 'ngResource']);

App.controller('mainCtrl', ['$scope', function($scope) {
	
// Declaring a JSON Array 

/* If it will be from the server you may need to load it

$http.get('config/menu.json').success(function(response) { 
    $scope.data = angular.fromJson(response);
    });    
*/

var response= [
    { "id": "Идентификатор", "name": "Название", "price": "Стоимость", "quantity": "Количество" },
    [ 1, "iPhone 5", "400", 5 ],			[ 2, "XBOX", "300", 7 ],
    [ 3, "Play Station 4", "300", 7 ],		[ 4, "iPad Air 2", "400", 5 ],
    [ 5, "Samsung Galaxy s6", "300", 7 ],	[ 6, "Nvidia Shield", "300", 7 ],
    [ 7, "iPhone 4", "400", 5 ],			[ 8, "iPhone 6", "300", 7 ],
    [ 9, "XBOX", "300", 7 ],				[ 10, "iPhone 5", "400", 5 ],
    [ 11, "XBOX", "300", 7 ],				[ 12, "XBOX", "300", 7 ],
    [ 13, "Play Station 4", "300", 7 ],		[ 14, "iPad Air 2", "400", 5 ],
    [ 15, "Samsung Galaxy s6", "300", 7 ],	[ 16, "Nvidia Shield", "300", 7 ],
    [ 17, "iPhone 4", "400", 5 ],			[ 18, "iPhone 6", "300", 7 ],
    [ 19, "XBOX", "300", 7 ],				[ 20, "iPhone 5", "400", 5 ],
    [ 21, "XBOX", "300", 7 ],				[ 22, "XBOX", "300", 7 ],
    [ 23, "Play Station 4", "300", 7 ], 	[ 24, "iPad Air 2", "400", 5 ],
    [ 25, "Samsung Galaxy s6", "300", 7 ],	[ 26, "Nvidia Shield", "300", 7 ],
    [ 27, "iPhone 4", "400", 5 ],			[ 28, "iPhone 6", "300", 7 ],
    [ 29, "XBOX", "300", 7 ],				[ 30, "iPhone 5", "400", 5 ],
    [ 31, "XBOX", "300", 7 ],				[ 32, "XBOX", "300", 7 ],
    [ 33, "Play Station 4", "300", 7 ], 	[ 34, "iPad Air 2", "400", 5 ],
    [ 35, "Samsung Galaxy s6", "300", 7 ],	[ 36, "Nvidia Shield", "300", 7 ],
    [ 37, "iPhone 4", "400", 5 ],			[ 38, "iPhone 6", "300", 7 ],
    [ 39, "XBOX", "300", 7 ],				[ 40, "iPhone 5", "400", 5 ],
    [ 41, "XBOX", "300", 7 ],				[ 42, "XBOX", "300", 7 ],
    [ 43, "Play Station 4", "300", 7 ], 	[ 44, "iPad Air 2", "400", 5 ],
    [ 45, "Samsung Galaxy s6", "300", 7 ],	[ 46, "Nvidia Shield", "300", 7 ],
    [ 47, "iPhone 4", "400", 5 ],			[ 48, "iPhone 6", "300", 7 ],
    [ 49, "XBOX", "300", 7 ],				[ 50, "iPhone 5", "400", 5 ],
    [ 51, "XBOX", "300", 7 ],				[ 52, "XBOX", "300", 7 ]   
];

	try {
		
		$scope.data = angular.fromJson(response);
		
		if (!$scope.data[0].id || !$scope.data[0].name || 
			!$scope.data[0].price || !$scope.data[0].quantity) {
			throw new SyntaxError("Data Error");
		}
	} catch(e) {

		if (e.name == "SyntaxError") {
			alert("Sorry, data contains an error");
		} else {
			throw e;
		}

	}

$scope.objects = [];

	 for (var i=0; i < $scope.data.length-1; i++) {
	 $scope.objects[i] = 
	 {id: $scope.data[i+1][0],
	 name: $scope.data[i+1][1],
	 price: $scope.data[i+1][2],
	 quantity: $scope.data[i+1][3]};
	 };


// Click on rows fubction
	$scope.setSelected = function() {
		$scope.info = this.obj;
	};

// Paginating parameters
	$scope.totalItems = $scope.objects.length;
	$scope.currentPage = 1;
	$scope.numPerPage = 0;  // For first table
	$scope.numPerPage1 = 0; // For second table
	
	$scope.NumberinputON = 0;  // Variable for activating number input for first table
	$scope.NumberinputON1 = 0; // --//-- for second table

// Scoping parameters
	$scope.sortType = 'id';  	// set the default sort type
	$scope.sortReverse = false;	// set the default sort order
	$scope.searchFish = ''; 	// set the default search/filter term

// Calculate pagination parameters for first table
	$scope.paginate = function(value) {
		var begin,
		    end,
		    index;
		begin = ($scope.currentPage - 1) * $scope.numPerPage;
		end = begin + $scope.numPerPage;
		index = $scope.objects.indexOf(value);
		return (begin <= index && index < end);
	};

 
// Watching for state changing of activating number field variable for first table
	$scope.$watch("numPerP", function() {

		if ($scope.numPerP === true) {
			$scope.NumberinputON = 1;
		} else {
			$scope.numPerPage = $scope.numPerP;
			$scope.NumberinputON = 0;
		}

	});


// Calculate pagination parameters for second table
	$scope.paginate1 = function(value) {
		var begin,
		    end,
		    index;
		begin = ($scope.currentPage - 1) * $scope.numPerPage1;
		end = begin + $scope.numPerPage1;
		index = $scope.objects.indexOf(value);
		return (begin <= index && index < end);
	};


// Watching for state changing of activating number field variable for second table
	$scope.$watch("numPerP1", function() {

		if ($scope.numPerP1 === true) {
			$scope.NumberinputON1 = 1;
		} else {
			$scope.numPerPage1 = $scope.numPerP1;
			$scope.NumberinputON1 = 0;
		}

	});

// Load second table from path
	$scope.nav = function(path) {
		$scope.filePath = path;
	};

	}]);
