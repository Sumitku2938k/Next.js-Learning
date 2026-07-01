import Image from "next/image";

export default function Home() {
  return (
    <div className="container my-5 size-80 bg-red-300 relative">
      <Image className="mx-auto object-contain" fill={true} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR3ftWUCeSHBN1U9mja_MRIbcTu6yBHDSbFbcAtJEQ4A&s=10" alt="Slider Image" />
    </div>
  );
}
