/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */

const Storage = artifacts.require("Storage.sol");

// first argument of the contract is name of the test
contract("Storage", () => {
  it("checking the set and get function", async function () {
    const storage = await Storage.new();
    await storage.set(20);
    const data = await storage.get();
    assert(data.toString() === '20');
  });
});
