export default function MapBox() {
  return (
    <div className="w-full h-[400px] flex justify-center items-center p-6">
      <div className="w-full max-w-5xl h-full rounded-2xl shadow-lg overflow-hidden border border-gray-300">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.350059220427!2d90.41251821498144!3d23.810331384561807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c79ef1e2bdb1%3A0xf4b38e3c205b5b1f!2sDhaka%20City!5e0!3m2!1sen!2sbd!4v1639146789012!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
}
