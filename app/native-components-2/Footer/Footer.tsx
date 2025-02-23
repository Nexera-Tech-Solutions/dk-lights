"use client";
import React from "react";
import { ProductLinks, QuickLinks, SocialMediaImages } from "./data";
import { motion } from "framer-motion";

import { getCurrentYear, supportContactEmail } from "@/app/utils/constant";
import Link from "next/link";
import Image from "next/image";
import InfoBar from "./InforBar";

const Footer = () => {
  return (
      <section className="mt-[100px]">
          <InfoBar />
          <footer className="p-4 py-8 max-w-7xl mx-auto w-full">
              <div className="flex flex-col lg:flex-row gap-12 justify-between px-10">
                  <div className="flex flex-col gap-6">
                      <div className="flex justify-between items-center flex-wrap md:justify-start md:gap-20">
                          <Image
                              src="/global/logo.jpeg"
                              alt="logo"
                              width={50}
                              height={50}
                              className="rounded-full"
                          />
                      </div>

                      <p className="font-medium text-black md:max-w-[460px]">
                          {" "}
                          {/* Changed text color to black */}
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                      </p>

                      <div className="flex gap-6">
                          {SocialMediaImages.map((data, index) => (
                              <motion.div
                                  whileHover={{ scale: 1.1 }}
                                  key={index}
                              >
                                  <Link href={data.link} target="_blank">
                                      <Image
                                          src={data.img as string}
                                          alt={data.alt}
                                          width={24}
                                          height={24}
                                      />
                                  </Link>
                              </motion.div>
                          ))}
                      </div>
                  </div>

                  <div className="flex flex-col gap-4 md:flex-row justify-between">
                      <span className="flex flex-col gap-4">
                          <div className="flex gap-10">
                              <div>
                                  <p className="text-black text-base font-semibold pb-4">
                                      {" "}
                                      {/* Changed text color to black */}
                                      Quick Links
                                  </p>

                                  {QuickLinks.map((data, index) => (
                                      <motion.div
                                          whileHover={{ scale: 1.1 }}
                                          key={index}
                                      >
                                          <div className="py-1.5">
                                              <Link
                                                  data-test-id={`footer-${data.text
                                                      .replaceAll(" ", "-")
                                                      .toLowerCase()}`}
                                                  href={data.url as string}
                                                  target={
                                                      data.newTab
                                                          ? "_blank"
                                                          : ""
                                                  }
                                                  className="text-black text-sm font-medium"
                                              >
                                                  {data.text}
                                              </Link>
                                          </div>
                                      </motion.div>
                                  ))}
                              </div>

                              {/* Divider */}
                              <div className="border-l border-gray-400 h-auto"></div>

                              <div>
                                  <p className="text-black text-base font-semibold pb-4">
                                      Products
                                  </p>

                                  {ProductLinks.map((data, index) => (
                                      <motion.div
                                          whileHover={{ scale: 1.1 }}
                                          key={index}
                                      >
                                          <div className="py-1.5">
                                              <Link
                                                  data-test-id={`footer-${data.text
                                                      .replaceAll(" ", "-")
                                                      .toLowerCase()}`}
                                                  href={data.url as string}
                                                  target={
                                                      data.newTab
                                                          ? "_blank"
                                                          : ""
                                                  }
                                                  className="text-black  text-sm font-medium"
                                              >
                                                  {data.text}
                                              </Link>
                                          </div>
                                      </motion.div>
                                  ))}
                              </div>
                          </div>
                      </span>
                  </div>

                  <div className="flex flex-col gap-4 max-lg:border-t-2 max-lg:py-4 max-lg:border-[#2F2F2F]">
                      <p className="text-black text-lg font-semibold">
                          Registered Office Address
                      </p>
                      <div className="text-black">
                          Lorem ipsum dolor sit amet
                          <br />
                          consectetur adipiscing elit <br />
                          sed do eiusmod tempor, <br />
                          incididunt ut labore et dolore <br />
                          <span
                              onClick={() =>
                                  window.open(
                                      `mailto:${supportContactEmail}`,
                                      "_blank"
                                  )
                              }
                              className="underline cursor-pointer"
                          >
                              {supportContactEmail}
                          </span>
                      </div>
                  </div>
              </div>

              <div className="p-10">
                  <p className="text-sm text-[#919191] text-start pt-6">
                      &copy;{getCurrentYear} DK Lights. All rights reserved.
                  </p>
              </div>
          </footer>
      </section>
  );
};

export default Footer;
