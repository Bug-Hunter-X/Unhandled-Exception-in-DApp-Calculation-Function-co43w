function add(a, b) {return a + b;} function sub(a, b) {return a - b;} function div(a, b) {if (b === 0) {return Infinity;} return a / b;} function mul(a, b) {return a * b;} let a = 10; let b = 0; let c = div(a, b); console.log(c); let d = add(a, b); console.log(d); let e = sub(a, b); console.log(e); let f = mul(a, b); console.log(f);