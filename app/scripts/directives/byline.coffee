angular.module('theChurningTimesApp').directive 'tctByline', ->
  {
    restrict: 'EAC',
    transclude: true,
    scope: {'article': '=', includeTitle: '='},
    templateUrl: 'views/_byline.html',
    compile: (element, attrs) ->
       if (attrs.includeTitle == undefined) then attrs.includeTitle = 'true'
  }
