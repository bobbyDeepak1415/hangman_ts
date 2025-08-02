import styles from "./Keyboard.module.css";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyboardProps = {
  activeletters:string[];
  inActiveLetters:string[];
  addGuessedLetter:(letter:string)=>void
};

export default function Keyboard({activeletters,inActiveLetters,addGuessedLetter}:KeyboardProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
      }}
    >
      {KEYS.map((key) => {

const isActive=activeletters.includes(key)
const isInActive=inActiveLetters.includes(key)

        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`${styles} ${isActive ? styles.active : ""}
          ${isInActive ? styles.inActive : ""}
          `}
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
