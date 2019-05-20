import Vue from 'vue';
import Message from './Message';

export var message = (function(){
    var defaults = {
       title : '',
       content:'',
       cancel:'',
       ok:'',
       handleCancel:null,
       hanleok : null
    }
   var MyComponent = Vue.extend( Message );
   return function ( opts ) {
       for(var attr in opts){
           defaults[attr] = opts[attr];
       }

    
       var vm = new MyComponent({
           el: document.createElement('div'),
           data: {
               title:defaults.title,
               content :defaults.content,
               cancel : defaults.cancel,
               ok: defaults.ok
           },
           methods:{
               handleCancel(){
                   defaults.handleCancel && defaults.handleCancel.call(this);
                   document.body.removeChild( vm.$el )
               },
               handleok() {
                   defaults.handleok && defaults.handleok.call(this)
                   document.body.removeChild( vm.$el )
               }
           }

       });
       document.body.appendChild( vm.$el )
   }

})()