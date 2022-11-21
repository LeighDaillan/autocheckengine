import DisplayCard from "../../../components/Display-Card";

const BreakFluid = function ({ BreakFluidData }) {
  return (
    <>
      <main className="max-w-7xl mx-auto">
        <h1 className="my-10 text-5xl font-bold">Break Fluid</h1>

        <section className="grid gap-5 grid-cols-4 mb-20">
          <DisplayCard product={BreakFluidData} />
        </section>
      </main>
    </>
  );
};

export default BreakFluid;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:4000/Maintenance");
  const data = await res.json();

  const BreakFluidData = data.Break.BreakFluid;
  return {
    props: {
      BreakFluidData,
    },
  };
}
