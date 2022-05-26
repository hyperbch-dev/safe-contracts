import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const deploy: DeployFunction = async function (
  hre: HardhatRuntimeEnvironment,
) {
  const { deployments, getNamedAccounts } = hre;
  const { deployer } = await getNamedAccounts();
  const { deploy } = deployments;

  await deploy("DefaultCallbackHandler", {
    from: deployer,
    args: [],
    log: true,
    deterministicDeployment: true,
    gasLimit: 1000000
  });

  await deploy("CompatibilityFallbackHandler", {
    from: deployer,
    args: [],
    log: true,
    deterministicDeployment: true,
    gasLimit: 2000000
  });
};

deploy.tags = ['handlers', 'l2-suite', 'main-suite']
export default deploy;
