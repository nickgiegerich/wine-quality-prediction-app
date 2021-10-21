import Table from "./table";

export default function DescriptiveTable() {
  return (
    <div className="border border-gray-900 rounded-2xl shadow-lg m-5 bg-white ">
      <div className="flex flex-col flex-wrap justify-evenly">
        <div className="font-thin text-3xl text-center pt-2">
          Data Overview
        </div>
        <div className="font-extralight text-xl text-center pt-2 pb-10">
          below is a descriptive table of our data set
        </div>
      </div>
      <div className="pb-4">
        <Table />
      </div>
    </div>
  );
}
