import Image from "next/image";
import AddToBasket from "../../../components/Add-Basket";

const BreakId = function ({ product }) {
  const item = product[0];

  return (
    <>
      <main className="grid grid-cols-2 max-w-7xl mx-auto mt-10 mb-20 px-10 py-5 gap-x-10">
        {/* Display image */}
        <section>
          <Image
            src={item.displayImage}
            width="500"
            height="350"
            className="mx-auto w-auto h-3/6"
            priority
            alt="Display Image"
          />
          <div>
            {item.images.length === 0 ? (
              <></>
            ) : (
              <div className="grid grid-cols-2 gap-10 mt-5 ">
                {item.images.map((photo) => {
                  return (
                    <Image
                      key={Math.random()}
                      priority
                      src={photo}
                      width="350"
                      height="350"
                      className="h-auto w-auto"
                      alt="Display Image"
                    />
                  );
                })}
              </div>
            )}
          </div>
        </section>
        {/* Display Description of the product */}
        <section className="px-10 py-14">
          {/* Shoe Name and Price */}
          <span className="text-xl text-red-600 italic">
            Sustainable Materials
          </span>
          <h2 className="text-3xl my-2">{item.name}</h2>
          <p className="text-2xl mt-5">
            ₱ {item.price.toLocaleString("en-US")}
          </p>

          {/* Description */}
          <p className="text-lg text-gray-700 leading-relaxed py-5 indent-10">
            {item.description}
          </p>

          {/* Add To Bag Button */}
          <div className="text-center my-5">
            <AddToBasket product={item} />
          </div>
        </section>
      </main>
    </>
  );
};

export default BreakId;

export async function getServerSideProps(context) {
  const { params } = context;
  const { breakId } = params;

  const res = await fetch("http://localhost:4000/Maintenance");
  const data = await res.json();

  let breaks;

  // Check if click event is from BREAK FLUID
  if (breakId.slice(0, 4) === "MBBF") {
    breaks = data.Break.BreakFluid.filter((items) => items.id === breakId);
  }

  // Check if click event is from BREAK PAD
  if (breakId.slice(0, 4) === "MBBP") {
    breaks = data.Break.BreakPad.filter((items) => items.id === breakId);
  }

  return {
    props: {
      product: breaks,
    },
  };
}
