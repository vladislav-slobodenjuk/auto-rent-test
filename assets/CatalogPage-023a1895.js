import{R as a,u as L,c as $,s as o,j as e,a as x,r as l,b as P,d,g as B}from"./index-0371fbbc.js";function h(t=a){const n=t===a?L:$(t);return function(){const{store:s}=n();return s}}const E=h();function I(t=a){const n=t===a?E:h(t);return function(){return n().dispatch}}const M=I(),R=o.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 150px;
`,D=o.h2`
  visibility: ${({$hidden:t})=>t?"hidden":"visible"};
`,O=o.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(274px, 1fr));

  grid-column-gap: 29px;
  grid-row-gap: 50px;

  margin-bottom: 100px;
`,z=o.button`
  justify-self: end;
  padding-block: 12px;
  padding-inline: ${({$wide:t})=>t?"99px":"50px"};

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
`,A=({text:t,...n})=>e.jsx(z,{...n,children:t}),F=o.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background-color: rgba(18, 20, 23, 0.5);
`,H=o.div`
  position: relative;
  padding: 40px;

  width: 541px;
  height: 752px;

  background-color: #fff;
  border-radius: 24px;
`,T=o.button`
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
`,q=({closeModal:t})=>e.jsx(T,{onClick:t,children:e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:`${x}#close`,stroke:"currentColor"})})}),G=({closeModal:t,children:n})=>{const i=s=>{s.currentTarget===s.target&&t()};return l.useEffect(()=>{document.body.style.overflow="hidden";const s=r=>{r.code==="Escape"&&t()};return window.addEventListener("keydown",s),()=>{document.body.style.overflow="unset",window.removeEventListener("keydown",s)}},[t]),P.createPortal(e.jsx(F,{onClick:i,children:e.jsxs(H,{children:[e.jsx(q,{closeModal:t}),n]})}),document.querySelector("#root"))},K=o.button`
  position: absolute;
  top: 14px;
  right: 14px;

  padding: 0;
  line-height: 0;

  fill: ${({isSaved:t})=>t?"#3470ff":"transparent"};
  color: ${({isSaved:t})=>t?"#3470ff":"#ffffffcc"};
  background-color: transparent;
  border: none;
  transition: all 0.3s ease-out;
`,W=t=>e.jsx(K,{...t,children:e.jsx("svg",{width:"18",height:"18",children:e.jsx("use",{href:`${x}#heart`,stroke:"currentColor"})})}),_=o.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`,J=o.img`
  height: 268px;
  object-fit: cover;
`,N=o.div`
  position: relative;
  margin-bottom: 14px;

  width: 274px;
  height: 268px;
  overflow: hidden;
  border-radius: 14px;
`,Q=o.div`
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
`,U=o.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`,V=o.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16); /* 150% */

  color: #121417;

  & span {
    color: #3470ff;
  }
`,X=o.p`
  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16); /* 150% */
  color: #121417;
`,Y=o.div`
  flex-grow: 1;
  margin-bottom: 28px;
`,Z=o.ul`
  display: flex;
  flex-wrap: wrap;
`,tt=o.li`
  span {
    margin-inline: 6px;
  }

  &:last-child {
    span {
      display: none;
    }
  }
`,et=({auto:t})=>{const{img:n,year:i,make:s,model:r,type:c,accessories:g,rentalPrice:f,rentalCompany:y,address:m,id:b}=t,[p,j]=l.useState(!1),u=()=>j(!p),[lt,v,w]=m.split(","),S=[v,w,y,c,r,b,g[0]];return e.jsxs(e.Fragment,{children:[e.jsxs(_,{children:[e.jsxs(N,{children:[e.jsx(J,{src:n,alt:`${s} ${r}`}),e.jsx(Q,{}),e.jsx(W,{isSaved:""})]}),e.jsxs(U,{children:[e.jsxs(V,{children:[s," ",e.jsx("span",{children:r}),", ",i]}),e.jsx(X,{children:f})]}),e.jsx(Y,{children:e.jsx(Z,{children:S.map((k,C)=>e.jsxs(tt,{children:[k,e.jsx("span",{children:"|"})]},C))})}),e.jsx(A,{$wide:!0,text:"Learn more",onClick:u})]}),p&&e.jsx(G,{closeModal:u,children:e.jsx("div",{children:"sdfsadfsdf"})})]})},ot=({cars:t})=>e.jsx(O,{children:t.length>0&&t.map(n=>e.jsx("li",{children:e.jsx(et,{auto:n})},n.id))}),nt=o.button`
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
`,st=t=>e.jsx(nt,{...t,children:"Load More"}),rt=t=>t.cars,it=t=>t.isLastPage,at=t=>t.isLoading,dt=()=>{const t=M(),n=d(rt),i=d(it),s=d(at),[r,c]=l.useState(1);return l.useEffect(()=>{t(B({page:r}))},[r,t]),e.jsx(e.Fragment,{children:e.jsxs(R,{children:[e.jsx(D,{$hidden:!0,children:"Catalog Page"}),e.jsx(ot,{cars:n}),!i&&!s&&e.jsx(st,{onClick:()=>c(r+1)})]})})};export{dt as default};
