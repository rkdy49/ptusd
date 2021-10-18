//SPDX-License-Identifier:MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";

contract BrixStox is ERC1155 {
    address public governance;
    uint256  propertyCount=1;
    
    modifier onlyGovernance() {
        require(msg.sender == governance, "only governance can call this");
        
        _;
    }

    constructor(address governance_) public ERC1155("") {
        governance = governance_;
    }
    
    function addNewProperty(uint256 initialSupply) external onlyGovernance {
        uint256 propertyTokenClassId = propertyCount;
        _mint(msg.sender, propertyTokenClassId, initialSupply, "");    
        propertyCount++;
    }
}