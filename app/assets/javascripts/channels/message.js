App.message = App.cable.subscriptions.create("MessageChannel", {
  connected: function() {},
  disconnected: function() {},
  received: function(data){
    $('#test').append(data);
  }
});