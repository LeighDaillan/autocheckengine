import DisplayCard from "../../../components/Display-Card";

const BreakPad = function ({ BreakPadData }) {
  return (
    <>
      <main className="max-w-7xl mx-auto">
        <h1 className="my-10 text-5xl font-bold">Break Pad</h1>

        <section className="grid gap-5 grid-cols-4 mb-20">
          <DisplayCard product={BreakPadData} />
        </section>
      </main>
    </>
  );
};

export default BreakPad;

export async function getServerSideProps() {
  const res = await fetch("http://localhost:4000/Maintenance");
  const data = await res.json();

  const BreakPadData = data.Break.BreakPad;
  return {
    props: {
      BreakPadData,
    },
  };
}
