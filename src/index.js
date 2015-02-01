'use strict';
import backbone from 'backbone';

class Hello extends backbone.View {
    render() {
        this.$el.html('Hello, world.');
    }
}

var myView = new Hello({el: document.getElementById('root')});
myView.render();