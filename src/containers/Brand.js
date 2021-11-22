import google from '../assets/google.png';
import slack from '../assets/slack.png';
import shopify from '../assets/shopify.png';
import dropbox from '../assets/dropbox.png';
import atlassian from '../assets/atlassian.png';

const Brand = () => {
   return (
      <div className="flex flex-col lg:flex-row items-center justify-center space-ylg:space-x-8 mb-4 flex-wrap">
         <img src={google} alt="google" style={{minWidth:'100px', maxWidth: '140px'}}  className="mt-2"/>
         <img src={slack} alt="slack" style={{minWidth:'100px', maxWidth: '140px'}}  className="mt-2"/>
         <img src={shopify} alt="shopify" style={{minWidth:'100px', maxWidth:'140px'}}  className="mt-2"/>
         <img src={dropbox} alt="dropbox" style={{minWidth:'100px', maxWidth:'140px'}}  className="mt-2"/>
         <img src={atlassian} alt="atlassian" style={{minWidth:'100px', maxWidth:'140px'}} className="mt-2" />
      </div>
   )
}

export default Brand
