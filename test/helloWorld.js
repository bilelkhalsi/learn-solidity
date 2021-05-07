const helloWorld = artifacts.require("../contracts/helloWorld");

contract ('helloWorld', function(accounts) {

    it('check greet', async function()  {
        const contract = await helloWorld.deployed();
        const greet = await contract.greet.call();
        assert.equal(greet, "Hello World!");
    })
})