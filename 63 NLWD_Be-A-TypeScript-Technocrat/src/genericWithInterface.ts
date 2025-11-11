interface Developer<X, Y = null> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
  };
  technology: X;
  experiance?: Y;
}

interface JuniorDev {
  stack: string;
  language: string[];
}
interface MidDev {
  stack: string;
  language: string[];
  libraryAndFramework: string[];
}

const poorDeveloper: Developer<JuniorDev> = {
  name: "Mr. Poor",
  salary: 15000,
  device: {
    brand: "acer",
    model: "Aspire E5-571",
  },
  technology: {
    stack: "MERN",
    language: ["JavaScript"],
  },
};
const richDeveloper: Developer<MidDev, string> = {
  name: "Mr. Rich",
  salary: 25000,
  device: {
    brand: "HP",
    model: "Elitebook 840 G6",
  },
  technology: {
    stack: "MERN",
    language: ["JavaScript", "GoLang"],
    libraryAndFramework: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Next.js",
      "Echo",
    ],
  },
  experiance: "2 years",
};
