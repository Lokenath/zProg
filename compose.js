var compose = function(...args) {
  var funcs = args;

  return funcs.reduce(function(f,g) {
    return function() {
      return f(g.apply(this, arguments));
    };
  });
};

function half(y){ return y/2; }
function square(x){ return x*x; }