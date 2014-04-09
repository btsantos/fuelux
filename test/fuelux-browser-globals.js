/*global QUnit:false, module:false, test:false, asyncTest:false, expect:false*/
/*global start:false, stop:false ok:false, equal:false, notEqual:false, deepEqual:false*/
/*global notDeepEqual:false, strictEqual:false, notStrictEqual:false, raises:false*/

( function() {

	module('FuelUX Component Initialization (via Browser Globals)', {
		setup: function() {
			this.elems = $('#qunit-fixture').children();
		}
	});

	// In order to be be UMD compliant, modules must work with 
	// AMD (require.js) and as browser globals. The following tests
	// check to see if the only the browser global is present 
	// and nothing else.

	test('should be defined on jquery object', function () {
		ok($.fn.checkbox, 'checkbox method is defined');
	});

	test('should be defined on jquery object', function () {
		ok($.fn.combobox, 'combobox method is defined');
	});

	test('should be defined on jquery object', function () {
		ok($.fn.datagrid, 'datagrid method is defined');
	});

	test( 'should be defined on the jQuery object', function() {
		ok($.fn.datepicker, 'datepicker method is defined' );
	});

	test( 'should be defined on the jQuery object', function() {
		ok($.fn.infinitescroll, 'infinitescroll method is defined' );
	});

	test('should be defined on jquery object', function () {
		ok($.fn.pillbox, 'pillbox method is defined');
	});

	test('should be defined on jquery object', function () {
		ok($.fn.radio, 'radio method is defined');
	});

	test('should be defined on the jQuery object', function(){
		ok($.fn.scheduler, 'scheduler method is defined' );
	});

	test('should be defined on jquery object', function () {
		ok($.fn.search, 'search method is defined');
	});

	test('should be defined on jquery object', function () {
		ok($.fn.selectlist, 'selectlist method is defined');
	});

	test('should return element', function () {
		ok($.fn.spinbox, 'spinbox method is defined');
	});

	test('should be defined on jquery object', function () {
		ok($.fn.tree, 'tree method is defined');
	});

	test('should be defined on jquery object', function () {
		ok($.fn.wizard, 'wizard method is defined');
	});

})();