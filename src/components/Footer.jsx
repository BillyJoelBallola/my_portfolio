import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

const Footer = () => {
  return (
    <section className="section">
      <div className="text-center mb-8 w-auto md:w-[50%] mx-auto">
        <h2 className="font-semibold text-lg mb-2" data-aos="fade-up">
          GET IN TOUCH
        </h2>
        <p data-aos="fade-up">
          To connect with me, you can send me a message through my social media
          accounts or email me through my g-mail.
        </p>
      </div>
      <div className="flex justify-center gap-5 md:gap-10">
        <a
          href="https://www.facebook.com/billyjoel.ballola"
          className="social-media group"
          data-aos="zoom-in"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookSquare className="group-hover:text-neutral-50" />
        </a>
        <a
          href="https://www.instagram.com/blly_joel"
          className="social-media group"
          data-aos="zoom-in"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram className="group-hover:text-neutral-50" />
        </a>
        <a
          href="mailto:billyjoelballola27@gmail.com"
          className="social-media group"
          data-aos="zoom-in"
          rel="noreferrer"
        >
          <MdOutlineMailOutline className="group-hover:text-neutral-50" />
        </a>
      </div>
    </section>
  );
};

export default Footer;
