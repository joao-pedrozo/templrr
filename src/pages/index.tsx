import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const techs = [
  {
    name: "Next.js",
    description: "Next Framework",
    logo: "/techs/nextjs.png",
  },
  {
    name: "React.js",
    description: "React Framework",
    logo: "/techs/reactjs.png",
  },
  {
    name: "Node.js",
    description: "Node.js",
    logo: "/techs/nodejs.png",
  },
];

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center p-24 ${inter.className}`}
    >
      <div
        className="w-[750px] h-[350px] bg-red-600 py-6 px-12"
        onClick={() => console.log(123)}
      >
        <div onClick={(event) => event.stopPropagation()}>
          <span className="text-4xl" role="textbox" contentEditable>
            Full-Stack
          </span>
          <div className="flex">
            <span className="text-4xl mr-2" role="textbox" contentEditable>
              Airbnb
            </span>
            <span className="text-4xl" role="textbox" contentEditable>
              Clone
            </span>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-3xl font-semibold mb-4">Main technology </h2>
        <ul className="flex gap-4">
          {techs.map((tech) => (
            <li
              key={tech.name}
              className="flex flex-col items-center bg-zinc-100 px-24 py-2 cursor-pointer"
            >
              <div className="w-[80px] h-[80px] flex items-center justify-center">
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={60}
                  height={60}
                  className="flex flex-shrink-0"
                />
              </div>
              <div className="">
                <h3 className="text-xl font-semibold">{tech.name}</h3>
              </div>
            </li>
          ))}
        </ul>
        <h2 className="text-3xl font-semibold my-4">Secondary technologies </h2>
        <ul className="flex gap-4">
          {techs.map((tech) => (
            <li
              key={tech.name}
              className="flex flex-col items-center bg-zinc-100 px-24 py-2 cursor-pointer"
            >
              <div className="w-[80px] h-[80px] flex items-center justify-center">
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={60}
                  height={60}
                  className="flex flex-shrink-0"
                />
              </div>
              <div className="">
                <h3 className="text-xl font-semibold">{tech.name}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
