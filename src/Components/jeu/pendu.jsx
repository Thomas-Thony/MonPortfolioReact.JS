import React from "react";
import "../styles/pendu.css";

const Pendu = ({ errorsCount }) => {
  // Dessins ASCII pour chaque étape du pendu
  const hangmanParts = [
    // 0 erreurs - potence de base
    [
      "  ________",
      "  |      |",
      "  |       ",
      "  |       ",
      "  |       ",
      "  |       ",
      "__|__     "
    ],
    // 1 erreur - tête
    [
      "  ________",
      "  |      |",
      "  |     😵",
      "  |       ",
      "  |       ",
      "  |       ",
      "__|__     "
    ],
    // 2 erreurs - corps
    [
      "  ________",
      "  |      |",
      "  |     😵",
      "  |      |",
      "  |      |",
      "  |       ",
      "__|__     "
    ],
    // 3 erreurs - bras gauche
    [
      "  ________",
      "  |      |",
      "  |     😵",
      "  |     /|",
      "  |      |",
      "  |       ",
      "__|__     "
    ],
    // 4 erreurs - bras droit
    [
      "  ________",
      "  |      |",
      "  |     😵",
      "  |     /|\\",
      "  |      |",
      "  |       ",
      "__|__     "
    ],
    // 5 erreurs - jambe gauche
    [
      "  ________",
      "  |      |",
      "  |     😵",
      "  |     /|\\",
      "  |      |",
      "  |     / ",
      "__|__     "
    ],
    // 6 erreurs - jambe droite (mort)
    [
      "  ________",
      "  |      |",
      "  |     💀",
      "  |     /|\\",
      "  |      |",
      "  |     / \\",
      "__|__     "
    ]
  ];

  // S'assurer que errorsCount ne dépasse pas le nombre de dessins disponibles
  const currentDrawing = hangmanParts[Math.min(errorsCount, hangmanParts.length - 1)];

  return (
    <div className="hangman-drawing">
      {currentDrawing.map((line, index) => (
        <div key={index} className="hangman-line">
          {line}
        </div>
      ))}
    </div>
  );
};

export default Pendu;