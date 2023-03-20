import { useRouter } from "next/router";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon, LinkedinIcon, TwitterIcon, WhatsappIcon
} from "react-share";
import { useState } from "react";
import { ClipLoader } from "react-spinners";
import { Icon } from "@iconify/react";
function ShareComponent() {
  const [copying, setcopying] = useState(false)
  const router = useRouter()
  let url = process.env.NEXT_PUBLIC_FRONT_END_URL + router.asPath


  const copy = (url) => {
    setcopying(true)
    navigator.clipboard.writeText(url).then(() => {

      setTimeout(function () { setcopying(false); }, 500);
    }).catch(() => {
      setTimeout(function () { setcopying(false); }, 500);
    })
  }
  return (<>
    <div className="dropdown">
      <div className="dropdown " role="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <Icon icon="material-symbols:share-outline" width={25} />
      </div>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="#">
          <FacebookShareButton url={url} >
            <FacebookIcon size={32} round={true} />
          </FacebookShareButton>
          Facebook
        </a>
        <a className="dropdown-item" href="#">
          <LinkedinShareButton url={url} >
            {/* 
title (string): Title of the shared page
summary (string): Description of the shared page
source (string): Source of the content (e.g. your website or application name)
 */}
            <LinkedinIcon size={32} round={true} />
            {/* 
quote (string): A quote to be shared along with the link.
hashtag (string): A hashtag specified by the developer to be added to the shared content. People will still have the opportunity to remove this hashtag in the dialog. The hashtag should include the hash symbol. */}
          </LinkedinShareButton>
          Linkedin
        </a>
        <a className="dropdown-item" href="#">



          <TwitterShareButton url={url} >
            {/* 
title (string): Title of the shared page
via: (string)
hashtags (array): Hashtags
related (array): Accounts to recommend following
 */}
            <TwitterIcon size={32} round={true} />
          </TwitterShareButton>
          Twitter
        </a>

        <a className="dropdown-item" href="#">


          <WhatsappShareButton url={url} >
            {/* 
title (string): Title of the shared page
separator (string, default=" "): Separates title from the url
 */}

            <WhatsappIcon size={32} round={true} />
          </WhatsappShareButton>
          WhatsApp

        </a>
        <a className="dropdown-item" href="#">

          <p onClick={() => copy(url)}  >
            {copying ? (<>
              <ClipLoader color="gray" size={20} />
            </>) : (<>
              <Icon icon="ph:copy-simple" width={25} />
            </>)}
            Copy Link
          </p>
        </a>
      </div>
    </div>
  </>)
}




export default ShareComponent;