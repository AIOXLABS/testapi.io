var app = angular.module('myapp', []);

app.controller('MainCtrl', ['$scope', '$window', function ($scope, $window) {
    $scope.input = JSON.stringify({
        "id": "123456789",
        "scores": [{
            "logic": "2",
            "management": "2",
            "people": "2",
            "mechanical": "1",
            "communication": "1",
            "judgement": "1",
            "attention": "1",
            "thinking": "1",
            "physical": "1",
            "senses": "1",
            "art": "2",
            "business": "1",
            "law": "1",
            "computers": "1",
            "science": "1",
            "medical": "1",
            "culinary": "1",
            "construction": "1",
            "office": "1",
            "outdoors": "1",
            "detail": "2",
            "integrity": "2",
            "initiative": "1",
            "dependability": "1",
            "persistence": "-1",
            "cooperation": "2",
            "achievement": "2",
            "adaptability": "-1",
            "leadership": "1",
            "thinking.1": "2",
            "independence": "1",
            "stress": "1",
            "innovation": "2",
            "control": "1",
            "concern": "2",
            "sociability": "2",
            "support": "2",
            "conditions": "-1",
            "achievement.1": "2",
            "independence.1": "-1",
            "recognition": "-1",
            "relationships": "1"
        }],
        "closed-ended question": [{
            "Q1": "0-2000 dhs",
            "Q2": "None"
        }]
    })
    $scope.output = ""
}]);


function send() {
    // Form Data


    var scope = angular.element(document.getElementById("idBody")).scope();

    //send it to back-end
    $.ajax({
       
        data: scope.input,

        "async": true,
        "crossDomain": true,
        "url": "https://cors.io/?https://neet-pnus.azurewebsites.net/api/classification?code=V8gr1NnfY9W4d%2FqrZ6b0l2LwnxTnx5wyOTJ6dAIho59ki6aZa7iYrA%3D%3D",
        "method": "POST",
        "headers": {
            "content-type": "application/json"
        },
        "processData": false,
    })
        .done(function (data) {
            console.log(data)
            let dataJSON = JSON.parse(data)

            var scope = angular.element(document.getElementById("idBody")).scope();
            scope.output = data

            scope.$apply();


            ready()

        })
        .fail(function () {
            // alert("error");
        });

}
