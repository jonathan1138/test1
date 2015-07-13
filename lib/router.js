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

  this.route('nextPlay', {
  	path: '/nextPlayGround'
  });

    this.route('nextPlay1', {
    path: '/nextPlayGround1'
  });

     this.route('nextPlay2', {
    path: '/nextPlayGround2'
  });

     this.route('nextPlay3', {
    path: '/nextPlayGround3'
  });

    this.route('nextPlay4', {
    path: '/nextPlayGround4'
  });
});

