import Image from "next/image";

export default function Details({ details }: any) {
  return (
    <div className="text-gray-500 inline-block mb-2 mt-2">
      <div className="inline-block justify-center items-center flex-row">
        <div className=" mr-2 inline">
          <Image
            className="rounded-full"
            src={details.authorImg}
            objectFit="contain"
            width={30}
            height={30}
          />
        </div>
        <div className="inline">
          <span className="text-lg relative -top-1">{details.author}</span>
        </div>
      </div>
    </div>
  );
}
