import{R as l,u as M,c as E,s as o,j as e,a as y,r as c,b as F,d as a,e as I,f as R,g as D}from"./index-1f0febfb.js";function m(t=l){const n=t===l?M:E(t);return function(){const{store:s}=n();return s}}const O=m();function z(t=l){const n=t===l?O:m(t);return function(){return n().dispatch}}const b=z(),A=o.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 150px;
`,H=o.h2`
  visibility: ${({$hidden:t})=>t?"hidden":"visible"};
`,T=o.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(274px, 1fr));

  grid-column-gap: 29px;
  grid-row-gap: 50px;

  margin-bottom: 100px;
`,q=t=>t.cars,G=t=>t.favorites,K=t=>t.isLastPage,W=t=>t.isLoading,_=o.button`
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
`,J=({text:t,...n})=>e.jsx(_,{...n,children:t}),N=o.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background-color: rgba(18, 20, 23, 0.5);
`,Q=o.div`
  position: relative;
  padding: 40px;

  width: 541px;
  height: 752px;

  background-color: #fff;
  border-radius: 24px;
`,U=o.button`
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
`,V=({closeModal:t})=>e.jsx(U,{onClick:t,children:e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:`${y}#close`,stroke:"currentColor"})})}),X=({closeModal:t,children:n})=>{const i=s=>{s.currentTarget===s.target&&t()};return c.useEffect(()=>{document.body.style.overflow="hidden";const s=r=>{r.code==="Escape"&&t()};return window.addEventListener("keydown",s),()=>{document.body.style.overflow="unset",window.removeEventListener("keydown",s)}},[t]),F.createPortal(e.jsx(N,{onClick:i,children:e.jsxs(Q,{children:[e.jsx(V,{closeModal:t}),n]})}),document.querySelector("#root"))},Y=o.button`
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
`,Z=t=>e.jsx(Y,{...t,children:e.jsx("svg",{width:"18",height:"18",children:e.jsx("use",{href:`${y}#heart`,stroke:"currentColor"})})}),tt=o.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: all 0.3s ease-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.3s ease-out;
  }
`,et=o.img`
  height: 268px;
  object-fit: cover;
`,ot=o.div`
  position: relative;
  margin-bottom: 14px;

  width: 274px;
  height: 268px;
  overflow: hidden;
  border-radius: 14px;
`,nt=o.div`
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
`,st=o.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`,rt=o.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16); /* 150% */

  color: #121417;

  & span {
    color: #3470ff;
  }
`,it=o.p`
  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16); /* 150% */
  color: #121417;
`,at=o.div`
  flex-grow: 1;
  margin-bottom: 28px;
`,lt=o.ul`
  display: flex;
  flex-wrap: wrap;
`,ct=o.li`
  span {
    margin-inline: 6px;
  }

  &:last-child {
    span {
      display: none;
    }
  }
`,dt=({auto:t})=>{const{img:n,year:i,make:s,model:r,type:d,accessories:p,rentalPrice:j,rentalCompany:v,address:w,id:S}=t,[x,k]=c.useState(!1),f=()=>k(!x),g=b(),u=a(G).find(h=>h.id===t.id),C=()=>{u||g(I(t)),u&&g(R(t))},[ft,L,$]=w.split(", "),P=[L,$,v,d,r,S,p[0]];return e.jsxs(e.Fragment,{children:[e.jsxs(tt,{children:[e.jsxs(ot,{children:[e.jsx(et,{src:n,alt:`${s} ${r}`}),e.jsx(nt,{}),e.jsx(Z,{$isSaved:u,onClick:C})]}),e.jsxs(st,{children:[e.jsxs(rt,{children:[s," ",e.jsx("span",{children:r}),", ",i]}),e.jsx(it,{children:j})]}),e.jsx(at,{children:e.jsx(lt,{children:P.map((h,B)=>e.jsxs(ct,{children:[h,e.jsx("span",{children:"|"})]},B))})}),e.jsx(J,{$wide:!0,text:"Learn more",onClick:f})]}),x&&e.jsx(X,{closeModal:f,children:e.jsx("div",{children:"sdfsadfsdf"})})]})},pt=({cars:t})=>e.jsx(T,{children:t.length>0&&t.map(n=>e.jsx("li",{children:e.jsx(dt,{auto:n})},n.id))}),ut=o.button`
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
`,ht=t=>e.jsx(ut,{...t,children:"Load More"}),yt=()=>{const t=b(),n=a(q),i=a(K),s=a(W),[r,d]=c.useState(1);c.useEffect(()=>{t(D({page:r}))},[r,t]);const p=!i&&!s&&n.length>0;return e.jsx(e.Fragment,{children:e.jsxs(A,{children:[e.jsx(H,{$hidden:!0,children:"Catalog Page"}),e.jsx(pt,{cars:n}),p&&e.jsx(ht,{onClick:()=>d(r+1)})]})})};export{yt as default};
