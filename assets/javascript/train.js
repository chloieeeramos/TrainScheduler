var trainName = "";
var trainDestination = "";
var trainTime = "";
var trainFrequency = "";
var nextArrival = "";
var minutesAway = "";

var elTrain = $("#train-name");
var elTrainDestination = $("#train-destination");
var elTrainTime = $("#train-time").mask("00:00");
var elTimeFreq = $("#time-freq").mask("00");

var config = {
    apiKey: "AIzaSyDRc8WHqEiPmt5eZgB_HxRygGA31dqHKPg",
    authDomain: "train-schedule-bd950.firebaseapp.com",
    databaseURL: "https://train-schedule-bd950.firebaseio.com",
    projectId: "train-schedule-bd950",
    storageBucket: "train-schedule-bd950.appspot.com",
    messagingSenderId: "236709814864"
};

firebase.initializeApp(config);

var database = firebase.database();

database.ref("/trains").on("child_added", function(snapshot) {
    var trainDiff = 0;
    var trainRemainder = 0;
    var minutesTillArrival = "";
    var nextTrainTime = "";
    var frequency = snapshot.val().frequency;
