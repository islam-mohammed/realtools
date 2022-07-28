import { useEffect, useState } from "react";
import { getPosts } from "../../dataService";
import { Post } from "../../models/Post";
import Button from "../Button";
import PostCard from "../PostCard";

export default function Learning() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const getAsyncPosts = async () => {
      const list = await getPosts();
      setPosts(list);
    };
    getAsyncPosts();
  }, []);
  return (
    <div className="w-full md:-mt-[86px] p-24 px-4 sm:px-6 lg:px-8 relative lg:rounded-tl-[300px] bg-primary">
      <img
        src="/assets/images/bg_4.webp"
        alt=""
        className="absolute top-36 opacity-60 left-0"
      />

      <img
        src="/assets/images/shapes/shape_2.webp"
        alt=""
        className="hidden md:block absolute right-0 top-40"
      />
      <img
        src="/assets/images/shapes/shape_3.webp"
        alt=""
        className="hidden md:block absolute left-0 top-[641px]"
      />
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl leading-normal font-semibold md:text-4xl md:leading-normal   text-sectionDarkTitle">
          Learn Everything About Buying, Selling, and Operating a Self Storage
        </h2>
        <p className="mt-5 mx-auto text-lg leading-[30px] text-paragraphDark max-w-lg text-center">
          Learn about literally anything to know about Selling or Buying a Self
          Storage
        </p>
      </div>
      <div className="mx-auto mt-9 md:mt-12 lg:mt-[60px]">
        <ul className="w-full mx-auto flex flex-wrap gap-7 justify-center">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </ul>
        <div className="mt-8 md:mt-14 flex justify-center">
          <Button
            varaity="cta"
            className="text-paragraphLight z-10 p-7 font-semibold text-xl  w-[364px]"
          >
            Explore The Learning Section
          </Button>
        </div>
      </div>
    </div>
  );
}
