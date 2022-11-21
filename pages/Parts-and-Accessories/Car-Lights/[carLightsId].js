import Image from "next/image";

const carLightsId = function ({ product }) {
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
            className="mx-auto w-auto h-4/6"
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
            <button className="border  hover:text-black hover:border-black hover:border-4 transform transition duration-500 w-full py-5 rounded-sm text-xl ">
              Add to Basket
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default carLightsId;

export async function getServerSideProps(context) {
  const { params } = context;
  const { carLightsId } = params;

  const res = await fetch("http://localhost:4000/Parts-and-Accessories/");
  const data = await res.json();

  let carLights;

  // Check if click event is from CARMATE Light
  if (carLightsId.slice(0, 5) === "PACCL") {
    carLights = data.CarLights.CARMATELight.filter(
      (items) => items.id === carLightsId
    );
  }

  // Check if click event is from HELLA
  if (carLightsId.slice(0, 5) === "PACCH") {
    carLights = data.CarLights.HELLA.filter(
      (items) => items.id === carLightsId
    );
  }

  // Check if click event is from COBRA
  if (carLightsId.slice(0, 5) === "PACCO") {
    carLights = data.CarLights.COBRA.filter(
      (items) => items.id === carLightsId
    );
  }

  return {
    props: {
      product: carLights,
    },
  };
}
