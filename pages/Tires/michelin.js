import Image from "next/image";
import DisplayCard from "../../components/Display-Card";

const Michelin = function ({ MichelinData }) {
  return (
    <>
      <Image
        src="https://cdn.shopify.com/s/files/1/0642/2600/1133/collections/Michelin-logo.jpg?v=1651709428&width=750"
        width="650"
        height="105"
        priority
        alt="Michelin Logo"
        className="mx-14 md:mx-auto my-8 w-auto h-38"
      />

      <main className="max-w-7xl mx-14 md:mx-auto grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-20">
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
