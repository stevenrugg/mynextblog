const projects = [
    {
      id: "1",
      title: 'Animated Animals',
      image: '/images/blog/animatedanimals.png',
      description: 'HTML5, CSS3, and vanilla JavaScript. A cat, deer, wolf, and bear split up into SVG segments and animated.',
      href: 'https://stevenrugg.github.io/animated-animals',
      longDescription: "Animated Animals was created with only HTML5, CSS3 and vanilla javascript. I took a svg of a bear, a wolf, a cat and a deer and, respectively, sliced each of them up into triangles then animated the transitions in between the animals."
    },
    {
      id: "2",
      title: "iOS Calculator",
      image: "/images/blog/calc.png",
      description: "A working clone of the iOS calculator using HTML, CSS, and JavaScript",
      href: 'https://stevenrugg.github.io/iOSCalculator/',
      longDescription: "I got curious and wanted to see if I could create a replica of the calculator application using only CSS, HTML and javascript. Turns out you can! The magic of CSS will never cease to amaze me. The recent development of CSS implementing javascript functionality is awesome! CSS is turning into a full-fledged programming language it seems like!"
    },

    {
      id: "3",
      title: "seattlesupergeek.io",
      image: '/images/blog/seattlesupergeek.png',
      description: "This website and blog! I write articles about frontend technology, current events, quantum computing and anything else that interests me.",
      href: "https://seattlesupergeek.io",
      longDescription: "This blog and website. I coded all of this myself. I started with a barebones boilerplate next.js project and added all the pages, and functionality. The projects page is created using getStaticPaths and getStaticProps, all the pages are pre-rendered on the server so they are very fast and have good SEO"
    },
    {
      id: "4",
      title: 'WebRTC Video Chat',
      image: '/images/blog/webrtcthumbnail.png',
      description: 'A WebRTC Video Chat app using Socket.io for signaling',
      href: 'https://github.com/stevenrugg/WebRTC-VideoChat',
      longDescription: "This was the most difficult application I have ever coded. The WebRTC API references really don't do a lot to make you confident in using the technology. I chose to use signal.io as the signaling channel. It seemed the best way to signal in node.js. The only dev dependencies are, I think: typescript, tailwindcss and signal.io. I am now an expert on the javascript event loop and non-blocking I/O. The application is made with node.js and javascript. The html is rendered with a .ejs template"
    },
    {
      id: "5",
      title: 'Sunsauna',
      image: '/images/blog/sunsauna.png',
      description: 'Website for a local small business selling infrared in-home saunas.',
      href: 'https://sunsauna.com',
      longDescription: "I built this website for Sunsauna in 2013. It was one of the very first websites that I built. I believe I used the boilerplate for bootstrap 3 and built the site up using just html and css and jQuery"
    },
    {
      id: "6",
      title: 'Art of the Table',
      image: '/images/blog/art.png',
      description: 'Website for a fine dining restaurant with a constantly changing menu.',
      href: 'https://artofthetable.net',
      longDescription: "This is one of the more recent sites I have built. The restaurant is very pricey. The cost is around $300 per person. There is no menu to choose your courses from. The chefs go out everyday to the Pike Place Market and purchase the ingredients for that menu that night. It changes almost every night. It is a variation on the same theme: there is a protein dish, a vegetarian or vegan dish, a seafood dish ect. The food is absolutely, breathtakingly good"
    },
  ];

  export default projects