import Text from "./Text";

export default function SchoolGallery() {
  const images = [
    "slider1.jpeg",
    "slider1.jpeg",
    "slider1.jpeg",
    "slider1.jpeg",
    "slider1.jpeg",
    "slider1.jpeg",
    "slider1.jpeg",
    "slider1.jpeg",
    "slider1.jpeg",
    "slider1.jpeg",
  ];

  return (
    <div className="w-full overflow-hidden py-10">
      <Text text1="School" text2="Gallery" />

      <div className="relative w-full mt-4 overflow-hidden">
        {/* Track */}
        <div className="flex gap-6 animate-marquee">
          {[...images, ...images].map((src, i) => (
            <div
              key={i}
              className="min-w-[300px] h-[180px] flex-shrink-0 rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={src}
                alt={`gallery-${i}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
