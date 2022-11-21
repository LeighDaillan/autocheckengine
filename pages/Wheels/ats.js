import Image from "next/image";
import DisplayCard from "../../components/Display-Card";

const ATS = function ({ ATSData }) {
  return (
    <>
      <Image
        src="https://cdn.shopify.com/s/files/1/0642/2600/1133/collections/Ats-logo.svg_76ea1d80-1e53-4255-a3ed-8963aea440ad.png?v=1651594714&width=750"
        width="550"
        height="205"
        priority
        alt="Bridgestone Logo"
        className="mx-auto my-8 h-auto w-auto"
      />

      <main className="max-w-7xl mx-auto grid gap-5 grid-cols-4 mb-20">
        <DisplayCard product={ATSData} />
      </main>
    </>
  );
};

export default ATS;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:4000/Wheels");
  const data = await res.json();

  const ATSData = data.ATS;
  return {
    props: {
      ATSData,
    },
  };
}
