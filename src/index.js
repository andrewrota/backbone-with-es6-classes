'use strict';
import backbone from 'backbone';
import _ from 'underscore';

class Person extends backbone.Model {
    getFullName() {
        return this.get('firstName') + ' ' + this.get('lastName');
    }
}
// Using benmccormick's suggestion
// for decorators to apply properties to class
// before instantiation
// https://github.com/jashkenas/backbone/issues/3560#issuecomment-113709224
function props(value) {
    return function decorator(target) {
        _.extend(target.prototype, value);
    }
}
@props({
    events: {
        'click': function() { console.log('clicked!'); }
    }
})
class Hello extends backbone.View {
    initialize() {
        this.person = new Person({
            firstName: 'George',
            lastName: 'Washington'
        });
    }
    render() {
        this.$el.html('Hello, ' + this.person.getFullName() + '.');
    }
}

var myView = new Hello({el: document.getElementById('root')});
myView.render();