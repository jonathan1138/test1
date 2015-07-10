Template.menu.rendered = function() {
    
    $('.ui.dropdown').dropdown();

    return Router.onRun(function() {
      var theme, transition;

      if (theme = this.params.theme) {
        Reveal.configure({theme: theme});
      } else { this.next();
      }

      if (transition = this.params.transition) {
        return Reveal.configure({transition: transition});
      }

    });
};

