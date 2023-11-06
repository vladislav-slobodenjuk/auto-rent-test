import{R as f,b as T,d as H,s,j as e,r as R,e as W,p as z,u as q,f as G,h as K}from"./index-0773544d.js";function B(t=f){const o=t===f?T:H(t);return function(){const{store:n}=o();return n}}const U=B();function Y(t=f){const o=t===f?U:B(t);return function(){return o().dispatch}}const J=Y(),ye=t=>t.cars,N=t=>t.favorites,be=t=>t.isLastPage,ve=t=>t.isLoading,Q=s.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(274px, 1fr));

  grid-column-gap: 29px;
  grid-row-gap: 50px;

  margin-bottom: 100px;
`,V=s.button`
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
`,D=({text:t,...o})=>e.jsx(V,{...o,children:t}),X=s.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background-color: rgba(18, 20, 23, 0.5);
`,Z=s.div`
  position: relative;
  padding: 40px;

  width: 541px;

  background-color: #fff;
  border-radius: 24px;
`,_=s.button`
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
`,E="/auto-rent-test/assets/sprite-31deeb4d.svg",ee=({closeModal:t})=>e.jsx(_,{onClick:t,children:e.jsx("svg",{width:"24",height:"24",children:e.jsx("use",{href:`${E}#close`,stroke:"currentColor"})})}),te=({closeModal:t,children:o})=>{const a=n=>{n.currentTarget===n.target&&t()};return R.useEffect(()=>{document.body.style.overflow="hidden";const n=l=>{l.code==="Escape"&&t()};return window.addEventListener("keydown",n),()=>{document.body.style.overflow="unset",window.removeEventListener("keydown",n)}},[t]),W.createPortal(e.jsx(X,{onClick:a,children:e.jsxs(Z,{children:[e.jsx(ee,{closeModal:t}),o]})}),document.querySelector("#root"))},se=s.button`
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
`,re=s.img`
  height: 268px;
  object-fit: cover;
`,ie=s.div`
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
`,O=s(F)`
  margin-bottom: 8px;
  font-size: 18px;
`,M=s.div`
  margin-bottom: 14px;
`,u=s(A)`
  margin-bottom: 4px;
`,ue=s.p`
  margin-bottom: 24px;
  font-family: Manrope;
  font-size: 14px;
  line-height: calc(20 / 14); /* 142.857% */
  color: #121417;
`,P=s(O)`
  font-size: 14px;
  line-height: calc(20 / 14); /* 142.857% */
`;s.div`
  margin-bottom: 24px;
`;const fe=s.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 24px;
`,I=s.li`
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
`,ge=({auto:t})=>{const{img:o,year:a,make:n,model:l,type:g,fuelConsumption:m,engineSize:j,description:y,accessories:b,functionalities:v,rentalConditions:p,mileage:w,rentalPrice:x,address:h,id:L}=t,c=p.split(`
`),{city:S,country:C}=z(h),k=[S,C,`Id: ${L}`,`Year: ${a}`,`Type: ${g}`],$=[`Fuel Consumption: ${m}`,`Engine Size: ${j}`];return e.jsxs(pe,{children:[e.jsx(xe,{children:e.jsx(he,{src:o,alt:`${n} ${l}`})}),e.jsxs(O,{children:[n," ",e.jsx("span",{children:l}),", ",a]}),e.jsxs(M,{children:[e.jsx(u,{children:k.map((r,i)=>e.jsxs(d,{children:[r,e.jsx("span",{children:"|"})]},i))}),e.jsx(u,{children:$.map((r,i)=>e.jsxs(d,{children:[r,e.jsx("span",{children:"|"})]},i))})]}),e.jsx(ue,{children:y}),e.jsx(P,{children:"Accessories and functionalities:"}),e.jsxs(M,{children:[e.jsx(u,{children:b.map((r,i)=>e.jsxs(d,{children:[r,e.jsx("span",{children:"|"})]},i))}),e.jsx(u,{children:v.map((r,i)=>e.jsxs(d,{children:[r,e.jsx("span",{children:"|"})]},i))})]}),e.jsx(P,{children:"Rental Conditions:"}),e.jsxs(fe,{children:[c.map((r,i)=>e.jsx(I,{children:r},i)),e.jsxs(I,{children:["Mileage: ",e.jsx("span",{children:w.toLocaleString("en-US")})]}),e.jsxs(I,{children:["Price: ",e.jsx("span",{children:x})]})]}),e.jsx(D,{href:"tel:+380730000000",text:"Rental car",as:"a"})]})},me=({auto:t})=>{const{img:o,year:a,make:n,model:l,type:g,accessories:m,rentalPrice:j,rentalCompany:y,address:b,id:v}=t,[p,w]=R.useState(!1),x=()=>w(!p),h=J(),c=q(N).find(r=>r.id===t.id),S=()=>{c||h(G(t)),c&&h(K(t))},{city:C,country:k}=z(b),$=[C,k,y,g,l,v,m[0]];return e.jsxs(e.Fragment,{children:[e.jsxs(ne,{children:[e.jsxs(ie,{children:[e.jsx(re,{src:o,alt:`${n} ${l}`,loading:"lazy"}),e.jsx(ae,{}),e.jsx(oe,{$isSaved:c,onClick:S})]}),e.jsxs(le,{children:[e.jsxs(F,{children:[n," ",e.jsx("span",{children:l}),", ",a]}),e.jsx(ce,{children:j})]}),e.jsx(de,{children:e.jsx(A,{children:$.map((r,i)=>e.jsxs(d,{children:[r,e.jsx("span",{children:"|"})]},i))})}),e.jsx(D,{$wide:!0,text:"Learn more",onClick:x})]}),p&&e.jsx(te,{closeModal:x,children:e.jsx(ge,{auto:t})})]})},we=({cars:t})=>e.jsx(Q,{children:t.length>0&&t.map(o=>e.jsx("li",{children:e.jsx(me,{auto:o})},o.id))});export{we as A,D as B,be as a,ve as b,N as c,ye as s,J as u};
