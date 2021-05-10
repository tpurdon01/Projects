function foo(bar?:number[]) {
    return "Hello, " + bar;
}

let baz = [1,2,3];

console.log(foo(baz));