// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @title JetpackRunner Game Contract
/// @notice Handles player registration, game progression, asset purchases, and mystery box logic
/// @dev This contract is for a Jetpack Runner game prototype MVP

contract JetpackRunner {
    /// @notice Struct representing an unclaimed mystery box
    struct UnclaimedMysteryBox {
        uint256 id;
        uint256 collectedOn; // Timestamp when the mystery box was collected
    }

    /// @notice Struct representing a claimed mystery box and the coin reward
    struct ClaimedMysteryBox {
        uint256 id;
        uint256 coinAmount;
    }

    /// @notice Struct holding a player's owned characters and jetpacks
    struct GameAssets {
        string[] characters;
        string[] jetpacks;
    }

    /// @notice Struct representing a registered JetpackRunner player
    struct Player {
        uint256 id;
        uint256 createdAt;
        address walletAddress;
        uint256 userPoints;
        uint256 highScore;
        uint256 totalDistance;
        uint256[] completedMissions;
        UnclaimedMysteryBox[] unclaimedMysteryBoxes;
        ClaimedMysteryBox[] claimedMysteryBoxes;
        GameAssets gameAssets;
    }

    mapping(address => Player) public players;
    address[] public playerAddresses;
    uint256 public playerCount;
    uint256 public mysteryBoxCounter = 1;

    /// @notice Restricts function access to only registered players
    modifier onlyRegistered() {
        require(
            players[msg.sender].walletAddress != address(0),
            "Player not registered"
        );
        _;
    }

    /// @notice Registers a new player
    function registerPlayer() external {
        require(
            players[msg.sender].walletAddress == address(0),
            "Already registered"
        );

        Player storage newPlayer = players[msg.sender];
        newPlayer.id = playerCount;
        newPlayer.createdAt = block.timestamp;
        newPlayer.walletAddress = msg.sender;
        newPlayer.gameAssets.characters.push("og");
        newPlayer.gameAssets.jetpacks.push("jetpack");

        playerAddresses.push(msg.sender);
        playerCount++;
    }

    /// @notice Returns player data for the given wallet address
    /// @param wallet Wallet address of the player
    /// @return Player struct with all stored data
    function getPlayerData(
        address wallet
    ) external view returns (Player memory) {
        return players[wallet];
    }

    /// @notice Updates player stats after a gameplay session
    /// @param pointsCollected Points collected in the session
    /// @param distanceCovered Distance covered in the session
    /// @param completedMissions Array of mission IDs completed in the session
    /// @param collectedMysteryBoxes Array of timestamps for collected mystery boxes
    /// @dev Updates player points, high score, total distance, completed missions, and un
    function updatePlayerStats(
        uint256 pointsCollected,
        uint256 distanceCovered,
        uint256[] calldata completedMissions,
        uint256[] calldata collectedMysteryBoxes
    ) external onlyRegistered {
        Player storage player = players[msg.sender];

        player.userPoints += pointsCollected;

        if (distanceCovered > player.highScore) {
            player.highScore = distanceCovered;
        }

        player.totalDistance += distanceCovered;

        for (uint i = 0; i < completedMissions.length; i++) {
            player.completedMissions.push(completedMissions[i]);
        }

        for (uint j = 0; j < collectedMysteryBoxes.length; j++) {
            player.unclaimedMysteryBoxes.push(
                UnclaimedMysteryBox({
                    id: 2,
                    collectedOn: collectedMysteryBoxes[j]
                })
            );
        }
    }

    /// @notice Claims a mystery box collected earlier, rewarding random coins
    /// @param mysteryBoxTimestamp The timestamp used to identify the collected mystery box
    function claimMysteryBox(
        uint256 mysteryBoxTimestamp
    ) external onlyRegistered returns (uint256) {
        Player storage player = players[msg.sender];

        uint256 amount = (uint256(
            keccak256(
                abi.encodePacked(
                    block.timestamp,
                    msg.sender,
                    mysteryBoxTimestamp
                )
            )
        ) % 481) + 20;

        player.userPoints += amount;

        // Remove the mystery box with matching timestamp
        for (uint i = 0; i < player.unclaimedMysteryBoxes.length; i++) {
            if (
                player.unclaimedMysteryBoxes[i].collectedOn ==
                mysteryBoxTimestamp
            ) {
                player.unclaimedMysteryBoxes[i] = player.unclaimedMysteryBoxes[
                    player.unclaimedMysteryBoxes.length - 1
                ];
                player.unclaimedMysteryBoxes.pop();
                break;
            }
        }

        player.claimedMysteryBoxes.push(
            ClaimedMysteryBox({id: 2, coinAmount: amount})
        );

        return amount;
    }

    /// @notice Purchase a new character using in-game points
    /// @param name Name of the character to purchase
    function shopCharacterGameAsset(
        string calldata name
    ) external onlyRegistered {
        require(
            compareStrings(name, "ninja") || compareStrings(name, "samurai"),
            "Incorrect Character Name"
        );

        uint256 price = getCharacterPrice(name);
        require(players[msg.sender].userPoints >= price, "Insufficient points");

        players[msg.sender].userPoints -= price;
        players[msg.sender].gameAssets.characters.push(name);
    }

    /// @notice Purchase a new jetpack using in-game points
    /// @param name Name of the jetpack to purchase
    function shopJetpackGameAsset(
        string calldata name
    ) external onlyRegistered {
        require(
            compareStrings(name, "rocket") || compareStrings(name, "heli"),
            "Incorrect Jetpack Name"
        );

        uint256 price = getJetpackPrice(name);
        require(players[msg.sender].userPoints >= price, "Insufficient points");

        players[msg.sender].userPoints -= price;
        players[msg.sender].gameAssets.jetpacks.push(name);
    }

    /// @notice Returns the price of a character
    /// @param name Name of the character
    /// @return price Character cost in points
    function getCharacterPrice(
        string memory name
    ) internal pure returns (uint256) {
        if (compareStrings(name, "ninja")) return 1000;
        if (compareStrings(name, "samurai")) return 2500;
        return 0;
    }

    /// @notice Returns the price of a jetpack
    /// @param name Name of the jetpack
    /// @return price Jetpack cost in points
    function getJetpackPrice(
        string memory name
    ) internal pure returns (uint256) {
        if (compareStrings(name, "rocket")) return 2500;
        if (compareStrings(name, "heli")) return 5000;
        return 0;
    }

    /// @notice Compares two strings
    /// @param a First string
    /// @param b Second string
    /// @return isEqual True if strings are equal
    function compareStrings(
        string memory a,
        string memory b
    ) internal pure returns (bool) {
        return keccak256(bytes(a)) == keccak256(bytes(b));
    }

    /// @notice Returns the top 100 players sorted by points
    /// @return topPlayers List of top player addresses
    /// @return distancesCovered Corresponding distances covered by players
    /// @return points Corresponding point values
    function getLeaderboardData()
        external
        view
        returns (
            address[] memory topPlayers,
            uint256[] memory distancesCovered,
            uint256[] memory points
        )
    {
        uint256 len = playerAddresses.length > 100
            ? 100
            : playerAddresses.length;
        address[] memory sorted = new address[](len);
        uint256[] memory scores = new uint256[](len);
        uint256[] memory totalDistances = new uint256[](len);

        for (uint i = 0; i < len; i++) {
            sorted[i] = playerAddresses[i];
            scores[i] = players[playerAddresses[i]].userPoints;
            totalDistances[i] = players[playerAddresses[i]].totalDistance;
        }

        // Bubble sort for MVP
        for (uint i = 0; i < len; i++) {
            for (uint j = i + 1; j < len; j++) {
                if (scores[j] > scores[i]) {
                    (scores[i], scores[j]) = (scores[j], scores[i]);
                    (sorted[i], sorted[j]) = (sorted[j], sorted[i]);
                }
            }
        }

        return (sorted, totalDistances, scores);
    }
}
