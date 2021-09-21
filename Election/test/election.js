var Election = artifacts.require("Election");

contract("Election", function(accounts) {
    var electionObj;

    it("initizes with two candidates", function() {
        return Election.deployed().then(function(instance) {
            return instance.candidateCount();
        }).then(function(count) {
            assert.equal(count, 2);
        });
    });

    it("initizes the candidates with correct values", function() {
        return Election.deployed().then(function(instance) {
            electionObj = instance;
            return electionObj.candidates(0);
        }).then(function(candidate) {
            assert.equal(candidate[0], 0, "contains the correct id");
            assert.equal(candidate[1], "Alice", "contains the correct name");
            assert.equal(candidate[2], 0, "contains the correct vote count");
            return electionObj.candidates(1);
        }).then(function(candidate) {
            assert.equal(candidate[0], 1, "contains the correct id");
            assert.equal(candidate[1], "Bob", "contains the correct name");
            assert.equal(candidate[2], 0, "contains the correct vote count");
        });
    });
});