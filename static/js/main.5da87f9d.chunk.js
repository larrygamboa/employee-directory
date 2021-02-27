(this["webpackJsonpreact-employee-directory"]=this["webpackJsonpreact-employee-directory"]||[]).push([[0],{23:function(e,t,s){},25:function(e,t,s){},26:function(e,t,s){},27:function(e,t,s){},46:function(e,t,s){"use strict";s.r(t);var r=s(2),n=s.n(r),a=s(17),c=s.n(a),o=s(4),l=s(5),i=s(3),h=s(7),d=s(6),j=(s(23),s(0));var u=function(){return Object(j.jsx)("div",{className:"jumbotron jumbotron-fluid",id:"header",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{className:"display-4",children:"The Bomb Burger Employee Directory"}),Object(j.jsx)("p",{className:"lead",children:"Use the form below to narrow your search results."})]})})},m=(s(25),function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(e){return Object(o.a)(this,s),t.call(this,e)}return Object(l.a)(s,[{key:"render",value:function(){return Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"container bg-white",children:Object(j.jsx)("form",{className:"form-inline",children:Object(j.jsxs)("div",{className:"form-group search-widget",children:[Object(j.jsx)("label",{htmlFor:"search",className:"ml-3",children:Object(j.jsx)("strong",{children:"Search For:"})}),Object(j.jsx)("input",{onChange:this.props.handleInputChange,value:this.props.value,name:"search",type:"text",placeholder:"search the directory",id:"search",className:"form-control ml-3"})]})})})})}}]),s}(r.Component));s(26);var b=function(e){return console.log(e),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"container bg-white",children:Object(j.jsx)("div",{class:"table-responsive-lg table-responsive-md table-responsive-sm",children:Object(j.jsxs)("table",{className:"table",children:[Object(j.jsxs)("thead",{className:"thead-dark",children:[Object(j.jsx)("th",{scope:"col",children:"Profile"}),Object(j.jsxs)("th",{scope:"col",onClick:e.handleSort,children:["Name ",Object(j.jsx)("i",{className:"fa fa-sort-down"})]}),Object(j.jsx)("th",{scope:"col",children:"Phone"}),Object(j.jsx)("th",{scope:"col",children:"Email"}),Object(j.jsx)("th",{scope:"col",children:"DOB"})]}),Object(j.jsx)("tbody",{children:e.employees.map((function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("img",{alt:"profile image for "+e.name.first+" "+e.name.last,className:"img-fluid",src:e.picture.medium})}),Object(j.jsxs)("td",{children:[e.name.first," ",e.name.last]}),Object(j.jsx)("td",{children:e.phone}),Object(j.jsx)("td",{children:Object(j.jsx)("a",{href:"mailto:"+e.email,target:"__blank",children:e.email})}),Object(j.jsx)("td",{children:e.dob.date})]},e.login.uuid)}))})]})})})})};s(27);var f=function(){return Object(j.jsx)("footer",{className:"container",children:Object(j.jsxs)("p",{className:"text-center",children:["Developed using ",Object(j.jsx)("a",{href:"https://getbootstrap.com/",target:"_blank",children:"Bootstrap"})," and ",Object(j.jsx)("a",{href:"https://reactjs.org/",target:"_blank",children:"React"})," by ",Object(j.jsx)("a",{href:"https://github.com/larrygamboa",target:"_blank",children:"Larry Gamboa"})]})})},p=s(18),O=s.n(p),x=function(){return O.a.get("https://randomuser.me/api/?results=100&nat=us")},y=function(e){Object(h.a)(s,e);var t=Object(d.a)(s);function s(e){var r;return Object(o.a)(this,s),(r=t.call(this,e)).state={sortOrder:"ASC",employees:[],filterEmployees:[]},r.handleInputChange=r.handleInputChange.bind(Object(i.a)(r)),r.handleSort=r.handleSort.bind(Object(i.a)(r)),r}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=this;x().then((function(t){e.setState({employees:t.data.results,filterEmployees:t.data.results})})).catch((function(e){return console.log(e)}))}},{key:"searchEmployees",value:function(e){var t=this;x(e).then((function(e){t.setState({employees:e.data.results,filterEmployees:e.data.results})})).catch((function(e){return console.log(e)}))}},{key:"handleInputChange",value:function(){var e=document.querySelector("#search").value.toLowerCase(),t=this.state.employees.filter((function(t){return t.name.first.toLowerCase().indexOf(e)>-1}));this.setState({filterEmployees:t})}},{key:"handleSort",value:function(){if("ASC"===this.state.sortOrder){var e=this.state.employees.sort((function(e,t){if(e.name.first.toLowerCase()<t.name.first.toLowerCase())return-1}));this.setState({sortOrder:"DESC",filterEmployees:e})}else{var t=this.state.employees.sort((function(e,t){if(e.name.first.toLowerCase()>t.name.first.toLowerCase())return 1}));this.setState({sortOrder:"ASC",filterEmployees:t})}}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(u,{}),Object(j.jsx)(m,{handleInputChange:this.handleInputChange}),Object(j.jsx)(b,{employees:this.state.filterEmployees,handleSort:this.handleSort}),Object(j.jsx)(f,{})]})}}]),s}(r.Component);var g=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(y,{})})},v=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,47)).then((function(t){var s=t.getCLS,r=t.getFID,n=t.getFCP,a=t.getLCP,c=t.getTTFB;s(e),r(e),n(e),a(e),c(e)}))};c.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(g,{})}),document.getElementById("root")),v()}},[[46,1,2]]]);
//# sourceMappingURL=main.5da87f9d.chunk.js.map