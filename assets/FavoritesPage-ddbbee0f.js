import{s as t,L as o,j as f}from"./index-40d35190.js";const a=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 500px;
`,e=t.div`
  text-align: center;
`,s=t.h1`
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`,x=t(o)`
  padding: 8px 16px;
  color: #ffffff; /* White text color */
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
  transition:
    color 0.3s,
    text-shadow 0.3s;
  display: block;
  &:hover,
  &:focus {
    color: #00baff; /* Blue text color on hover/focus */
    text-shadow:
      0 0 5px #00baff,
      0 0 10px #00baff,
      0 0 20px #00baff,
      0 0 40px #00baff,
      0 0 80px #00baff;
  }
`,p=()=>f.jsx(a,{children:f.jsxs(e,{children:[f.jsx(s,{children:"Second Page"}),f.jsx(x,{to:"/second/5",children:"Half"})]})});export{p as default};
