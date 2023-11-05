import{R as a,u as k,c as L,s as o,j as t,a as P,r as l,b as $,d,g as E}from"./index-40d35190.js";function u(e=a){const n=e===a?k:L(e);return function(){const{store:s}=n();return s}}const I=u();function M(e=a){const n=e===a?I:u(e);return function(){return n().dispatch}}const B=M(),R=o.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 150px;
`,D=o.h2`
  visibility: ${({$hidden:e})=>e?"hidden":"visible"};
`,O=o.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(274px, 1fr));

  grid-column-gap: 29px;
  grid-row-gap: 50px;

  margin-bottom: 100px;
`,z=o.button`
  justify-self: end;
  padding-block: 12px;
  padding-inline: ${({$wide:e})=>e?"99px":"50px"};

  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: calc(20 / 14); /* 142.857% */

  color: #ffffff;
  background-color: #3470ff;
  border-radius: 12px;
  border: none;
  transition: all 0.3s ease-out;

  &:hover {
    background-color: #0b44cd;
    transition: all 0.3s ease-out;
  }
`,A=({text:e,...n})=>t.jsx(z,{...n,children:e}),H=o.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background-color: rgba(18, 20, 23, 0.5);
`,T=o.div`
  position: relative;
  padding: 40px;

  width: 541px;
  height: 752px;

  background-color: #fff;
  border-radius: 24px;
`,F=o.button`
  position: absolute;
  top: 16px;
  right: 16px;

  padding: 0;
  border: 0;
  margin: 0;
  width: 24px;
  height: 24px;

  color: #121417;
  background-color: transparent;
  border-radius: 6px;
  transition: all 0.3s ease;

  cursor: pointer;

  &:hover {
    color: #3470ff;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-out;
  }
`,q=({closeModal:e})=>t.jsx(F,{onClick:e,children:t.jsx("svg",{width:"24",height:"24",children:t.jsx("use",{href:`${P}#close`,stroke:"currentColor"})})}),G=({closeModal:e,children:n})=>{const i=s=>{s.currentTarget===s.target&&e()};return l.useEffect(()=>{document.body.style.overflow="hidden";const s=r=>{r.code==="Escape"&&e()};return window.addEventListener("keydown",s),()=>{document.body.style.overflow="unset",window.removeEventListener("keydown",s)}},[e]),$.createPortal(t.jsx(H,{onClick:i,children:t.jsxs(T,{children:[t.jsx(q,{closeModal:e}),n]})}),document.querySelector("#root"))},K=o.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`,W=o.img`
  height: 268px;
  object-fit: cover;
`,_=o.div`
  position: relative;
  margin-bottom: 14px;

  width: 274px;
  height: 268px;
  overflow: hidden;
  border-radius: 14px;
`,J=o.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(18, 20, 23, 0.5) 2.5%,
    rgba(18, 20, 23, 0) 41.07%
  );
`,N=o.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`,Q=o.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16); /* 150% */

  color: #121417;

  & span {
    color: #3470ff;
  }
`,U=o.p`
  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16); /* 150% */
  color: #121417;
`,V=o.div`
  flex-grow: 1;
  margin-bottom: 28px;
`,X=o.ul`
  display: flex;
  flex-wrap: wrap;
`,Y=o.li`
  span {
    margin-inline: 6px;
  }

  &:last-child {
    span {
      display: none;
    }
  }
`,Z=({auto:e})=>{const{img:n,year:i,make:s,model:r,type:c,accessories:h,rentalPrice:g,rentalCompany:f,address:y,id:m}=e,[p,b]=l.useState(!1),x=()=>b(!p),[ie,j,w]=y.split(","),v=[j,w,f,c,r,m,h[0]];return t.jsxs(t.Fragment,{children:[t.jsxs(K,{children:[t.jsxs(_,{children:[t.jsx(W,{src:n,alt:`${s} ${r}`}),t.jsx(J,{})]}),t.jsxs(N,{children:[t.jsxs(Q,{children:[s," ",t.jsx("span",{children:r}),", ",i]}),t.jsx(U,{children:g})]}),t.jsx(V,{children:t.jsx(X,{children:v.map((S,C)=>t.jsxs(Y,{children:[S,t.jsx("span",{children:"|"})]},C))})}),t.jsx(A,{$wide:!0,text:"Learn more",onClick:x})]}),p&&t.jsx(G,{closeModal:x,children:t.jsx("div",{children:"sdfsadfsdf"})})]})},ee=({cars:e})=>t.jsx(O,{children:e.length>0&&e.map(n=>t.jsx("li",{children:t.jsx(Z,{auto:n})},n.id))}),te=o.button`
  align-self: center;

  font-family: Manrope;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: calc(24 / 16); /* 150% */
  text-decoration-line: underline;
  color: #3470ff;
  border: none;
  background-color: transparent;
  transition: all 0.3s ease-out;

  &:hover {
    color: #0b44cd;
    transition: all 0.3s ease-out;
  }
`,oe=e=>t.jsx(te,{...e,children:"Load More"}),ne=e=>e.cars,se=e=>e.isLastPage,re=e=>e.isLoading,le=()=>{const e=B(),n=d(ne),i=d(se),s=d(re),[r,c]=l.useState(1);return l.useEffect(()=>{e(E({page:r}))},[r,e]),t.jsx(t.Fragment,{children:t.jsxs(R,{children:[t.jsx(D,{$hidden:!0,children:"Catalog Page"}),t.jsx(ee,{cars:n}),!i&&!s&&t.jsx(oe,{onClick:()=>c(r+1)})]})})};export{le as default};
