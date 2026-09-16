export interface Reference {
  id: string;
  authorYear: string;
  /**
   * The full APA 7th edition citation. Segments wrapped in single asterisks
   * (*like this*) are rendered in italics, matching APA's rule of italicizing
   * a standalone work's title, or a periodical's name and volume number.
   */
  apa: string;
  url?: string;
}

/**
 * Full APA 7th edition reference list. Order matches the brief (Sections 2.2-2.3):
 * Peter's original six sources, then the six added for this project.
 */
export const references: Reference[] = [
  {
    id: "ali2023",
    authorYear: "Ali & Knowles, 2023",
    apa: "Ali, R., & Knowles, T. F. C. (2023). *A new architecture for high school learning*. National Association of State Boards of Education.",
    url: "https://nasbe.nyc3.digitaloceanspaces.com/2023/05/Ali-Knowles_May-2023.pdf",
  },
  {
    id: "meyer2024",
    authorYear: "Meyer, 2024",
    apa: "Meyer, D. S. (2024). The Confucian concept of learning and the aesthetics of human experience: An eco-ontological interpretation. *Philosophical Inquiry in Education*, *31*(1), 43-57.",
    url: "https://doi.org/10.7202/1112310ar",
  },
  {
    id: "beasley2022",
    authorYear: "Beasley & Haulmark, 2022",
    apa: "Beasley, J., & Haulmark, M. (2022). *Introduction to education* (Chapter 5). University of Arkansas Libraries.",
    url: "https://uark.pressbooks.pub/introductiontoeducation/",
  },
  {
    id: "alpaydin2022",
    authorYear: "Alpaydin & Demirli, 2022",
    apa: "Alpaydin, Y., & Demirli, C. (Eds.). (2022). *Educational theory in the 21st century: Science, technology, society and education*. Palgrave Macmillan.",
    url: "https://doi.org/10.1007/978-981-16-9640-4",
  },
  {
    id: "alvior2014",
    authorYear: "Alvior, 2014",
    apa: "Alvior, M. G. (2014, December 3). *Six famous curriculum theorists and their contribution to education*. Research Based Articles.",
    url: "http://simplyeducate.me/2014/12/03/six-famous-curriculum-theorists-and-their-contributions-to-education",
  },
  {
    id: "kirschner2006",
    authorYear: "Kirschner, Sweller, & Clark, 2006",
    apa: "Kirschner, P. A., Sweller, J., & Clark, R. E. (2006). Why minimal guidance during instruction does not work: An analysis of the failure of constructivist, discovery, problem based, experiential, and inquiry based teaching. *Educational Psychologist*, *41*(2), 75-86.",
    url: "https://doi.org/10.1207/s15326985ep4102_1",
  },
  {
    id: "dang2025",
    authorYear: "Dang, 2025",
    apa: "Dang, M. T. (2025). Mediating factors for student agency: Perspectives of school leaders and students. *Frontiers in Education*, *10*, Article 1643768.",
    url: "https://doi.org/10.3389/feduc.2025.1643768",
  },
  {
    id: "hui2023",
    authorYear: "Hui & Mahmud, 2023",
    apa: "Hui, H. B., & Mahmud, M. S. (2023). Influence of game based learning in mathematics education on the students' cognitive and affective domain: A systematic review. *Frontiers in Psychology*, *14*, Article 1105806.",
    url: "https://doi.org/10.3389/fpsyg.2023.1105806",
  },
  {
    id: "condliffe2017",
    authorYear: "Condliffe et al., 2017",
    apa: "Condliffe, B., Quint, J., Visher, M. G., Bangser, M. R., Drohojowska, S., Saco, L., & Nelson, E. (2017). *Project based learning: A literature review* (Working Paper). MDRC.",
    url: "https://www.mdrc.org/sites/default/files/Project-Based_Learning-LitRev_Final.pdf",
  },
  {
    id: "almeqdad2023",
    authorYear: "Almeqdad et al., 2023",
    apa: "Almeqdad, Q. I., Alodat, A. M., Alquraan, M. F., Mohaidat, M. A., & Al Makhzoomy, A. K. (2023). The effectiveness of universal design for learning: A systematic review of the literature and meta-analysis. *Cogent Education*, *10*(1).",
    url: "https://doi.org/10.1080/2331186X.2023.2218191",
  },
  {
    id: "meyerrosegordon2014",
    authorYear: "Meyer, Rose, & Gordon, 2014",
    apa: "Meyer, A., Rose, D. H., & Gordon, D. (2014). *Universal design for learning: Theory and practice*. CAST Professional Publishing.",
  },
  {
    id: "ritchhart2008",
    authorYear: "Ritchhart & Perkins, 2008",
    apa: "Ritchhart, R., & Perkins, D. (2008). Making thinking visible. *Educational Leadership*, *65*(5), 57-61.",
  },
];

export function getReference(id: string): Reference {
  const ref = references.find((r) => r.id === id);
  if (!ref) throw new Error(`Unknown reference id: ${id}`);
  return ref;
}
