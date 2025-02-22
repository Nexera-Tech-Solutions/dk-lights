import FacebookIcon from "../../assets/FooterIcons/Facebook.svg";
import LinkedinIcon from "../../assets/FooterIcons/Linkedin.svg";
import YoutubeIcon from "../../assets/FooterIcons/Youtube.svg";
import InstagramIcon from "../../assets/FooterIcons/Instagram.svg";

export interface LinkType {
  text: string;
  url?: string;
  newTab?: boolean;
  dynamic?: boolean;
  flag?: string;
}
interface SocialMediaImagesType {
  img: unknown;
  link: string;
  alt: string;
}

export const QuickLinks: LinkType[] = [
  { text: "Home", url: "/", flag: "enable_home_page" },
  { text: "About", url: "/about", flag: "enable_about_page" },
  { text: "Our Team", url: "/our-team", flag: "enable_our_team_page" },
  { text: "Gallery", url: "/gallery", flag: "enable_gallery_page" },
  {
    text: "Privacy Policy",
    url: "/privacy-policy",
    flag: "enable_privacy_policy_page",
  },
  { text: "Contact Us", url: "/contact-us", flag: "enable_contact_us_page" },
  { text: "Terms of Service", url: "/terms", flag: "enable_terms_page" },
];

export const ProductLinks: LinkType[] = [
  { text: "Ceiling Lighting", url: "/shower", flag: "enable_shower_page" },
  { text: "Wall Lighting", url: "/kitchen", flag: "enable_kitchen_page" },
  {
    text: "Outdoor Lighting",
    url: "/diverter-mixers",
    flag: "enable_diverter_mixers_page",
  },
  { text: "Smart Lighting", url: "/faucets", flag: "enable_faucets_page" },
  { text: "Basin", url: "/basin", flag: "enable_basin_page" },
  {
    text: "Architectural Lighting",
    url: "/water-closet",
    flag: "enable_water_closet_page",
  },
  {
    text: "Commercial & Industrial Lighting",
    url: "/wellness",
    flag: "enable_wellness_page",
  },
];

export const SocialMediaImages: SocialMediaImagesType[] = [
  {
    img: FacebookIcon,
    link: "https://www.facebook.com/thedrivex",
    alt: "Facebook Icon",
  },
  {
    img: LinkedinIcon,
    link: "https://www.linkedin.com/company/the-drivex/",
    alt: "LinkedIn Icon",
  },
  {
    img: YoutubeIcon,
    link: "https://www.youtube.com/@DriveX01",
    alt: "YouTube Icon",
  },
  {
    img: InstagramIcon,
    link: "https://www.instagram.com/thedrivex/",
    alt: "Instagram Icon",
  },
];
