import DisplayCard from "../../../components/Display-Card";

const HELLA = function ({ HELLAData }) {
  return (
    <>
      <main className="max-w-7xl mx-auto">
        <h1 className="my-10 text-5xl font-bold">HELLA</h1>

        <section className="grid gap-5 grid-cols-4 mb-20">
          <DisplayCard product={HELLAData} />
        </section>
      </main>
    </>
  );
};

export default HELLA;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:4000/Parts-and-Accessories/");
  const data = await res.json();

  const HELLAData = data.CarLights.HELLA;
  return {
    props: {
      HELLAData,
    },
  };
}
