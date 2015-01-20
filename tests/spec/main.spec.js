
// Set the component:
App.BadgeComponentComponent = Ember.BadgeComponent.extend({
	layoutName: null
});

moduleForComponent('badge-component', 'Badge Component', {});

test('should render.', function(){
	var component = this.subject();
	this.append();
	
	var didRender = component.$().hasClass('badge-component');
	ok(didRender, 'component should have rendered.');
});

test('should render a span element', function(){
	var component = this.subject();
	this.append();
	
	var tag = component.$().prop('tagName').toLowerCase();
	strictEqual(tag, 'span', 'tag should be a span');
});

test('#hasValue property should return false if the value is null or undefined', function(){
	var component = this.subject();
	this.append();

	Em.run(function(){
		component.set('value', null);
		var notHasValue = !component.get('hasValue');
		ok(notHasValue, 'should return false when value is null');

		component.set('value', undefined);
		notHasValue = !component.get('hasValue');
		ok(notHasValue, 'should return false when value is undefined');
	});
});

test('#hasValue property should return true if value is not null or undefined', function(){
	var component = this.subject({
		value: 1
	});
	this.append();

	Em.run(function(){
		var hasValue = component.get('hasValue');
		ok(hasValue, 'should return true when value not null or undefined');
	});
});

test('should NOT apply badge class to element when #hasValue returns false', function(){
	var component = this.subject({
		value: null
	});
	this.append();

	var notHasClass = !component.$().hasClass('badge');
	ok(notHasClass, 'should NOT have badge class.');
});

test('should apply badge class to element when #hasValue returns true', function(){
	var component = this.subject({
		value: 1
	});
	this.append();

	var hasClass = component.$().hasClass('badge');
	ok(hasClass, 'should have badge class.');
});

test('#formattedValue property should just return the value if no valueFormatter is provided.', function(){
	var MockValue = 'SOMEVALUE',
		component = this.subject({
		valueFormatter: null,
		value: MockValue
	});
	this.append();

	var formattedValue = component.get('formattedValue');
	strictEqual(formattedValue, MockValue, 'should just return value');
});

test('#formattedValue property should use valueFormatter function if it is provided.', function(){
	var MockValue = 'SOMEVALUE',
		component = this.subject({
		valueFormatter: function(value){
			// just returning same value as lowerCase for testing:
			return value.toLowerCase();
		},
		value: MockValue
	});
	this.append();

	var formattedValue = component.get('formattedValue');
	strictEqual(formattedValue, MockValue.toLowerCase(), 'should return formatted value');
});

test('#statusColor property should return an empty string if highlight property is false', function(){
	var component = this.subject({
		highlight: false
	});
	this.append();

	var statusColor = component.get('statusColor');
	strictEqual(statusColor, '', 'should be an empty string.');
});

test('#statusColor property should return an empty string if highlight is true, but statusFunction is not provided.', function(){
	var component = this.subject({
		highlight: true,
		statusFunction: null
	});
	this.append();

	var statusColor = component.get('statusColor');
	strictEqual(statusColor, '', 'should be an empty string.');
});

test('#statusColor property should return success color if the statusFunction returns success.', function(){
	var status = 'success',
		component = this.subject({
		highlight: true,
		value: 1,
		statusFunction: function(value){
			if(value === 1){
				return status;
			}
		}
	});
	this.append();

	var statusColor = component.get('statusColor'),
		expectedColor = 'alert-'+status;
	strictEqual(statusColor, expectedColor, 'should return correct bootstrap color');
});

test('#statusColor property should return danger color if the statusFunction returns danger.', function(){
	var status = 'danger',
		component = this.subject({
		highlight: true,
		value: 1,
		statusFunction: function(value){
			if(value === 1){
				return status;
			}
		}
	});
	this.append();

	var statusColor = component.get('statusColor'),
		expectedColor = 'alert-'+status;
	strictEqual(statusColor, expectedColor, 'should return correct bootstrap color');
});

test('#statusColor property should return warning color if the statusFunction returns warning.', function(){
	var status = 'warning',
		component = this.subject({
		highlight: true,
		value: 1,
		statusFunction: function(value){
			if(value === 1){
				return status;
			}
		}
	});
	this.append();

	var statusColor = component.get('statusColor'),
		expectedColor = 'alert-'+status;
	strictEqual(statusColor, expectedColor, 'should return correct bootstrap color');
});

test('#statusColor property should return info color if the statusFunction returns info.', function(){
	var status = 'info',
		component = this.subject({
		highlight: true,
		value: 1,
		statusFunction: function(value){
			if(value === 1){
				return status;
			}
		}
	});
	this.append();

	var statusColor = component.get('statusColor'),
		expectedColor = 'alert-'+status;
	strictEqual(statusColor, expectedColor, 'should return correct bootstrap color');
});

test('#statusColor property should return an empty string if the status value was not found.', function(){
	var status = 'someotherstatus',
		component = this.subject({
		highlight: true,
		value: 1,
		statusFunction: function(value){
			if(value === 1){
				return status;
			}
		}
	});
	this.append();

	var statusColor = component.get('statusColor');
	strictEqual(statusColor, '', 'should return an empty string');
});

test('span should contain only the value when the valueFormatter is not provided.', function(){
	var MockValue = 'SOMEMOCKVALUE',
		component = this.subject({
			value: MockValue,
			valueFormatter: null
		});
	this.append();

	var text = component.$().text();
	strictEqual(text, MockValue, 'should return value as string');
});

test('span should contain the formatted value when the valueFormatter is provided.', function(){
	var MockValue = 'SOMEMOCKVALUE',
		component = this.subject({
			value: MockValue,
			valueFormatter: function(value){
				// just returning same value as lowerCase for testing:
				return value.toLowerCase();
			}
		});
	this.append();

	var text = component.$().text();
	strictEqual(text, MockValue.toLowerCase(), 'should return value as string');
});

test('statusColor should be applied to the span.', function(){
	var status = 'success',
		component = this.subject({
			highlight: true,
			statusFunction: function(value){
				// just returning status to test if statusColor is applied to span.
				return status;
			}
		});
	this.append();

	var expectedClass = 'alert-'+status,
		hasClass = component.$().hasClass(expectedClass);
	ok(hasClass, 'span should have '+expectedClass+' class.');
});















