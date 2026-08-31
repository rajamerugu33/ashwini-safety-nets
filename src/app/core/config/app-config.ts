/**
 * Application-wide configuration and metadata for ASHWINI SAFETY NETS.
 * Centralizes business contact parameters, target locations in Chennai,
 * and the catalog of 9 services with factual descriptions and neutral
 * specifications to avoid any invented claims.
 */

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceInfo {
  id: string;
  name: string;
  seoTitle: string;
  shortDesc: string;
  longDesc: string;
  features: string[];
  specifications: { [key: string]: string };
  applications: string[];
  installationInfo: string;
  faqs: ServiceFAQ[];
  icon: string;
  imageUrl: string;
}

export const APP_CONFIG = {
  businessName: 'ASHWINI SAFETY NETS',
  businessType: 'Safety Nets and Invisible Grills',
  contact: {
    whatsAppNumber: '919676510575',
    phoneCallUrl: 'tel:+919676510575',
    phonePlaceholder: '+91 96765 10575',
    emailPlaceholder: 'ashwinisafetynets@gmail.com',
    workingHours: 'Mon - Sun: 8:00 AM - 9:00 PM',
    officeAddress: 'Chennai, Tamil Nadu, India',
    websiteDomain: 'https://ashwinisafetynets.com/'
  },
  location: {
    city: 'Chennai',
    state: 'Tamil Nadu',
    country: 'India',
    areas: [
      'Adyar', 'Velachery', 'Anna Nagar', 'T. Nagar', 'OMR (Old Mahabalipuram Road)',
      'ECR (East Coast Road)', 'Tambaram', 'Madipakkam', 'Porur', 'Mylapore',
      'Sholinganallur', 'Chromepet', 'Guindy', 'Besant Nagar', 'Nungambakkam',
      'Perungudi', 'Thiruvanmiyur', 'Medavakkam', 'Pallikaranai', 'Kotturpuram',
      'West Mambalam', 'Royapettah', 'Egmore', 'Saidapet', 'Triplicane'
    ]
  },
  services: [
    {
      id: 'safety-nets',
      name: 'Safety Nets',
      seoTitle: 'Safety Nets in Chennai | Balcony & Home Safety netting',
      shortDesc: 'Quality safety netting installations custom-fitted for balconies, windows, and open building voids in Chennai.',
      longDesc: 'Our Safety Nets offer safety barrier solutions for multi-story homes, staircases, and ventilation shafts. Designed to act as fall prevention netting, they secure open windows, balconies, and structural shafts. Installed professionally by our team using durable anchor fittings, they help secure your residential or commercial spaces in Chennai.',
      icon: '🛡️',
      imageUrl: 'assets/images/services/safety-nets.webp',
      features: [
        'Aims to prevent accidental falls of objects or individuals',
        'Custom-fitted to match the open dimensions of your structure',
        'Open mesh layout to maintain light and fresh air ventilation',
        'Professional anchoring using secure hardware attachments'
      ],
      specifications: {
        'Material': 'Durable HDPE / Copolymer Nylon netting options',
        'Mesh Size': 'Customized based on safety requirements (typically 30mm - 50mm)',
        'Wire/Thread Options': 'Multi-strand braided yarn configuration',
        'Warranty': 'Warranty options available depending on material grade selected',
        'Installation Hardware': 'Secure anchor attachments configured on-site'
      },
      applications: [
        'Open balconies and window openings',
        'Plumbing ducts and open air shafts in apartments',
        'Stairwells and high corridor balustrades',
        'Commercial building voids and industrial spaces'
      ],
      installationInfo: 'Our safety technicians inspect your structural layout, locate solid anchoring points in the concrete, install secure wall fasteners, and tie/tension the safety net to prevent sagging.',
      faqs: [
        {
          question: 'How do I choose between different safety nets?',
          answer: 'The choice depends on your specific requirement. For balcony safety and bird protection, HDPE nets are recommended. For high-impact industrial or sports applications, high-density braided nets or nylon safety ropes are more suitable.'
        },
        {
          question: 'Do safety nets block natural light or air?',
          answer: 'No. The open mesh grid structure allows maximum sunlight and natural air ventilation to pass through freely, keeping your rooms bright and airy.'
        },
        {
          question: 'What maintenance is required for home safety nets?',
          answer: 'Our safety nets require minimal maintenance. You can occasionally spray them with clean water to wash off accumulated dust and dirt. Avoid using harsh chemical cleaners or sharp objects near the nets.'
        },
        {
          question: 'Are your safety nets weather-resistant in Chennai\'s coastal climate?',
          answer: 'Yes. The netting material is UV-resistant and built to withstand Chennai\'s hot sun, high humidity, and salty sea breeze without decomposing quickly.'
        },
        {
          question: 'Can they support the weight of an adult?',
          answer: 'Our residential safety nets are designed as a precautionary barrier. While they are highly durable and can prevent accidental falls of children, pets, or objects, they are not intended to be used as hammocks or support continuous adult body weight.'
        }
      ]
    },
    {
      id: 'balcony-safety-nets',
      name: 'Balcony Safety Nets',
      seoTitle: 'Balcony Safety Nets in Chennai | Apartment Balcony Netting',
      shortDesc: 'Ensure balcony safety and prevent accidental falls in Chennai apartments with our custom-fitted netting installations.',
      longDesc: 'Balconies in multi-story apartments present potential fall hazards for children, pets, and adults. Our Balcony Safety Nets provide a secure boundary mesh that closes the open front or side of the balcony. These nets are custom-fitted to your apartment structures in Chennai, ensuring protection without obstructing the outdoor view.',
      icon: '🕸️',
      imageUrl: 'assets/images/services/balcony-safety-nets.webp',
      features: [
        'Designed to secure open balcony spaces',
        'Fitted close to the walls and railings to avoid gaps',
        'Durable materials suited for outdoor sun and weather exposure',
        'Lightweight structure that does not strain balcony railings'
      ],
      specifications: {
        'Material': 'Weather-resistant HDPE / Monofilament options',
        'Mesh Size': 'Customized based on safety requirements (typically 40mm)',
        'Thickness Options': '1.2mm to 2.5mm options depending on selection',
        'Warranty': 'Warranty options available depending on material grade selected',
        'Installation Hardware': 'High-tension fasteners and anchor hooks'
      },
      applications: [
        'High-rise apartment balcony spaces',
        'Independent houses and villa sit-out decks',
        'Open galleries and high walkways'
      ],
      installationInfo: 'We measure your balcony border dimensions, drill concrete anchors at regular intervals, hook the perimeter boundary rope, and stretch the safety net tightly.',
      faqs: [
        {
          question: 'How are balcony safety nets anchored to the walls?',
          answer: 'We drill anchor hooks into the concrete ceiling, walls, and floor balcony railings. A strong perimeter rope is tied to these hooks, and the net is stretched and bound to this boundary wire for high tension.'
        },
        {
          question: 'Can I get balcony nets installed if I live in a rented apartment?',
          answer: 'Yes. The installation requires drilling small holes for the anchor hooks. If you vacate the apartment, our team can uninstall the net cleanly, and you can fill the small drill holes with white cement or putty.'
        },
        {
          question: 'Do balcony safety nets prevent birds from entering?',
          answer: 'Yes. In addition to preventing accidental falls, they act as an effective barrier against pigeons and other birds nesting on your balcony.'
        },
        {
          question: 'How much time does it take to secure a standard balcony?',
          answer: 'Installing safety netting on a standard balcony typically takes between 2 to 3 hours, depending on the height and open coordinates of the space.'
        }
      ]
    },
    {
      id: 'children-safety-nets',
      name: 'Children Safety Nets',
      seoTitle: 'Children Safety Nets in Chennai | Child Balcony Safety netting',
      shortDesc: 'Specially configured child safety netting to protect children around windows, staircases, and balconies in Chennai.',
      longDesc: 'Our Children Safety Nets are designed with tighter grid spacings to help protect active children from squeezing through open window frames, stair balustrades, or balcony railings. These nets provide an extra layer of structural safety, allowing families in multi-story houses in Chennai to keep windows open for fresh air.',
      icon: '👶',
      imageUrl: 'assets/images/services/children-safety-nets.webp',
      features: [
        'Tight mesh layout to prevent limbs or toys from slipping through',
        'Soft-touch materials to prevent scrapes or irritation',
        'Durable anchors spaced closely together to eliminate loose gaps',
        'Custom installation for windows, staircase wells, and balconies'
      ],
      specifications: {
        'Material': 'High-strength nylon copolymer safety netting',
        'Mesh Size': 'Micro-mesh options available based on child safety needs (25mm - 30mm)',
        'Spacing Gaps': 'Configured closely to prevent child passage',
        'Warranty': 'Warranty options available depending on material grade selected',
        'Anchor Fittings': 'SS anchors or customized framing brackets'
      },
      applications: [
        'Apartment windows and balcony railings',
        'Staircase wells, banisters, and balustrades',
        'Play schools, nurseries, and kid play areas'
      ],
      installationInfo: 'We place hook anchors closer together than standard nets to ensure high tension, eliminating any flexible pockets that a child could potentially push through.',
      faqs: [
        {
          question: 'What makes children safety nets different from standard balcony nets?',
          answer: 'Children safety nets are installed with closer anchor spacings (hooks placed at tighter intervals) to ensure the net remains extremely taut. This prevents children from creating flexible gaps or pushing underneath the net.'
        },
        {
          question: 'Can these safety nets be installed in school staircases and corridors?',
          answer: 'Yes. We install safety grids in school corridors, open stairwells, balconies, and indoor playgrounds across Chennai to ensure child safety.'
        },
        {
          question: 'What mesh size is recommended for child safety?',
          answer: 'We typically recommend a mesh size of 30mm. This size is small enough to prevent a child\'s limbs from getting trapped or passing through, while maintaining great visibility.'
        },
        {
          question: 'Will child safety nets block the emergency exit routes?',
          answer: 'We install them to provide safety while ensuring they can be quickly cut or removed by emergency rescue personnel if a fire or critical situation arises.'
        }
      ]
    },
    {
      id: 'bird-protection-nets',
      name: 'Bird Protection Nets',
      seoTitle: 'Bird Protection Nets in Chennai | Balcony Bird Netting',
      shortDesc: 'Keep birds out of pipeline shafts, building ducts, and open ceiling areas in Chennai with durable netting.',
      longDesc: 'Crows, pigeons, and other birds nesting in plumbing ducts and building voids can cause structural damage and unhygienic conditions. Our Bird Protection Nets provide an effective physical barrier to enclose these open building ducts, preventing birds from entering or nesting in Chennai properties.',
      icon: '🦅',
      imageUrl: 'assets/images/services/bird-protection-nets.webp',
      features: [
        'Prevents birds from nesting in building ductwells and shafts',
        'Minimizes bird-related noise and droppings in ventilation spaces',
        'Durable outdoor-grade netting that handles coastal air',
        'Allows natural light and ventilation into the plumbing ducts'
      ],
      specifications: {
        'Material': 'Weather-resistant HDPE polyethylene netting',
        'Mesh Size': 'Customized based on target bird species requirements (40mm - 50mm)',
        'Thread Thickness': '0.7mm to 1.5mm monofilament configuration',
        'Warranty': 'Warranty options available depending on material grade selected',
        'Mounting Option': 'Steel perimeter wire and ring clips'
      },
      applications: [
        'Ventilation shafts and ductwells in residential apartments',
        'AC ledges and pipeline pathways in commercial offices',
        'Open spaces beneath building roofs and sunshades'
      ],
      installationInfo: 'For deep building ducts, our technicians use safety harnesses to access structural well-points, secure steel cables around the perimeter, and hook the bird netting tightly.',
      faqs: [
        {
          question: 'Can bird protection nets be installed in high-rise plumbing ducts?',
          answer: 'Yes. Our rope-access technicians are trained in professional industrial climbing to safely access deep AC ledges and plumbing shafts in high-rise apartments.'
        },
        {
          question: 'Will the bird net block fresh air from our bathroom ventilators?',
          answer: 'No. The netting has wide mesh spacing (typically 1.5 to 2 inches) which is perfect for keeping crows and larger birds out while allowing 100% ventilation and natural airflow.'
        },
        {
          question: 'What netting material is best for bird blocking?',
          answer: 'High-density polyethylene (HDPE) monofilament netting is the most durable option for open ducts. It is sun-proof, rain-proof, and does not absorb moisture.'
        },
        {
          question: 'How do you prevent birds from entering from the sides or bottom?',
          answer: 'We anchor the net tightly around all concrete edges with no gaps, ensuring birds cannot find any entrance points into the shaft.'
        }
      ]
    },
    {
      id: 'pigeon-nets',
      name: 'Pigeon Nets',
      seoTitle: 'Pigeon Nets in Chennai | Pigeon Protection Netting',
      shortDesc: 'Keep balconies and window ledges clean and hygienic with transparent pigeon safety netting in Chennai.',
      longDesc: 'Pigeon droppings in balconies can lead to bad odors and respiratory issues. Our Pigeon Nets provide a clean, humane barrier to block pigeons from nesting. Using lightweight transparent nylon fibers, these nets secure your balconies and sunshades in Chennai while remaining unobtrusive to your building\'s exterior look.',
      icon: '🐦',
      imageUrl: 'assets/images/services/pigeon-nets.webp',
      features: [
        'Creates a barrier to prevent pigeon entry',
        'Thin, transparent thread options to maintain facade aesthetics',
        'Hygienic solution that prevents nest building',
        'Tailored installation for balconies, windows, and AC sunshades'
      ],
      specifications: {
        'Material': 'Transparent monofilament nylon or copolymer HDPE',
        'Mesh Size': 'Standard pigeon block size (typically 28mm - 40mm)',
        'Thread Diameter': 'Available options depend on the installation requirement',
        'Warranty': 'Warranty options available depending on material grade selected',
        'Boundary System': 'Tensioned stainless steel perimeter wire'
      },
      applications: [
        'Balconies and sunshades in residential apartments',
        'Air conditioner ledges and sunshades',
        'Open window frames and ductways'
      ],
      installationInfo: 'We anchor a stainless steel support wire along the perimeter of the opening, clip the lightweight net to the wire, and secure it cleanly to avoid any entrance gaps.',
      faqs: [
        {
          question: 'Are pigeon nets visible from a distance?',
          answer: 'Our transparent nylon monofilament nets are extremely thin yet durable, making them virtually invisible from a distance of 3-5 meters, preserving your building\'s facade look.'
        },
        {
          question: 'Can pigeons chew or break through the netting?',
          answer: 'Pigeons cannot chew through the HDPE or nylon monofilament nets. However, if you have rodent problems (rats or squirrels), we recommend using wire-mesh-reinforced safety nets.'
        },
        {
          question: 'How do you install nets on AC ledges without drilling into AC outdoor units?',
          answer: 'We only drill into the concrete structural sunshades or walls around the AC ledge. We do not drill or damage your AC units or pipes.'
        },
        {
          question: 'Is pigeon netting safe for domestic pets like cats?',
          answer: 'Yes. The netting provides a safe barrier to keep pigeons out and also prevents indoor cats from slipping off AC ledges or balconies.'
        }
      ]
    },
    {
      id: 'invisible-grills',
      name: 'Invisible Grills',
      seoTitle: 'Invisible Grills in Chennai | Modern Balcony Grills installation',
      shortDesc: 'Modern stainless steel cable grills that secure balconies and windows in Chennai without blocking your view.',
      longDesc: 'Our Invisible Grills offer a modern safety alternative to traditional iron grills. Made of thin, high-strength stainless steel cables wrapped in protective nylon, they are spaced at fixed intervals along structural tracks. This provides fall protection for balconies and windows in Chennai while keeping your outdoor view completely open.',
      icon: '🪟',
      imageUrl: 'assets/images/services/invisible-grills.webp',
      features: [
        'Provides fall protection without blocking natural views',
        'Made of rust-resistant stainless steel core cables',
        'Teflon/nylon wrapping to protect children from wire contact',
        'Professional mounting frames that fit flat or curved walls'
      ],
      specifications: {
        'Material': 'Stainless steel wire core (SS316)',
        'Cable Thickness': 'Typically 2.0mm - 4.0mm (inclusive of nylon coating)',
        'Spacing Gap': 'Customized spacing (Typically 2, 3, or 4 inches)',
        'Support Tracks': 'Heavy-duty structural aluminum tracks',
        'Warranty': 'Warranty options available (Contact for details)'
      },
      applications: [
        'High-rise apartment balcony frames and windows',
        'Villas with open upper terrace boundaries',
        'Staircase railings and modern indoor banisters',
        'Corporate office glass facades and Sunshades'
      ],
      installationInfo: 'We secure heavy-duty aluminum tracks to the top and bottom structure, run the stainless steel cable at fixed tension, lock the wires into place, and cover the tracks with clean matching caps.',
      faqs: [
        {
          question: 'What are invisible grills made of?',
          answer: 'They are made of high-tensile marine-grade SS316 stainless steel cables. Each cable is wrapped in a thick protective nylon membrane to prevent scratching and rust.'
        },
        {
          question: 'Do invisible grills rust in Chennai\'s coastal environment?',
          answer: 'No. The marine-grade SS316 core and nylon casing ensure they are completely rust-resistant, even in high humidity and salty air near ECR or OMR.'
        },
        {
          question: 'Can invisible grills prevent home break-ins?',
          answer: 'Invisible grills act as an excellent safety barrier against accidental falls. While they are very strong, they are not a replacement for high-security steel burglar bars, as they can be cut with specialized wire cutters during emergency egress situations.'
        },
        {
          question: 'What spacing is recommended for invisible grills?',
          answer: 'We typically install invisible grills with a gap of 2 inches (for toddlers and pets) or 3 to 4 inches (for general balcony safety).'
        },
        {
          question: 'How are invisible grills cleaned?',
          answer: 'You can simply wipe the nylon-coated cables with a damp microfiber cloth to clean off any dust. They require zero painting or oiling.'
        }
      ]
    },
    {
      id: 'box-cricket-nets',
      name: 'Box Cricket Nets',
      seoTitle: 'Box Cricket Nets in Chennai | Sports Netting cages',
      shortDesc: 'Custom-designed heavy-duty sports netting cages for terrace and ground cricket pitches in Chennai.',
      longDesc: 'Box cricket is a popular sport in urban areas with limited playground space. We build custom box cricket cages for terrace tops, vacant plots, and sports clubs. Using thick multi-strand nets, we build enclosed netting boxes in Chennai that keep the cricket ball inside the pitch, protecting neighboring windows and vehicles.',
      icon: '🏏',
      imageUrl: 'assets/images/services/box-cricket-nets.webp',
      features: [
        'Complete 5-sided box enclosure configuration (sides, top, and back)',
        'Heavy-duty multi-strand nets designed to absorb high-impact hits',
        'Weatherproof netting built for outdoor usage',
        'Custom post structure setup with stable steel supports'
      ],
      specifications: {
        'Material': 'Durable multi-strand synthetic sports nets (Nylon / HDPE)',
        'Mesh Size': 'Cricket ball safety grid size (typically 35mm - 50mm)',
        'Cord Thickness': '2.0mm to 4.0mm heavy-gauge netting options',
        'Support Frame': 'Heavy structural Galvanized Iron (GI) pipe structures',
        'Warranty': 'Warranty options available (Contact for details)'
      },
      applications: [
        'Residential building terrace spaces',
        'Commercial sports turf clubs and play areas',
        'Schools and colleges sports yards'
      ],
      installationInfo: 'We erect support columns, weld cross-beams for structure, suspend the heavy nylon sports net from the steel framework, and secure the bottom edge.',
      faqs: [
        {
          question: 'What height is recommended for terrace box cricket nets in Chennai?',
          answer: 'For terrace installations, we recommend a height of 10 to 15 feet with a top ceiling net cover. This prevents cricket balls from flying out and causing injury or property damage below.'
        },
        {
          question: 'What netting material is used for box cricket nets?',
          answer: 'We use thick, multi-strand braided nylon or HDPE nets that can absorb high-impact ball hits without tearing or stretching.'
        },
        {
          question: 'How are the support structures installed?',
          answer: 'We install heavy-duty GI (Galvanized Iron) posts securely anchored to the floor concrete using expansion bolts and brace supports to withstand windy Chennai weather.'
        },
        {
          question: 'Can these nets be customized for indoor play areas?',
          answer: 'Yes. We customize box cricket grid layouts to fit commercial indoor sports facilities, school halls, and residential yards.'
        }
      ]
    },
    {
      id: 'sports-nets',
      name: 'Sports Nets',
      seoTitle: 'Sports Nets in Chennai | Sports boundary netting',
      shortDesc: 'Sports netting barriers for football courts, volleyball courts, and golf ranges in Chennai.',
      longDesc: 'We install sports netting barriers for school play fields, clubhouses, and corporate complexes in Chennai. Whether you need a divider net for a tennis court, a volleyball boundary net, or a high-impact golf fence, we supply and install double-knotted nets that can withstand high impact.',
      icon: '⚽',
      imageUrl: 'assets/images/services/sports-nets.webp',
      features: [
        'Double-knotted mesh construction to prevent grid deformation',
        'Available in different wire thicknesses and mesh patterns based on sport',
        'Heavy-duty border ropes for high-tension suspension',
        'UV-stabilized material that maintains strength in sun and rain'
      ],
      specifications: {
        'Material': 'High-strength nylon or copolymer sports nets',
        'Mesh Pattern': 'Customized based on sport type requirements',
        'Cord Diameter': 'Available options depend on the target sport specifications',
        'Color Options': 'Standard sports colors (Green, Black, Blue)',
        'Warranty': 'Warranty options available (Contact for details)'
      },
      applications: [
        'School and university sports fields',
        'Community park play courts',
        'Terrace football courts',
        'Golf range perimeter barriers'
      ],
      installationInfo: 'We configure high-tension suspension cables between steel support posts or buildings, hang the nets using heavy clips, and secure the bottom edge.',
      faqs: [
        {
          question: 'What sports safety nets do you install?',
          answer: 'We install safety netting for football court boundaries, volleyball courts, tennis court surrounds, golf ranges, and badminton play zones.'
        },
        {
          question: 'How do you ensure the sports nets can withstand high wind loads?',
          answer: 'We use heavy-duty galvanized iron pipes, double-stitched border ropes, and high-tension tensioners to anchor the sports net firmly against high wind speeds.'
        },
        {
          question: 'What mesh sizes are used for different sports?',
          answer: 'We customize the grid size according to the sport (e.g., 20mm mesh for golf ball containment, 40mm-50mm for cricket, and 80mm-100mm for football).'
        },
        {
          question: 'Can we open or retract the sports net when not in use?',
          answer: 'Yes. We can design sliding pulley systems or curtain hooks so you can retract the netting boundary when necessary.'
        }
      ]
    },
    {
      id: 'industrial-safety-nets',
      name: 'Industrial Safety Nets',
      seoTitle: 'Industrial Safety Nets in Chennai | Work fall prevention nets',
      shortDesc: 'High-impact debris containment and fall arrest nets compliant with industrial safety guidelines in Chennai.',
      longDesc: 'In construction and industrial environments in Chennai, safety is paramount. Our Industrial Safety Nets act as a reliable fallback system to protect workers and catch falling debris or tools. Fabricated according to industrial load-bearing standards, they feature thick border ropes and impact-absorbing weave patterns to keep your sites safe.',
      icon: '🏗️',
      imageUrl: 'assets/images/services/industrial-safety-nets.webp',
      features: [
        'Certified fall-arrest rating (tested for heavy impact loads)',
        'Heavy-duty border ropes stitched with high-tension knots',
        'Debris containment overlay option (tighter mesh backing)',
        'Complies with national and international workplace safety norms'
      ],
      specifications: {
        'Material': 'High-Tenacity Polypropylene Cords / Nylon Ropes',
        'Border Rope Diameter': 'Heavy-gauge border rope bindings',
        'Mesh Rope Diameter': 'Varying sizes depending on safety load specifications',
        'Grid Spacing': 'Customized based on safety requirements',
        'Standard Conformity': 'Built in compliance with industrial safety guidelines'
      },
      applications: [
        'High-rise building construction frameworks',
        'Industrial factory warehouse roof installations',
        'Shipyard safety enclosures',
        'Loading dock fall-arrest zones'
      ],
      installationInfo: 'We install the nets using high-strength tie ropes secured to structural columns or steel scaffolds, creating a flexible safety hammock.',
      faqs: [
        {
          question: 'What standard compliant industrial nets do you offer?',
          answer: 'We offer high-impact fall arrest nets, debris containment nets, and cargo cargo-securing nets fabricated for industrial site safety.'
        },
        {
          question: 'Can your crew install safety nets on active construction sites?',
          answer: 'Yes. Our technicians are fully equipped with safety harnesses, helmets, and follow site safety protocols for installation.'
        },
        {
          question: 'What is the benefit of a double-layer industrial net?',
          answer: 'A double-layer net uses a thick rope net to catch falling workers (fall arrest) and a secondary fine mesh overlay to catch falling tools, debris, screws, or materials.'
        },
        {
          question: 'How often should industrial safety nets be inspected?',
          answer: 'We recommend inspecting the nets and anchoring points weekly or after any major impact event to ensure load tension remains compliant.'
        }
      ]
    }
  ] as ServiceInfo[],
  projects: [
    {
      title: 'Balcony Safety Net Installation',
      category: 'Balcony Safety Nets',
      serviceName: 'Balcony Safety Nets',
      location: 'Velachery, Chennai',
      description: 'Heavy-duty HDPE balcony netting installation for high-rise apartment fall protection.',
      imageUrl: 'assets/images/gallery/balcony-work.webp',
      serviceId: 'balcony-safety-nets'
    },
    {
      title: 'Invisible Grills Installation',
      category: 'Invisible Grills',
      serviceName: 'Invisible Grills',
      location: 'Anna Nagar, Chennai',
      description: 'Rust-proof SS316 invisible grill setup for premium residential apartment window frames.',
      imageUrl: 'assets/images/gallery/grill-work.webp',
      serviceId: 'invisible-grills'
    },
    {
      title: 'Terrace Sports Netting Arrangement',
      category: 'Sports Nets',
      serviceName: 'Sports Nets',
      location: 'Sholinganallur, Chennai',
      description: 'Terrace-top box cricket cage installation for sports practice and safety containment.',
      imageUrl: 'assets/images/gallery/sports-work.webp',
      serviceId: 'sports-nets'
    },
    {
      title: 'Apartment Pigeon Protection Net',
      category: 'Bird Protection Nets',
      serviceName: 'Pigeon Nets',
      location: 'Adyar, Chennai',
      description: 'Transparent bird protection netting fitted tightly over balcony utility areas.',
      imageUrl: 'assets/images/services/pigeon-nets.webp',
      serviceId: 'pigeon-nets'
    },
    {
      title: 'Child Safety Net Mesh Installation',
      category: 'Children Safety Nets',
      serviceName: 'Children Safety Nets',
      location: 'OMR, Chennai',
      description: 'UV-resistant child safety netting installed on high-rise open balconies.',
      imageUrl: 'assets/images/services/children-safety-nets.webp',
      serviceId: 'children-safety-nets'
    },
    {
      title: 'Industrial Safety Net Fitting',
      category: 'Industrial Safety Nets',
      serviceName: 'Industrial Safety Nets',
      location: 'Ambattur, Chennai',
      description: 'Heavy-duty structural fall protection netting for commercial warehouse shafts.',
      imageUrl: 'assets/images/services/industrial-safety-nets.webp',
      serviceId: 'industrial-safety-nets'
    }
  ] as any[],
  reviews: [
    {
      name: 'Santhosh K.',
      area: 'Velachery',
      service: 'Balcony Safety Nets',
      text: 'Great experience with Ashwini Safety Nets! Quick response, on-time installation, and top-quality nets for our balcony.',
      rating: 5,
      date: 'August 2026'
    },
    {
      name: 'Priya R.',
      area: 'Anna Nagar',
      service: 'Invisible Grills',
      text: 'The invisible grills look very sleek on our windows. It provides safety without blocking our outdoor view.',
      rating: 5,
      date: 'August 2026'
    },
    {
      name: 'Rajesh M.',
      area: 'Adyar',
      service: 'Pigeon Protection Nets',
      text: 'Good service for pigeon nets. The technicians were experienced and finished the installation securely.',
      rating: 5,
      date: 'July 2026'
    },
    {
      name: 'Karthik V.',
      area: 'OMR, Sholinganallur',
      service: 'Box Cricket Nets',
      text: 'Installed terrace cricket net for our apartment community. Professional rope work and solid tension finish.',
      rating: 5,
      date: 'July 2026'
    },
    {
      name: 'Meenakshi Sundaram',
      area: 'Porur',
      service: 'Children Safety Nets',
      text: 'Prompt doorstep measurement and installation within a few hours. Complete peace of mind for our kids on the 8th floor.',
      rating: 5,
      date: 'June 2026'
    },
    {
      name: 'Venkatesh Babu',
      area: 'Tambaram',
      service: 'Industrial Safety Nets',
      text: 'Installed debris netting for our commercial site. Compliant materials and prompt project delivery.',
      rating: 5,
      date: 'May 2026'
    }
  ] as any[],
  blogs: [
    {
      slug: 'safety-nets-for-balconies-chennai-guide',
      title: 'Safety Nets for Balconies in Chennai: Complete Guide',
      category: 'Balcony Safety',
      readTime: '5 min read',
      date: 'August 2026',
      imageUrl: 'assets/images/services/balcony-safety-nets.webp',
      serviceLink: '/services/balcony-safety-nets',
      serviceName: 'Balcony Safety Nets',
      excerpt: 'Everything you need to know about balcony safety nets in Chennai apartments—materials, installation process, durability, and balcony child protection.',
      content: `
        <p>Living in high-rise apartments across Chennai offers wonderful city views, but open balconies and windows present serious safety risks for children, elderly family members, and pets. Installing professional <strong>Balcony Safety Nets in Chennai</strong> is the most reliable, cost-effective way to secure open outdoor spaces without obstructing ventilation or views.</p>
        
        <h3>Why Balcony Safety Nets Are Essential for Chennai Apartments</h3>
        <p>Modern residential high-rises in areas like Velachery, OMR, Anna Nagar, and Porur feature wide balcony openings. Standard railings often leave dangerous gaps. High-density polyethylene (HDPE) safety nets act as a robust physical barrier that prevents accidental falls while allowing natural breeze and light to pass freely.</p>

        <h3>Key Features of Quality Safety Nets</h3>
        <ul>
          <li><strong>UV-Stabilized HDPE Polymer:</strong> Extruded with ultraviolet inhibitors to withstand intense coastal sun rays without degrading.</li>
          <li><strong>High Breaking Strength:</strong> Engineered to bear heavy impact loads and tension over long periods.</li>
          <li><strong>Weather & Rust Resistance:</strong> Anchored using stainless steel hardware that withstands humid monsoon conditions in Chennai.</li>
        </ul>

        <h3>How Professional Installation Works</h3>
        <p>Professional technicians measure balcony dimensions accurately, install heavy-duty wall anchors every few inches, run stainless steel perimeter cables, and tie the safety net mesh with uniform tension to prevent any sagging or looseness.</p>
      `
    },
    {
      slug: 'best-safety-nets-for-children-and-pets',
      title: 'Best Safety Nets for Children and Pets',
      category: 'Child Protection',
      readTime: '4 min read',
      date: 'August 2026',
      imageUrl: 'assets/images/services/children-safety-nets.webp',
      serviceLink: '/services/children-safety-nets',
      serviceName: 'Children Safety Nets',
      excerpt: 'Discover how child safety netting provides total peace of mind for families living in multi-story apartments and villas.',
      content: `
        <p>Children are naturally curious and energetic, making open balcony railings and window ledges constant areas of concern for parents. Installing specialized <strong>Children Safety Nets</strong> creates a protective shield that keeps young ones safe while playing near open spaces.</p>

        <h3>Choosing Net Mesh Sizes for Kids and Pets</h3>
        <p>For children and household pets like cats or dogs, a tight mesh size (typically 25mm to 40mm) is recommended. This prevents small hands or paws from getting caught while ensuring full structural integrity.</p>

        <h3>Key Advantages of Child Safety Netting</h3>
        <ul>
          <li>Uncompromising fall protection for kids and toddlers.</li>
          <li>Neat visual appearance that complements apartment interiors.</li>
          <li>Easy maintenance and long service life.</li>
        </ul>
      `
    },
    {
      slug: 'pigeon-protection-nets-for-balconies-chennai',
      title: 'Pigeon Protection Nets for Balconies in Chennai',
      category: 'Bird Control',
      readTime: '4 min read',
      date: 'August 2026',
      imageUrl: 'assets/images/services/bird-protection-nets.webp',
      serviceLink: '/services/bird-protection-nets',
      serviceName: 'Bird Protection Nets',
      excerpt: 'Keep pigeons away from your balcony, duct shafts, and AC units permanently with humanely installed bird protection nets.',
      content: `
        <p>Pigeons and birds nesting on apartment balconies, duct areas, and AC compressors present significant hygiene and health risks. <strong>Bird Protection Nets in Chennai</strong> provide a humane, maintenance-free solution to keep balconies clean and pigeon-free.</p>

        <h3>Why Chemical Repellents Fail</h3>
        <p>Spikes or spray repellents are often temporary or ineffective over large balcony openings. High-strength nylon or HDPE translucent bird nets physically prevent birds from entering without harming them.</p>

        <h3>Benefits of Bird Net Installation</h3>
        <ul>
          <li>Protects balcony floors and washing machines from bird droppings.</li>
          <li>Prevents respiratory health hazards associated with dried bird waste.</li>
          <li>Nearly invisible from a distance, maintaining building aesthetic.</li>
        </ul>
      `
    },
    {
      slug: 'invisible-grills-vs-traditional-grills',
      title: 'Invisible Grills vs Traditional Grills: Which is Better?',
      category: 'Invisible Grills',
      readTime: '5 min read',
      date: 'July 2026',
      imageUrl: 'assets/images/services/invisible-grills.webp',
      serviceLink: '/services/invisible-grills',
      serviceName: 'Invisible Grills',
      excerpt: 'Compare SS316 stainless steel invisible grills against bulky iron grills for modern apartment balcony security and clear outdoor views.',
      content: `
        <p>When securing high-rise balconies and windows, homeowners traditionally relied on heavy iron or aluminum grates. Today, <strong>Invisible Grills</strong> have emerged as the preferred architectural alternative in Chennai.</p>

        <h3>What Are Invisible Grills?</h3>
        <p>Invisible grills consist of high-tensile SS316 marine-grade stainless steel cables encased in protective nylon coating, spaced 2 to 4 inches apart across balcony openings.</p>

        <h3>Comparing Key Features</h3>
        <ul>
          <li><strong>View & Ventilation:</strong> Invisible grills provide unobstructed panoramic views, unlike thick iron bars.</li>
          <li><strong>Rust Resistance:</strong> Marine-grade SS316 steel does not rust or corrode in coastal air.</li>
          <li><strong>Safety & Emergency Exit:</strong> High tensile strength prevents accidental falls, yet cables can be cut with wire cutters in emergencies.</li>
        </ul>
      `
    },
    {
      slug: 'how-much-do-safety-nets-cost-in-chennai',
      title: 'How Much Do Safety Nets Cost in Chennai? Price Guide',
      category: 'Pricing Guide',
      readTime: '4 min read',
      date: 'July 2026',
      imageUrl: 'assets/images/services/safety-nets.webp',
      serviceLink: '/services/safety-nets',
      serviceName: 'Safety Nets',
      excerpt: 'Understand how safety net pricing is calculated per square foot in Chennai based on material grade, net type, and installation area.',
      content: `
        <p>Calculating the cost of installing safety nets in Chennai depends on total square footage, material selection, height accessibility, and specific net types.</p>

        <h3>Factors Influencing Installation Pricing</h3>
        <ul>
          <li><strong>Total Area (Square Feet):</strong> Larger balconies or duct shafts enjoy volume cost benefits.</li>
          <li><strong>Net Material Grade:</strong> Premium UV-treated HDPE or SS316 steel cables offer greater longevity.</li>
          <li><strong>Installation Hardware:</strong> Heavy-duty stainless steel wall anchors ensure long-term stability.</li>
        </ul>
        <p>Contact <strong>Ashwini Safety Nets</strong> for a free doorstep measurement and precise quote across Chennai.</p>
      `
    },
    {
      slug: 'how-to-choose-the-right-balcony-safety-net',
      title: 'How to Choose the Right Balcony Safety Net',
      category: 'Balcony Safety',
      readTime: '4 min read',
      date: 'July 2026',
      imageUrl: 'assets/images/services/balcony-safety-nets.webp',
      serviceLink: '/services/balcony-safety-nets',
      serviceName: 'Balcony Safety Nets',
      excerpt: 'Key factors to inspect when selecting safety nets for your home, including breaking strength, UV protection, and warranty.',
      content: `
        <p>Selecting the right safety net requires evaluating mesh thickness, UV stabilization, and professional anchoring techniques tailored to your building structure.</p>

        <h3>Checklist for Homeowners</h3>
        <ul>
          <li>Verify UV resistance to ensure nets won’t become brittle under sun exposure.</li>
          <li>Inspect installation hardware to ensure anti-rust stainless steel fasteners are used.</li>
          <li>Choose experienced installers with proper height safety gear.</li>
        </ul>
      `
    },
    {
      slug: 'benefits-of-installing-invisible-grills',
      title: 'Benefits of Installing Invisible Grills in High-Rise Buildings',
      category: 'Invisible Grills',
      readTime: '4 min read',
      date: 'June 2026',
      imageUrl: 'assets/images/services/invisible-grills.webp',
      serviceLink: '/services/invisible-grills',
      serviceName: 'Invisible Grills',
      excerpt: 'Why high-rise apartment owners in Chennai prefer invisible grills for safety, modern aesthetics, and clear city skyline views.',
      content: `
        <p>High-rise residential towers require specialized safety solutions that handle high wind pressure while keeping balconies secure for kids and pets.</p>

        <h3>Top Benefits for High-Rise Apartments</h3>
        <ul>
          <li>Sleek, invisible appearance from ground level.</li>
          <li>No restriction of natural sunlight or wind flow.</li>
          <li>Zero maintenance required compared to painted iron grills.</li>
        </ul>
      `
    },
    {
      slug: 'balcony-safety-tips-for-families-in-apartments',
      title: 'Balcony Safety Tips for Families in High-Rise Apartments',
      category: 'Safety Advice',
      readTime: '4 min read',
      date: 'June 2026',
      imageUrl: 'assets/images/gallery/balcony-work.webp',
      serviceLink: '/services/balcony-safety-nets',
      serviceName: 'Balcony Safety Nets',
      excerpt: 'Essential balcony safety practices for multi-story apartment living with young children and pets in Chennai.',
      content: `
        <p>Creating a safe environment on balcony spaces involves combining secure physical netting with active safety habits.</p>

        <h3>Practical Balcony Safety Recommendations</h3>
        <ul>
          <li>Keep outdoor furniture and planters away from railing edges to prevent climbing.</li>
          <li>Install high-tension safety netting across open balcony perimeters.</li>
          <li>Regularly inspect anchors and cable tension for firm security.</li>
        </ul>
      `
    },
    {
      slug: 'how-professional-safety-net-installation-works',
      title: 'How Professional Safety Net Installation Works Step-by-Step',
      category: 'Installation Process',
      readTime: '4 min read',
      date: 'May 2026',
      imageUrl: 'assets/images/gallery/grill-work.webp',
      serviceLink: '/services/safety-nets',
      serviceName: 'Safety Nets',
      excerpt: 'Learn how expert safety net technicians conduct site inspection, anchor drilling, cable tensioning, and quality testing.',
      content: `
        <p>A high-quality safety net relies as much on professional installation techniques as it does on raw material strength.</p>

        <h3>The Step-by-Step Installation Workflow</h3>
        <ol>
          <li><strong>Step 1: Doorstep Measurement:</strong> Assessing site geometry, railing types, and wall structure.</li>
          <li><strong>Step 2: Wall Anchoring:</strong> Drilling heavy-duty stainless steel hook fasteners into solid concrete.</li>
          <li><strong>Step 3: Cable Tensioning:</strong> Running perimeter support wire to hold the net taut.</li>
          <li><strong>Step 4: Net Attachment & Inspection:</strong> Tying the net mesh securely and verifying load resistance.</li>
        </ol>
      `
    },
    {
      slug: 'safety-nets-for-apartments-and-high-rise-buildings',
      title: 'Safety Nets for Apartments and High-Rise Buildings in Chennai',
      category: 'Building Safety',
      readTime: '5 min read',
      date: 'May 2026',
      imageUrl: 'assets/images/services/industrial-safety-nets.webp',
      serviceLink: '/services/industrial-safety-nets',
      serviceName: 'Industrial Safety Nets',
      excerpt: 'Comprehensive safety netting solutions for residential societies, commercial duct shafts, terrace courtyards, and balconies.',
      content: `
        <p>Apartment associations and gated communities across Chennai require certified safety netting across duct voids, stairwells, and balcony facades.</p>

        <h3>Comprehensive Building Netting Solutions</h3>
        <ul>
          <li><strong>Duct Shaft Netting:</strong> Enclosing central building voids to prevent pigeon nesting and falling objects.</li>
          <li><strong>Balcony Safety Netting:</strong> Custom-fitted protection for individual flat balconies.</li>
          <li><strong>Sports & Play Netting:</strong> Terrace box cricket cages and children playground safety grids.</li>
        </ul>
        <p>Ashwini Safety Nets provides end-to-end installation services for individual homeowners and apartment associations throughout Chennai.</p>
      `
    }
  ] as any[],
  faqs: [
    {
      question: 'How long do balcony safety nets last?',
      answer: 'Our high-density copolymer HDPE safety nets are UV-stabilized and last for multiple years under normal weather exposure in Chennai.'
    },
    {
      question: 'Are safety nets suitable for children?',
      answer: 'Yes, safety nets are highly suitable for children and pets. They act as a strong physical barrier to prevent accidental falls from open corridors, windows, or high-rise balconies.'
    },
    {
      question: 'Are the nets UV resistant?',
      answer: 'Yes, all our netting products are treated with ultraviolet inhibitors during raw material extrusion to prevent decay or brittleness caused by direct sun rays.'
    },
    {
      question: 'Are safety nets visible from outside?',
      answer: 'From a distance of a few meters away, transparent and light-colored netting products are practically invisible, keeping the building exterior design clean.'
    },
    {
      question: 'Do you provide safety net installation in Chennai?',
      answer: 'Yes, Ashwini Safety Nets offers professional measurement, delivery, and installation services across all neighborhoods in Chennai, Tamil Nadu.'
    },
    {
      question: 'How is the safety net installation done?',
      answer: 'Our rope-access climbers and safety technicians drill anchoring fasteners into concrete walls or railings, install high-tension perimeter cables, and tie the safety net securely to prevent any sagging.'
    },
    {
      question: 'Can safety nets be installed in apartments?',
      answer: 'Yes, safety nets can be installed in apartments, multi-story flats, individual villas, commercial office spaces, and industrial voids.'
    },
    {
      question: 'Do you provide invisible grill installation?',
      answer: 'Yes, we provide premium SS316 stainless steel invisible grills custom-spaced (2 to 4 inches apart) for high-rise apartment balconies and window openings.'
    },
    {
      question: 'How can I request a quote?',
      answer: 'You can submit your requirements through our online quote form, message us directly on WhatsApp, or call us at 9676510575 for a free doorstep evaluation.'
    }
  ],
  serviceChooseUs: [
    {
      title: 'Premium Quality Materials',
      description: 'We source high-durability HDPE copolymer nets and SS316 marine-grade steel cables.',
      icon: '🛡️'
    },
    {
      title: 'Professional Installation',
      description: 'Our experienced rope-access climbers install anchors securely at heights.',
      icon: '🛠️'
    },
    {
      title: 'Neat Finishing',
      description: 'We drill cleanly, tension the grids perfectly, and clean up workspace debris.',
      icon: '🧹'
    },
    {
      title: 'Chennai-Wide Service',
      description: 'Quick doorstep measurement, delivery, and installation support across Chennai.',
      icon: '📍'
    }
  ],
  serviceProcess: [
    {
      step: '01',
      title: 'Contact & Requirement',
      description: 'Understand the customer\'s requirement and safety net service type.'
    },
    {
      step: '02',
      title: 'Site Measurement',
      description: 'Check the installation area and measurements on-site.'
    },
    {
      step: '03',
      title: 'Professional Installation',
      description: 'Install the selected safety solution carefully with secure anchors.'
    },
    {
      step: '04',
      title: 'Final Inspection',
      description: 'Check the installation and finishing before completion.'
    }
  ]
};
