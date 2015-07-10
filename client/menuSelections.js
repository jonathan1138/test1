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
