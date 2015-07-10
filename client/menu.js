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

