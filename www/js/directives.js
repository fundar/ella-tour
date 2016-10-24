angular.module('jsconfuy.directives', [])

.directive('agendaEvent', function() {
  return {
    templateUrl: 'templates/partials/agenda-event.html'
  };
})

.directive('infoItem', function() {
  return {
    templateUrl: 'templates/partials/info-item.html'
  };
})
;
