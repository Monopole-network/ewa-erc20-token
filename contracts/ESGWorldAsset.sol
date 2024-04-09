// SPDX-License-Identifier: MIT
pragma solidity =0.8.23;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

contract ESGWorldAsset is ERC20, ERC20Burnable, ERC20Permit {
    constructor() ERC20("ESG World Asset", "EWA") ERC20Permit("ESG World Asset") {
        _mint(msg.sender, 1_000_000_000 * 10 ** decimals());
    }
}