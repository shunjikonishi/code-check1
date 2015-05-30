var assert = require("chai").assert;
var Hello = require("../app/hello");

describe("test3", function() {
  it("eeeee", function() {
    assert(Hello.hello("eeeee"), "Hello eeeee");
  });
  it("ffffff", function() {
    assert(Hello.hello("ffffff"), "Hello ffffff");
  });
});