import React, { Component } from "react";
import "./Hangman.css";
import img0 from "./0.jpg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";
import shortid from "shortid";
import { randomWord } from "./words";

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6]
  };

  constructor(props) {
    super(props);
    this.state = {
      nWrong: 0,
      guessed: new Set(),
      guessedWord: "",
      answer: shortid.generate(),
      gameLost: 0,
      gameWon: 0
    };
    this.handleGuess = this.handleGuess.bind(this);
    this.clickreset = this.clickreset.bind(this);
  }

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    let finalString = this.state.answer
      .split("")
      .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));

    // this.setState(() => {
    //   return {
    //     guessedWord: finalString
    //   };
    // });

    return finalString;
  }

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess(evt) {
    let ltr = evt.target.value;

    this.setState(st => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
    }));

    // check if guesses are over
    if (this.state.guessed === this.state.answer) {
      this.setState(st => ({
        gameWon: st.gameWon + 1
      }));
    } else if (this.state.nWrong === this.props.maxWrong - 1) {
      this.setState(st => ({
        gameLost: st.gameLost + 1
      }));
    }

    // if guesses are over, remove the generate buttons
  }

  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
    if (this.state.gameLost == 0) {
      return "abcdefghijklmnopqrstuvwxyz".split("").map(ltr => (
        <button
          key={shortid.generate()}
          value={ltr}
          onClick={this.handleGuess}
          disabled={this.state.guessed.has(ltr)}
        >
          {ltr}
        </button>
      ));
    } else {
      return (
        <div>
          <h4>You lost! The correct answer is:</h4>
          <h1>{this.state.answer}</h1>
          <button className="reset-button" onClick={this.clickreset}>
            Restart
          </button>
        </div>
      );
    }
  }

  clickreset() {
    this.setState(st => ({
      nWrong: 0,
      guessed: new Set(),
      guessedWord: "",
      answer: randomWord(),
      gameLost: 0,
      gameWon: 0
    }));

    this.generateButtons();
  }

  /** render: render game */
  render() {
    let altText = this.state.nWrong + " wrong guess";
    return (
      <div className="Hangman">
        <h1>Hangman</h1>
        <img src={this.props.images[this.state.nWrong]} alt={altText} />
        <p>Number wrong: {this.state.nWrong}/6</p>
        <p className="Hangman-word">{this.guessedWord()}</p>

        {/* check if gameLost or gameWon*/}
        {/* update state accordingly*/}

        <p className="Hangman-btns">{this.generateButtons()}</p>
      </div>
    );
  }
}

export default Hangman;
