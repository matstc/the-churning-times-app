describe('read article', function() {
  it('accesses the first recently churned article', function() {
    browser.get('http://thechurningtimes.com/');

    expect(browser.getTitle()).toEqual('The Churning Times — The Churning Times');

    element(by.id('listing')).all(by.css('a')).first().then(function(firstLink){
      firstLink.getText().then(function(data){
        var title = data.replace(/ by.*/, '');
        firstLink.click();
        expect(browser.getTitle()).toContain(title);
      });

    });
  });
});
