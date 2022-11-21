import DisplayCard from "../../../components/Display-Card";

const GearOil = function ({ GearOilData }) {
  return (
    <>
      <main className="max-w-7xl mx-auto">
        <h1 className="my-10 text-5xl font-bold">Gear Oil</h1>

        <section className="grid gap-5 grid-cols-4 mb-20">
          <DisplayCard product={GearOilData} />
        </section>
      </main>
    </>
  );
};

export default GearOil;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:4000/Maintenance");
  const data = await res.json();

  const GearOilData = data.Engine.GearOil;
  return {
    props: {
      GearOilData,
    },
  };
}
