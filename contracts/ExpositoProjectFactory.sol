pragma solidity ^0.4.18;

import "./ExpositoProject.sol";

/**
 *  This contract is used to generate clone contracts from a contract.
 *  It is based on the MiniMeTokenFactory contract.
 *  In solidity this is the way to create a contract from a contract of the
 *  same class
 */
contract ExpositoProjectFactory {

    /**
     *  @notice Update the DApp by creating a new token with new functionalities
     *  the msg.sender becomes the controller of this clone token
     * @param _parentToken Address of the token being cloned
     * @param _snapshotBlock Block of the parent token that will
     *  determine the initial distribution of the clone token
     * @return The address of the new token contract
     */ 
    function createCloneToken(
        address _parentToken,
        uint _snapshotBlock,
        bool _transfersEnabled,
        string _projectId
    ) public returns (ExpositoProject) 
    {
        ExpositoProject newToken = new ExpositoProject(
            this,
            _parentToken,
            _snapshotBlock,
            _projectId,
            0,
            0,
            _transfersEnabled
            );

        newToken.changeController(msg.sender);
        return newToken;
    }
}