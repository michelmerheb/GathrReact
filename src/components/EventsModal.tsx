interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  image: string;
  location: string;
}

export default function EventsModal({
  isOpen,
  onClose,
  title,
  description,
  image,
  location,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-3xl"
        >
          X
        </button>
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-60 object-cover rounded-lg"
          />
        )}
        <div className="text-center p-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <p>{description}</p>
          <p className="text-sm mt-2">
            <strong>Location:</strong> {location}
          </p>
          <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors">
            Tickets
          </button>
        </div>
      </div>
    </div>
  );
}
