export default function CardHero() {
  return (
    <section className="mt-32">
      <div className="bg-gradient-to-r from-indigo-700 via-blue-800 to-indigo-700 py-14">
        <h3 className="text-2xl tracking-widest text-white text-center">
          FEATURES
        </h3>
        <h1 className="mt-8 text-center text-5xl text-white font-bold">
          Our Features & Services.
        </h1>

        {/* <!-- Box --> */}
        <div className="md:flex md:justify-center md:space-x-8 md:px-14">
          {/* <!-- box-1 --> */}
          <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
            <div className="w-sm">
              <img
                className="w-64"
                src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/a17abde8d83650a582a28432/users-with-speech-bubbles-vector_53876-82250.jpg"
                alt=""
              />
              <div className="mt-4 text-green-600 text-center">
                <h1 className="text-xl font-bold">Communications</h1>
                <p className="mt-4 text-gray-600">
                  Pretium lectus quam id leo in vitae turpis. Mattis
                  pellentesque id nibh tortor id.
                </p>
                <button className="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200">
                  MORE
                </button>
              </div>
            </div>
          </div>

          {/* <!-- box-2 --> */}
          <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
            <div className="w-sm">
              <img
                className="w-64"
                src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/3b242447f922540fbe750cab/fdf.jpg"
                alt=""
              />
              <div className="mt-4 text-green-600 text-center">
                <h1 className="text-xl font-bold">Inspired Design</h1>
                <p className="mt-4 text-gray-600">
                  Nunc consequat interdum varius sit amet mattis vulputate enim
                  nulla. Risus feugiat.
                </p>
                <button className="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200">
                  MORE
                </button>
              </div>
            </div>
          </div>

          {/* <!-- box-3 --> */}
          <div className="mt-16 py-4 px-4 bg-whit w-72 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-110 transition duration-500 mx-auto md:mx-0">
            <div className="w-sm">
              <img
                className="w-64"
                src="https://images01.nicepage.com/c461c07a441a5d220e8feb1a/8cc47b39e719570b996d9879/dsds.jpg"
                alt=""
              />
              <div className="mt-4 text-green-600 text-center">
                <h1 className="text-xl font-bold">Happy Customers</h1>
                <p className="mt-4 text-gray-600">
                  Nisl purus in mollis nunc sed id semper. Rhoncus aenean vel
                  elit scelerisque mauris.
                </p>
                <button className="mt-8 mb-4 py-2 px-14 rounded-full bg-green-600 text-white tracking-widest hover:bg-green-500 transition duration-200">
                  MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
