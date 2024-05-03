export interface PostProps {
  _id?: string;
  image_url?: string | null;
  title: string;
  description: string;
}

const PostComponent = ({ title, description, image_url }: PostProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 m-6">
      {image_url && (
        <img
          src={image_url}
          alt="Post"
          className="w-full h-full object-cover rounded-lg"
        />
      )}
      <div className="mt-4">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default PostComponent;
