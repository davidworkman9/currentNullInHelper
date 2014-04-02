if (Meteor.isClient) {
  Router.configure({
    yieldTemplates: {
      'header': {to: 'header'}
    },
    layoutTemplate: 'layout'
  });

  Router.map(function () {
    this.route('hello', {
      path: '*'
    });
  });
  Template.header.currentTemplate = function () {
    var c = Router.current();
    console.log(c);
    return c && c.lookupTemplate();
  };

  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
