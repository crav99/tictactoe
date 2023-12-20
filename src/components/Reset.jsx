import GameState from "./GameState";

function Reset({ gameState, onReset }) {
    const reset = () => {
        gameState = GameState.inPogress;
    };

    switch (gameState) {
        case GameState.inPogress:
            return <></>;
        default:
            return <button className="reset-button" onClick={onReset}>Reset</button>;
    }
}

export default Reset;