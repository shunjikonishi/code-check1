var assert = require("chai").assert;
var Hello = require("../app/hello");

describe("test1", function() {
  it("a", function() {
    assert(Hello.hello("a"), "Hello a");
  });
  it("bb", function() {
    assert(Hello.hello("bb"), "Hello bb");
  });
});