// $(function () {
//     $('[data-toggle="tooltip"]').tooltip()
//   })

  var slider = new Slider('#slider', {
	formatter: function(value) {
		return 'Current value: ' + value;
	}
});