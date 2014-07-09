'use strict';

describe('Controller: MainCtrl', function () {

  beforeEach(module('theChurningTimesApp'));

  var MainCtrl, scope, mockArticleService;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();

    mockArticleService = {create: function(){}};
    spyOn(mockArticleService, 'create').andCallFake(function(){ return {success:function(){}};});

    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      ArticleService: mockArticleService
    });
  }));

  it('creates an article on submit', function () {
    scope.headline = "headline";
    scope.lead = "lead";
    scope.author = "author";

    scope.submit();

    expect(mockArticleService.create).toHaveBeenCalled();
  });
});
