import Image from "next/image";
import DisplayCard from "../../components/Display-Card";

const Michelin = function ({ MichelinData }) {
  return (
    <>
      <Image
        src="https://cdn.shopify.com/s/files/1/0642/2600/1133/collections/Michelin-logo.jpg?v=1651709428&width=750"
        width="750"
        height="205"
        priority
        alt="Michelin Logo"
        className="mx-auto my-8 w-auto h-48"
      />

      <main className="max-w-7xl mx-auto grid gap-5 grid-cols-4 mb-20">
        <DisplayCard product={MichelinData} />
      </main>
    </>
  );
};

export default Michelin;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:4000/Tires");
  const data = await res.json();

  const MichelinData = data.Michelin;
  return {
    props: {
      MichelinData,
    },
  };
}
