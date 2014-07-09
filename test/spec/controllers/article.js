'use strict';

describe('Controller: ArticleCtrl', function () {
  var scope, ArticleCtrl, rootScope, mockArticleService;

  var fakeArticle = {headline:'headline'};

  beforeEach(module('theChurningTimesApp'));

  beforeEach(inject(function ($controller, $rootScope) {
    rootScope = $rootScope;
    scope = $rootScope.$new();

    mockArticleService = {fetch: function(){}};
    spyOn(mockArticleService, 'fetch').andCallFake(function(){return {success:function(fn){fn(fakeArticle);}}});

    ArticleCtrl = $controller('ArticleCtrl', { $rootScope: rootScope, $scope: scope, $routeParams: {id:1}, $timeout: function(){}, ArticleService: mockArticleService });
  }));

  it('sets article title as page title', function () {
    expect(rootScope.title).toEqual(fakeArticle.headline);
  });
});

