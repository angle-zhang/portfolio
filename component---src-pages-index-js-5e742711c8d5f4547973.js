(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{220:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(221),c=(n(148),n(222)),i=n(215),s=n(45),l=function(e){var t=e.icon;return r.a.createElement(s.b,{query:"2284708070",render:function(e){return function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("video",{class:"center",id:"project-vid",style:{position:"relative",zIndex:"50"},width:"281",autoPlay:!0,loop:!0,muted:!0},r.a.createElement("source",{src:e.node.publicURL})),r.a.createElement("script",null," document.getElementById('project-vid').play() "))}(e.videos.edges.find((function(e){return e.node.relativePath===t})))},data:c})},p=function(e){return r.a.createElement("div",{class:"project-container"},r.a.createElement("div",{class:"circle project-icon",style:{width:"240px",height:"240px"}},e.icon?r.a.createElement(l,{icon:e.icon}):r.a.createElement(r.a.Fragment,null)),r.a.createElement("div",{class:"project-info"},r.a.createElement("h1",null,e.title),r.a.createElement("div",{class:"project-content"},r.a.createElement("p",{class:"mm-text-box"},e.desc," "),r.a.createElement("ul",{class:"tags"},e.tags.map((function(e){return r.a.createElement("li",null,r.a.createElement("span",{class:e.substring(0,5)+"-tag tag"}," "),e)}))),r.a.createElement("div",{class:"button-container"}," ",e.links.map((function(e){return r.a.createElement(i.a,{url:e[1]},e[0])}))))))},u=function(){return r.a.createElement(s.b,{query:"3796202547",render:function(e){var t=[];return e.allProjectsJson.edges.forEach((function(e){t.push(r.a.createElement(p,{title:e.node.title,icon:e.node.icon,desc:e.node.description,tags:e.node.tags,links:e.node.links}))})),t},data:o})},d=n(213),m=(n(13),n(11),n(5),n(20),n(136)),h=n(216),v=function(e){return r.a.createElement("div",{className:"circle center"},r.a.createElement(h.a,{file:e.src}))};var f={"Web Dev":["html5","css3","js","react.js","redux.js"],"Creative Dev":["webGL","three.js"],Design:["figma","photoshop","indesign","prototyping","illustration"]},g=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).state={active:!1},n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=a.prototype;return o.handleClick=function(e){var t=e.target.nextElementSibling;this.state.active?t.classList.remove("open"):t.className+=" open",this.setState((function(e){return{active:!e.active}}))},o.render=function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{class:"category",onClick:function(t){return e.handleClick(t)}}," ",this.props.title," "),r.a.createElement("div",{className:"skill-elements"},r.a.createElement("ul",null,this.props.elements.map((function(e){return r.a.createElement("li",null," ",e," ")})))))},a}(r.a.Component),E=function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"content-container landing-container"},r.a.createElement("h1",{className:"name-header"},"ANGELA ZHANG"),r.a.createElement("hr",null),r.a.createElement("section",{class:"categories"},r.a.createElement("span",{className:"square"}," "),"  ",Object.keys(f).map((function(e){return r.a.createElement(g,{title:e,elements:f[e]})}))," ")),r.a.createElement(v,{src:"landing.jpg"}),r.a.createElement(m.a,{className:"scroll-button",to:"#work"},"Scroll down"))},b=n(214);var j=function(e){var t,n;function a(){return e.apply(this,arguments)||this}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=a.prototype;return o.componentDidMount=function(){null!=window.location.hash&&""!=window.location.hash&&document.querySelector(window.location.hash).scrollIntoView()},o.render=function(){return r.a.createElement(d.a,{load:!0},r.a.createElement(b.a,{title:"Portfolio"}),r.a.createElement(E,null),r.a.createElement("div",{id:"work"},r.a.createElement(u,null)))},a}(r.a.Component);t.default=j},221:function(e){e.exports=JSON.parse('{"data":{"allProjectsJson":{"edges":[{"node":{"title":"Oncampus","description":"Collaborating with a team of six developers, I built the MVP for a UCLA club directory within two school quarters. As a frontend developer, I worked on essential components such as client-side routing, filtering, and redux reducers. I also assisted with product ideation, promotion and launch.","links":[["site","http://oncampus.us/"]],"tags":["react.js","redux.js","styled-components"],"icon":"projects/Oncampus.mp4"}},{"node":{"title":"CMMND Visualizer","description":"With a team of 6, I built an interactive music visualizer for the release of CMMND\'s EP with one other developer. Learned three.js and implemented the project structure, 3 of 6 scenes, and dynamic scene updates based on audio data.","links":[["site","https://ucla-creative-labs.github.io/cmmnd"],["repo","https://github.com/UCLA-Creative-Labs/cmmnd"]],"tags":["html","three.js","tween.js"],"icon":"projects/CMMND.mp4"}},{"node":{"title":"WebGL Record Player","description":"Final group project for Intro to Graphics class. I implemented various shaders written in GLSL. Our project was voted 4th for favorite and 7th for most technically impressive.","links":[["site","https://intro-graphics-master.github.io/term-project-20/"],["repo","https://github.com/angle-zhang/CS-174A/tree/master/term-project-20"]],"tags":["webgl","glsl","javascript"],"icon":"projects/Record.mp4"}},{"node":{"title":"Big Bio","description":"I helped develop the frontend for the beta version of a new crowdsourced bio-research resource site. I also improved workflow by setting up git version control on the sftp server.","links":[["site","http://big-bio.org/"]],"tags":["html","javascript","ui-design","devops"],"icon":null}}]}}}')},222:function(e){e.exports=JSON.parse('{"data":{"videos":{"edges":[{"node":{"publicURL":"/static/Oncampus-e417c9d847b532d6b0bae096ddc274d5.mp4","relativePath":"projects/Oncampus.mp4"}},{"node":{"publicURL":"/static/CMMND-0aaf7f274998c783577acb8c3ea3f938.mp4","relativePath":"projects/CMMND.mp4"}},{"node":{"publicURL":"/static/Record-b42198cdd838750837b70af3b0a8c778.mp4","relativePath":"projects/Record.mp4"}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-index-js-5e742711c8d5f4547973.js.map