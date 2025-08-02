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
  activeletters: string[];
  inActiveLetters: string[];
  addGuessedLetter: (letter: string) => void;
  disabled?:boolean
};

export default function Keyboard({
  activeletters,
  inActiveLetters,
  addGuessedLetter,
  disabled=false
}: KeyboardProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(75px, 1fr))",
        gap: ".5rem",
      }}
    >
      {KEYS.map((key) => {
        const isActive = activeletters.includes(key);
        const isInActive = inActiveLetters.includes(key);

        return (
          <button
            disabled={isInActive || isActive || disabled}
            onClick={() => addGuessedLetter(key)}
            className={`${styles.btn} ${isActive ? styles.active : ""}
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
