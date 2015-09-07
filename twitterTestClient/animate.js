/**
 * Created by ivsi on 9/2/2015.
 */

var app = angular.module('myApp', []);

app.controller("AppController", function ($scope, $http, $interval) {

    var feedArray = [];
    $scope.tweets = [];
    $scope.id = ["t0", "t1", "t2", "t3", "t4", "t5", "t6"];
    var playing = false;
    var promise;

    $interval(function getNewDataAndAppendToFeedArray() {
        $http.get('http://localhost:8080/api/oldestRm/5').
            success(function (data, status, headers, config) {
                feedArray = feedArray.concat(data);
            }).
            error(function (data, status, headers, config) {
                alert("Error");
            });
    }, 5000);

    //$interval(function viewMessagesFIFO() {
    //    if (feedArray.length > 0) {
    //        $scope.tweets.push(feedArray[0]);
    //        feedArray.shift();
    //        if ($scope.tweets.length > 5) {
    //            $scope.tweets.shift();
    //        }
    //    }
    //}, 2000);

    var moveDivs = function () {
        var temp = $scope.id[0];
        for (var i = 0; i < $scope.id.length - 1; i++) {
            $scope.id[i] = $scope.id[i + 1];
        }
        $scope.id[$scope.id.length - 1] = temp;
    }

    $scope.play = function () {
        if (playing) {
            stop();
            $scope.second = "second new-second";
            $scope.third = "third new-third";
            playing = false;
        } else {
            start();
            $scope.second = "second";
            $scope.third = "third";
            playing = true;
        }
    };

    var start = function () {
        stop();
        promise = $interval(moveDivs, 5000);
    };

    var stop = function () {
        $interval.cancel(promise);
    };

    $scope.$on('$destroy', function () {
        stop();
    });

    $scope.play();
});


