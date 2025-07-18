import { useState } from "react";
import { ColorButton } from "./components/ColorButton";

function App() {
  const [color, setColor] = useState("black");

  const colors = [
    "red",
    "green",
    "blue",
    "orange",
    "purple",
    "olive",
    "gray",
    "pink",
    "lavender",
    "white",
  ];

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-gray-900 px-3 py-2 rounded-3xl">
          {colors.map((bgColor) => (
            <ColorButton
              key={bgColor}
              bgColor={bgColor}
              onClick={() => setColor(bgColor)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
