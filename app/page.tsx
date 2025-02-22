import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <div className="flex flex-col gap-6 bg-black py-4">
        <Footer />
      </div>
    </div>
  );
}
