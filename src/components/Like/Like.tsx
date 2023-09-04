import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}
const Like = ({ onClick }: Props) => {
  const [liked, setLiked] = useState(false);

  function Toggle() {
    setLiked(!liked);
    onClick();
  }
  if (liked) return <AiFillHeart color="#a891d3" size={60} onClick={Toggle} />;
  return <AiOutlineHeart color="#000000" size={60} onClick={Toggle} />;
};

export default Like;
