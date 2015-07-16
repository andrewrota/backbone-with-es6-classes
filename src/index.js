'use strict';
import backbone from 'backbone';
import { on } from './decorators.js';
import _ from 'underscore';

class Person extends backbone.Model {
    getFullName() {
        return this.get('firstName') + ' ' + this.get('lastName');
    }
}

class Hello extends backbone.View {
    render() {
        this.$el.html('Hello, ' + this.model.getFullName() + '.');
    }
    @on('click')
    handleClick() {
        console.log('clicked');
    }
}

var myView = new Hello({el: document.getElementById('root'), model: new Person({
    firstName: 'George',
    lastName: 'Washington'
})});
window.myView = myView;
myView.render();