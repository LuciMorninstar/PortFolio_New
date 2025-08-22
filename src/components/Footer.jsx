import { FaGithub, FaLinkedin, FaWhatsapp, FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Socialmedia from "./SocialMedia";


const Footer = () => {

        const socialLinks =[
  {
    icon: <FaGithub size={24} color="#333740" />,
    title: "GitHub",
    url: "https://github.com/LuciMorninstar"
  },
  {
    icon: <SiGmail size={24} color="#D14836" />,
    title: "Gmail",
    url: "mailto:stars21@gmail.com"
  },
  {
    icon: <FaLinkedin size={24} color="#0077B5" />,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/your-profile"
  },
  {
    icon: <FaWhatsapp size={24} color="#25D366" />,
    title: "WhatsApp",
    url: "https://wa.me/your-number"
  },
  {
    icon: <FaFacebook size={24} color="#1877F2" />,
    title: "Facebook",
    url: "https://facebook.com/your-profile"
  }
];
  return (

     <footer className = " mt-3 rounded-md py-7 bg-gray-300 dark:bg-dark-secondary-color ">

        <div className = "flex flex-col gap-14">
            <h6 className = "text-4xl font-semibold text-center "> Get In Touch</h6>
            
          <div className = " grid grid-cols-5 mx-20 md:mx-30 lg:mx-45 lg:mx-90">
            {socialLinks.map((link,index)=>(

                <Socialmedia key={index} link = {link}/>
        
               
            ))}
          </div>


            <p className = "text-center">&copy; 2025 Bibek Pandit. All rights reserved.</p>



   
</div>
  
 </footer>
  
  )
}

export default Footer