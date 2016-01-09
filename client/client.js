/**
 * Created by lizwestberg on 1/9/16.
 */
console.log("Whazzup bitz!");

var app = angular.module('myApp', []);

app.controller("IndexController", ['$scope', '$http', function($scope, $http){
    $scope.cat = {};
    $scope.cats = {};

    var fetchCats = function(){
        return $http.get('/cats').then(function(response){
            if(response.status !== 200){
                throw new Error('Failed to fetch cats from the API');
            }
            $scope.cat = {};
            $scope.cats = response.data;
            return response.data;
        })
    };
    $scope.addCat = function(cat){
        return $http.post('/addCat', cat).then(fetchCats());
    };
    fetchCats();
}]);