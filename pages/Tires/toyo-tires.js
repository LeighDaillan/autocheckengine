import Image from "next/image";
import DisplayCard from "../../components/Display-Card";

const ToyoTires = function ({ ToyoTiresData }) {
  return (
    <>
      <Image
        src="https://cdn.shopify.com/s/files/1/0642/2600/1133/collections/download_d3909865-e430-4af7-8f78-55069efa4992.png?v=1651710546"
        width="450"
        height="205"
        priority
        alt="Bridgestone Logo"
        className="mx-14 md:mx-auto my-8 w-auto h-auto"
      />

      <main className="max-w-7xl mx-14 md:mx-auto grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-20">
        <DisplayCard product={ToyoTiresData} />
      </main>
    </>
  );
};

export default ToyoTires;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:4000/Tires");
  const data = await res.json();

  const ToyoTiresData = data.ToyoTires;
  return {
    props: {
      ToyoTiresData,
    },
  };
}
