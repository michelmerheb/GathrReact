export interface PostProps {
    _id?: string;
    image_url?: string | null;
    title: string;
    description: string;
  }
  
  export default function PostContainer({
    title,
    description,
    image_url,
  }: PostProps) {
    
    return (
        <div className='items-center p-20 mv-10 bg-white rounded-md'>
          {image_url && (
            <img src={image_url} className='w-3/5 h-2/6' />
          )}
          <div className="flex-1">
            <h2 className="py-5 text-xl text-custom-purple font-bold">{title}</h2>
            <p className="text-lg text-stone-500">{description}</p>
          </div>
        </div>
      );
    }
