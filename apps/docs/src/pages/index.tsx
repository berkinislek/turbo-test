import Head from "next/head";
import { Button, CounterFromUi } from "ui";
import { Counter } from "../components/Counter";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Jotai Shared State - Turborepo Example</title>
      </Head>

      <main className="m-auto w-auto text-white">
        <div className="flex-col mx-auto mt-5 max-w-xl sm:flex sm:justify-center md:mt-8">
          <CounterFromUi/>
          <Counter/>
          <br/>
          <Button label={"Increase Counter"} mode={"increase"} onClick={() => console.log("Increase Button Clicked")}/>
          <Button label={"Decrease Counter"} mode={"decrease"} onClick={() => console.log("Decrease Button Clicked")}/>
          <Button label={"Reset Counter"} mode={"reset"} onClick={() => console.log("Reset Button Clicked")}/>
        </div>
      </main>
    </div>
  );
}
