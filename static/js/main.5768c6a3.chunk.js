(this["webpackJsonpreact-employee-directory"]=this["webpackJsonpreact-employee-directory"]||[]).push([[0],{23:function(e,t,r){},25:function(e,t,r){},26:function(e,t,r){},27:function(e,t,r){},46:function(e,t,r){"use strict";r.r(t);var s=r(2),n=r.n(s),a=r(17),c=r.n(a),o=r(4),l=r(5),i=r(3),h=r(7),d=r(6),j=(r(23),r(0));var u=function(){return Object(j.jsx)("div",{className:"jumbotron jumbotron-fluid",id:"header",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{className:"display-4",children:"The Bomb Burger Employee Directory"}),Object(j.jsx)("p",{className:"lead",children:"Use the form below to narrow your search results."})]})})},b=(r(25),function(e){Object(h.a)(r,e);var t=Object(d.a)(r);function r(e){return Object(o.a)(this,r),t.call(this,e)}return Object(l.a)(r,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"container bg-white",children:Object(j.jsx)("form",{className:"form-inline",children:Object(j.jsxs)("div",{className:"form-group search-widget",children:[Object(j.jsx)("label",{htmlFor:"search",children:Object(j.jsx)("strong",{children:"Search For:"})}),Object(j.jsx)("input",{onChange:this.props.handleInputChange,value:this.props.value,name:"search",type:"text",placeholder:"search the directory",id:"search",className:"form-control ml-2 mr-2"})]})})})})}}]),r}(s.Component));r(26);var m=function(e){return console.log(e),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"container bg-white",children:Object(j.jsx)("div",{class:"table-responsive-lg table-responsive-md table-responsive-sm",children:Object(j.jsxs)("table",{className:"table",children:[Object(j.jsxs)("thead",{className:"thead-dark",children:[Object(j.jsx)("th",{scope:"col",children:"Profile"}),Object(j.jsxs)("th",{scope:"col",onClick:e.handleSort,children:["Name ",Object(j.jsx)("i",{className:"fa fa-sort-down"})]}),Object(j.jsx)("th",{scope:"col",children:"Phone"}),Object(j.jsx)("th",{scope:"col",children:"Email"}),Object(j.jsx)("th",{scope:"col",children:"DOB"})]}),Object(j.jsx)("tbody",{children:e.employees.map((function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("img",{alt:"profile image for "+e.name.first+" "+e.name.last,className:"img-fluid",src:e.picture.medium})}),Object(j.jsxs)("td",{children:[e.name.first," ",e.name.last]}),Object(j.jsx)("td",{children:e.phone}),Object(j.jsx)("td",{children:Object(j.jsx)("a",{href:"mailto:"+e.email,target:"__blank",children:e.email})}),Object(j.jsx)("td",{children:e.dob.date})]},e.login.uuid)}))})]})})})})};r(27);var f=function(){return Object(j.jsx)("footer",{className:"container",children:Object(j.jsxs)("p",{className:"text-center",children:["Developed using ",Object(j.jsx)("a",{href:"https://getbootstrap.com/",target:"_blank",children:"Bootstrap"})," and ",Object(j.jsx)("a",{href:"https://reactjs.org/",target:"_blank",children:"React"})," by ",Object(j.jsx)("a",{href:"https://github.com/larrygamboa",target:"_blank",children:"Larry Gamboa"})]})})},p=r(18),O=r.n(p),x=function(){return O.a.get("https://randomuser.me/api/?results=100&nat=us")},y=function(e){Object(h.a)(r,e);var t=Object(d.a)(r);function r(e){var s;return Object(o.a)(this,r),(s=t.call(this,e)).state={sortOrder:"ASC",employees:[],filterEmployees:[]},s.handleInputChange=s.handleInputChange.bind(Object(i.a)(s)),s.handleSort=s.handleSort.bind(Object(i.a)(s)),s}return Object(l.a)(r,[{key:"componentDidMount",value:function(){var e=this;x().then((function(t){e.setState({employees:t.data.results,filterEmployees:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"searchEmployees",value:function(e){var t=this;x(e).then((function(e){t.setState({employees:e.data.results,filterEmployees:e.data.results})})).catch((function(e){return console.log(e)}))}},{key:"handleInputChange",value:function(){var e=document.querySelector("#search").value.toLowerCase(),t=this.state.employees.filter((function(t){return t.name.first.toLowerCase().indexOf(e)>-1}));this.setState({filterEmployees:t})}},{key:"handleSort",value:function(){if("ASC"===this.state.sortOrder){var e=this.state.employees.sort((function(e,t){if(e.name.first.toLowerCase()<t.name.first.toLowerCase())return-1}));this.setState({sortOrder:"DESC",filterEmployees:e})}else{var t=this.state.employees.sort((function(e,t){if(e.name.first.toLowerCase()>t.name.first.toLowerCase())return 1}));this.setState({sortOrder:"ASC",filterEmployees:t})}}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(u,{}),Object(j.jsx)(b,{handleInputChange:this.handleInputChange}),Object(j.jsx)(m,{employees:this.state.filterEmployees,handleSort:this.handleSort}),Object(j.jsx)(f,{})]})}}]),r}(s.Component);var g=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(y,{})})},v=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,47)).then((function(t){var r=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,c=t.getTTFB;r(e),s(e),n(e),a(e),c(e)}))};c.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),v()}},[[46,1,2]]]);
//# sourceMappingURL=main.5768c6a3.chunk.js.map