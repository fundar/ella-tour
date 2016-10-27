angular.module('jsconfuy.controllers', [])

.controller('AppCtrl', function($scope) {

})

.controller('SpeakersCtrl', function($scope, $http, Speakers, $ionicLoading) {
  $scope.speakers = [];

  $ionicLoading.show({
    template: 'Loading...'
  });

  Speakers.get()
  .then(function(speakers){
    $scope.speakers = speakers;
    $ionicLoading.hide();
  },function(err){
    $ionicLoading.hide();
  });

  $scope.goToUrl = function(url){
    //use inAppBrowser plugin
    window.open(url, '_blank', 'location=yes');
  }
})

.controller('BioCtrl', function($scope, Speakers, $stateParams, $ionicLoading) {
  var participantId = $stateParams.participantId;

  $ionicLoading.show({
    template: 'Loading...'
  });

  Speakers.getBio(participantId)
  .then(function(data){
    $scope.participant = data;
    console.log(data)
    $ionicLoading.hide();
  },function(err){
    $ionicLoading.hide();
  })
})

.controller('VenueCtrl', function($scope) {
  //map with venue position
  $scope.position = {
    lat: -34.892589,
    lng: -56.194638
  };

  $scope.$on('mapInitialized', function(event, map) {
    $scope.map = map;
  });
})

.controller('MapCtrl', function($scope, Information, $stateParams, $ionicLoading) {
  var data = {}
  data.img = $stateParams.img;
 
  if(data.img == "map_coyoacan") data.name = "Coyoacán Map - Mexico"
  if(data.img == "map_puebla") data.name = "Puebla Map"
  if(data.img == "map_mexico") data.name = "Insurgentes Map - Mexico"
  
  $scope.map = data;

})


.controller('AgendaCtrl', function($scope, Agenda, $ionicLoading) {
  $scope.events = [];

  $ionicLoading.show({
    template: 'Loading...'
  });

  Agenda.get()
  .then(function(events){
    $scope.events = events;
    $ionicLoading.hide();
  },function(err){
    $ionicLoading.hide();
  });
})

.controller('InformationCtrl', function($scope, Information, $ionicLoading) {
  $scope.information = [];

  $ionicLoading.show({
    template: 'Loading...'
  });

  Information.get()
  .then(function(data){
    $scope.information = data;
    $ionicLoading.hide();
  },function(err){
    $ionicLoading.hide();
  });
})
/*
.controller('InfoDetailCtrl', function($scope, Information, $stateParams, $ionicLoading) {
  var infoId = $stateParams.infoId;

  $ionicLoading.show({
    template: 'Loading...'
  });

  Information.getInfoItem(infoId)
  .then(function(data){
    $scope.info = data;
    console.log(data)
    $ionicLoading.hide();
  },function(err){
    $ionicLoading.hide();
  })
})
/**/
/**/
.controller('InfoDetailCtrl', function($scope, Information, $stateParams, $ionicLoading) {
  var infoId = $stateParams.infoId;

  $ionicLoading.show({
    template: 'Loading...'
  });

  Information.getInfoItem(infoId)
  .then(function(data){
    $scope.info = data;
    console.log(data)
    $ionicLoading.hide();
  },function(err){
    $ionicLoading.hide();
  })
})
/**/
.controller('EventCtrl', function($scope, Agenda, $stateParams, $ionicLoading) {
  var eventId = $stateParams.eventId;

  $ionicLoading.show({
    template: 'Loading...'
  });

  Agenda.getEvent(eventId)
  .then(function(event){
    $scope.event = event;
    $ionicLoading.hide();
  },function(err){
    $ionicLoading.hide();
  });

  $scope.shareEvent = function(event){
    var speakersText = "";

    _.each(event.speakers, function(speaker, index){
      speakersText += speaker.name;
      if((index+1) < event.speakers.length){
        speakersText += " & ";
      }
    });

    var messageToShare = event.title + " by " + speakersText + " at #jsconfuy";
    window.plugins.socialsharing.share(messageToShare);
  };

})
