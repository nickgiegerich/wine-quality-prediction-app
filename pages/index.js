import Head from "next/head";
import Image from "next/image";
import "tailwindcss/tailwind.css";
import { FormComponent } from "../components/form/form_component";
import Header from "../components/header";
import Nav from "../components/header/nav";
import Plots from "../components/plots";
import DescriptiveTable from "../components/table";

export default function Home() {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <main className="wrapper">
        <div id="top">
          <Header />
        </div>
        <div id="overview" className="pt-40 -mt-40"></div>
        <div>
          <DescriptiveTable />
        </div>
        <div id="insights" className="pt-40 -mt-40"></div>
        <div>
          <Plots />
        </div>
        <div id="pdtool" className="pt-40 -mt-40"></div>
        <div>
          <FormComponent />
        </div>
      </main>
    </div>
  );
}
