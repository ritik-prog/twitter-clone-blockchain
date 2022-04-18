
const hre = require("hardhat");

async function main() {
  const MintProfileImageFactory = await hre.ethers.getContractFactory(
    "ProfileImageNfts"
  );
  const profileImageContract = await MintProfileImageFactory.deploy();

  await profileImageContract.deployed();

  console.log(
    "profileImageContract deployed to:",
    profileImageContract.address,
    profileImageContract
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
