import Image from "next/image";

const Banner = () => {
  return (
    <div className="h-[250px] bg-black flex items-center justify-center">
      <div className="h-[137px] relative w-[65%]  h-full">
        <Image 
          src={"/sby33.jpg"} 
          layout="fill" 
          objectFit="cover" 
          objectPosition="center" 
          alt=""
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Banner;
