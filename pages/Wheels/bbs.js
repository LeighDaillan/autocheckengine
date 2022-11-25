import Image from "next/image";
import DisplayCard from "../../components/Display-Card";

const BBS = function ({ BBSData }) {
  return (
    <>
      <Image
        src="https://cdn.shopify.com/s/files/1/0642/2600/1133/collections/download.png?v=1651702560"
        width="300"
        height="168"
        priority
        alt="Bridgestone Logo"
        className="mx-14 sm:mx-auto my-8 h-auto w-auto"
      />

      <main className="max-w-7xl mx-14 lg:mx-auto grid gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-20">
        <DisplayCard product={BBSData} />
      </main>
    </>
  );
};

export default BBS;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:4000/Wheels");
  const data = await res.json();

  const BBSData = data.BBS;
  return {
    props: {
      BBSData,
    },
  };
}
