import{r as p,j as t}from"./index-DsaTxADL.js";import{A as b}from"./AppNav-B-hNMTLH.js";import{C as a}from"./Container-BNMeShfd.js";const k="_contDiv_6nsb6_1",C="_title_6nsb6_19",N="_marg_6nsb6_53",_={contDiv:k,title:C,marg:N},B="_arr_1kxzt_1",E="_mySlides_1kxzt_91",z="_imageStyle_1kxzt_99",S="_cont_1kxzt_113",g={arr:B,"w3-display-container":"_w3-display-container_1kxzt_17","w3-left":"_w3-left_1kxzt_25","w3-right":"_w3-right_1kxzt_27","w3-badge":"_w3-badge_1kxzt_29",mySlides:E,imageStyle:z,cont:S};function $({images:e,currentSlide:n,plusDivs:s,currentDiv:o}){return p.useEffect(()=>{const c=l=>{l.key==="ArrowLeft"?s(-1):l.key==="ArrowRight"&&s(1)},i=setInterval(()=>{s(1)},4e3);return window.addEventListener("keydown",c),()=>{clearInterval(i),window.removeEventListener("keydown",c)}},[n,s]),t.jsxs("div",{className:"w3-content w3-display-container",children:[e.map((c,i)=>t.jsx("img",{className:`mySlides ${g.imageStyle}`,src:c,style:{display:n===i?"block":"none",transition:"opacity 10s ease-in-out",opacity:n===i?.8:0},alt:`Slide ${i+1}`},i)),t.jsxs("div",{className:"w3-center w3-display-bottommiddle",style:{width:"100%"},children:[t.jsx("div",{className:"w3-left",onClick:()=>s(-1),style:{color:"black",cursor:"pointer",margin:"20px"},children:"❮"}),t.jsx("div",{className:"w3-right",onClick:()=>s(1),style:{color:"black",cursor:"pointer",margin:"20px"},children:"❯"}),t.jsx("div",{className:g.cont,children:e.map((c,i)=>t.jsx("span",{className:`w3-badge demo w3-border ${g.arr} ${n===i?"w3-gray":""}`,onClick:()=>o(i+1)},i))})]})]})}const P="_formatAnotherP_1n45r_1",q="_titArticle_1n45r_19",d={formatAnotherP:P,titArticle:q};function D(){return t.jsxs(a,{children:[t.jsx("p",{className:d.titArticle,style:{paddingTop:"10px",paddingBottom:"15px"},children:"Leading the Way in Business Accounting and Financial Advisory"}),t.jsx("p",{className:d.formatAnotherP,children:"Welcome to BB Accounting, where expertise meets excellence in business accounting and financial advisory services. Established with a commitment to empower businesses with insightful financial strategies and meticulous accounting practices, we have been a trusted partner for countless enterprises across diverse industries."}),t.jsx("p",{className:d.titArticle,style:{paddingTop:"0",paddingBottom:"15px"},children:"Our Mission"}),t.jsx("p",{className:d.formatAnotherP,children:"At BB Accounting, our mission is clear: to provide unparalleled financial clarity and strategic guidance that empowers businesses to thrive. We aim to be more than just service providers; we strive to be strategic partners who are deeply invested in the success and growth of our clients."})]})}const R="_formatAnotherP_1otfj_1",W="_titArticle_1otfj_15",y={formatAnotherP:R,titArticle:W};function O(){return t.jsx(a,{children:t.jsxs(t.Fragment,{children:[t.jsx("p",{className:y.titArticle,style:{padding:"0"},children:"Our Team"}),t.jsx("p",{style:{padding:"0",paddingBottom:"15px",fontSize:"23px",color:"#45523e"},className:y.formatAnotherP,children:"Behind every success story at BB Accounting is a dedicated team of professionals who are passionate about finance and committed to your success. Our team combines technical proficiency with a proactive approach to deliver exceptional service."})]})})}const F="_contDiv_1t48n_1",I="_titArticle_1t48n_31",f={contDiv:F,titArticle:I},U="_backdrop_1blqz_1",L="_modal_1blqz_21",M="_closeButton_1blqz_53",T="_content_1blqz_75",m={backdrop:U,modal:L,closeButton:M,content:T};function H({show:e,onClose:n,children:s}){return e?t.jsxs(t.Fragment,{children:[t.jsx("div",{className:m.backdrop,onClick:n}),t.jsxs("div",{className:m.modal,children:[t.jsx("div",{className:m.closeButton,onClick:n,children:"×"}),t.jsx("div",{className:m.content,children:s})]})]}):null}const Q="_formatP_18qhy_1",X="_qual_18qhy_15",Y="_divC_18qhy_29",u={formatP:Q,qual:X,divC:Y},Z="/assets/expertise-D5TyXhSR.png",G="/assets/commitment-4YZEooEd.png",K="/assets/innovation-CjXst-4c.png",J="/assets/centric-Dki6rE5Q.png";function h({source:e,onClick:n,children:s}){return e=="expertise"?e=Z:e=="commitment"?e=G:e=="innovation"?e=K:e=="centric"&&(e=J),t.jsx(a,{color:"#45523e",bgcolor:"rgba(255, 255, 255, 0.6)",children:t.jsxs("div",{className:u.divC,onClick:n,children:[t.jsx("p",{className:u.formatP,children:s}),t.jsx("img",{src:e,className:u.qual})]})})}function V({isModalOpen:e,closeModal:n,modalContent:s,openModal:o}){return t.jsxs(a,{children:[t.jsx("p",{className:f.titArticle,style:{textAlign:"center",marginBottom:"10px"},children:"Why Us?"}),t.jsx("div",{children:t.jsxs("div",{className:f.contDiv,children:[t.jsxs(H,{show:e,onClose:n,children:[t.jsx("h2",{children:s.title}),t.jsx("p",{children:s.text})]}),t.jsx(h,{source:"expertise",onClick:()=>o({title:"Expertise",text:"Our team consists of seasoned professionals with extensive experience across various industries."}),children:"Expertise"}),t.jsx(h,{source:"centric",onClick:()=>o({title:"Client-Centric Approach",text:"We prioritize understanding your unique challenges and goals to tailor solutions that deliver tangible results."}),children:"Client-Centric Approach"}),t.jsx(h,{source:"commitment",onClick:()=>o({title:"Commitment to Excellence",text:"We uphold the highest standards of integrity, accuracy, and confidentiality in all our engagements."}),children:"Commitment to Excellence"}),t.jsx(h,{source:"innovation",onClick:()=>o({title:"Innovation",text:"Embracing technology and industry best practices, we continuously innovate to deliver efficient and effective solutions."}),children:"Innovation"})]})})]})}const tt="/assets/filler-iYQyOHG5.jpg",et="/assets/filler2-DmpysI62.jpg",st="/assets/filler3-EHWZUR-j.jpg";function ct(){const[e,n]=p.useState(!1),[s,o]=p.useState({title:"",text:""}),[c,i]=p.useState(0),l=()=>n(!1),j=r=>{o(r),n(!0)},x=[tt,et,st],v=r=>{i(A=>(A+r+x.length)%x.length)},w=r=>{i(r-1)};return t.jsxs("div",{children:[t.jsx(b,{}),t.jsx("p",{className:_.title,children:"About Us"}),t.jsxs("div",{className:_.contDiv,style:{marginRight:"2%"},children:[t.jsx("div",{style:{marginRight:"30px",width:"fit-content"},children:t.jsx(D,{})}),t.jsxs("div",{style:{marginRight:"30px"},children:[t.jsx(a,{isImg:!0,style:{padding:"0px"},children:t.jsx($,{images:x,currentSlide:c,plusDivs:v,currentDiv:w})}),t.jsx(O,{})]})]}),t.jsx("div",{style:{marginLeft:"1%",marginRight:"40px"},children:t.jsx(V,{isModalOpen:e,closeModal:l,modalContent:s,openModal:j})})]})}export{ct as default};
