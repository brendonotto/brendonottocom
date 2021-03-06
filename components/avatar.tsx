import Image from "next/image";

type Props = {
  name: string;
  picture: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center">
      <Image
        width={48}
        height={48}
        src={picture}
        className="w-12 h-12 rounded-full mr-4"
        alt={name}
      />
      <div className="ml-2 text-xl font-bold">{name}</div>
    </div>
  );
};

export default Avatar;
