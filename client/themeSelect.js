  Template.themeSelect.events({
    'click .item': function(event) {
      var theme;
      console.log('here');
      theme = $(event.currentTarget).data('value');
      return Reveal.configure({
        theme: theme
      });
    }
  });
