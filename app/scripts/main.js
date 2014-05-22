require.config({
	paths: {
		jquery: 'libs/jquery-1.10.2',
		jqueryMobile: 'libs/jquery.mobile-1.4.0'
	},
  shim: {
	"libs/jquery.mobile-1.4.0'" : { deps: ["jquery"], exports: 'jquery' },
  }
});

require(["jquery",
	"jqueryMobile",
], function ($) {
  console.log('jQuery version ' + $().jquery + ' installed');
});