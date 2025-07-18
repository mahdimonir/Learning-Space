/* eslint-disable react/prop-types */
export function ColorButton({ bgColor, onClick }) {
  return (
    <button
      onClick={onClick}
      className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
      style={{ backgroundColor: bgColor }}
    >
      {bgColor.charAt(0).toUpperCase() + bgColor.slice(1)}
    </button>
  );
}
