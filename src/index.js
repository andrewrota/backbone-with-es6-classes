'use strict';
import backbone from 'backbone';

class Person extends backbone.Model {
    getFullName() {
        return this.get('firstName') + ' ' + this.get('lastName');
    }
}

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