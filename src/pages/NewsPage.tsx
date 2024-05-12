import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../components/Header";
import FooterComponent from "../components/Footer";
import PostComponent from "../components/PostComponent";
import { fetchPosts, clearError } from "../redux/Slices/PostsSlice";
import { RootState, AppDispatch } from "../redux/store";

export default function NewsPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { posts, loading, error, pagination } = useSelector(
    (state: RootState) => state.posts
  );

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 25;

  useEffect(() => {
    document.title = "Gathr- News";
  });

  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchPosts({ page: currentPage, pageSize }));
  }, [currentPage, pageSize, dispatch]);

  useEffect(() => {
    if (posts.length > 0) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [posts]);

  const handleNextPage = () => {
    if (pagination?.hasNextPage) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (pagination?.hasPrevPage) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="min-w-screen min-h-screen overflow-hidden bg-gradient-to-bl from-purple-900 via-purple-500 to-rose-900">
      <Header />
      <h1 className="flex text-center justify-center mt-10 text-white font-bold text-3xl">
        GATHR for the Top News of Today
      </h1>
      <div className="max-w-5xl mx-auto px-4 py-8">
        {loading && (
          <div className="flex justify-center items-center h-screen">
            <div
              className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
              role="status"
            ></div>
          </div>
        )}
        {error && <div className="text-red-500">{error}</div>}
        {posts.map((post, index) => (
          <PostComponent key={index} {...post} />
        ))}
        <div className="flex justify-between my-4">
          <button
            onClick={handlePreviousPage}
            disabled={!pagination?.hasPrevPage || loading}
            className="bg-purple-800 text-white px-4 py-2 rounded hover:bg-purple-400 disabled:opacity-50 transition duration-300"
          >
            Previous
          </button>
          <h3 className="text-white text-sm">
            Page {currentPage} of {pagination?.totalPages}
          </h3>
          <button
            onClick={handleNextPage}
            disabled={!pagination?.hasNextPage || loading}
            className="bg-purple-800 text-white px-4 py-2 rounded hover:bg-purple-400 disabled:opacity-50 transition duration-300"
          >
            Next
          </button>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}
