if (Meteor.isClient) {

  Router.configure({
    layoutTemplate: 'revealLayout'
  });
  Router.map(function() {
    this.route('home', {
      path: '/'
    });
    return this.route('barebones');
  });
  Template.reveal.rendered = function() {
    Reveal.initialize();
    return Reveal.slide();
  };
  Template.menu.rendered = function() {
    $('.ui.dropdown').dropdown();
    return Router.onRun(function() {
      var theme, transition;
      if (theme = this.params.theme) {
        Reveal.configure({
          theme: theme
        });
      }
      if (transition = this.params.transition) {
        return Reveal.configure({
          transition: transition
        });
      }
    });
  };
  Template.transitionSelect.events({
    'click .item': function(event) {
      var transition;
      transition = $(event.currentTarget).data('value');
      return Reveal.configure({
        transition: transition
      });
    }
  });
  Template.themeSelect.events({
    'click .item': function(event) {
      var theme;
      theme = $(event.currentTarget).data('value');
      return Reveal.configure({
        theme: theme
      });
    }
  });
}

Template.revealLayout.helpers({
   creating: function() {
    return Session.get('creating');
  }
});

Template.menu.events({
  "click #signUp": function(e, tpl) {
    e.preventDefault();

    var test = Session.get('creating');

    if (test)
    {
      return Session.set('creating', false);
     Reveal.configure({ controls: false });
   }
    else
      return Session.set('creating', true);

  }
});