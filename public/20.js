(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{37:function(e,t,n){"use strict";n.r(t);var r=n(0);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i={name:"UserItem",props:["user"],computed:{role:function(){return{user:"",admin:"<b>Администратор</b>"}[this.user.role]},emailVerified:function(){return Boolean(this.user.email_verified_at)?"Подтвержден":"Не подтвержден"}},methods:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},Object(r.b)("contextMenu",["showContextMenu"]))},c=n(1),u=Object(c.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"user_item"},[n("span",{staticClass:"context_menu__icon__user",on:{click:function(t){return t.stopPropagation(),e.showContextMenu({event:t,target:"Users",data:{user:e.user}})}}},[e._v("\n        ⋮\n    ")]),e._v(" "),n("div",{staticClass:"user_item__content"},[n("span",{domProps:{innerHTML:e._s(e.role)}}),e._v(" "),n("span",[e._v("\n            "+e._s(e.user.name)+" /\n        ")]),e._v(" "),n("span",[e._v("\n            "+e._s(e.user.email)+" /\n        ")]),e._v(" "),n("span",[e._v("\n            "+e._s(e.emailVerified)+"\n        ")])])])}),[],!1,null,null,null);t.default=u.exports}}]);