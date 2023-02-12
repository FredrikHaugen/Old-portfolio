class LightBoxItemSection {
    constructor(images, texts) {
      this.images = images;
      this.texts = texts;
    }
  }

class LightBoxItem {
    constructor(title, sections, icons) {
      this.title = title;
      this.sections = sections;
      this.icons = icons;
    }
  }


  class LightBoxItemIcon {
    constructor(classes) {
        this.classes = classes.split(" ");
    }
}
  

  let pureen = new LightBoxItem(
    'pureen',
    [new LightBoxItemSection(
        ['../assets/Pureen/pureenPerfume.jpg'], 
        ["I had the opportunity to be involved in the branding and design process for Pureen, a German-based cosmetics company. My responsibilities included creating the company's logo, selecting a color scheme, and designing and visualizing products for advertising purposes.",]),
    new LightBoxItemSection(
        ['../assets/Pureen/EyeShadow.jpg'], 
        ["I used these some of the renders to design and produce two posters featuring the products. It was a valuable experience to be a part of the development of a company's brand identity."]),
    new LightBoxItemSection(
        ['../assets/Pureen/poster1.jpg', '../assets/Pureen/poster2.jpg'],
        ['']),
        
    ],
    
    [new LightBoxItemIcon(
        'lightbox-icons fas fa-user-alt',
    ),
    new LightBoxItemIcon(
        'lightbox-icons fas fa-user-alt',
    ),
    new LightBoxItemIcon(
        'lightbox-icons fas fa-user-alt',
    )
    ],
  )


    let fjordfiesta = new LightBoxItem(
      'fjordfiesta',
      [new LightBoxItemSection(
          ['../assets/Fjordfiesta/Main_inside.jpg'], 
          ["The 1001 AX Sofa is a concept design that I created using Blender, Substance Painter and Blender's Cycles X render engine. It is a 3-seater leather sofa that features fluted padding and a solid walnut and stainless steel base, inspired by the furniture brand Fjordfiesta. The project allowed me to showcase my skills in 3D modeling, texturing and lighting, and I am excited to present the final product in my portfolio.",]),
      new LightBoxItemSection(
          ['../assets/Fjordfiesta/Main_outside.jpg'], 
          [""]),
      new LightBoxItemSection(
          ['../assets/Fjordfiesta/strokes_inside.jpg', '../assets/Fjordfiesta/Strokes_outside.jpg'],
          ["To see more information about the sofa visit fjordfiesta's website with the link below"]),
          
      ],
      
      [new LightBoxItemIcon(
          'lightbox-icons fas fa-user-alt',
      ),
      new LightBoxItemIcon(
          'lightbox-icons fas fa-user-alt',
      ),
      new LightBoxItemIcon(
          'lightbox-icons fas fa-user-alt',
      )
    ],
  )

  let glasshouse = new LightBoxItem(
    'glasshouse',
    [new LightBoxItemSection(
        ['../assets/Glasses/Glasses.jpg'], 
        ["Glasshouse is a small company in Canterbury, England that specializes in creating beautiful, minimalist glassware. They use traditional glassblowing techniques to create a modern aesthetic that is both simple and elegant.",]),
    new LightBoxItemSection(
        ['../assets/Glasses/Glasses.jpg'], 
        ["I was tasked to design a tall, minimalistic twirling glass for Glasshouse's collection. Using Blender, I created a 3D model of the glass and set up lighting and materials to make the render as realistic as possible. I paid close attention to details such as reflections, refractions, and transparency to showcase the beauty of the glass. I was pleased with the final render, I presented it to the Glasshouse team, which was well received and the design become part of their collection."]),
    new LightBoxItemSection(
        [''],
        [""]),
        
    ],
    
    [new LightBoxItemIcon(
        'lightbox-icons fas fa-user-alt',
    ),
    new LightBoxItemIcon(
        'lightbox-icons fas fa-user-alt',
    ),
    new LightBoxItemIcon(
        'lightbox-icons fas fa-user-alt',
    )
  ],
)

let florial = new LightBoxItem(
  'florial',
  [new LightBoxItemSection(
      ['../assets/Glasses/Glasses.jpg'], 
      ["Glasshouse is a small company in Canterbury, England that specializes in creating beautiful, minimalist glassware. They use traditional glassblowing techniques to create a modern aesthetic that is both simple and elegant.",]),
  new LightBoxItemSection(
      ['../assets/Glasses/Glasses.jpg'], 
      ["I was tasked to design a tall, minimalistic twirling glass for Glasshouse's collection. Using Blender, I created a 3D model of the glass and set up lighting and materials to make the render as realistic as possible. I paid close attention to details such as reflections, refractions, and transparency to showcase the beauty of the glass. I was pleased with the final render, I presented it to the Glasshouse team, which was well received and the design become part of their collection."]),
  new LightBoxItemSection(
      [''],
      [""]),
      
  ],
  
  [new LightBoxItemIcon(
      'lightbox-icons fas fa-user-alt',
  ),
  new LightBoxItemIcon(
      'lightbox-icons fas fa-user-alt',
  ),
  new LightBoxItemIcon(
      'lightbox-icons fas fa-user-alt',
  )
],
)


let placeholder = new LightBoxItem(
    'placeholder',
    [new LightBoxItemSection(
        ['https://picsum.photos/id/6/1920/1080?random=5.webp'], 
        ["Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",]),
    new LightBoxItemSection(
        ['https://picsum.photos/id/6/1920/1080?random=6.webp'], 
        ["Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."]),
    new LightBoxItemSection(
        [''],
        [""]),
        
    ],
    
    [new LightBoxItemIcon(
        'lightbox-icons fab fa-behance',
    ),
    new LightBoxItemIcon(
        'lightbox-icons fab fa-github',
    ),
    new LightBoxItemIcon(
        'lightbox-icons fab fa-linkedin-in',
    )
  ],
  )