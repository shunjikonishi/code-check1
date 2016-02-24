var assert = require("chai").assert;
var Hello = require("../app/hello");

// Don't edit this file.

//BEGIN_CHALLENGE
// This test is published to the user.
// So, the user can run this test in their own environment.
//
// Editing this file is not allowed by challnge.json
// If the user edit this file, the auto test score of this challenge should be 0.
//END_CHALLENGE

//BEGIN_CHALLENGE
// このテストはユーザに公開されます。
// そのため、ユーザはこのテストを自分の環境で実行することができます。
//
// challenge.jsonによりこのファイルの編集は不許可となっています。
// もしユーザがこのファイルを修正した場合は自動テストの得点は0となります。
//END_CHALLENGE
describe("test1", function() {
  it("a", function() {
    assert.equal(Hello.hello("a"), "Hello a");
  });
  it("bb", function() {
    assert.equal(Hello.hello("bb"), "Hello bb");
  });
  it("envvar - var1", function() {
    var var1 = process.env.VAR1
    assert.equal(Hello.hello(var1), "Hello Taro");
  });
});
