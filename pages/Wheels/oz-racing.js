import Image from "next/image";
import DisplayCard from "../../components/Display-Card";

const OZRacing = function ({ OZRacingData }) {
  return (
    <>
      <Image
        src="https://cdn.shopify.com/s/files/1/0642/2600/1133/collections/oz_italiancompany_logo.jpg?v=1651705347"
        width="500"
        height="168"
        priority
        alt="Bridgestone Logo"
        className="mx-auto my-8 h-auto w-auto"
      />

      <main className="max-w-7xl mx-auto grid gap-5 grid-cols-4 mb-20">
        <DisplayCard product={OZRacingData} />
      </main>
    </>
  );
};

export default OZRacing;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:4000/Wheels");
  const data = await res.json();

  const OZRacingData = data.OZRacing;
  return {
    props: {
      OZRacingData,
    },
  };
}
