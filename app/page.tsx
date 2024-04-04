import InputStateComponent from "@/components/client-side-components/InputStateComponent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center w-screen align-middle justify-center p-24">
      <div className="flex justify-center items-center mb-4">
        <p className="font-roboto font-mono text-center text-green-500 text-lg text-wrap sm:max-w-[80%]">Unlock Identity Insights: Discover Age, Gender, and Nationality with Just a Name.</p>
      </div>
      <InputStateComponent />
    </main >
  );
}
