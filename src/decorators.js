// Experimental POC using ES7 proposed decorators
// since there's no good way to implement props for Backbone classes
// See http://benmccormick.org/2015/07/06/backbone-and-es6-classes-revisited/
// Decorator code from https://gist.github.com/StevenLangbroek/6bd28d8201839434b843

import _ from 'underscore';


// See https://gist.github.com/StevenLangbroek/6bd28d8201839434b843
export function on(eventName){
  return function(target, name, descriptor){
    if(!target.events) {
      target.events = {};
    }
    if(_.isFunction(target.events)) {
      throw new Error('The on decorator is not compatible with an events method');
      return;
    }
    if(!eventName) {
      throw new Error('The on decorator requires an eventName argument');
    }
    target.events[eventName] = name;
    return descriptor;
  }
}