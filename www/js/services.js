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

      dfd.resolve({
        "day1": day1,
        "day2": day2
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
