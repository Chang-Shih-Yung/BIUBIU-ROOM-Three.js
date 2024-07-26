var BASIS=function(){var t="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0;return"undefined"!=typeof __filename&&(t=t||__filename),function(e){var r,n,o=void 0!==(e=e||{})?e:{};o.ready=new Promise((function(t,e){r=t,n=e}));var i,a={};for(i in o)o.hasOwnProperty(i)&&(a[i]=o[i]);var u,s,c,f,l=[];c="object"==typeof window,f="function"==typeof importScripts,u="object"==typeof process&&"object"==typeof process.versions&&"string"==typeof process.versions.node,s=!c&&!u&&!f;var p,d,h,v,y="";u?(y=f?require("path").dirname(y)+"/":__dirname+"/",p=function(t,e){return h||(h=require("fs")),v||(v=require("path")),t=v.normalize(t),h.readFileSync(t,e?null:"utf8")},d=function(t){var e=p(t,!0);return e.buffer||(e=new Uint8Array(e)),b(e.buffer),e},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),l=process.argv.slice(2),process.on("uncaughtException",(function(t){if(!(t instanceof Ae))throw t})),process.on("unhandledRejection",J),o.inspect=function(){return"[Emscripten Module object]"}):s?("undefined"!=typeof read&&(p=function(t){return read(t)}),d=function(t){var e;return"function"==typeof readbuffer?new Uint8Array(readbuffer(t)):(b("object"==typeof(e=read(t,"binary"))),e)},"undefined"!=typeof scriptArgs?l=scriptArgs:void 0!==arguments&&(l=arguments),"undefined"!=typeof print&&("undefined"==typeof console&&(console={}),console.log=print,console.warn=console.error="undefined"!=typeof printErr?printErr:print)):(c||f)&&(f?y=self.location.href:"undefined"!=typeof document&&document.currentScript&&(y=document.currentScript.src),t&&(y=t),y=0!==y.indexOf("blob:")?y.substr(0,y.lastIndexOf("/")+1):"",p=function(t){var e=new XMLHttpRequest;return e.open("GET",t,!1),e.send(null),e.responseText},f&&(d=function(t){var e=new XMLHttpRequest;return e.open("GET",t,!1),e.responseType="arraybuffer",e.send(null),new Uint8Array(e.response)})),o.print||console.log.bind(console);var m,g,w=o.printErr||console.warn.bind(console);for(i in a)a.hasOwnProperty(i)&&(o[i]=a[i]);a=null,o.arguments&&(l=o.arguments),o.thisProgram&&o.thisProgram,o.quit&&o.quit,o.wasmBinary&&(m=o.wasmBinary),o.noExitRuntime&&o.noExitRuntime,"object"!=typeof WebAssembly&&J("no native wasm support detected");var T=!1;function b(t,e){t||J("Assertion failed: "+e)}var C="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;var $,P,_,A,S,W,E,F,k,O="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function j(t,e){for(var r=t,n=r>>1,o=n+e/2;!(n>=o)&&S[n];)++n;if((r=n<<1)-t>32&&O)return O.decode(_.subarray(t,r));for(var i="",a=0;!(a>=e/2);++a){var u=A[t+2*a>>1];if(0==u)break;i+=String.fromCharCode(u)}return i}function R(t,e,r){if(void 0===r&&(r=2147483647),r<2)return 0;for(var n=e,o=(r-=2)<2*t.length?r/2:t.length,i=0;i<o;++i){var a=t.charCodeAt(i);A[e>>1]=a,e+=2}return A[e>>1]=0,e-n}function x(t){return 2*t.length}function I(t,e){for(var r=0,n="";!(r>=e/4);){var o=W[t+4*r>>2];if(0==o)break;if(++r,o>=65536){var i=o-65536;n+=String.fromCharCode(55296|i>>10,56320|1023&i)}else n+=String.fromCharCode(o)}return n}function D(t,e,r){if(void 0===r&&(r=2147483647),r<4)return 0;for(var n=e,o=n+r-4,i=0;i<t.length;++i){var a=t.charCodeAt(i);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&t.charCodeAt(++i)),W[e>>2]=a,(e+=4)+4>o)break}return W[e>>2]=0,e-n}function U(t){for(var e=0,r=0;r<t.length;++r){var n=t.charCodeAt(r);n>=55296&&n<=57343&&++r,e+=4}return e}function B(t){$=t,o.HEAP8=P=new Int8Array(t),o.HEAP16=A=new Int16Array(t),o.HEAP32=W=new Int32Array(t),o.HEAPU8=_=new Uint8Array(t),o.HEAPU16=S=new Uint16Array(t),o.HEAPU32=E=new Uint32Array(t),o.HEAPF32=F=new Float32Array(t),o.HEAPF64=k=new Float64Array(t)}o.INITIAL_MEMORY;var V,M=[],H=[],q=[],z=[],N=0,G=null,L=null;function J(t){o.onAbort&&o.onAbort(t),w(t+=""),T=!0,t="abort("+t+"). Build with -s ASSERTIONS=1 for more info.";var e=new WebAssembly.RuntimeError(t);throw n(e),e}function X(t,e){return String.prototype.startsWith?t.startsWith(e):0===t.indexOf(e)}o.preloadedImages={},o.preloadedAudios={};function K(t){return X(t,"data:application/octet-stream;base64,")}function Y(t){return X(t,"file://")}var Z,Q="basis_transcoder.wasm";function tt(){try{if(m)return new Uint8Array(m);if(d)return d(Q);throw"both async and sync fetching of the wasm failed"}catch(t){J(t)}}function et(t){for(;t.length>0;){var e=t.shift();if("function"!=typeof e){var r=e.func;"number"==typeof r?void 0===e.arg?V.get(r)():V.get(r)(e.arg):r(void 0===e.arg?null:e.arg)}else e(o)}}K(Q)||(Z=Q,Q=o.locateFile?o.locateFile(Z,y):y+Z);var rt=0,nt=4,ot=8,it=12,at=13,ut=16;function st(t){this.excPtr=t,this.ptr=t-ut,this.set_type=function(t){W[this.ptr+ot>>2]=t},this.get_type=function(){return W[this.ptr+ot>>2]},this.set_destructor=function(t){W[this.ptr+rt>>2]=t},this.get_destructor=function(){return W[this.ptr+rt>>2]},this.set_refcount=function(t){W[this.ptr+nt>>2]=t},this.set_caught=function(t){t=t?1:0,P[this.ptr+it|0]=t},this.get_caught=function(){return 0!=P[this.ptr+it|0]},this.set_rethrown=function(t){t=t?1:0,P[this.ptr+at|0]=t},this.get_rethrown=function(){return 0!=P[this.ptr+at|0]},this.init=function(t,e){this.set_type(t),this.set_destructor(e),this.set_refcount(0),this.set_caught(!1),this.set_rethrown(!1)},this.add_ref=function(){var t=W[this.ptr+nt>>2];W[this.ptr+nt>>2]=t+1},this.release_ref=function(){var t=W[this.ptr+nt>>2];return W[this.ptr+nt>>2]=t-1,1===t}}var ct={};function ft(t){for(;t.length;){var e=t.pop();t.pop()(e)}}function lt(t){return this.fromWireType(E[t>>2])}var pt={},dt={},ht={},vt=48,yt=57;function mt(t){if(void 0===t)return"_unknown";var e=(t=t.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return e>=vt&&e<=yt?"_"+t:t}function gt(t,e){return t=mt(t),new Function("body","return function "+t+'() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(e)}function wt(t,e){var r=gt(e,(function(t){this.name=e,this.message=t;var r=new Error(t).stack;void 0!==r&&(this.stack=this.toString()+"\n"+r.replace(/^Error(:[^\n]*)?\n/,""))}));return r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},r}var Tt=void 0;function bt(t){throw new Tt(t)}function Ct(t,e,r){function n(e){var n=r(e);n.length!==t.length&&bt("Mismatched type converter count");for(var o=0;o<t.length;++o)Wt(t[o],n[o])}t.forEach((function(t){ht[t]=e}));var o=new Array(e.length),i=[],a=0;e.forEach((function(t,e){dt.hasOwnProperty(t)?o[e]=dt[t]:(i.push(t),pt.hasOwnProperty(t)||(pt[t]=[]),pt[t].push((function(){o[e]=dt[t],++a===i.length&&n(o)})))})),0===i.length&&n(o)}function $t(t){switch(t){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+t)}}var Pt=void 0;function _t(t){for(var e="",r=t;_[r];)e+=Pt[_[r++]];return e}var At=void 0;function St(t){throw new At(t)}function Wt(t,e,r){if(r=r||{},!("argPackAdvance"in e))throw new TypeError("registerType registeredInstance requires argPackAdvance");var n=e.name;if(t||St('type "'+n+'" must have a positive integer typeid pointer'),dt.hasOwnProperty(t)){if(r.ignoreDuplicateRegistrations)return;St("Cannot register type '"+n+"' twice")}if(dt[t]=e,delete ht[t],pt.hasOwnProperty(t)){var o=pt[t];delete pt[t],o.forEach((function(t){t()}))}}function Et(t){St(t.$$.ptrType.registeredClass.name+" instance already deleted")}var Ft=!1;function kt(t){}function Ot(t){t.count.value-=1,0===t.count.value&&function(t){t.smartPtr?t.smartPtrType.rawDestructor(t.smartPtr):t.ptrType.registeredClass.rawDestructor(t.ptr)}(t)}function jt(t){return"undefined"==typeof FinalizationGroup?(jt=function(t){return t},t):(Ft=new FinalizationGroup((function(t){for(var e=t.next();!e.done;e=t.next()){var r=e.value;r.ptr?Ot(r):console.warn("object already deleted: "+r.ptr)}})),jt=function(t){return Ft.register(t,t.$$,t.$$),t},kt=function(t){Ft.unregister(t.$$)},jt(t))}var Rt=void 0,xt=[];function It(){for(;xt.length;){var t=xt.pop();t.$$.deleteScheduled=!1,t.delete()}}function Dt(){}var Ut={};function Bt(t,e,r){if(void 0===t[e].overloadTable){var n=t[e];t[e]=function(){return t[e].overloadTable.hasOwnProperty(arguments.length)||St("Function '"+r+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+t[e].overloadTable+")!"),t[e].overloadTable[arguments.length].apply(this,arguments)},t[e].overloadTable=[],t[e].overloadTable[n.argCount]=n}}function Vt(t,e,r){o.hasOwnProperty(t)?((void 0===r||void 0!==o[t].overloadTable&&void 0!==o[t].overloadTable[r])&&St("Cannot register public name '"+t+"' twice"),Bt(o,t,t),o.hasOwnProperty(r)&&St("Cannot register multiple overloads of a function with the same number of arguments ("+r+")!"),o[t].overloadTable[r]=e):(o[t]=e,void 0!==r&&(o[t].numArguments=r))}function Mt(t,e,r,n,o,i,a,u){this.name=t,this.constructor=e,this.instancePrototype=r,this.rawDestructor=n,this.baseClass=o,this.getActualType=i,this.upcast=a,this.downcast=u,this.pureVirtualFunctions=[]}function Ht(t,e,r){for(;e!==r;)e.upcast||St("Expected null or instance of "+r.name+", got an instance of "+e.name),t=e.upcast(t),e=e.baseClass;return t}function qt(t,e){if(null===e)return this.isReference&&St("null is not a valid "+this.name),0;e.$$||St('Cannot pass "'+fe(e)+'" as a '+this.name),e.$$.ptr||St("Cannot pass deleted object as a pointer of type "+this.name);var r=e.$$.ptrType.registeredClass;return Ht(e.$$.ptr,r,this.registeredClass)}function zt(t,e){var r;if(null===e)return this.isReference&&St("null is not a valid "+this.name),this.isSmartPointer?(r=this.rawConstructor(),null!==t&&t.push(this.rawDestructor,r),r):0;e.$$||St('Cannot pass "'+fe(e)+'" as a '+this.name),e.$$.ptr||St("Cannot pass deleted object as a pointer of type "+this.name),!this.isConst&&e.$$.ptrType.isConst&&St("Cannot convert argument of type "+(e.$$.smartPtrType?e.$$.smartPtrType.name:e.$$.ptrType.name)+" to parameter type "+this.name);var n=e.$$.ptrType.registeredClass;if(r=Ht(e.$$.ptr,n,this.registeredClass),this.isSmartPointer)switch(void 0===e.$$.smartPtr&&St("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:e.$$.smartPtrType===this?r=e.$$.smartPtr:St("Cannot convert argument of type "+(e.$$.smartPtrType?e.$$.smartPtrType.name:e.$$.ptrType.name)+" to parameter type "+this.name);break;case 1:r=e.$$.smartPtr;break;case 2:if(e.$$.smartPtrType===this)r=e.$$.smartPtr;else{var o=e.clone();r=this.rawShare(r,ue((function(){o.delete()}))),null!==t&&t.push(this.rawDestructor,r)}break;default:St("Unsupporting sharing policy")}return r}function Nt(t,e){if(null===e)return this.isReference&&St("null is not a valid "+this.name),0;e.$$||St('Cannot pass "'+fe(e)+'" as a '+this.name),e.$$.ptr||St("Cannot pass deleted object as a pointer of type "+this.name),e.$$.ptrType.isConst&&St("Cannot convert argument of type "+e.$$.ptrType.name+" to parameter type "+this.name);var r=e.$$.ptrType.registeredClass;return Ht(e.$$.ptr,r,this.registeredClass)}function Gt(t,e,r){if(e===r)return t;if(void 0===r.baseClass)return null;var n=Gt(t,e,r.baseClass);return null===n?null:r.downcast(n)}var Lt={};function Jt(t,e){return e.ptrType&&e.ptr||bt("makeClassHandle requires ptr and ptrType"),!!e.smartPtrType!=!!e.smartPtr&&bt("Both smartPtrType and smartPtr must be specified"),e.count={value:1},jt(Object.create(t,{$$:{value:e}}))}function Xt(t,e,r,n,o,i,a,u,s,c,f){this.name=t,this.registeredClass=e,this.isReference=r,this.isConst=n,this.isSmartPointer=o,this.pointeeType=i,this.sharingPolicy=a,this.rawGetPointee=u,this.rawConstructor=s,this.rawShare=c,this.rawDestructor=f,o||void 0!==e.baseClass?this.toWireType=zt:n?(this.toWireType=qt,this.destructorFunction=null):(this.toWireType=Nt,this.destructorFunction=null)}function Kt(t,e,r){o.hasOwnProperty(t)||bt("Replacing nonexistant public symbol"),void 0!==o[t].overloadTable&&void 0!==r?o[t].overloadTable[r]=e:(o[t]=e,o[t].argCount=r)}function Yt(t,e){var r=-1!=(t=_t(t)).indexOf("j")?function(t,e){b(t.indexOf("j")>=0,"getDynCaller should only be called with i64 sigs");var r=[];return function(){r.length=arguments.length;for(var n=0;n<arguments.length;n++)r[n]=arguments[n];return function(t,e,r){return-1!=t.indexOf("j")?function(t,e,r){return r&&r.length?o["dynCall_"+t].apply(null,[e].concat(r)):o["dynCall_"+t].call(null,e)}(t,e,r):V.get(e).apply(null,r)}(t,e,r)}}(t,e):V.get(e);return"function"!=typeof r&&St("unknown function pointer with signature "+t+": "+e),r}var Zt=void 0;function Qt(t){var e=_e(t),r=_t(e);return Pe(e),r}function te(t,e){var r=[],n={};throw e.forEach((function t(e){n[e]||dt[e]||(ht[e]?ht[e].forEach(t):(r.push(e),n[e]=!0))})),new Zt(t+": "+r.map(Qt).join([", "]))}function ee(t,e){for(var r=[],n=0;n<t;n++)r.push(W[(e>>2)+n]);return r}function re(t,e){if(!(t instanceof Function))throw new TypeError("new_ called with constructor type "+typeof t+" which is not a function");var r=gt(t.name||"unknownFunctionName",(function(){}));r.prototype=t.prototype;var n=new r,o=t.apply(n,e);return o instanceof Object?o:n}function ne(t,e,r,n,o){var i=e.length;i<2&&St("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var a=null!==e[1]&&null!==r,u=!1,s=1;s<e.length;++s)if(null!==e[s]&&void 0===e[s].destructorFunction){u=!0;break}var c="void"!==e[0].name,f="",l="";for(s=0;s<i-2;++s)f+=(0!==s?", ":"")+"arg"+s,l+=(0!==s?", ":"")+"arg"+s+"Wired";var p="return function "+mt(t)+"("+f+") {\nif (arguments.length !== "+(i-2)+") {\nthrowBindingError('function "+t+" called with ' + arguments.length + ' arguments, expected "+(i-2)+" args!');\n}\n";u&&(p+="var destructors = [];\n");var d=u?"destructors":"null",h=["throwBindingError","invoker","fn","runDestructors","retType","classParam"],v=[St,n,o,ft,e[0],e[1]];for(a&&(p+="var thisWired = classParam.toWireType("+d+", this);\n"),s=0;s<i-2;++s)p+="var arg"+s+"Wired = argType"+s+".toWireType("+d+", arg"+s+"); // "+e[s+2].name+"\n",h.push("argType"+s),v.push(e[s+2]);if(a&&(l="thisWired"+(l.length>0?", ":"")+l),p+=(c?"var rv = ":"")+"invoker(fn"+(l.length>0?", ":"")+l+");\n",u)p+="runDestructors(destructors);\n";else for(s=a?1:2;s<e.length;++s){var y=1===s?"thisWired":"arg"+(s-2)+"Wired";null!==e[s].destructorFunction&&(p+=y+"_dtor("+y+"); // "+e[s].name+"\n",h.push(y+"_dtor"),v.push(e[s].destructorFunction))}return c&&(p+="var ret = retType.fromWireType(rv);\nreturn ret;\n"),p+="}\n",h.push(p),re(Function,h).apply(null,v)}var oe=[],ie=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function ae(t){t>4&&0==--ie[t].refcount&&(ie[t]=void 0,oe.push(t))}function ue(t){switch(t){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var e=oe.length?oe.pop():ie.length;return ie[e]={refcount:1,value:t},e}}function se(t,e,r){switch(e){case 0:return function(t){var e=r?P:_;return this.fromWireType(e[t])};case 1:return function(t){var e=r?A:S;return this.fromWireType(e[t>>1])};case 2:return function(t){var e=r?W:E;return this.fromWireType(e[t>>2])};default:throw new TypeError("Unknown integer type: "+t)}}function ce(t,e){var r=dt[t];return void 0===r&&St(e+" has unknown type "+Qt(t)),r}function fe(t){if(null===t)return"null";var e=typeof t;return"object"===e||"array"===e||"function"===e?t.toString():""+t}function le(t,e){switch(e){case 2:return function(t){return this.fromWireType(F[t>>2])};case 3:return function(t){return this.fromWireType(k[t>>3])};default:throw new TypeError("Unknown float type: "+t)}}function pe(t,e,r){switch(e){case 0:return r?function(t){return P[t]}:function(t){return _[t]};case 1:return r?function(t){return A[t>>1]}:function(t){return S[t>>1]};case 2:return r?function(t){return W[t>>2]}:function(t){return E[t>>2]};default:throw new TypeError("Unknown integer type: "+t)}}function de(t){return t||St("Cannot use deleted val. handle = "+t),ie[t].value}var he={};function ve(t){var e=he[t];return void 0===e?_t(t):e}var ye=[];function me(){return"object"==typeof globalThis?globalThis:Function("return this")()}var ge={};function we(t){try{return g.grow(t-$.byteLength+65535>>>16),B(g.buffer),1}catch(t){}}Tt=o.InternalError=wt(Error,"InternalError"),function(){for(var t=new Array(256),e=0;e<256;++e)t[e]=String.fromCharCode(e);Pt=t}(),At=o.BindingError=wt(Error,"BindingError"),Dt.prototype.isAliasOf=function(t){if(!(this instanceof Dt))return!1;if(!(t instanceof Dt))return!1;for(var e=this.$$.ptrType.registeredClass,r=this.$$.ptr,n=t.$$.ptrType.registeredClass,o=t.$$.ptr;e.baseClass;)r=e.upcast(r),e=e.baseClass;for(;n.baseClass;)o=n.upcast(o),n=n.baseClass;return e===n&&r===o},Dt.prototype.clone=function(){if(this.$$.ptr||Et(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var t,e=jt(Object.create(Object.getPrototypeOf(this),{$$:{value:(t=this.$$,{count:t.count,deleteScheduled:t.deleteScheduled,preservePointerOnDelete:t.preservePointerOnDelete,ptr:t.ptr,ptrType:t.ptrType,smartPtr:t.smartPtr,smartPtrType:t.smartPtrType})}}));return e.$$.count.value+=1,e.$$.deleteScheduled=!1,e},Dt.prototype.delete=function(){this.$$.ptr||Et(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&St("Object already scheduled for deletion"),kt(this),Ot(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},Dt.prototype.isDeleted=function(){return!this.$$.ptr},Dt.prototype.deleteLater=function(){return this.$$.ptr||Et(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&St("Object already scheduled for deletion"),xt.push(this),1===xt.length&&Rt&&Rt(It),this.$$.deleteScheduled=!0,this},Xt.prototype.getPointee=function(t){return this.rawGetPointee&&(t=this.rawGetPointee(t)),t},Xt.prototype.destructor=function(t){this.rawDestructor&&this.rawDestructor(t)},Xt.prototype.argPackAdvance=8,Xt.prototype.readValueFromPointer=lt,Xt.prototype.deleteObject=function(t){null!==t&&t.delete()},Xt.prototype.fromWireType=function(t){var e=this.getPointee(t);if(!e)return this.destructor(t),null;var r=function(t,e){return e=function(t,e){for(void 0===e&&St("ptr should not be undefined");t.baseClass;)e=t.upcast(e),t=t.baseClass;return e}(t,e),Lt[e]}(this.registeredClass,e);if(void 0!==r){if(0===r.$$.count.value)return r.$$.ptr=e,r.$$.smartPtr=t,r.clone();var n=r.clone();return this.destructor(t),n}function o(){return this.isSmartPointer?Jt(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:e,smartPtrType:this,smartPtr:t}):Jt(this.registeredClass.instancePrototype,{ptrType:this,ptr:t})}var i,a=this.registeredClass.getActualType(e),u=Ut[a];if(!u)return o.call(this);i=this.isConst?u.constPointerType:u.pointerType;var s=Gt(e,this.registeredClass,i.registeredClass);return null===s?o.call(this):this.isSmartPointer?Jt(i.registeredClass.instancePrototype,{ptrType:i,ptr:s,smartPtrType:this,smartPtr:t}):Jt(i.registeredClass.instancePrototype,{ptrType:i,ptr:s})},o.getInheritedInstanceCount=function(){return Object.keys(Lt).length},o.getLiveInheritedInstances=function(){var t=[];for(var e in Lt)Lt.hasOwnProperty(e)&&t.push(Lt[e]);return t},o.flushPendingDeletes=It,o.setDelayFunction=function(t){Rt=t,xt.length&&Rt&&Rt(It)},Zt=o.UnboundTypeError=wt(Error,"UnboundTypeError"),o.count_emval_handles=function(){for(var t=0,e=5;e<ie.length;++e)void 0!==ie[e]&&++t;return t},o.get_first_emval=function(){for(var t=5;t<ie.length;++t)if(void 0!==ie[t])return ie[t];return null},H.push({func:function(){Ce()}});var Te,be={G:function(t){return $e(t+ut)+ut},F:function(t,e,r){throw new st(t).init(e,r),t},s:function(t){var e=ct[t];delete ct[t];var r=e.rawConstructor,n=e.rawDestructor,o=e.fields;Ct([t],o.map((function(t){return t.getterReturnType})).concat(o.map((function(t){return t.setterArgumentType}))),(function(t){var i={};return o.forEach((function(e,r){var n=e.fieldName,a=t[r],u=e.getter,s=e.getterContext,c=t[r+o.length],f=e.setter,l=e.setterContext;i[n]={read:function(t){return a.fromWireType(u(s,t))},write:function(t,e){var r=[];f(l,t,c.toWireType(r,e)),ft(r)}}})),[{name:e.name,fromWireType:function(t){var e={};for(var r in i)e[r]=i[r].read(t);return n(t),e},toWireType:function(t,e){for(var o in i)if(!(o in e))throw new TypeError('Missing field:  "'+o+'"');var a=r();for(o in i)i[o].write(a,e[o]);return null!==t&&t.push(n,a),a},argPackAdvance:8,readValueFromPointer:lt,destructorFunction:n}]}))},D:function(t,e,r,n,o){var i=$t(r);Wt(t,{name:e=_t(e),fromWireType:function(t){return!!t},toWireType:function(t,e){return e?n:o},argPackAdvance:8,readValueFromPointer:function(t){var n;if(1===r)n=P;else if(2===r)n=A;else{if(4!==r)throw new TypeError("Unknown boolean type size: "+e);n=W}return this.fromWireType(n[t>>i])},destructorFunction:null})},x:function(t,e,r,n,o,i,a,u,s,c,f,l,p){f=_t(f),i=Yt(o,i),u&&(u=Yt(a,u)),c&&(c=Yt(s,c)),p=Yt(l,p);var d=mt(f);Vt(d,(function(){te("Cannot construct "+f+" due to unbound types",[n])})),Ct([t,e,r],n?[n]:[],(function(e){var r,o;e=e[0],o=n?(r=e.registeredClass).instancePrototype:Dt.prototype;var a=gt(d,(function(){if(Object.getPrototypeOf(this)!==s)throw new At("Use 'new' to construct "+f);if(void 0===l.constructor_body)throw new At(f+" has no accessible constructor");var t=l.constructor_body[arguments.length];if(void 0===t)throw new At("Tried to invoke ctor of "+f+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(l.constructor_body).toString()+") parameters instead!");return t.apply(this,arguments)})),s=Object.create(o,{constructor:{value:a}});a.prototype=s;var l=new Mt(f,a,s,p,r,i,u,c),h=new Xt(f,l,!0,!1,!1),v=new Xt(f+"*",l,!1,!1,!1),y=new Xt(f+" const*",l,!1,!0,!1);return Ut[t]={pointerType:v,constPointerType:y},Kt(d,a),[h,v,y]}))},w:function(t,e,r,n,o,i){b(e>0);var a=ee(e,r);o=Yt(n,o);var u=[i],s=[];Ct([],[t],(function(t){var r="constructor "+(t=t[0]).name;if(void 0===t.registeredClass.constructor_body&&(t.registeredClass.constructor_body=[]),void 0!==t.registeredClass.constructor_body[e-1])throw new At("Cannot register multiple constructors with identical number of parameters ("+(e-1)+") for class '"+t.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return t.registeredClass.constructor_body[e-1]=function(){te("Cannot construct "+t.name+" due to unbound types",a)},Ct([],a,(function(n){return t.registeredClass.constructor_body[e-1]=function(){arguments.length!==e-1&&St(r+" called with "+arguments.length+" arguments, expected "+(e-1)),s.length=0,u.length=e;for(var t=1;t<e;++t)u[t]=n[t].toWireType(s,arguments[t-1]);var i=o.apply(null,u);return ft(s),n[0].fromWireType(i)},[]})),[]}))},d:function(t,e,r,n,o,i,a,u){var s=ee(r,n);e=_t(e),i=Yt(o,i),Ct([],[t],(function(t){var n=(t=t[0]).name+"."+e;function o(){te("Cannot call "+n+" due to unbound types",s)}u&&t.registeredClass.pureVirtualFunctions.push(e);var c=t.registeredClass.instancePrototype,f=c[e];return void 0===f||void 0===f.overloadTable&&f.className!==t.name&&f.argCount===r-2?(o.argCount=r-2,o.className=t.name,c[e]=o):(Bt(c,e,n),c[e].overloadTable[r-2]=o),Ct([],s,(function(o){var u=ne(n,o,t,i,a);return void 0===c[e].overloadTable?(u.argCount=r-2,c[e]=u):c[e].overloadTable[r-2]=u,[]})),[]}))},C:function(t,e){Wt(t,{name:e=_t(e),fromWireType:function(t){var e=ie[t].value;return ae(t),e},toWireType:function(t,e){return ue(e)},argPackAdvance:8,readValueFromPointer:lt,destructorFunction:null})},o:function(t,e,r,n){var o=$t(r);function i(){}e=_t(e),i.values={},Wt(t,{name:e,constructor:i,fromWireType:function(t){return this.constructor.values[t]},toWireType:function(t,e){return e.value},argPackAdvance:8,readValueFromPointer:se(e,o,n),destructorFunction:null}),Vt(e,i)},b:function(t,e,r){var n=ce(t,"enum");e=_t(e);var o=n.constructor,i=Object.create(n.constructor.prototype,{value:{value:r},constructor:{value:gt(n.name+"_"+e,(function(){}))}});o.values[r]=i,o[e]=i},u:function(t,e,r){var n=$t(r);Wt(t,{name:e=_t(e),fromWireType:function(t){return t},toWireType:function(t,e){if("number"!=typeof e&&"boolean"!=typeof e)throw new TypeError('Cannot convert "'+fe(e)+'" to '+this.name);return e},argPackAdvance:8,readValueFromPointer:le(e,n),destructorFunction:null})},j:function(t,e,r,n,o,i){var a=ee(e,r);t=_t(t),o=Yt(n,o),Vt(t,(function(){te("Cannot call "+t+" due to unbound types",a)}),e-1),Ct([],a,(function(r){var n=[r[0],null].concat(r.slice(1));return Kt(t,ne(t,n,null,o,i),e-1),[]}))},h:function(t,e,r,n,o){e=_t(e),-1===o&&(o=4294967295);var i=$t(r),a=function(t){return t};if(0===n){var u=32-8*r;a=function(t){return t<<u>>>u}}var s=-1!=e.indexOf("unsigned");Wt(t,{name:e,fromWireType:a,toWireType:function(t,r){if("number"!=typeof r&&"boolean"!=typeof r)throw new TypeError('Cannot convert "'+fe(r)+'" to '+this.name);if(r<n||r>o)throw new TypeError('Passing a number "'+fe(r)+'" from JS side to C/C++ side to an argument of type "'+e+'", which is outside the valid range ['+n+", "+o+"]!");return s?r>>>0:0|r},argPackAdvance:8,readValueFromPointer:pe(e,i,0!==n),destructorFunction:null})},g:function(t,e,r){var n=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][e];function o(t){var e=E,r=e[t>>=2],o=e[t+1];return new n($,o,r)}Wt(t,{name:r=_t(r),fromWireType:o,argPackAdvance:8,readValueFromPointer:o},{ignoreDuplicateRegistrations:!0})},v:function(t,e){var r="std::string"===(e=_t(e));Wt(t,{name:e,fromWireType:function(t){var e,n,o,i=E[t>>2];if(r)for(var a=t+4,u=0;u<=i;++u){var s=t+4+u;if(u==i||0==_[s]){var c=(o=s-a,(n=a)?function(t,e,r){for(var n=e+r,o=e;t[o]&&!(o>=n);)++o;if(o-e>16&&t.subarray&&C)return C.decode(t.subarray(e,o));for(var i="";e<o;){var a=t[e++];if(128&a){var u=63&t[e++];if(192!=(224&a)){var s=63&t[e++];if((a=224==(240&a)?(15&a)<<12|u<<6|s:(7&a)<<18|u<<12|s<<6|63&t[e++])<65536)i+=String.fromCharCode(a);else{var c=a-65536;i+=String.fromCharCode(55296|c>>10,56320|1023&c)}}else i+=String.fromCharCode((31&a)<<6|u)}else i+=String.fromCharCode(a)}return i}(_,n,o):"");void 0===e?e=c:(e+=String.fromCharCode(0),e+=c),a=s+1}}else{var f=new Array(i);for(u=0;u<i;++u)f[u]=String.fromCharCode(_[t+4+u]);e=f.join("")}return Pe(t),e},toWireType:function(t,e){var n;e instanceof ArrayBuffer&&(e=new Uint8Array(e));var o="string"==typeof e;o||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int8Array||St("Cannot pass non-string to std::string"),n=r&&o?function(){return function(t){for(var e=0,r=0;r<t.length;++r){var n=t.charCodeAt(r);n>=55296&&n<=57343&&(n=65536+((1023&n)<<10)|1023&t.charCodeAt(++r)),n<=127?++e:e+=n<=2047?2:n<=65535?3:4}return e}(e)}:function(){return e.length};var i=n(),a=$e(4+i+1);if(E[a>>2]=i,r&&o)!function(t,e,r,n){if(!(n>0))return 0;for(var o=r+n-1,i=0;i<t.length;++i){var a=t.charCodeAt(i);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&t.charCodeAt(++i)),a<=127){if(r>=o)break;e[r++]=a}else if(a<=2047){if(r+1>=o)break;e[r++]=192|a>>6,e[r++]=128|63&a}else if(a<=65535){if(r+2>=o)break;e[r++]=224|a>>12,e[r++]=128|a>>6&63,e[r++]=128|63&a}else{if(r+3>=o)break;e[r++]=240|a>>18,e[r++]=128|a>>12&63,e[r++]=128|a>>6&63,e[r++]=128|63&a}}e[r]=0}(e,_,a+4,i+1);else if(o)for(var u=0;u<i;++u){var s=e.charCodeAt(u);s>255&&(Pe(a),St("String has UTF-16 code units that do not fit in 8 bits")),_[a+4+u]=s}else for(u=0;u<i;++u)_[a+4+u]=e[u];return null!==t&&t.push(Pe,a),a},argPackAdvance:8,readValueFromPointer:lt,destructorFunction:function(t){Pe(t)}})},r:function(t,e,r){var n,o,i,a,u;r=_t(r),2===e?(n=j,o=R,a=x,i=function(){return S},u=1):4===e&&(n=I,o=D,a=U,i=function(){return E},u=2),Wt(t,{name:r,fromWireType:function(t){for(var r,o=E[t>>2],a=i(),s=t+4,c=0;c<=o;++c){var f=t+4+c*e;if(c==o||0==a[f>>u]){var l=n(s,f-s);void 0===r?r=l:(r+=String.fromCharCode(0),r+=l),s=f+e}}return Pe(t),r},toWireType:function(t,n){"string"!=typeof n&&St("Cannot pass non-string to C++ string type "+r);var i=a(n),s=$e(4+i+e);return E[s>>2]=i>>u,o(n,s+4,i+e),null!==t&&t.push(Pe,s),s},argPackAdvance:8,readValueFromPointer:lt,destructorFunction:function(t){Pe(t)}})},t:function(t,e,r,n,o,i){ct[t]={name:_t(e),rawConstructor:Yt(r,n),rawDestructor:Yt(o,i),fields:[]}},c:function(t,e,r,n,o,i,a,u,s,c){ct[t].fields.push({fieldName:_t(e),getterReturnType:r,getter:Yt(n,o),getterContext:i,setterArgumentType:a,setter:Yt(u,s),setterContext:c})},E:function(t,e){Wt(t,{isVoid:!0,name:e=_t(e),argPackAdvance:0,fromWireType:function(){},toWireType:function(t,e){}})},l:function(t,e,r){t=de(t),e=ce(e,"emval::as");var n=[],o=ue(n);return W[r>>2]=o,e.toWireType(n,t)},p:function(t,e,r,n){(t=ye[t])(e=de(e),r=ve(r),null,n)},a:ae,y:function(t){return 0===t?ue(me()):(t=ve(t),ue(me()[t]))},q:function(t,e){for(var r=function(t,e){for(var r=new Array(t),n=0;n<t;++n)r[n]=ce(W[(e>>2)+n],"parameter "+n);return r}(t,e),n=r[0],o=n.name+"_$"+r.slice(1).map((function(t){return t.name})).join("_")+"$",i=["retType"],a=[n],u="",s=0;s<t-1;++s)u+=(0!==s?", ":"")+"arg"+s,i.push("argType"+s),a.push(r[1+s]);var c,f,l="return function "+mt("methodCaller_"+o)+"(handle, name, destructors, args) {\n",p=0;for(s=0;s<t-1;++s)l+="    var arg"+s+" = argType"+s+".readValueFromPointer(args"+(p?"+"+p:"")+");\n",p+=r[s+1].argPackAdvance;for(l+="    var rv = handle[name]("+u+");\n",s=0;s<t-1;++s)r[s+1].deleteObject&&(l+="    argType"+s+".deleteObject(arg"+s+");\n");return n.isVoid||(l+="    return retType.toWireType(destructors, rv);\n"),l+="};\n",i.push(l),c=re(Function,i).apply(null,a),f=ye.length,ye.push(c),f},n:function(t){return t=ve(t),ue(o[t])},e:function(t,e){return ue((t=de(t))[e=de(e)])},i:function(t){t>4&&(ie[t].refcount+=1)},m:function(t,e,r,n){t=de(t);var i=ge[e];return i||(i=function(t){for(var e="",r=0;r<t;++r)e+=(0!==r?", ":"")+"arg"+r;var n="return function emval_allocator_"+t+"(constructor, argTypes, args) {\n";for(r=0;r<t;++r)n+="var argType"+r+" = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + "+r+'], "parameter '+r+'");\nvar arg'+r+" = argType"+r+".readValueFromPointer(args);\nargs += argType"+r+"['argPackAdvance'];\n";return n+="var obj = new constructor("+e+");\nreturn __emval_register(obj);\n}\n",new Function("requireRegisteredType","Module","__emval_register",n)(ce,o,ue)}(e),ge[e]=i),i(t,r,n)},f:function(t){return ue(ve(t))},k:function(t){ft(ie[t].value),ae(t)},B:function(){J()},z:function(t,e,r){_.copyWithin(t,e,e+r)},A:function(t){t>>>=0;var e=_.length,r=2147483648;if(t>r)return!1;for(var n,o=1;o<=4;o*=2){var i=e*(1+.2/o);if(i=Math.min(i,t+100663296),we(Math.min(r,((n=Math.max(16777216,t,i))%65536>0&&(n+=65536-n%65536),n))))return!0}return!1}},Ce=(function(){var t={a:be};function e(t,e){var r=t.exports;o.asm=r,B((g=o.asm.H).buffer),V=o.asm.I,function(){if(N--,o.monitorRunDependencies&&o.monitorRunDependencies(N),0==N&&(null!==G&&(clearInterval(G),G=null),L)){var t=L;L=null,t()}}()}function r(t){e(t.instance)}function i(e){return(m||!c&&!f||"function"!=typeof fetch||Y(Q)?Promise.resolve().then(tt):fetch(Q,{credentials:"same-origin"}).then((function(t){if(!t.ok)throw"failed to load wasm binary file at '"+Q+"'";return t.arrayBuffer()})).catch((function(){return tt()}))).then((function(e){return WebAssembly.instantiate(e,t)})).then(e,(function(t){w("failed to asynchronously prepare wasm: "+t),J(t)}))}if(N++,o.monitorRunDependencies&&o.monitorRunDependencies(N),o.instantiateWasm)try{return o.instantiateWasm(t,e)}catch(t){return w("Module.instantiateWasm callback failed with error: "+t),!1}(m||"function"!=typeof WebAssembly.instantiateStreaming||K(Q)||Y(Q)||"function"!=typeof fetch?i(r):fetch(Q,{credentials:"same-origin"}).then((function(e){return WebAssembly.instantiateStreaming(e,t).then(r,(function(t){return w("wasm streaming compile failed: "+t),w("falling back to ArrayBuffer instantiation"),i(r)}))}))).catch(n)}(),o.___wasm_call_ctors=function(){return(Ce=o.___wasm_call_ctors=o.asm.J).apply(null,arguments)}),$e=o._malloc=function(){return($e=o._malloc=o.asm.K).apply(null,arguments)},Pe=o._free=function(){return(Pe=o._free=o.asm.L).apply(null,arguments)},_e=o.___getTypeName=function(){return(_e=o.___getTypeName=o.asm.M).apply(null,arguments)};function Ae(t){this.name="ExitStatus",this.message="Program terminated with exit("+t+")",this.status=t}function Se(t){function e(){Te||(Te=!0,o.calledRun=!0,T||(et(H),et(q),r(o),o.onRuntimeInitialized&&o.onRuntimeInitialized(),function(){if(o.postRun)for("function"==typeof o.postRun&&(o.postRun=[o.postRun]);o.postRun.length;)t=o.postRun.shift(),z.unshift(t);var t;et(z)}()))}t=t||l,N>0||(function(){if(o.preRun)for("function"==typeof o.preRun&&(o.preRun=[o.preRun]);o.preRun.length;)t=o.preRun.shift(),M.unshift(t);var t;et(M)}(),N>0||(o.setStatus?(o.setStatus("Running..."),setTimeout((function(){setTimeout((function(){o.setStatus("")}),1),e()}),1)):e()))}if(o.___embind_register_native_and_builtin_types=function(){return(o.___embind_register_native_and_builtin_types=o.asm.N).apply(null,arguments)},L=function t(){Te||Se(),Te||(L=t)},o.run=Se,o.preInit)for("function"==typeof o.preInit&&(o.preInit=[o.preInit]);o.preInit.length>0;)o.preInit.pop()();return Se(),e.ready}}();"object"==typeof exports&&"object"==typeof module?module.exports=BASIS:"function"==typeof define&&define.amd?define([],(function(){return BASIS})):"object"==typeof exports&&(exports.BASIS=BASIS);