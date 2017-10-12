// var Nuance = require("nuance");
// const appID = "NMDPPRODUCTION_Anitha_Senthilnathan_First_test_20171004045238";
// const appKey = "fb2ddb146b320555fc82505519f955a46072cb5b24b453bfc4385882ef9218ebc0f3ff2b2504802186d0769fc9cb43293d0f8562c3d8218711790a000b22ebcb";
// var nuance = new Nuance(appID, appKey);

// nuance.sendTTSRequest({
// 	"text": "hello world wow this is working", //The text you would like to convert to speech.
// 	"output": "testFile.wav", //The output file.
// 	"outputFormat": "wav", //The codec you would like to use.
// 	"language": "en_US", //The language code (please refer to Nuance's documentation for more info).
// 	"voice": "Tom", //The voice you would like to use (please refer to Nuance's documentation for more info).
// 	"identifier": "randomIdentifierStringHere", //The user identifier (please refer to Nuance's documentation for more info).
// 	"success": function(){ //The success callback function.
// 		console.log("The file was saved.");
// 	},
// 	"error": function(response){ //The error callback function - returns the response from Nuance that you can debug.
// 		console.log("An error was occurred");
// 		console.log("this is response "+response);
// 	}
// });

// nuance.sendDictationRequest({
// 	"identifier": "randomIdentifierStringHere", //The user identifier (please refer to Nuance's documentation for more info).
// 	"language": "en-US", //The language code (please refer to Nuance's documentation for more info).
// 	"path": "audio.amr", //The path to the file you would lnodeike to send to Nuance.
// 	"additionalHeaders": {}, //If you'd like to supply more headers or replace the default headers, supply them here.
// 	"success": function(resp){ //The success callback function.
// 		console.log(resp);
// 	},
// 	"error": function(resp){ //The error callback function - returns the response from Nuance that you can debug.
// 		console.log("An error was occurred.");
// 		console.log(resp);
// 	}
// });

var fs = require("fs");
var express = require("express");
var app = express();
var Nuance = require("nuance");

app.listen(3000, function () {
	console.log("Server is running at port 3000.");


	app.get("/", function () {
		var appID = "NMDPPRODUCTION_Anitha_Senthilnathan_First_test_20171004045238"; //Your appID.
		var appKey = "fb2ddb146b320555fc82505519f955a46072cb5b24b453bfc4385882ef9218ebc0f3ff2b2504802186d0769fc9cb43293d0f8562c3d8218711790a000b22ebcb"; //Your appKey.
		var nuance = new Nuance(appID, appKey);

		//Sends a TTS (text-to-speech) request to Nuance.
		nuance.sendTTSRequest({


			"text": "hello world this is working",
			"output": "test.wav",
			"outputFormat": "wav",
			"language": "en_US",
			"voice": "Tom",
			"identifier": "randomIdentifierStringHere",
			"success": function () {
				console.log("The file was saved.");
				console.log('hai');

			},
			"error": function (response) {
				console.log("An error was occurred");
				console.log(response);
			}
		});

		//Sends a dictation (speech-to-text) request to Nuance.
		nuance.sendDictationRequest({
			"identifier": "randomIdentifierStringHere",
			"language": "en-US",
			"path": "audio.amr",
			"success": function (resp) {
				console.log(resp);
			},
			"error": function (resp) {
				console.log("An error was occurred.");
				console.log(resp);
			}
		});
	});
});