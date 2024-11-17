class Volunteer {
  constructor(name, linkedinLink, githubLink, instagramLink, imageLink) {
    this.name = name;
    this.linkedinLink = linkedinLink;
    this.githubLink = githubLink;
    this.instagramLink = instagramLink;
    this.imageLink = imageLink;
  }
}

export const team = [
  new Volunteer(
    "LEAD ORGANIZER Maximliano Morel",
    "https://www.linkedin.com/in/maximiliano-morel-b04091331/",
    null,
    "",
    "/team/maxm.jpg"
  ),
  new Volunteer(
    "PRODUCTION Daniel Martínez",
    null,
    null,
    null,
    "/team/danm.webp"
  ),
  new Volunteer(
    "LOGISTICS Florencia Barros",
    null,
    null,
    null,
    "/team/flob.jpg"
  ),
  new Volunteer(
    "LOGISTICS Andrés Espejo",
    null,
    null,
    null,
    "/team/ande.webp"
  ),
  new Volunteer(
    "BUDGET Leopoldo Fernández",
    null,
    null,
    null,
    "/team/leof.jpg"
  ),
  new Volunteer(
    "BUDGET Ignacio Morales",
    null,
    null,
    null,
    "/team/ignm.jpg"
  ),
  new Volunteer(
    "ART & DESIGN Anthonella Lucas",
    null,
    null,
    null,
    "/team/antl.webp"
  ),
  new Volunteer(
    "CO-ORGANIZER Marcela Toyos",
    null,
    null,
    "",
    "/team/mart.jpg"
  ),
]
