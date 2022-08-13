const hre = require("hardhat");

async function main () { 
    const Contract = await hre.ethers.getContractFactory("Fractionalize");
    const contract = await Contract.deploy("P5JS TEST", "P5js", "https://ham-evans.github.io/p5js/metadata/", ".json")
    await contract.deployed();
    console.log("Contract deployed to ", contract.address);
}

main ()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });