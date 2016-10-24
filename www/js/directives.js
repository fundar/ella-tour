angular.module('jsconfuy.directives', [])

.directive('agendaEvent', function() {
  return {
    templateUrl: 'templates/partials/agenda-event.html'
  };
})

.directive('infoEvent', function() {
  return {
    templateUrl: 'templates/partials/info-event.html'
  };
})

.directive('important', function() {
  return {
    templateUrl: 'templates/partials/important.html'
  };
})
;
