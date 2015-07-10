var id = function (o) { return o; }

var obj = {
  prop1: id(1),
  prop2: id(2),
  prop3: id(3)
};

// Trace:
//   1: before  id=/
//   1: after   id=<function>
//   3: before  obj=/ id=<function>
//     1: enter   o=1
//     1: before  o=1
//     1: after   o=1
//     1: leave   return=1
//     1: enter   o=2
//     1: before  o=2
//     1: after   o=2
//     1: leave   return=2
//     1: enter   o=3
//     1: before  o=3
//     1: after   o=3
//     1: leave   return=3
//   3: after   obj=<object> id=<function>

