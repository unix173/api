/**
 * Created by ivsi on 9/2/2015.
 */

var app = angular.module('myApp', []);

app.controller("AppController", function ($scope, $http, $interval) {

    var feedArray = [];
    $scope.tweets = [];

    $interval(function getNewDataAndAppendToFeedArray() {
        $http.get('http://localhost:8080/api/oldestRm/5').
            success(function (data) {
                feedArray = feedArray.concat(data);
            }).
            error(function (data) {
                alert("Error");
            });
    }, 5000);

    $interval(function viewMessagesFIFO() {
        if (feedArray.length > 0) {
            $scope.tweets.push(feedArray[0]);
            feedArray.shift();
            $scope.$apply();
            if ($scope.tweets.length > 5) {
                $scope.tweets.shift();
            }
        }
    }, 2000);

})
;


