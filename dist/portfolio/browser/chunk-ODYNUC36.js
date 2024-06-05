import{a as K}from"./chunk-RO42FTQB.js";import{e as Y,j as J,n as R,o as U,p as Z,r as z}from"./chunk-WJGTYQSX.js";import{$a as S,Ba as m,Cb as D,Ha as a,Ia as r,Ja as u,Lb as O,N as E,Na as I,O as C,Pa as g,Q as V,Qa as p,T as d,U as M,W as F,X as f,Y as y,Z as N,_ as k,_a as s,cb as x,db as w,e as $,ea as A,eb as P,na as l,oa as L,ub as B,vb as W,yb as j,za as _}from"./chunk-4N3RDDHD.js";var q=(()=>{let e=class e{constructor(n){this.http=n,this.API_COMMUNITY="https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/georef-spain-comunidad-autonoma/records",this.API_PROVINCE="https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/georef-spain-provincia/records",this.API_CITY="https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/georef-spain-municipio/records"}getCommunity(){return this.http.get(`${this.API_COMMUNITY}?select=acom_name&limit=100`)}getProvincesByCommunity(n){return this.http.get(`${this.API_PROVINCE}?select=prov_name,acom_name&where=acom_name='${encodeURIComponent(n)}'&limit=100`)}getMunicipality(n){return this.http.get(`${this.API_CITY}?select=mun_name,geo_point_2d&where=prov_name='${encodeURIComponent(n)}'&limit=100`)}};e.\u0275fac=function(t){return new(t||e)(V(D))},e.\u0275prov=E({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();function te(i,e){if(i&1&&(a(0,"option",9),s(1),r()),i&2){let o=e.$implicit;m("value",o.acom_name),l(),S(o.acom_name)}}function ie(i,e){if(i&1&&(a(0,"option",9),s(1),r()),i&2){let o=e.$implicit;m("value",o.prov_name),l(),S(o.prov_name)}}function ne(i,e){if(i&1){let o=I();a(0,"div",2)(1,"div",10)(2,"label",11),s(3,"Selecciona Provincia:"),r(),a(4,"select",12),P("ngModelChange",function(t){f(o);let c=p();return w(c.selectedProvince,t)||(c.selectedProvince=t),y(t)}),g("change",function(){f(o);let t=p();return y(t.onSelectProvince())}),a(5,"option",5),s(6,"Seleccione..."),r(),_(7,ie,2,2,"option",6),r()()()}if(i&2){let o=p();l(4),x("ngModel",o.selectedProvince),l(3),m("ngForOf",o.provinces)}}function oe(i,e){if(i&1&&(a(0,"option",17),s(1),r()),i&2){let o=e.$implicit;m("ngValue",o),l(),S(o.mun_name)}}function ce(i,e){if(i&1){let o=I();a(0,"div",13)(1,"div",10)(2,"label",14),s(3,"Selecciona Municipio:"),r(),a(4,"select",15),P("ngModelChange",function(t){f(o);let c=p();return w(c.selectedMunicipality,t)||(c.selectedMunicipality=t),y(t)}),g("change",function(){f(o);let t=p();return y(t.onSelectMunicipality(t.selectedMunicipality))}),_(5,oe,2,2,"option",16),r()()()}if(i&2){let o=p();l(4),x("ngModel",o.selectedMunicipality),l(),m("ngForOf",o.municipalities)}}var G=(()=>{let e=class e{constructor(n){this.populationService=n,this.municipalitySelected=new A,this.selectedCommunity="",this.selectedProvince="",this.selectedMunicipality={mun_name:"",geo_point_2d:{lat:0,lon:0}},this.communities=[],this.provinces=[],this.municipalities=[]}ngOnInit(){this.getCommunities()}getCommunities(){this.populationService.getCommunity().subscribe(n=>{n&&n.results&&(this.communities=n.results)})}onSelectCommunity(){this.selectedCommunity&&this.getProvincesByCommunity(this.selectedCommunity)}getProvincesByCommunity(n){this.populationService.getProvincesByCommunity(n).subscribe(t=>{t&&t.results&&(this.provinces=t.results,this.selectedProvince="",this.municipalities=[])})}onSelectProvince(){this.selectedProvince&&this.getMunicipalitiesByProvince(this.selectedProvince)}getMunicipalitiesByProvince(n){this.populationService.getMunicipality(n).subscribe(t=>{t&&t.results&&(this.municipalities=t.results)})}onSelectMunicipality(n){this.selectedMunicipality=n,this.municipalitySelected.emit(this.selectedMunicipality)}};e.\u0275fac=function(t){return new(t||e)(L(q))},e.\u0275cmp=d({type:e,selectors:[["search-map"]],outputs:{municipalitySelected:"municipalitySelected"},decls:13,vars:4,consts:[[1,"container"],[1,"mt-3"],[1,"row","mb-3"],["for","selectCommunity",1,"form-label"],["id","selectCommunity",1,"form-select",3,"ngModelChange","change","ngModel"],["value","","disabled","","selected",""],[3,"value",4,"ngFor","ngForOf"],["class","row mb-3",4,"ngIf"],["class","row",4,"ngIf"],[3,"value"],[1,"col-md-6"],["for","selectProvince",1,"form-label"],["id","selectProvince",1,"form-select",3,"ngModelChange","change","ngModel"],[1,"row"],["for","selectMunicipality",1,"form-label"],["id","selectMunicipality",1,"form-select",3,"ngModelChange","change","ngModel"],[3,"ngValue",4,"ngFor","ngForOf"],[3,"ngValue"]],template:function(t,c){t&1&&(a(0,"div",0)(1,"h2",1),s(2,"Encuentra el municipio que buscas"),r(),a(3,"div",2)(4,"div")(5,"label",3),s(6,"Selecciona Comunidad Aut\xF3noma:"),r(),a(7,"select",4),P("ngModelChange",function(h){return w(c.selectedCommunity,h)||(c.selectedCommunity=h),h}),g("change",function(){return c.onSelectCommunity()}),a(8,"option",5),s(9,"Seleccione..."),r(),_(10,te,2,2,"option",6),r()()(),_(11,ne,8,2,"div",7)(12,ce,6,2,"div",8),r()),t&2&&(l(7),x("ngModel",c.selectedCommunity),l(3),m("ngForOf",c.communities),l(),m("ngIf",c.selectedCommunity),l(),m("ngIf",c.selectedProvince))},dependencies:[U,Z,R,Y,J,B,W],styles:["h2[_ngcontent-%COMP%], label[_ngcontent-%COMP%]{color:#fff}"]});let i=e;return i})();var b=$(K());var H=(()=>{let e=class e{constructor(){this.selectedMunicipality={mun_name:"",geo_point_2d:{lat:0,lon:0}}}ngAfterViewInit(){b.default.accessToken="pk.eyJ1Ijoic2VyZ2lvZ3JyIiwiYSI6ImNsdnpnOWxybjA0ZWoyanBodG92anJveXEifQ.ZtN5TWahYVbAfF1q9QJ5Lg",this.map=new b.default.Map({container:"map",style:"mapbox://styles/mapbox/streets-v11",center:[-3.7038,40.4168],zoom:4}),this.marker=new b.default.Marker().setLngLat([-3.7038,40.4168]).addTo(this.map)}ngOnChanges(n){if(n.selectedMunicipality&&!n.selectedMunicipality.firstChange&&this.selectedMunicipality&&this.selectedMunicipality.geo_point_2d){console.log("Datos recibidos:",this.selectedMunicipality);let{lon:t,lat:c}=this.selectedMunicipality.geo_point_2d;this.marker.setLngLat([t,c]),this.map.flyTo({center:[t,c],zoom:12,essential:!0})}}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d({type:e,selectors:[["shows-maps"]],inputs:{selectedMunicipality:"selectedMunicipality"},features:[F],decls:1,vars:0,consts:[["id","map",1,"rounded"]],template:function(t,c){t&1&&u(0,"div",0)},styles:["#map[_ngcontent-%COMP%]{height:425px;width:100%}@media (min-width: 1200px){#map[_ngcontent-%COMP%]{height:400px}}@media (min-width: 1500px){#map[_ngcontent-%COMP%]{height:600px}}@media (min-width: 1800px){#home[_ngcontent-%COMP%]{height:700px}}"]});let i=e;return i})();var Q=(()=>{let e=class e{constructor(){this.showSpinner=!0,this.selectedMunicipality={mun_name:"",geo_point_2d:{lat:0,lon:0}}}goBack(){history.back()}onMunicipalitySelected(n){this.selectedMunicipality=n}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d({type:e,selectors:[["app-population-page"]],decls:15,vars:1,consts:[[1,"navbar"],["id","barra",1,"container-fluid"],[1,"navbar-brand","mb-0"],["src","../../../../assets/map/gif.gif","alt",""],["id","home","onclick","history.back()",1,"btn","btn-outline-light"],["xmlns","http://www.w3.org/2000/svg","width","30","height","30","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-x"],["d","M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"],[1,"container","mt-5"],[1,"row"],[1,"rounded-2","col-md-4","col-12"],[3,"municipalitySelected"],[1,"rounded-2","col-md-8","col-12"],[3,"selectedMunicipality"]],template:function(t,c){t&1&&(a(0,"body")(1,"nav",0)(2,"div",1)(3,"span",2),s(4,"Map App"),u(5,"img",3),r(),a(6,"button",4),N(),a(7,"svg",5),u(8,"path",6),r()()()(),k(),a(9,"div",7)(10,"div",8)(11,"div",9)(12,"search-map",10),g("municipalitySelected",function(h){return c.onMunicipalitySelected(h)}),r()(),a(13,"div",11),u(14,"shows-maps",12),r()()()()),t&2&&(l(14),m("selectedMunicipality",c.selectedMunicipality))},dependencies:[G,H],styles:['body[_ngcontent-%COMP%]{background-image:url("./media/fondomapa-XPVFACCC.jpg");background-size:cover;height:100vh}.navbar[_ngcontent-%COMP%]{background-color:#292626}.navbar-brand[_ngcontent-%COMP%]{color:#fff;margin-left:5%}#home[_ngcontent-%COMP%]{margin-right:5%}#home[_ngcontent-%COMP%]:hover{color:#f33c48;transition:color 1s ease}.container-fluid[_ngcontent-%COMP%]{margin-top:20px}.rounded-2[_ngcontent-%COMP%]{margin-bottom:20px}img[_ngcontent-%COMP%]{width:18%;height:auto}#barra[_ngcontent-%COMP%]{margin:0}span[_ngcontent-%COMP%]{margin-left:10px}@media (max-width: 475px){svg[_ngcontent-%COMP%]{height:20px;width:20px}}']});let i=e;return i})();var le=[{path:"",component:Q}],X=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=M({type:e}),e.\u0275inj=C({imports:[O.forChild(le),O]});let i=e;return i})();var Oe=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=M({type:e}),e.\u0275inj=C({imports:[X,z,j]});let i=e;return i})();export{Oe as PopulationModule};
