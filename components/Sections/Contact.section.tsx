import type { NextComponentType } from "next";

import {
  BsSpotify,
  MdEmail,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "../Misc/Icons.collection";

import { Icon } from "../Misc/Icon.component";

const Contact: NextComponentType = () => {
  return (
    <div className="px-3 font-sen" id="contact">
      <p className="text-3xl font-bold text-white">Contact Me</p>

      <div className="my-8 flex flex-row justify-center gap-x-4">
        <Icon
          icon={<AiOutlineGithub />}
          url="https://github.com/codelikeagirl29"
        />

        <Icon
          icon={<AiOutlineTwitter />}
          url="https://twitter.com/dev_lindseyk"
        />

        <Icon icon={<MdEmail />} url="mailto:lindseykdev@outlook.com" />

        <Icon
          icon={<BsSpotify />}
          url="https://open.spotify.com/user/1290519664"
        />
      </div>
    </div>
  );
};

export default Contact;
