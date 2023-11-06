import{R as f,b as O,d as H,s,j as e,r as z,e as W,u as _,f as q,h as G}from"./index-3e270a8b.js";function B(t=f){const o=t===f?O:H(t);return function(){const{store:n}=o();return n}}const K=B();function U(t=f){const o=t===f?K:B(t);return function(){return o().dispatch}}const Y=U(),ye=t=>t.cars,J=t=>t.favorites,be=t=>t.isLastPage,ve=t=>t.isLoading,we=s.section`
  display: flex;
  flex-direction: column;
  padding-bottom: 150px;
`,Se=s.h2`
  width: ${({$hidden:t})=>t?0:"unset"};
  height: ${({$hidden:t})=>t?0:"unset"};
  visibility: ${({$hidden:t})=>t?"hidden":"visible"};
`,N=s.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(274px, 1fr));

  grid-column-gap: 29px;
  grid-row-gap: 50px;

  margin-bottom: 100px;
`,Q=s.button`
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
`,D=({text:t,...o})=>e.jsx(Q,{...o,children:t}),V=s.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background-color: rgba(18, 20, 23, 0.5);
`,X=s.div`
  position: relative;
  padding: 40px;

  width: 541px;

  background-color: #fff;
  border-radius: 24px;
`,Z=s.button`
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
`,E="/auto-rent-test/assets/sprite-31deeb4d.svg",ee=({closeModal:t})=>e.jsx(Z,{onClick:t,children:e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:`${E}#close`,stroke:"currentColor"})})}),te=({closeModal:t,children:o})=>{const a=n=>{n.currentTarget===n.target&&t()};return z.useEffect(()=>{document.body.style.overflow="hidden";const n=l=>{l.code==="Escape"&&t()};return window.addEventListener("keydown",n),()=>{document.body.style.overflow="unset",window.removeEventListener("keydown",n)}},[t]),W.createPortal(e.jsx(V,{onClick:a,children:e.jsxs(X,{children:[e.jsx(ee,{closeModal:t}),o]})}),document.querySelector("#root"))},se=s.button`
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
`,oe=t=>e.jsx(se,{...t,children:e.jsx("svg",{width:"18",height:"18",children:e.jsx("use",{href:`${E}#heart`,stroke:"currentColor"})})}),ne=s.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: all 0.3s ease-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.3s ease-out;
  }
`,ie=s.img`
  height: 268px;
  object-fit: cover;
`,re=s.div`
  position: relative;
  margin-bottom: 14px;

  width: 274px;
  height: 268px;
  overflow: hidden;
  border-radius: 14px;
`,ae=s.div`
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
`,le=s.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`,F=s.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16); /* 150% */

  color: #121417;

  & span {
    color: #3470ff;
  }
`,ce=s.p`
  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16); /* 150% */
  color: #121417;
`,de=s.div`
  flex-grow: 1;
  margin-bottom: 28px;
`,A=s.ul`
  display: flex;
  flex-wrap: wrap;
`,d=s.li`
  span {
    margin-inline: 6px;
  }

  &:last-child {
    span {
      display: none;
    }
  }
`,pe=s.div``,xe=s.div`
  margin-bottom: 14px;
  width: 460px;
  height: 248px;
  border-radius: 14px;
  overflow: hidden;
`,he=s.img`
  object-fit: cover;
`,T=s(F)`
  margin-bottom: 8px;
  font-size: 18px;
`,P=s.div`
  margin-bottom: 14px;
`,u=s(A)`
  margin-bottom: 4px;
`,ue=s.p`
  margin-bottom: 24px;
  font-family: Manrope;
  font-size: 14px;
  line-height: calc(20 / 14); /* 142.857% */
  color: #121417;
`,R=s(T)`
  font-size: 14px;
  line-height: calc(20 / 14); /* 142.857% */
`;s.div`
  margin-bottom: 24px;
`;const fe=s.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 24px;
`,$=s.li`
  padding: 7px 14px;
  margin-bottom: 8px;
  border-radius: 35px;
  background-color: #f9f9f9;

  &:not(:last-child) {
    margin-right: 8px;
  }

  & span {
    color: #3470ff;
  }
`,ge=({auto:t})=>{const{img:o,year:a,make:n,model:l,type:g,fuelConsumption:m,engineSize:j,description:y,accessories:b,functionalities:v,rentalConditions:p,mileage:w,rentalPrice:x,address:h,id:I}=t,c=p.split(`
`),[L,M,S]=h.split(", "),C=[M,S,`Id: ${I}`,`Year: ${a}`,`Type: ${g}`],k=[`Fuel Consumption: ${m}`,`Engine Size: ${j}`];return e.jsxs(pe,{children:[e.jsx(xe,{children:e.jsx(he,{src:o,alt:`${n} ${l}`})}),e.jsxs(T,{children:[n," ",e.jsx("span",{children:l}),", ",a]}),e.jsxs(P,{children:[e.jsx(u,{children:C.map((i,r)=>e.jsxs(d,{children:[i,e.jsx("span",{children:"|"})]},r))}),e.jsx(u,{children:k.map((i,r)=>e.jsxs(d,{children:[i,e.jsx("span",{children:"|"})]},r))})]}),e.jsx(ue,{children:y}),e.jsx(R,{children:"Accessories and functionalities:"}),e.jsxs(P,{children:[e.jsx(u,{children:b.map((i,r)=>e.jsxs(d,{children:[i,e.jsx("span",{children:"|"})]},r))}),e.jsx(u,{children:v.map((i,r)=>e.jsxs(d,{children:[i,e.jsx("span",{children:"|"})]},r))})]}),e.jsx(R,{children:"Rental Conditions:"}),e.jsxs(fe,{children:[c.map((i,r)=>e.jsx($,{children:i},r)),e.jsxs($,{children:["Mileage: ",e.jsx("span",{children:w.toLocaleString("en-US")})]}),e.jsxs($,{children:["Price: ",e.jsx("span",{children:x})]})]}),e.jsx(D,{href:"tel:+380730000000",text:"Rental car",as:"a"})]})},me=({auto:t})=>{const{img:o,year:a,make:n,model:l,type:g,accessories:m,rentalPrice:j,rentalCompany:y,address:b,id:v}=t,[p,w]=z.useState(!1),x=()=>w(!p),h=Y(),c=_(J).find(i=>i.id===t.id),L=()=>{c||h(q(t)),c&&h(G(t))},[M,S,C]=b.split(", "),k=[S,C,y,g,l,v,m[0]];return e.jsxs(e.Fragment,{children:[e.jsxs(ne,{children:[e.jsxs(re,{children:[e.jsx(ie,{src:o,alt:`${n} ${l}`,loading:"lazy"}),e.jsx(ae,{}),e.jsx(oe,{$isSaved:c,onClick:L})]}),e.jsxs(le,{children:[e.jsxs(F,{children:[n," ",e.jsx("span",{children:l}),", ",a]}),e.jsx(ce,{children:j})]}),e.jsx(de,{children:e.jsx(A,{children:k.map((i,r)=>e.jsxs(d,{children:[i,e.jsx("span",{children:"|"})]},r))})}),e.jsx(D,{$wide:!0,text:"Learn more",onClick:x})]}),p&&e.jsx(te,{closeModal:x,children:e.jsx(ge,{auto:t})})]})},Ce=({cars:t})=>e.jsx(N,{children:t.length>0&&t.map(o=>e.jsx("li",{children:e.jsx(me,{auto:o})},o.id))});export{Ce as A,D as B,Se as S,be as a,ve as b,we as c,J as d,ye as s,Y as u};
