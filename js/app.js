
var app = angular.module('charSheet',["ngRoute"]);

// this does not work without running it on a webserver!!
app.config(function($routeProvider){
    $routeProvider
        .when("/",{templateUrl: "main.html"})
        .when("/stat",{templeteUrl: "stat.html"});
});
// end

app.controller('formCtrl', function($scope){
    $scope.master = {playername: "", charactername: "", strength: 0, dexterity: 0, constitution: 0, intelligence: 0, wisdom: 0, charisma: 0};
    $scope.reset = function(){
        $scope.char = angular.copy($scope.master);
    };
    $scope.reset();
    $scope.removeStr = function(){
        if($scope.char.strength <= 0){
            return;
        }else{
            $scope.char.strength--;
        }
    }
    $scope.add = function(stat){
        switch(stat){
            case 'strength':
                $scope.char.strength++;
                break;
            case 'dexterity':
                $scope.char.dexterity++;
                break;
            case 'constitution':
                $scope.char.constitution++;
                break;
            case 'intelligence':
                $scope.char.intelligence++;
                break;
            case 'wisdom':
                $scope.char.wisdom++;
                break;
            case 'charisma':
                $scope.char.charisma++;
                break;
        }
    }
    $scope.remove = function(stat){
        switch(stat){
            case 'strength':
                if($scope.char.strength <= 0){
                    return;
                }else{
                    $scope.char.strength--;
                };
                break;
            case 'dexterity':
                if($scope.char.dexterity <= 0){
                    return;
                }else{
                    $scope.char.dexterity--;
                };
                break;
            case 'constitution':
                if($scope.char.constitution <= 0){
                    return;
                }else{
                    $scope.char.constitution--;
                };
                break;
            case 'intelligence':
                if($scope.char.intelligence <= 0){
                    return;
                }else{
                    $scope.char.intelligence--;
                };
                break;
            case 'wisdom':
                if($scope.char.wisdom <= 0){
                    return;
                }else{
                    $scope.char.wisdom--;
                };
                break;
            case 'charisma':
                if($scope.char.charisma <= 0){
                    return;
                }else{
                    $scope.char.charisma--;
                };
                break;
        }
    }
});
