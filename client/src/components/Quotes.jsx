const quotes = [
  "Your career is your GPS to success.",
  "Skills shape your future.",
  "Dream big. Build bigger.",
  "Growth begins with learning.",
];

const Quotes = () => {
  return (
    <section className="max-w-6xl mx-auto py-20 px-5">

      <div className="grid md:grid-cols-2 gap-6">

        {quotes.map((quote, index) => (

          <div
            key={index}
            className="bg-card border border-slate-700 p-6 rounded-2xl hover:border-primary duration-300"
          >
            <p className="text-xl text-gray-300">
              {quote}
            </p>
          </div>

        ))}

      </div>

    </section>
  );
};

export default Quotes;