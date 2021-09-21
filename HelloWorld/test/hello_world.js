const HelloWorld = artifacts.require("HelloWorld");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("HelloWorld", function () {
  it("checking hello world function", async function () {
    const hello = await HelloWorld.new();
    const data = await hello.print();
    assert(data === "HelloWorld!!");
  });
});
