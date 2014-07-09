'use strict';

describe('Directive: byline', function(){

  beforeEach(module('theChurningTimesApp'));
  beforeEach(module('views/_byline.html'));

  it('produces a byline with the article title', function(){
    var element;
    var scope;

    inject(function($rootScope, $compile) {
        element = angular.element('<tct-byline article="article"></tct-byline>');
        scope = $rootScope;
        scope.article = {headline:'headline', author:'author', id:'1', created_at:'2014-07-05T14:36:40.512Z'}
        $compile(element)(scope);
        scope.$digest();
      });
    var a  = element.find('a');

    expect(a.attr('href')).toBe('#/article/1');
    var contents = a.text().trim().replace(/\r|\n/g,'').replace(/  /g, '').replace(/\u00a0/g, ' ');
    expect(contents).toEqual('headline by author | Jul 5, 2014');
  });

  it('produces a byline without the article title', function(){
    var element;
    var scope;

    inject(function($rootScope, $compile) {
        element = angular.element('<tct-byline article="article" include-title="false"></tct-byline>');
        scope = $rootScope;
        scope.article = {headline:'headline', author:'author', id:'1', created_at:'2014-07-05T14:36:40.512Z'}
        $compile(element)(scope);
        scope.$digest();
      });

    expect(element.find("a").length).toEqual(0);
  });
});
