(this.webpackJsonpreact_weather_app=this.webpackJsonpreact_weather_app||[]).push([[0],{30:function(e,t,r){e.exports=r(63)},35:function(e,t,r){},58:function(e,t,r){},59:function(e,t,r){},60:function(e,t,r){},62:function(e,t,r){},63:function(e,t,r){"use strict";r.r(t);var n=r(12),a=r(0),i=r.n(a),c=r(11),o=r.n(c),s=(r(35),r(8)),l={weatherList:{cities:[],nextCityId:1},currentCity:{id:0}},u={longitude:30.32,latitude:59.94},d=function(e){return{type:"FETCH_WEATHER_PENDING",id:e}},m=function(e,t){return{type:"FETCH_WEATHER_SUCCESS",id:t,weather:e}},p=function(e,t){return{type:"FETCH_WEATHER_ERROR",id:t,error:e}},f=r(13),h=r.n(f),E=r(29),y=r(9);function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(r,!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g=function(e){return e.weatherList.cities},w=function(e){return e.weatherList.nextCityId},C=function(e){return e.currentCity},O=Object(y.c)({weatherList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.weatherList,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=[];if(0===t.id)return e;switch(t.type){case"FETCH_WEATHER_PENDING":return r=e.cities.map((function(e){return e.id===t.id?b({},e,{pending:!0}):e})),b({},e,{cities:r});case"FETCH_WEATHER_SUCCESS":return r=e.cities.map((function(e){return e.id===t.id?b({},e,{pending:!1,weather:t.weather}):e})),b({},e,{cities:r});case"FETCH_WEATHER_ERROR":return r=e.cities.map((function(e){return e.id===t.id?b({},e,{pending:!1,error:t.error}):e})),b({},e,{cities:r});case"ADD_CITY":return r=[].concat(Object(E.a)(e.cities),[{id:e.nextCityId,name:t.name}]),b({},e,{nextCityId:e.nextCityId+1,cities:r});case"DELETE_CITY":return r=e.cities.filter((function(e){return e.id!==t.id})),b({},e,{cities:r});default:return e}},currentCity:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.currentCity,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(0!==t.id)return e;switch(t.type){case"FETCH_WEATHER_PENDING":return b({},e,{pending:!0});case"FETCH_WEATHER_SUCCESS":return b({},e,{pending:!1,weather:t.weather});case"FETCH_WEATHER_ERROR":return b({},e,{pending:!1,error:t.error});default:return e}}}),j=r(2),N=r(3),x=r(5),P=r(4),W=r(6),D=(r(58),r(14)),T=function(e){function t(e){var r;return Object(j.a)(this,t),(r=Object(x.a)(this,Object(P.a)(t).call(this,e))).handleFormInput=r.handleFormInput.bind(Object(D.a)(r)),r}return Object(W.a)(t,e),Object(N.a)(t,[{key:"handleFormInput",value:function(e){e.preventDefault(),this.props.addCity(e.target[0].value)}},{key:"render",value:function(){return i.a.createElement("div",{className:"AddCity"},i.a.createElement("form",{onSubmit:this.handleFormInput},i.a.createElement("input",{id:"addCity",placeholder:"Add new city",required:!0}),i.a.createElement("button",{type:"submit",className:"circle"},"+")))}}]),t}(i.a.Component),S=Object(s.b)((function(e){return{nextCityId:w(e),cities:g(e)}}),(function(e){return{addCity:function(t){return e(function(e){return{type:"ADD_CITY",name:e}}(t))}}}))(T),_=(r(59),function(e){function t(e){return Object(j.a)(this,t),Object(x.a)(this,Object(P.a)(t).call(this,e))}return Object(W.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"Loader"},i.a.createElement("div",null,"Please wait, data is loading"),i.a.createElement("div",null,i.a.createElement("i",{className:"fas fa-spinner fa-pulse"})))}}]),t}(i.a.Component)),k=(r(60),function(e){function t(e){var r;return Object(j.a)(this,t),"undefined"!==typeof(r=Object(x.a)(this,Object(P.a)(t).call(this,e))).props.data?r.state={pending:"undefined"===typeof r.props.data.pending||r.props.data.pending,isError:"undefined"!==typeof r.props.data.error,isCurrentCity:0===r.props.data.id}:r.state={isError:!1,isCurrentCity:!0,error:"Cannot get current city"},r}return Object(W.a)(t,e),Object(N.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchWeather()}},{key:"render",value:function(){var e=!this.state.isCurrentCity,t=e?{flexDirection:"column"}:{flexDirection:"row",width:"100%",fontSize:"30px"},r=e?{flexDirection:"row"}:{flexDirection:"column",width:"50%",paddingRight:"20px"},n=e?{width:"100%"}:{width:"50%",paddingLeft:"20px",boxSizing:"border-box"};if(this.state.isError){var a=this.props.data.error,c=!1;return"undefined"!==typeof a.response&&(c=404===a.response.status),i.a.createElement("div",{className:"Weather error"},c?i.a.createElement("div",null,this.props.data.name," isn't found"):i.a.createElement("div",null,"Poor connection. Please, try again later"),e&&i.a.createElement("button",{onClick:this.props.deleteCity,className:"circle"},"x"))}if(this.state.pending||"undefined"!==typeof this.state.error)return this.state.pending&&"undefined"===typeof this.state.error?i.a.createElement("div",{className:"Weather",style:{justifyContent:"flex-start"}},e&&i.a.createElement("div",{style:{padding:"8px"}},this.props.data.name),i.a.createElement(_,null)):i.a.createElement("div",{className:"Weather"},this.state.error);var o=this.props.data.weather,s="".concat(o.main.temp<0?"":"+").concat(o.main.temp.toFixed(1),"\xb0C"),l=this.state.isCurrentCity?"https://openweathermap.org/themes/openweathermap/assets/vendor/owm/img/widgets/".concat(o.weather[0].icon,".png"):"https://openweathermap.org/img/wn/".concat(o.weather[0].icon,".png"),u=o.weather[0].description[0].toUpperCase()+o.weather[0].description.substr(1),d="rotate(".concat(o.wind.deg,"deg)"),m={WebkitTransform:d,msTransform:d,OTransform:d,transform:d},p="".concat(o.wind.speed," m/s"),f="".concat((.75006375541921*o.main.pressure).toFixed(0)," mmHg"),h="".concat(o.main.humidity,"%"),E=[o.coord.lon,o.coord.lat];return i.a.createElement("div",{className:"Weather",style:t},i.a.createElement("div",{className:"mainInfo",style:r},i.a.createElement("div",{className:this.state.isCurrentCity?"currentName":"name"},o.name),i.a.createElement("div",{className:"".concat(this.state.isCurrentCity?"current":""," cityMain")},i.a.createElement("div",{className:this.state.isCurrentCity?"temp":""},s),i.a.createElement("img",{src:l,title:u})),i.a.createElement("div",{className:this.state.isCurrentCity?"current":""},e&&i.a.createElement("button",{onClick:this.props.deleteCity,className:"circle"},"x"))),i.a.createElement("div",{style:n},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"rowKey"},"Wind:"),i.a.createElement("div",{className:"rowVal"},i.a.createElement("div",{id:"wind"},i.a.createElement("div",{id:"N"},"N"),i.a.createElement("div",{id:"W"},"W"),i.a.createElement("div",{id:"windDirection"},i.a.createElement("div",{style:m},"\u2191")),i.a.createElement("div",{id:"E"},"E"),i.a.createElement("div",{id:"S"},"S")),p)),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"rowKey"},"Clouds:"),i.a.createElement("div",{className:"rowVal"},o.clouds.all,"%")),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"rowKey"},"Pressure:"),i.a.createElement("div",{className:"rowVal"},f)),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"rowKey"},"Humidity:"),i.a.createElement("div",{className:"rowVal"},h)),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"rowKey"},"Coords:"),i.a.createElement("div",{className:"rowVal"},"[",E[0],", ",E[1],"]"))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"undefined"===typeof t.error&&"undefined"!==typeof e.data.pending&&e.data.pending!==t.pending?{pending:e.data.pending,isError:"undefined"!==typeof e.data.error}:null}}]),t}(i.a.Component)),I=function(e){function t(e){return Object(j.a)(this,t),Object(x.a)(this,Object(P.a)(t).call(this,e))}return Object(W.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){var e=this;return Array.isArray(this.props.cities)?i.a.createElement("div",{className:"WeatherList"},this.props.cities.map((function(t){return i.a.createElement(k,{key:t.id,data:t,fetchWeather:function(){return e.props.fetchWeatherByName(t.id,t.name)},deleteCity:function(){return e.props.deleteCity(t.id)}})}))):i.a.createElement("div",{className:"WeatherList"})}}]),t}(i.a.Component),R=Object(s.b)((function(e){return{cities:g(e),nextCityId:w(e)}}),(function(e){return{fetchWeatherByName:function(t,r){return e(function(e,t){return function(r){r(d(e)),h.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&units=metric&APPID=96c2fc4713551153e7966978b449861a")).then((function(t){r(m(t.data,e)),console.log(t.data)})).catch((function(t){r(p(t,e)),console.log(t)}))}}(t,r))},deleteCity:function(t){return e(function(e){return{type:"DELETE_CITY",id:e}}(t))}}}))(I),H=(r(61),r(62),function(){for(var e=[],t=1;t<=10;t++)e.push("x"+t);return e=e.map((function(e){return i.a.createElement("div",{className:"cloud ".concat(e),key:e})})),i.a.createElement("div",{className:"clouds"},e)}),A=function(e){function t(e){return Object(j.a)(this,t),Object(x.a)(this,Object(P.a)(t).call(this,e))}return Object(W.a)(t,e),Object(N.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement(H,null),i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"control",style:{width:"67%",alignSelf:"flex-start"}},i.a.createElement("h2",null,"Weather here"),i.a.createElement("button",{onClick:function(){return e.props.fetchWeatherByCoords()}},"Update geolocation")),i.a.createElement(k,{key:0,data:this.props.currentCity,fetchWeather:function(){return e.props.fetchWeatherByCoords()}}),i.a.createElement("div",{className:"control favourites"},i.a.createElement("h2",null,"Favorites"),i.a.createElement(S,null)),i.a.createElement(R,null)))}}]),t}(i.a.Component),F=function(e,t,r){h.a.get("https://api.openweathermap.org/data/2.5/weather?lat=".concat(t.latitude.toFixed(3),"&lon=").concat(t.longitude.toFixed(3),"&units=metric&APPID=96c2fc4713551153e7966978b449861a")).then((function(t){e(m(t.data,r)),console.log(t.data)})).catch((function(t){e(p(t,r)),console.log(t)}))},L=Object(s.b)((function(e){return{currentCity:C(e)}}),(function(e){return{fetchWeatherByCoords:function(){return e((function(e){if(e(d(0)),navigator.geolocation)navigator.geolocation.getCurrentPosition((function(t){F(e,t.coords,0)}),(function(t){switch(t.code){case 1:alert("Permission denied. Load weather from default coordinates"),F(e,u,0);break;case 2:alert("Location unavailable. Load weather from default coordinates"),F(e,u,0);break;case 3:e(p(t,0));break;default:e(p(t,0)),console.warn("ERROR(".concat(t.code,"): ").concat(t.message))}}),{enableHighAccuracy:!0,timeout:5e3,maximumAge:0});else{var t="Geolocation is not supported";e(p(t,0)),console.log(t)}}))}}}))(A);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=r(28);function K(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function U(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?K(r,!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):K(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var V=localStorage["redux-store"]?JSON.parse(localStorage["redux-store"]):[],G=V.reduce((function(e,t){return Math.max(e,t.id)}),0)+1,J=U({},l,{weatherList:U({},l.weatherList,{cities:V,nextCityId:G})}),Y=Object(y.d)(O,J,Object(y.a)(B.a));Y.subscribe((function(){localStorage["redux-store"]=JSON.stringify(Y.getState().weatherList.cities.filter((function(e){return"undefined"===typeof e.error})).map((function(e){return{id:e.id,name:e.name}})))})),o.a.render(i.a.createElement(s.a,{store:Y},i.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[30,1,2]]]);
//# sourceMappingURL=main.a8ed77f4.chunk.js.map