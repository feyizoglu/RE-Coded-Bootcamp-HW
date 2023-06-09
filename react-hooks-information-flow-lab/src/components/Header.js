export default function Header({ onChangeHandle, isDarkMode }) {
  return (
    <>
      <header>
        <h2>Shopster</h2>
        <button onClick={onChangeHandle}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
    </>
  );
}
