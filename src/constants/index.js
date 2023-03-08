import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    man,
    women
  } from "../assets";
  
  export const navLinks = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Articles",
    },
    {
      id: "project",
      title: "Projects",
    },
    {
      id: "feedback",
      title: "Feedback",
    },
    

    {
      id: "contact",
      title: "Contact",
    },
    
    
  ];
  
  const services = [
    {
      title: "Astronomical nights",
      icon: web,
    },
    {
      title: "Public events",
      icon: mobile,
    },
    {
      title: "Lectures",
      icon: backend,
    },
    {
      title: "Competitions",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    
  ];
  
  const experiences = [
    {
      title: "The Search for Habitable Exoplanets: Exploring the Cosmos for Other Earths",
      owner_name: "Jon Wick",
      icon: man,
      iconBg: "#383E56",
      date: " 01 November 2022",
      points: [
        "The Search for Habitable Exoplanets is a field of study dedicated to finding planets outside our solar system that have the potential to host life.",
        "Astronomers use a variety of techniques, such as observing changes in starlight or measuring gravitational wobbles, to identify these exoplanets.",
        "The ultimate goal is to find a planet similar to Earth in size, orbit, and atmosphere, and to determine whether it could support life as we know it.",
        ,
      ],
    },
    {
      title: "The Psychology of Procrastination: Understanding Why We Delay and How to Overcome It",
      owner_name: "Tina Michelle",
      icon: women,
      iconBg: "#E6DEDD",
      date: "05 December 2022",
      points: [
        "Procrastination is the act of delaying or putting off tasks or goals despite knowing that doing so will likely result in negative consequences.",
        "The Psychology of Procrastination is an area of research that aims to understand why people procrastinate and how to overcome it.",
        "It involves examining factors such as motivation, self-regulation, time-management, and decision-making, as well as the impact of emotions such as anxiety, fear, and boredom. ",
        "Research has shown that procrastination is a complex phenomenon influenced by multiple factors, and that effective strategies for overcoming it often involve changing one's mindset, setting clear goals, breaking tasks into smaller steps, and creating an environment that promotes productivity.",
      ],
    },
    {
      title: "Exploring the Universe: A Journey Through Time and Space",
      owner_name: "Jon Wick",
      icon: man,
      iconBg: "#383E56",
      date: "05 March 2023",
      points: [
        "'Exploring the Universe: A Journey Through Time and Space' is a popular topic in astronomy that covers the study of celestial objects and phenomena beyond our solar system.",
        "It involves understanding the fundamental physical principles that govern the universe, as well as using advanced technology to observe and measure objects that are billions of light-years away.",
      ],
    },
    {
      title: "Black Holes: The Most Mysterious and Fascinating Objects in the Universe",
      owner_name: "Tina Michelle",
      icon: women,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Black holes are one of the most fascinating and mysterious objects in the universe. They are incredibly dense regions in space where the gravitational force is so strong that nothing, not even light, can escape. The concept of a black hole was first proposed by Albert Einstein's theory of general relativity in 1915, but it was not until the 1960s that astronomers began to find evidence for their existence",
        "Black holes are formed when massive stars run out of fuel and collapse in on themselves, creating a singularity - a point of infinite density and zero volume. The size of a black hole is determined by its mass, with larger black holes having more mass and therefore more gravitational force.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "Joining the astronomical club has been an amazing experience for me. I've always been fascinated by the night sky and the mysteries of the universe, but I never knew how to explore this interest in a meaningful way. Being part of the club has allowed me to connect with other like-minded people who share my passion for astronomy and space.",
      name: "Elgar White",
      designation: "Student",
      company: "University of California, Berkeley",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
      testimonial:
        "Through the club, I've had the opportunity to attend star parties, visit observatories, and participate in astronomy-related events and activities. I've learned so much about the universe and the science behind astronomy, and I've been able to deepen my knowledge and understanding of this incredible field.",
      name: "Joe Nicals",
      designation: "Lecturer",
      company: "School of science and technology",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
    },
    {
      testimonial:
        "I would highly recommend the astronomical club to anyone who is interested in astronomy and space. It's a fantastic way to learn, explore, and connect with other people who share your love of the universe.",
      name: "Lisa Wang",
      designation: "Student",
      company: "School of science and technology",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Astronomical Nights",
      description:
        "Astro Night Camp is a unique program that provides students with an opportunity to explore the wonders of space and astronomy. The program typically takes place over several days, and it is designed to offer participants a comprehensive learning experience that covers a range of topics related to astronomy, space exploration, and astrophysics.",
      tags: [
        {
          name: "2022-08-22",
          color: "blue-text-gradient",
        },
        {
          name: "Hales",
          color: "green-text-gradient",
        },
        {
          name: "London",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://facebook.com/",
    },
    {
      name: "Astronomical Seminar",
      description:
        "Astronomical seminars usually begin with a keynote speaker who presents their latest research findings, followed by a series of shorter talks by other researchers or students. These presentations may be accompanied by visual aids such as slides or videos, and they often include in-depth discussions of the methodologies, data, and conclusions of the research being presented.",
      tags: [
        {
          name: "2023-01-09",
          color: "blue-text-gradient",
        },
        {
          name: "London Mall",
          color: "green-text-gradient",
        },
        {
          name: "Research Center",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://facebook.com/",
    },
    {
      name: "Astro Exhibition",
      description:
        "Astronomical exhibitions are typically organized by astronomy-related institutions such as observatories, planetariums, museums, and universities. They can be aimed at a wide range of audiences, from young children to adults, and may be designed to promote public interest in astronomy, educate the public about current research in the field, or celebrate historical achievements in astronomy.",
      tags: [
        {
          name: "2022-02-04",
          color: "blue-text-gradient",
        },
        {
          name: "London ",
          color: "green-text-gradient",
        },
        {
          name: "City Mall",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://facebook.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };