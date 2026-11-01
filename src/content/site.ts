export const FEATURED_PROJECT_COUNT = 3

export const site = {
  name: 'Hafizul Haque',
  role: 'Software Engineer',
  company: 'Reddot Digital IT Ltd.',
  location: 'Dhaka, Bangladesh',
  url: 'https://hafizulhaque.github.io',
  description:
    'Personal portfolio of Hafizul Haque, a full stack software engineer in Dhaka, Bangladesh, focused on frontend and web products.',
  intro:
    "I'm a software engineer with 3 years of experience, currently at Reddot Digital IT, a subsidiary of Robi Axiata Ltd. I focus on full stack web development, with the most time spent on the frontend.",
  email: 'hafizul.cse.cuet@gmail.com',
  links: {
    github: 'https://github.com/HafizulHaque',
    linkedin: 'https://www.linkedin.com/in/hafizulhaque97',
  },
  education: 'B.Sc. in CSE, Chittagong University of Engineering & Technology (CUET), 2021',
  portrait: {
    src: '/portrait/portrait.svg',
    depthSrc: '/portrait/portrait-depth.svg',
    alt: 'Portrait of Hafizul Haque',
    width: 600,
    height: 800,
    // Eye centers as [x, y] in image UV space (0 to 1, top-left origin).
    eyes: [
      [0.44, 0.42],
      [0.56, 0.42],
    ] as const,
  },
} as const
