angular.module('theChurningTimesApp').directive('tctByline', function(){
  return {
    restrict: 'EAC',
    transclude: true,
    scope: {'article': '=', includeTitle: '='},
    templateUrl: 'views/_byline.html',
    compile: function(element, attrs){
       if (attrs.includeTitle === undefined) { attrs.includeTitle = 'true'; }
    }
  };
});
