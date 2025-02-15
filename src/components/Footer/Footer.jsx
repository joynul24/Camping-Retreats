import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-[#86b633] footer-horizontal footer-center text-base-content p-10 mt-10">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover hover:text-white">Home</a>
        <a className="link link-hover hover:text-white">All Adventur</a>
        <a className="link link-hover hover:text-white">Contact Us</a>
        <a className="link link-hover hover:text-white">Blog</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://web.facebook.com/ma.joynul" className="cursor-pointer">
            <FaFacebook className="text-[#0862F7] text-2xl"></FaFacebook>
          </a>
          <a href="https://github.com/joynul24" className="cursor-pointer">
            <FaGithub className="text-black text-2xl"></FaGithub>
          </a>
          <a href="https://bd.linkedin.com/?trk=guest_homepage-basic_nav-header-logo" className="cursor-pointer">
           <FaLinkedin className="text-[#0074AE] text-2xl"></FaLinkedin>
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Camping Retreats Ltd
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
