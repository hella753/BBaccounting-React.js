import{r as t,j as s,S as g}from"./index-DsaTxADL.js";import{A as d}from"./AppNav-B-hNMTLH.js";import{B as m}from"./Button-IrKGSSn2.js";const u="_container_11xz0_1",p="_slogani_11xz0_15",x="_gilaki_11xz0_27",o={container:u,slogani:p,gilaki:x},i="/assets/slogani2-CoPj8P-h.jpg",f="/assets/slogani2small-CN7nfvT5.jpg";function j(){const[r,a]=t.useState(i),[e,l]=t.useState(!0);t.useEffect(()=>{const n=()=>{window.innerWidth<=768?a(f):a(i)};return n(),window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]);const c=()=>{l(!1)};return s.jsxs("div",{className:o.container,children:[e&&s.jsx(g,{}),s.jsx("img",{className:o.slogani,src:r,alt:"Slogan",onLoad:c,style:{display:e?"none":"block"}}),s.jsx(m,{to:"/Services",loading:e,children:"What We Offer"})]})}function w(){return s.jsxs("div",{children:[s.jsx(d,{}),s.jsx(j,{})]})}export{w as default};
