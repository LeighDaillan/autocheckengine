import DisplayCard from "../../../components/Display-Card";

const COBRA = function ({ COBRAData }) {
  return (
    <>
      <main className="max-w-7xl mx-auto">
        <h1 className="my-10 mx-14 text-5xl font-bold">COBRA</h1>

        <section className="grid gap-5 mx-14 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-20">
          <DisplayCard product={COBRAData} />
        </section>
      </main>
    </>
  );
};

export default COBRA;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:4000/Parts-and-Accessories/");
  const data = await res.json();

  const COBRAData = data.CarLights.COBRA;
  return {
    props: {
      COBRAData,
    },
  };
}
