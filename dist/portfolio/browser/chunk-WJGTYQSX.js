import{$ as b,Aa as ue,Da as Q,L as k,M as c,O as G,P as v,Pa as C,S as p,U as T,V as u,W as E,a as m,b as D,da as F,ea as _,fb as h,l as oe,mb as de,o as ae,oa as o,ob as ce,pb as ee,qb as te,t as le,ua as w,xa as d}from"./chunk-4N3RDDHD.js";var Ve=(()=>{let e=class e{constructor(t,n){this._renderer=t,this._elementRef=n,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}};e.\u0275fac=function(n){return new(n||e)(o(w),o(F))},e.\u0275dir=u({type:e});let i=e;return i})(),Z=(()=>{let e=class e extends Ve{};e.\u0275fac=(()=>{let t;return function(s){return(t||(t=b(e)))(s||e)}})(),e.\u0275dir=u({type:e,features:[d]});let i=e;return i})(),M=new v(""),Ze={provide:M,useExisting:c(()=>Xe),multi:!0},Xe=(()=>{let e=class e extends Z{writeValue(t){this.setProperty("checked",t)}};e.\u0275fac=(()=>{let t;return function(s){return(t||(t=b(e)))(s||e)}})(),e.\u0275dir=u({type:e,selectors:[["input","type","checkbox","formControlName",""],["input","type","checkbox","formControl",""],["input","type","checkbox","ngModel",""]],hostBindings:function(n,s){n&1&&C("change",function(l){return s.onChange(l.target.checked)})("blur",function(){return s.onTouched()})},features:[h([Ze]),d]});let i=e;return i})(),Ye={provide:M,useExisting:c(()=>De),multi:!0};function Ke(){let i=te()?te().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var Je=new v(""),De=(()=>{let e=class e extends Ve{constructor(t,n,s){super(t,n),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!Ke())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}};e.\u0275fac=function(n){return new(n||e)(o(w),o(F),o(Je,8))},e.\u0275dir=u({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,s){n&1&&C("input",function(l){return s._handleInput(l.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(l){return s._compositionEnd(l.target.value)})},features:[h([Ye]),d]});let i=e;return i})();function y(i){return i==null||(typeof i=="string"||Array.isArray(i))&&i.length===0}function be(i){return i!=null&&typeof i.length=="number"}var N=new v(""),X=new v(""),Qe=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,he=class{static min(e){return et(e)}static max(e){return tt(e)}static required(e){return Ae(e)}static requiredTrue(e){return it(e)}static email(e){return nt(e)}static minLength(e){return rt(e)}static maxLength(e){return st(e)}static pattern(e){return ot(e)}static nullValidator(e){return B(e)}static compose(e){return Se(e)}static composeAsync(e){return Oe(e)}};function et(i){return e=>{if(y(e.value)||y(i))return null;let r=parseFloat(e.value);return!isNaN(r)&&r<i?{min:{min:i,actual:e.value}}:null}}function tt(i){return e=>{if(y(e.value)||y(i))return null;let r=parseFloat(e.value);return!isNaN(r)&&r>i?{max:{max:i,actual:e.value}}:null}}function Ae(i){return y(i.value)?{required:!0}:null}function it(i){return i.value===!0?null:{required:!0}}function nt(i){return y(i.value)||Qe.test(i.value)?null:{email:!0}}function rt(i){return e=>y(e.value)||!be(e.value)?null:e.value.length<i?{minlength:{requiredLength:i,actualLength:e.value.length}}:null}function st(i){return e=>be(e.value)&&e.value.length>i?{maxlength:{requiredLength:i,actualLength:e.value.length}}:null}function ot(i){if(!i)return B;let e,r;return typeof i=="string"?(r="",i.charAt(0)!=="^"&&(r+="^"),r+=i,i.charAt(i.length-1)!=="$"&&(r+="$"),e=new RegExp(r)):(r=i.toString(),e=i),t=>{if(y(t.value))return null;let n=t.value;return e.test(n)?null:{pattern:{requiredPattern:r,actualValue:n}}}}function B(i){return null}function Me(i){return i!=null}function Ee(i){return de(i)?oe(i):i}function Fe(i){let e={};return i.forEach(r=>{e=r!=null?m(m({},e),r):e}),Object.keys(e).length===0?null:e}function we(i,e){return e.map(r=>r(i))}function at(i){return!i.validate}function Ie(i){return i.map(e=>at(e)?e:r=>e.validate(r))}function Se(i){if(!i)return null;let e=i.filter(Me);return e.length==0?null:function(r){return Fe(we(r,e))}}function ne(i){return i!=null?Se(Ie(i)):null}function Oe(i){if(!i)return null;let e=i.filter(Me);return e.length==0?null:function(r){let t=we(r,e).map(Ee);return le(t).pipe(ae(Fe))}}function re(i){return i!=null?Oe(Ie(i)):null}function fe(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function Ne(i){return i._rawValidators}function Pe(i){return i._rawAsyncValidators}function ie(i){return i?Array.isArray(i)?i:[i]:[]}function U(i,e){return Array.isArray(i)?i.includes(e):i===e}function pe(i,e){let r=ie(e);return ie(i).forEach(n=>{U(r,n)||r.push(n)}),r}function ge(i,e){return ie(e).filter(r=>!U(i,r))}var R=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=ne(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=re(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,r){return this.control?this.control.hasError(e,r):!1}getError(e,r){return this.control?this.control.getError(e,r):null}},g=class extends R{get formDirective(){return null}get path(){return null}},V=class extends R{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},H=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},lt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},ii=D(m({},lt),{"[class.ng-submitted]":"isSubmitted"}),ni=(()=>{let e=class e extends H{constructor(t){super(t)}};e.\u0275fac=function(n){return new(n||e)(o(V,2))},e.\u0275dir=u({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,s){n&2&&Q("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[d]});let i=e;return i})(),ri=(()=>{let e=class e extends H{constructor(t){super(t)}};e.\u0275fac=function(n){return new(n||e)(o(g,10))},e.\u0275dir=u({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,s){n&2&&Q("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)("ng-submitted",s.isSubmitted)},features:[d]});let i=e;return i})();var I="VALID",j="INVALID",A="PENDING",S="DISABLED";function xe(i){return(Y(i)?i.validators:i)||null}function ut(i){return Array.isArray(i)?ne(i):i||null}function ke(i,e){return(Y(e)?e.asyncValidators:i)||null}function dt(i){return Array.isArray(i)?re(i):i||null}function Y(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function ct(i,e,r){let t=i.controls;if(!(e?Object.keys(t):t).length)throw new k(1e3,"");if(!t[r])throw new k(1001,"")}function ht(i,e,r){i._forEachChild((t,n)=>{if(r[n]===void 0)throw new k(1002,"")})}var L=class{constructor(e,r){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(r)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===I}get invalid(){return this.status===j}get pending(){return this.status==A}get disabled(){return this.status===S}get enabled(){return this.status!==S}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(pe(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(pe(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(ge(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(ge(e,this._rawAsyncValidators))}hasValidator(e){return U(this._rawValidators,e)}hasAsyncValidator(e){return U(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(r=>{r.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=A,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let r=this._parentMarkedDirty(e.onlySelf);this.status=S,this.errors=null,this._forEachChild(t=>{t.disable(D(m({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(D(m({},e),{skipPristineCheck:r})),this._onDisabledChange.forEach(t=>t(!0))}enable(e={}){let r=this._parentMarkedDirty(e.onlySelf);this.status=I,this._forEachChild(t=>{t.enable(D(m({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(D(m({},e),{skipPristineCheck:r})),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===I||this.status===A)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(r=>r._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?S:I}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=A,this._hasOwnPendingAsyncValidator=!0;let r=Ee(this.asyncValidator(this));this._asyncValidationSubscription=r.subscribe(t=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(t,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,r={}){this.errors=e,this._updateControlsErrors(r.emitEvent!==!1)}get(e){let r=e;return r==null||(Array.isArray(r)||(r=r.split(".")),r.length===0)?null:r.reduce((t,n)=>t&&t._find(n),this)}getError(e,r){let t=r?this.get(r):this;return t&&t.errors?t.errors[e]:null}hasError(e,r){return!!this.getError(e,r)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new _,this.statusChanges=new _}_calculateStatus(){return this._allControlsDisabled()?S:this.errors?j:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(A)?A:this._anyControlsHaveStatus(j)?j:I}_anyControlsHaveStatus(e){return this._anyControls(r=>r.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){Y(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let r=this._parent&&this._parent.dirty;return!e&&!!r&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=ut(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=dt(this._rawAsyncValidators)}},$=class extends L{constructor(e,r,t){super(xe(r),ke(t,r)),this.controls=e,this._initObservables(),this._setUpdateStrategy(r),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,r){return this.controls[e]?this.controls[e]:(this.controls[e]=r,r.setParent(this),r._registerOnCollectionChange(this._onCollectionChange),r)}addControl(e,r,t={}){this.registerControl(e,r),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(e,r={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:r.emitEvent}),this._onCollectionChange()}setControl(e,r,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],r&&this.registerControl(e,r),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,r={}){ht(this,!0,e),Object.keys(e).forEach(t=>{ct(this,!0,t),this.controls[t].setValue(e[t],{onlySelf:!0,emitEvent:r.emitEvent})}),this.updateValueAndValidity(r)}patchValue(e,r={}){e!=null&&(Object.keys(e).forEach(t=>{let n=this.controls[t];n&&n.patchValue(e[t],{onlySelf:!0,emitEvent:r.emitEvent})}),this.updateValueAndValidity(r))}reset(e={},r={}){this._forEachChild((t,n)=>{t.reset(e?e[n]:null,{onlySelf:!0,emitEvent:r.emitEvent})}),this._updatePristine(r),this._updateTouched(r),this.updateValueAndValidity(r)}getRawValue(){return this._reduceChildren({},(e,r,t)=>(e[t]=r.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(r,t)=>t._syncPendingControls()?!0:r);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(r=>{let t=this.controls[r];t&&e(t,r)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[r,t]of Object.entries(this.controls))if(this.contains(r)&&e(t))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(r,t,n)=>((t.enabled||this.disabled)&&(r[n]=t.value),r))}_reduceChildren(e,r){let t=e;return this._forEachChild((n,s)=>{t=r(t,n,s)}),t}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var P=new v("CallSetDisabledState",{providedIn:"root",factory:()=>K}),K="always";function Ge(i,e){return[...e.path,i]}function W(i,e,r=K){se(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||r==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),pt(i,e),mt(i,e),gt(i,e),ft(i,e)}function me(i,e,r=!0){let t=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(t),e.valueAccessor.registerOnTouched(t)),z(i,e),i&&(e._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function q(i,e){i.forEach(r=>{r.registerOnValidatorChange&&r.registerOnValidatorChange(e)})}function ft(i,e){if(e.valueAccessor.setDisabledState){let r=t=>{e.valueAccessor.setDisabledState(t)};i.registerOnDisabledChange(r),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(r)})}}function se(i,e){let r=Ne(i);e.validator!==null?i.setValidators(fe(r,e.validator)):typeof r=="function"&&i.setValidators([r]);let t=Pe(i);e.asyncValidator!==null?i.setAsyncValidators(fe(t,e.asyncValidator)):typeof t=="function"&&i.setAsyncValidators([t]);let n=()=>i.updateValueAndValidity();q(e._rawValidators,n),q(e._rawAsyncValidators,n)}function z(i,e){let r=!1;if(i!==null){if(e.validator!==null){let n=Ne(i);if(Array.isArray(n)&&n.length>0){let s=n.filter(a=>a!==e.validator);s.length!==n.length&&(r=!0,i.setValidators(s))}}if(e.asyncValidator!==null){let n=Pe(i);if(Array.isArray(n)&&n.length>0){let s=n.filter(a=>a!==e.asyncValidator);s.length!==n.length&&(r=!0,i.setAsyncValidators(s))}}}let t=()=>{};return q(e._rawValidators,t),q(e._rawAsyncValidators,t),r}function pt(i,e){e.valueAccessor.registerOnChange(r=>{i._pendingValue=r,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&Te(i,e)})}function gt(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&Te(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function Te(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function mt(i,e){let r=(t,n)=>{e.valueAccessor.writeValue(t),n&&e.viewToModelUpdate(t)};i.registerOnChange(r),e._registerOnDestroy(()=>{i._unregisterOnChange(r)})}function je(i,e){i==null,se(i,e)}function yt(i,e){return z(i,e)}function Be(i,e){if(!i.hasOwnProperty("model"))return!1;let r=i.model;return r.isFirstChange()?!0:!Object.is(e,r.currentValue)}function vt(i){return Object.getPrototypeOf(i.constructor)===Z}function Ue(i,e){i._syncPendingControls(),e.forEach(r=>{let t=r.control;t.updateOn==="submit"&&t._pendingChange&&(r.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function Re(i,e){if(!e)return null;Array.isArray(e);let r,t,n;return e.forEach(s=>{s.constructor===De?r=s:vt(s)?t=s:n=s}),n||t||r||null}function _t(i,e){let r=i.indexOf(e);r>-1&&i.splice(r,1)}var Ct={provide:g,useExisting:c(()=>Vt)},O=Promise.resolve(),Vt=(()=>{let e=class e extends g{constructor(t,n,s){super(),this.callSetDisabledState=s,this.submitted=!1,this._directives=new Set,this.ngSubmit=new _,this.form=new $({},ne(t),re(n))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){O.then(()=>{let n=this._findContainer(t.path);t.control=n.registerControl(t.name,t.control),W(t.control,t,this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){O.then(()=>{let n=this._findContainer(t.path);n&&n.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){O.then(()=>{let n=this._findContainer(t.path),s=new $({});je(s,t),n.registerControl(t.name,s),s.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){O.then(()=>{let n=this._findContainer(t.path);n&&n.removeControl(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,n){O.then(()=>{this.form.get(t.path).setValue(n)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submitted=!0,Ue(this.form,this._directives),this.ngSubmit.emit(t),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submitted=!1}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}};e.\u0275fac=function(n){return new(n||e)(o(N,10),o(X,10),o(P,8))},e.\u0275dir=u({type:e,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(n,s){n&1&&C("submit",function(l){return s.onSubmit(l)})("reset",function(){return s.onReset()})},inputs:{options:[p.None,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[h([Ct]),d]});let i=e;return i})();function ye(i,e){let r=i.indexOf(e);r>-1&&i.splice(r,1)}function ve(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var He=class extends L{constructor(e=null,r,t){super(xe(r),ke(t,r)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(r),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Y(r)&&(r.nonNullable||r.initialValueIsDefault)&&(ve(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,r={}){this.value=this._pendingValue=e,this._onChange.length&&r.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,r.emitViewToModelChange!==!1)),this.updateValueAndValidity(r)}patchValue(e,r={}){this.setValue(e,r)}reset(e=this.defaultValue,r={}){this._applyFormState(e),this.markAsPristine(r),this.markAsUntouched(r),this.setValue(this.value,r),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){ye(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){ye(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){ve(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Dt=i=>i instanceof He;var bt={provide:V,useExisting:c(()=>At)},_e=Promise.resolve(),At=(()=>{let e=class e extends V{constructor(t,n,s,a,l,f){super(),this._changeDetectorRef=l,this.callSetDisabledState=f,this.control=new He,this._registered=!1,this.name="",this.update=new _,this._parent=t,this._setValidators(n),this._setAsyncValidators(s),this.valueAccessor=Re(this,a)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let n=t.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),Be(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){W(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){_e.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let n=t.isDisabled.currentValue,s=n!==0&&ee(n);_e.then(()=>{s&&!this.control.disabled?this.control.disable():!s&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?Ge(t,this._parent):[t]}};e.\u0275fac=function(n){return new(n||e)(o(g,9),o(N,10),o(X,10),o(M,10),o(ce,8),o(P,8))},e.\u0275dir=u({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[p.None,"disabled","isDisabled"],model:[p.None,"ngModel","model"],options:[p.None,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[h([bt]),d,E]});let i=e;return i})(),oi=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=u({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let i=e;return i})();var Le=new v("");var Mt={provide:g,useExisting:c(()=>Et)},Et=(()=>{let e=class e extends g{constructor(t,n,s){super(),this.callSetDisabledState=s,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new _,this._setValidators(t),this._setAsyncValidators(n)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(z(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){let n=this.form.get(t.path);return W(n,t,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),n}getControl(t){return this.form.get(t.path)}removeControl(t){me(t.control||null,t,!1),_t(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,n){this.form.get(t.path).setValue(n)}onSubmit(t){return this.submitted=!0,Ue(this.form,this.directives),this.ngSubmit.emit(t),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submitted=!1}_updateDomValue(){this.directives.forEach(t=>{let n=t.control,s=this.form.get(t.path);n!==s&&(me(n||null,t),Dt(s)&&(W(s,t,this.callSetDisabledState),t.control=s))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let n=this.form.get(t.path);je(n,t),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){let n=this.form.get(t.path);n&&yt(n,t)&&n.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){se(this.form,this),this._oldForm&&z(this._oldForm,this)}_checkFormPresent(){this.form}};e.\u0275fac=function(n){return new(n||e)(o(N,10),o(X,10),o(P,8))},e.\u0275dir=u({type:e,selectors:[["","formGroup",""]],hostBindings:function(n,s){n&1&&C("submit",function(l){return s.onSubmit(l)})("reset",function(){return s.onReset()})},inputs:{form:[p.None,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[h([Mt]),d,E]});let i=e;return i})();var Ft={provide:V,useExisting:c(()=>wt)},wt=(()=>{let e=class e extends V{set isDisabled(t){}constructor(t,n,s,a,l){super(),this._ngModelWarningConfig=l,this._added=!1,this.name=null,this.update=new _,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(n),this._setAsyncValidators(s),this.valueAccessor=Re(this,a)}ngOnChanges(t){this._added||this._setUpControl(),Be(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return Ge(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(n){return new(n||e)(o(g,13),o(N,10),o(X,10),o(M,10),o(Le,8))},e.\u0275dir=u({type:e,selectors:[["","formControlName",""]],inputs:{name:[p.None,"formControlName","name"],isDisabled:[p.None,"disabled","isDisabled"],model:[p.None,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[h([Ft]),d,E]});let i=e;return i})(),It={provide:M,useExisting:c(()=>We),multi:!0};function $e(i,e){return i==null?`${e}`:(e&&typeof e=="object"&&(e="Object"),`${i}: ${e}`.slice(0,50))}function St(i){return i.split(":")[0]}var We=(()=>{let e=class e extends Z{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(t){this._compareWith=t}writeValue(t){this.value=t;let n=this._getOptionId(t),s=$e(n,t);this.setProperty("value",s)}registerOnChange(t){this.onChange=n=>{this.value=this._getOptionValue(n),t(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(t){for(let n of this._optionMap.keys())if(this._compareWith(this._optionMap.get(n),t))return n;return null}_getOptionValue(t){let n=St(t);return this._optionMap.has(n)?this._optionMap.get(n):t}};e.\u0275fac=(()=>{let t;return function(s){return(t||(t=b(e)))(s||e)}})(),e.\u0275dir=u({type:e,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(n,s){n&1&&C("change",function(l){return s.onChange(l.target.value)})("blur",function(){return s.onTouched()})},inputs:{compareWith:"compareWith"},features:[h([It]),d]});let i=e;return i})(),ai=(()=>{let e=class e{constructor(t,n,s){this._element=t,this._renderer=n,this._select=s,this._select&&(this.id=this._select._registerOption())}set ngValue(t){this._select!=null&&(this._select._optionMap.set(this.id,t),this._setElementValue($e(this.id,t)),this._select.writeValue(this._select.value))}set value(t){this._setElementValue(t),this._select&&this._select.writeValue(this._select.value)}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,"value",t)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}};e.\u0275fac=function(n){return new(n||e)(o(F),o(w),o(We,9))},e.\u0275dir=u({type:e,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}});let i=e;return i})(),Ot={provide:M,useExisting:c(()=>qe),multi:!0};function Ce(i,e){return i==null?`${e}`:(typeof e=="string"&&(e=`'${e}'`),e&&typeof e=="object"&&(e="Object"),`${i}: ${e}`.slice(0,50))}function Nt(i){return i.split(":")[0]}var qe=(()=>{let e=class e extends Z{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(t){this._compareWith=t}writeValue(t){this.value=t;let n;if(Array.isArray(t)){let s=t.map(a=>this._getOptionId(a));n=(a,l)=>{a._setSelected(s.indexOf(l.toString())>-1)}}else n=(s,a)=>{s._setSelected(!1)};this._optionMap.forEach(n)}registerOnChange(t){this.onChange=n=>{let s=[],a=n.selectedOptions;if(a!==void 0){let l=a;for(let f=0;f<l.length;f++){let x=l[f],J=this._getOptionValue(x.value);s.push(J)}}else{let l=n.options;for(let f=0;f<l.length;f++){let x=l[f];if(x.selected){let J=this._getOptionValue(x.value);s.push(J)}}}this.value=s,t(s)}}_registerOption(t){let n=(this._idCounter++).toString();return this._optionMap.set(n,t),n}_getOptionId(t){for(let n of this._optionMap.keys())if(this._compareWith(this._optionMap.get(n)._value,t))return n;return null}_getOptionValue(t){let n=Nt(t);return this._optionMap.has(n)?this._optionMap.get(n)._value:t}};e.\u0275fac=(()=>{let t;return function(s){return(t||(t=b(e)))(s||e)}})(),e.\u0275dir=u({type:e,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(n,s){n&1&&C("change",function(l){return s.onChange(l.target)})("blur",function(){return s.onTouched()})},inputs:{compareWith:"compareWith"},features:[h([Ot]),d]});let i=e;return i})(),li=(()=>{let e=class e{constructor(t,n,s){this._element=t,this._renderer=n,this._select=s,this._select&&(this.id=this._select._registerOption(this))}set ngValue(t){this._select!=null&&(this._value=t,this._setElementValue(Ce(this.id,t)),this._select.writeValue(this._select.value))}set value(t){this._select?(this._value=t,this._setElementValue(Ce(this.id,t)),this._select.writeValue(this._select.value)):this._setElementValue(t)}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,"value",t)}_setSelected(t){this._renderer.setProperty(this._element.nativeElement,"selected",t)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}};e.\u0275fac=function(n){return new(n||e)(o(F),o(w),o(qe,9))},e.\u0275dir=u({type:e,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}});let i=e;return i})();var Pt=(()=>{let e=class e{constructor(){this._validator=B}ngOnChanges(t){if(this.inputName in t){let n=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(n),this._validator=this._enabled?this.createValidator(n):B,this._onChange&&this._onChange()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}};e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=u({type:e,features:[E]});let i=e;return i})();var xt={provide:N,useExisting:c(()=>kt),multi:!0};var kt=(()=>{let e=class e extends Pt{constructor(){super(...arguments),this.inputName="required",this.normalizeInput=ee,this.createValidator=t=>Ae}enabled(t){return t}};e.\u0275fac=(()=>{let t;return function(s){return(t||(t=b(e)))(s||e)}})(),e.\u0275dir=u({type:e,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(n,s){n&2&&ue("required",s._enabled?"":null)},inputs:{required:"required"},features:[h([xt]),d]});let i=e;return i})();var ze=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=T({type:e}),e.\u0275inj=G({});let i=e;return i})();var ui=(()=>{let e=class e{static withConfig(t){return{ngModule:e,providers:[{provide:P,useValue:t.callSetDisabledState??K}]}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=T({type:e}),e.\u0275inj=G({imports:[ze]});let i=e;return i})(),di=(()=>{let e=class e{static withConfig(t){return{ngModule:e,providers:[{provide:Le,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:P,useValue:t.callSetDisabledState??K}]}}};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=T({type:e}),e.\u0275inj=G({imports:[ze]});let i=e;return i})();export{Xe as a,De as b,he as c,V as d,ni as e,ri as f,$ as g,Vt as h,He as i,At as j,oi as k,Et as l,wt as m,We as n,ai as o,li as p,kt as q,ui as r,di as s};
