import { Post } from "../models/Post";
import Button from "./Button";
import ClockIcon from "./icons/ClockIcon";
import TagIcon from "./icons/TagIcon";

type Props = {
  post: Post;
};

export default function PostCard({ post }: Props) {
  return (
    <li className="z-10">
      <div className="bg-cardBackground border box-border border-cardBorderColor rounded-[10px] w-[287px] h-[433px] p-1 flex flex-col justify-between pb-5">
        <div className="aspect-w-3 aspect-h-2">
          <img
            className="object-cover shadow-lg rounded-lg"
            src={`/assets/images/posts/${post.imageName}`}
            alt=""
          />
        </div>
        <div className="space-y-2 mt-5 px-3 self-start">
          <div className="text-base md:text-xl leading-7 font-semibold space-y-1 overflow-hidden text-ellipsis flex-nowrap">
            <h3 className="text-heading">{post.title}</h3>
          </div>
          <div
            className="flex w-full gap-2 text-paragraphLight text-sm"
            style={{ marginTop: 20 }}
          >
            <div className="flex gap-1">
              <ClockIcon />
              {post.time}
            </div>
            <div className="flex gap-1">
              <TagIcon />
              {post.tag}
            </div>
            <div className="flex gap-1">
              <img src="/assets/images/users/user_1.png" alt="" />
              {post.by}
            </div>
          </div>
        </div>
        <div className="flex w-full justify-center mt-8">
          <Button className="w-[205px] py-[10px] text-white text-base">
            Read More
          </Button>
        </div>
      </div>
    </li>
  );
}
