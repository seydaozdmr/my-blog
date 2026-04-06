export default function Home() {
  return (
    <main>
      <section className="relative h-screen">
        <img
          src="/tree.jpg"
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl font-bold mb-4">
            Antalya'nın En Güvenilir Ağaç Budama Uzmanları
          </h1>

          <p className="mb-6 text-lg">
            Palmiye Budama • Ağaç Kesimi • Acil Müdahale
          </p>

          <button className="bg-green-700 px-6 py-3 rounded-lg">
            Ücretsiz Teklif Al
          </button>
        </div>
      </section>
    </main>
  );
}
