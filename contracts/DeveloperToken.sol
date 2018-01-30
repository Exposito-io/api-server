pragma solidity ^0.4.18;



/** 
 *  @title DeveloperToken Contract
 *  @dev    
 */
contract DeveloperToken {        

    /** Version of the contract */
    string public version = "0.0.1"; 

    /** Timestamp of the contract creation */
    uint public creationTimestamp;

    /** Total number of tokens */
    uint256 public totalSupply;

    /**  */
    mapping (address => uint256) public balances;

    /** How many decimals to show */
    uint8 public decimals;                

    uint256 constant private MAX_UINT256 = 2**256 - 1;

    function DeveloperToken(
        uint256 _supplyAmount,
        address[] _balanceAddresses,
        uint256[] _balanceAmounts,
        uint8 _decimalUnits
    ) public {
        require(_balanceAddresses.length == _balanceAmounts.length);

        creationTimestamp = now;
        totalSupply = _supplyAmount;     
        decimals = _decimalUnits;         

        for (uint i = 0; i < _balanceAddresses.length; i++) {
            balances[_balanceAddresses[i]] = _balanceAmounts[i];
        }
    }

    function balanceOf(address _owner) public view returns (uint256 balance) {
        return balances[_owner];
    }

}
