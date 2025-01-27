import { Square } from "./Square.jsx";
import { TURNS } from "../constants.js";

export function WinnerModal({ winner, resetGame }) {
  if (winner === null) return null;

  const winnerText = winner === false ? "Empate" : "Ganó:";

  const winnerImg = winner === TURNS.X ? TURNS.X : TURNS.O;

  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>

        <header className="win">
          {winner && <Square>
            <img src={winnerImg} alt="" /></Square>}
        </header>

        <footer>
          <button onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  );
}
