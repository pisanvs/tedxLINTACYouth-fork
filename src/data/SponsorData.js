// import certify_me from "../../public/sponsors/certify_me.webp";
// import msigma from "../../public/sponsors/msigma.webp";
// import rit from "../../public/sponsors/rit.webp";
// import lic from "../../public/sponsors/lic.webp";

class Sponsor {
  constructor(title, alt, website, image, description = "") {
    this.title = title;
    this.alt = alt;
    this.website = website;
    this.image = image;
    this.description = description;
  }
}

export const SponsorData = [];
