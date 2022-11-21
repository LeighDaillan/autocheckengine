import Image from "next/image";
import DisplayCard from "../../components/Display-Card";

const Bridgestone = function ({ bridgestoneData }) {
  return (
    <>
      <Image
        src="https://cdn.shopify.com/s/files/1/0642/2600/1133/collections/Bridgestone-logo.jpg?v=1651706512&width=750"
        width="450"
        height="205"
        priority
        alt="Bridgestone Logo"
        className="mx-auto w-auto h-auto"
      />

      <main className="max-w-7xl mx-auto grid gap-5 grid-cols-4 mb-20">
        <DisplayCard
          // onClick={router.push(`/Tires/${item.id}`)}
          product={bridgestoneData}
        />
      </main>
    </>
  );
};

export default Bridgestone;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:4000/Tires");
  const data = await res.json();

  const bridgestoneData = data.Bridgestone;
  return {
    props: {
      bridgestoneData,
    },
  };
}
