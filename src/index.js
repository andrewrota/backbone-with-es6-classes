'use strict';
import backbone from 'backbone';
import $ from 'jquery';
console.log(backbone);
export class Hello extends backbone.View {
    render() {
        this.$el.html('Hello, world.');
    }
}

var myView = new Hello({el: document.getElementById('root')});
myView.render();