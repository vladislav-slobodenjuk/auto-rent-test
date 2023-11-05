import{s as f,L as o,j as t}from"./index-42b274f7.js";const a=f.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 500px;
`,e=f.div`
  text-align: center;
`,x=f.h1`
  color: #ffffff;
  text-shadow:
    0 0 5px #00baff,
    0 0 10px #00baff,
    0 0 20px #00baff,
    0 0 40px #00baff,
    0 0 80px #00baff;
`;f(o)`
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
`;const p=()=>t.jsx(a,{children:t.jsx(e,{children:t.jsx(x,{children:"Second Page"})})});export{p as default};
