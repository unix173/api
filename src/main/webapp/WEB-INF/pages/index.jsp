<!DOCTYPE html>
<html ng-app="myApp">

<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.4/angular.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script src="${pageContext.request.contextPath}/resources/js/ang.js"></script>
</head>

<body ng-controller="AppController">

<div class="fontana scroll-down">
    <div id="msg0" ng-class="{ active: user.id == activeId }">
        <figure class="pull-left media-object">
            <img ng-src={{tweet.user.profile_image_url}} width="64" height="64" alt=""
                                                    class="avatar img-thumbnail">
        </figure>
        <div class="media-body">
            <div class="media-heading"><cite> <span class="name">{{tweet.user.name}}</span>
                <small class="text-muted"><span class="screen_name">{{tweet.user.screen_name}}</span>
                    <time class="time pull-right"
                          data-time="Mon Sep 07 2015 16:51:07 GMT+0200 (W. Europe Daylight Time)">{{tweet.created_at}}
                    </time>
                </small>
            </cite></div>
            <div class="text lead">{{tweet.text}}</div>
        </div>
    </div>
</div>

</body>
</html>