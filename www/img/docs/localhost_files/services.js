angular.module('jsconfuy.services', [])

.service('Speakers', function ($http, $q){

  this.get = function() {
    var dfd = $q.defer();

    $http.get('speakers.json')
    .success(function(data) {
      dfd.resolve(data);
    })
    .error(function(data) {
      dfd.reject(data);
    });

    return dfd.promise;
  };
})

.service('Agenda', function ($http, $q){

  this.get = function() {
    var dfd = $q.defer();

    $http.get('agenda.json')
    .success(function(data) {

      var day1 = _.filter(data, function(event){ return event.date =="day1" }),
          day2 = _.filter(data, function(event){ return event.date =="day2" });
          day3 = _.filter(data, function(event){ return event.date =="day3" });
		  day4 = _.filter(data, function(event){ return event.date =="day4" });	
		  day5 = _.filter(data, function(event){ return event.date =="day5" });
		  day6 = _.filter(data, function(event){ return event.date =="day6" });
		  day7 = _.filter(data, function(event){ return event.date =="day7" });
		  day8 = _.filter(data, function(event){ return event.date =="day8" });
 		  day9 = _.filter(data, function(event){ return event.date =="day9" }); 
		  day10 = _.filter(data, function(event){ return event.date =="day10" });


	  dfd.resolve({
        "day1": day1,
		"day2": day2,
        "day3": day3,
		"day4": day4,
		"day5": day5,
		"day6": day6,
		"day7": day7,
		"day8": day8,
		"day9": day9,
		"day10": day10
      });
    })
    .error(function(data) {
      dfd.reject(data);
    });

    return dfd.promise;
  };

  this.getEvent = function(eventId){
    var dfd = $q.defer();

    $http.get('agenda.json')
    .success(function(data) {
      var event = _.find(data, {id: eventId});
      dfd.resolve(event);
    })
    .error(function(data) {
      dfd.reject(data);
    });

    return dfd.promise;
  };
})

.service('Information', function ($http, $q){

  this.get = function() {
    var dfd = $q.defer();

    $http.get('information.json')
      .success(function(data) {
        var s1 = _.filter(data, function(info){ return info.section =="s1" }),
            s2 = _.filter(data, function(info){ return info.section =="s2" })
            s3 = _.filter(data, function(info){ return info.section =="s3" });

        dfd.resolve({
          "section1": s1,
          "section2": s2,
          "section3": s3
        });
      })
      .error(function(data) {
        dfd.reject(data);
      });

    return dfd.promise;
  };
  /**/
  this.getInfoItem = function(infoId){
    var dfd = $q.defer();

    $http.get('information.json')
    .success(function(data) {
      var info = _.find(data, {id: infoId});
      dfd.resolve(info);
    })
    .error(function(data) {
      dfd.reject(data);
    });

    return dfd.promise;
  };
  /**/

})

;
