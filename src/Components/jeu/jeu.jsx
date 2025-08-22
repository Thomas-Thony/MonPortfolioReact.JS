import { Component } from "react";
import Clavier from "./clavier";
import CurrentWord from "./currentWord";
import Pendu from "./pendu";
import Message from "../utils/message";
import dictionnaire from "../utils/dico.json";
import "../styles/jeu.css";

class Jeu extends Component {
  state = {
    dictionnaire: dictionnaire.mots,
    currentWord: null,
    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(''),
    lettreUtilisee: [],
    victoires: 0,
    essais: 0,
    maxEssais: 6,
    gameStatus: 'playing',
    toast: null
  };

  componentDidMount() {
    // Gestion du clavier physique
    window.addEventListener("keyup", this.handleKeyPress);
    this.initGame();
  }

  componentWillUnmount() {
    window.removeEventListener("keyup", this.handleKeyPress);
  }

  handleKeyPress = (e) => {
    const lettre = e.key.toUpperCase();
    
    if (this.state.alphabet.includes(lettre) && this.state.gameStatus === 'playing') {
      this.clickLetter(lettre);
    }
    
    if (e.key === 'Enter' && this.state.gameStatus !== 'playing') {
      this.initGame();
    }
  };

  showToast = (message, type = 'info') => {
    this.setState({
      toast: { message, type }
    });
  };

  hideToast = () => {
    this.setState({ toast: null });
  };

  clickLetter = (lettre) => {
    lettre = lettre.toLowerCase();
    
    
    if (this.state.gameStatus !== 'playing') {
      return;
    }

   
    if (this.state.lettreUtilisee.includes(lettre)) {
      this.showToast(`La lettre ${lettre.toUpperCase()} est déjà utilisée !`, 'warning');
      return;
    }

    let essais = this.state.essais;
    const lettreUtilisee = [...this.state.lettreUtilisee, lettre];
    
    
    if (!this.state.currentWord.toLowerCase().includes(lettre)) {
      essais = essais + 1;
    }

    
    const motTrouve = this.state.currentWord
      .toLowerCase()
      .split('')
      .every(char => lettreUtilisee.includes(char));

    let gameStatus = 'playing';
    let victoires = this.state.victoires;

    if (motTrouve) {
      gameStatus = 'won';
      victoires += 1;
      this.showToast('🎉 Félicitations ! Vous avez trouvé le mot !', 'success');
      
      setTimeout(() => {
        if (this.state.gameStatus === 'won') { 
          this.initGame();
        }
      }, 3000);
    } else if (essais >= this.state.maxEssais) {
      gameStatus = 'lost';
      this.showToast(`😞 Perdu ! Le mot était "${this.state.currentWord}"`, 'error');
      setTimeout(() => {
        if (this.state.gameStatus === 'lost') {
          this.initGame();
        }
      }, 4000);
    }

    this.setState({
      lettreUtilisee,
      essais,
      gameStatus,
      victoires
    });
  };

  getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * this.state.dictionnaire.length);
    return this.state.dictionnaire[randomIndex];
  };

  initGame = () => {
    const newWord = this.getRandomWord();
    this.setState({
      currentWord: newWord,
      lettreUtilisee: [],
      essais: 0,
      gameStatus: 'playing'
    });
    this.hideToast(); 
  };

  getGameStatusMessage = () => {
    switch (this.state.gameStatus) {
      case 'won':
        return '🎉 Victoire !';
      case 'lost':
        return '💀 Défaite...';
      default:
        return '🎮 En cours';
    }
  };

  getGameStatusClass = () => {
    switch (this.state.gameStatus) {
      case 'won':
        return 'won';
      case 'lost':
        return 'lost';
      default:
        return '';
    }
  };

  render() {
    return (
      <div className="jeu-container">
        <header className="jeu-header">
          <h1>Jeu du Pendu</h1>
          <div className={`game-status ${this.getGameStatusClass()}`}>
            {this.getGameStatusMessage()}
          </div>
        </header>

        <div className="stats-container">
          <div className="stat">
            <span className="stat-label">Victoires:</span>
            <span className="stat-value">{this.state.victoires}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Essais:</span>
            <span className="stat-value">{this.state.essais}/{this.state.maxEssais}</span>
          </div>
        </div>

        <div className="game-area">
          <Pendu errorsCount={this.state.essais} />
          
          {this.state.currentWord && (
            <CurrentWord
              currentWord={this.state.currentWord}
              lettreUtilisee={this.state.lettreUtilisee}
            />
          )}
        </div>

        <div className="controls">
          <Clavier
            alphabet={this.state.alphabet}
            action={this.clickLetter}
            lettresUtilisees={this.state.lettreUtilisee}
          />

          <button 
            className="nouveau-jeu-btn"
            onClick={this.initGame}
          >
            🔄 Nouveau Jeu
          </button>
        </div>

        <div className="instructions">
          <p>Vous pouvez aussi utiliser votre clavier physique !</p>
          {this.state.gameStatus !== 'playing' && (
            <p>🔄 Appuyez sur Entrée pour un nouveau jeu</p>
          )}
        </div>

        {this.state.toast && (
          <Message
            message={this.state.toast.message}
            type={this.state.toast.type}
            onClose={this.hideToast}
          />
        )}
      </div>
    );
  }
}

export default Jeu;