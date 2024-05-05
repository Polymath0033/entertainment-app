import { InputSearch } from "../components/SearchInput";
import { TrendingList } from "../components/TrendingList";
import { MovieList } from "../components/Card";
import { useSelector } from "react-redux";
import { Movie } from "../types/data";
export default function Home() {
  const data = useSelector(
    (state: { data: { data: Movie[] } }) => state.data.data
  );
  console.log(data);
  return (
    <>
      <InputSearch />
      <article>
        <h1 className="!tracking-[0.5] text-[30px] mb-2 font-normal text-white">
          Trending
        </h1>
        <div className="overflow-x-scroll mt-2 no-scrollbar w-full">
          <ul className="flex gap-8 w-max">
            {data.map(
              (movie, i) =>
                movie.isTrending && <TrendingList key={i} movie={movie} />
            )}
            {/* {[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
              <TrendingList key={i} />
            ))} */}
          </ul>
        </div>
      </article>
      <section className="mt-4 pr-8">
        <h1 className="!tracking-[0.5] mb-4 text-[30px] font-normal text-white">
          Recommended for you
        </h1>
        <ul
          className="grid gap-6 grid-cols-[repeat(auto-fit,_minmax(124px,_1fr))] 
        sm:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] 
        md:grid-cols-[repeat(auto-fit,_minmax(260px,_1fr))]"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
            <MovieList key={i} />
          ))}
        </ul>
      </section>
    </>
  );
}
