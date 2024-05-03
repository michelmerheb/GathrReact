interface EventsProps {
  id: string;
  title: string;
  description: string;
  image: string;
  onClick: () => void;
}

export default function EventsComponent({
  title,
  description,
  image,
  onClick,
}: EventsProps) {
  return (
    <div
      onClick={onClick}
      className="bg-black bg-opacity-50 m-4 rounded-2xl flex flex-col items-center justify-center p-5 cursor-pointer"
    >
      {image ? (
        <img
          src={image}
          alt={title}
          className="w-full md:w-3/4 object-contain h-60 rounded-lg"
        />
      ) : (
        <p className="text-white">No Image To Show</p>
      )}
      <div className="text-center mt-4">
        <h3 className="text-white text-xl font-bold">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
}
