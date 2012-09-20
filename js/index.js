var app = {
    initialize: function() {
        $(document).on('deviceready', deviceready);
    },
    deviceready: function() {
    	alert('testeste');
    	$('p.status').text('Device ready!');
    }
};
