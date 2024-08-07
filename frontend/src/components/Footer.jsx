import React from "react";
import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitter} from 'react-icons/bs'

const FooterCom = () => {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-3xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className=" self-center whitespace-nowrap text-lg sm:text-xl font-bold dark:text-white"
            >
              <span className="px-2 mx-1 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
                Blogify
              </span>
              Where Stories Unfold
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Blogify
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://www.github.com/GR-2004"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href='#' by="Blogify" year={new Date().getFullYear()} />
            <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                <Footer.Icon href="https://github.com/GR-2004" icon={BsGithub} />
                <Footer.Icon href="https://www.linkedin.com/in/ganesh-rana/" icon={BsLinkedin} />
            </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterCom;
