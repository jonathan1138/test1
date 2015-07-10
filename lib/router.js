Router.configure({
    layoutTemplate: 'main'
  });

 Router.map(function() {
  
  this.route('home');
  
  this.route('loginPage', {
    path: '/login'
  });

  this.route('introReveal', {
    path: '/introduction'
  });

});

