interface Props {
    name: string;
    role: string;
    img: string;
}

export default function Collage(props: Props) {
  return (
    <div className="text-center">
      <div className="relative w-48 h-48 p-2 mx-auto md:w-56 md:h-56">
        <img src={props.img} className="border-b-black border-b-2 relative z-20 object-cover w-full h-full drop-shadow-[0_20px_53px_#ef444478]" alt="" />
        <div className="space-y-2">
          <div className="space-y-1 text-lg font-medium leading-6">
            <h3>{props.name}</h3>
            <p className="text-gray-500">{props.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
