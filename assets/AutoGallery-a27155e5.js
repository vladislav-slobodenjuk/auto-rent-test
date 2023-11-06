import{R as a,b as B,d as I,s as o,j as e,e as h,r as u,f as E,u as F,h as P,i as R}from"./index-386aaa0b.js";function f(t=a){const s=t===a?B:I(t);return function(){const{store:n}=s();return n}}const A=f();function D(t=a){const s=t===a?A:f(t);return function(){return s().dispatch}}const O=D(),lt=t=>t.cars,z=t=>t.favorites,dt=t=>t.isLastPage,ct=t=>t.isLoading,pt=o.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 150px;
`,xt=o.h2`
  width: ${({$hidden:t})=>t?0:"unset"};
  height: ${({$hidden:t})=>t?0:"unset"};
  visibility: ${({$hidden:t})=>t?"hidden":"visible"};
`,H=o.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(274px, 1fr));

  grid-column-gap: 29px;
  grid-row-gap: 50px;

  margin-bottom: 100px;
`,M=o.button`
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
`,T=({text:t,...s})=>e.jsx(M,{...s,children:t}),q=o.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background-color: rgba(18, 20, 23, 0.5);
`,G=o.div`
  position: relative;
  padding: 40px;

  width: 541px;
  height: 752px;

  background-color: #fff;
  border-radius: 24px;
`,K=o.button`
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
`,W=({closeModal:t})=>e.jsx(K,{onClick:t,children:e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:`${h}#close`,stroke:"currentColor"})})}),_=({closeModal:t,children:s})=>{const r=n=>{n.currentTarget===n.target&&t()};return u.useEffect(()=>{document.body.style.overflow="hidden";const n=i=>{i.code==="Escape"&&t()};return window.addEventListener("keydown",n),()=>{document.body.style.overflow="unset",window.removeEventListener("keydown",n)}},[t]),E.createPortal(e.jsx(q,{onClick:r,children:e.jsxs(G,{children:[e.jsx(W,{closeModal:t}),s]})}),document.querySelector("#root"))},J=o.button`
  position: absolute;
  top: 14px;
  right: 14px;

  padding: 0;
  line-height: 0;

  fill: ${({$isSaved:t})=>t?"#3470ff":"transparent"};
  color: ${({$isSaved:t})=>t?"#3470ff":"#ffffffcc"};
  background-color: transparent;
  border: none;
  transition: all 0.3s ease-out;
`,N=t=>e.jsx(J,{...t,children:e.jsx("svg",{width:"18",height:"18",children:e.jsx("use",{href:`${h}#heart`,stroke:"currentColor"})})}),Q=o.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: all 0.3s ease-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.3s ease-out;
  }
`,U=o.img`
  height: 268px;
  object-fit: cover;
`,V=o.div`
  position: relative;
  margin-bottom: 14px;

  width: 274px;
  height: 268px;
  overflow: hidden;
  border-radius: 14px;
`,X=o.div`
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
`,Y=o.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`,Z=o.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16); /* 150% */

  color: #121417;

  & span {
    color: #3470ff;
  }
`,tt=o.p`
  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16); /* 150% */
  color: #121417;
`,et=o.div`
  flex-grow: 1;
  margin-bottom: 28px;
`,ot=o.ul`
  display: flex;
  flex-wrap: wrap;
`,st=o.li`
  span {
    margin-inline: 6px;
  }

  &:last-child {
    span {
      display: none;
    }
  }
`,nt=({auto:t})=>{const{img:s,year:r,make:n,model:i,type:g,accessories:y,rentalPrice:m,rentalCompany:b,address:v,id:j}=t,[c,w]=u.useState(!1),p=()=>w(!c),x=O(),l=F(z).find(d=>d.id===t.id),S=()=>{l||x(P(t)),l&&x(R(t))},[it,k,C]=v.split(", "),$=[k,C,b,g,i,j,y[0]];return e.jsxs(e.Fragment,{children:[e.jsxs(Q,{children:[e.jsxs(V,{children:[e.jsx(U,{src:s,alt:`${n} ${i}`,loading:"lazy"}),e.jsx(X,{}),e.jsx(N,{$isSaved:l,onClick:S})]}),e.jsxs(Y,{children:[e.jsxs(Z,{children:[n," ",e.jsx("span",{children:i}),", ",r]}),e.jsx(tt,{children:m})]}),e.jsx(et,{children:e.jsx(ot,{children:$.map((d,L)=>e.jsxs(st,{children:[d,e.jsx("span",{children:"|"})]},L))})}),e.jsx(T,{$wide:!0,text:"Learn more",onClick:p})]}),c&&e.jsx(_,{closeModal:p,children:e.jsx("div",{children:"sdfsadfsdf"})})]})},ht=({cars:t})=>e.jsx(H,{children:t.length>0&&t.map(s=>e.jsx("li",{children:e.jsx(nt,{auto:s})},s.id))});export{ht as A,T as B,xt as S,dt as a,ct as b,pt as c,z as d,lt as s,O as u};
