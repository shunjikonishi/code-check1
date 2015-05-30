var assert = require("chai").assert;
var Hello = require("../app/hello");

describe("test2", function() {
  it("ccc", function() {
    assert(Hello.hello("ccc"), "Hello ccc");
  });
  it("dddd", function() {
    assert(Hello.hello("dddd"), "Hello dddd");
  });
});