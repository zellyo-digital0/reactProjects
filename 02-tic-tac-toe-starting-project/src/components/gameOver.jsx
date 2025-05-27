export default function GameOver({ winner, gameRes }) {
  return (
    <div id="game-over">
      <h2>Game over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>It's a draw!</p>}
      <p>
        <button onClick={gameRes}>Rematch!</button>
      </p>
    </div>
  );
}
