import { BackgroundImg } from "@/assets";

function Background() {
  return (
    <img
      src={BackgroundImg}
      alt=""
      className="fixed inset-0 -z-10 h-full w-full object-cover opacity-25"
    />
  );
}

export default Background;
