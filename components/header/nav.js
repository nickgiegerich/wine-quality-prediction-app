export default function Nav() {
  return (
    <div className="">
      <nav className="fixed top-0 overflow-hidden w-full z-50 bg-gray-700 shadow-2xl p-5">
        <div className="w-full h-full flex justify-evenly flex-wrap items-center justify-items-center text-white font-bold uppercase text-sm lg:text-xl">
          <a
            className="underline transition transform hover:scale-110 hover:text-indigo-200"
            href="#top"
            onClick={(e) => {
              let top = document.getElementById("top");
              e.preventDefault();
              top && top.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Home
          </a>
          <a
            className="underline transition transform hover:scale-110 hover:text-indigo-200"
            href="#overview"
            onClick={(e) => {
              let overview = document.getElementById("overview");
              e.preventDefault();
              overview && overview.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Data Overview
          </a>
          <a
            className="underline transition transform hover:scale-110 hover:text-indigo-200"
            href="#insights"
            onClick={(e) => {
              let insights = document.getElementById("insights");
              e.preventDefault();
              insights && insights.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Data Insights
          </a>
          <a
            className="underline transition transform hover:scale-110 hover:text-indigo-200"
            href="#pdtool"
            onClick={(e) => {
              let pdtool = document.getElementById("pdtool");
              e.preventDefault();
              pdtool && pdtool.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Prediction Tool
          </a>
        </div>
      </nav>
    </div>
  );
}
