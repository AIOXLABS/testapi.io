var app = angular.module('myapp', []);

app.controller('MainCtrl', ['$scope', '$window', function ($scope, $window) {
   $scope.input=JSON.stringify({

	"_playerProfile": {
		"id": "123456789",
		"profileName": "TEST1",
		"outfit": 4,
		"male": false
	},
	"scores": [{
		"logic": "1",
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
		"thinking.1": "1",
		"independence": "1",
		"stress": "1",
		"innovation": "1",
		"control": "1",
		"concern": "1",
		"sociability": "1",
		"support": "1",
		"conditions": "1",
		"achievement.1": "1",
		"independence.1": "1",
		"recognition": "1",
		"relationships": "1"
	}],
	"closed-ended question": [{
		"Q1": "0-2000 dhs",
		"Q2": "None"
	}],
	"progression": "100"
});


function send() {
    // Form Data
   alert("Please wait for the result, API has received your request...");
    
    var scope = angular.element(document.getElementById("idBody")).scope();

    //send it to back-end
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: 'https://neet-pnus.azurewebsites.net/api/classification?code=V8gr1NnfY9W4d/qrZ6b0l2LwnxTnx5wyOTJ6dAIho59ki6aZa7iYrA==',
        data: scope.input,

        // url: "/data",
        // processData: false,
        // //contentType: false,
        // contentType: "application/json"
        // type: "POST",
        // timeout: 600000, // sets timeout to 3 seconds
        // data: JSON.stringify(fd)
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
