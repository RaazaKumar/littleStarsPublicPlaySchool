import About from "../Components/About";
import Message_From_Dir from "../Components/Message_From_Dir";
import SchoolGallery from "../Components/SchoolGallery";

export default function AboutUs() {
  return (
    <>
      <div className="mt-[11.128rem] md:mt-[8rem] lg:mt-[8rem]">
        <About />
        <SchoolGallery />
        <Message_From_Dir />
      </div>
    </>
  );
}
