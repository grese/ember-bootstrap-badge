(function(){
    'use strict';

    var BadgeComponent = Em.Component.extend({
        highlight: false,
        tagName: 'span',
        classNames: ['badge-component'],
        classNameBindings: ['hasValue:badge', 'statusColor'],
        value: null,
        hasValue: function(){
            return (this.get('value') !== null && typeof this.get('value') !== 'undefined');
        }.property('value'),
        statusFunction: null,
        valueFormatter: null,
        formattedValue: function(){
            if(this.get('valueFormatter')){
                var formatter = this.get('valueFormatter');
                return formatter(this.get('value'));
            }else{
                return this.get('value');
            }
        }.property('value', 'valueFormatter'),
        statusColor: function(){
            if(this.get('highlight')){
                var status = null;
                if(!this.get('statusFunction')){
                    Em.Logger.warn('The badge-component requires that if highlight is true, the statusFunction method must also be defined');
                }else{
                    var statusFunc = this.get('statusFunction');
                    status = statusFunc(this.get('value'));
                }
                switch(status){
                    case 'danger':
                    return 'alert-danger';
                    case 'warning':
                    return 'alert-warning';
                    case 'success':
                    return 'alert-success';
                    case 'info':
                    return 'alert-info';
                    default:
                    return '';
                }
            }else{
                return '';
            }
        }.property('value', 'highlight'),
        layout: function(){
            if(!this.get('valueFormatter')){
                return new Em.Handlebars.compile("{{value}}");
            }else{
                return new Em.Handlebars.compile("{{formattedValue}}");
            }
        }.property('value')
    });

    Ember.BadgeComponent = BadgeComponent;
    Ember.Handlebars.helper('badge-component', Ember.BadgeComponent);
}(this));