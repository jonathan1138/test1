Template.transitionSelect.events({
    'click .item': function(event) {
      console.log("here");
      var transition;
      transition = $(event.currentTarget).data('value');
      return Reveal.configure({
        transition: transition
      });
    }
  });

