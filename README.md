# ember-bootstrap-badge
A bootstrap badge component for ember.

#### Installation:
* This package is available via bower:  `bower install ember-bootstrap-badge`
* Alternatively, you can just download this package and include dist/ember-bootstrap-badge.min.js in your project

#### Usage:
The component takes the following parameters:
* highlight: (true || false) *// (whether or not to apply dynamic colors to the badge - REQUIRES that statusFunction is also defined)*
* statusFunction: (true || false) *// (the function that returns the status of the badge - should return 'success', 'danger', 'warning', or 'info')*
* value: (true || false) *// (the value that will be passed to the statusFunction, and/or valueFormatter)*
* valueFormatter: (true || false) *// (a function for formatting the value before it is displayed)*

**EXAMPLE:**
```javascript
var controller = Em.Controller.extend({
  valueFormatter: function(value){
    return value + '%';
  },
  value: 90,
  statusFunction: function(value){
    if(value >= 80){
      return 'success';
    }else if(value >= 70){
      return 'warning';
    }else if(value < 70){
      return 'danger';
    }
  }
});

{{badge-component
highlight=true
valueFormatter=valueFormatter
statusFunction=statusFunction
value=value
}}
```
