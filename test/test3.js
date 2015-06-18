var assert = require("chai").assert;
var Hello = require("../app/hello");

// This test is not shown to the user.
// Because it is excluded by challenge.json

// このテストはユーザには表示されません。
// 何故ならchallenge.jsonによって除外されているからです。

describe("test3", function() {
  it("eeeee", function() {
    assert(Hello.hello("eeeee"), "Hello eeeee");
  });
  it("ffffff", function() {
    assert(Hello.hello("ffffff"), "Hello ffffff");
  });
});