Template.main.helpers({
   creating: function() {
    return Session.get('creating');
  }
});

if (Meteor.isClient) {

  Router.configure({
    layoutTemplate: 'main'
  });
  
  Router.map(function() {
    this.route('introSlides1', {
      path: '/'
    });
    return this.route('introSlides2');
  });  
}





