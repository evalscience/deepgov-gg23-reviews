import type { Application } from "@/lib/types"

export const mockApplications: Application[] = [
  {
    id: "app-001",
    title: "GainForest",
    author: "0x40713C...2563c1eCE",
    submittedAt: "2025-03-01T09:00:00Z",
    abstract:
      'GainForest is a global non-profit and one of six finalists of the XPRIZE rainforest competition, with the mission to halt and reverse global deforestation by 2030. Our platform brings transparency to over 25 conservation and restoration projects around the world. On the financial side, the flow of funds towards a conservation project are transparently displayed on our platform. On the conservation and restoration side, local communities use a variety of dMRV (Decentralized Monitoring, Reporting and Verification) and DePIN (Decentralized Physical Infrastructure Network) techniques to show "Proof of Care", or proof that the funds are used towards sustainable stewardship. This brings local employment to the communities, and allows us to gather vast amounts of machine learning-ready forest data.',
    status: "approved",
    votes: 55024,
    website: "https://www.gainforest.earth",
    reviews: {
      community: {
        score: 9,
        strengths:
          "Exceptional community engagement through direct involvement of local populations in conservation efforts. The project has successfully onboarded 25 project sites and distributed over $20,000 in funds to community members, creating new environmental jobs.",
        weaknesses:
          "While global reach is impressive (14 countries), scaling community engagement models across diverse cultural contexts may present challenges.",
        recommendations:
          "Consider developing region-specific community engagement frameworks that account for cultural differences while maintaining core measurement methodologies.",
      },
      equity: {
        score: 8,
        strengths:
          "Strong focus on empowering local and indigenous communities through direct payments and employment opportunities. Multi-language support (English, Spanish, Portuguese) in the Taina assistant demonstrates commitment to accessibility.",
        weaknesses:
          "More information needed on how benefits are distributed among community members and whether there are mechanisms to ensure equitable participation.",
        recommendations:
          "Develop transparent criteria for fund distribution within communities and implement monitoring systems to ensure benefits reach marginalized groups.",
      },
      efficiency: {
        score: 9,
        strengths:
          "Innovative 'Measure-to-Earn' strategy effectively combines data collection with economic incentives. The integration of blockchain technology provides transparent fund tracking and reduces administrative overhead.",
        weaknesses:
          "Potential technological barriers for some communities that may limit participation in the digital aspects of the program.",
        recommendations:
          "Implement tiered technology adoption strategies that accommodate varying levels of digital literacy while maintaining data integrity.",
      },
      sustainability: {
        score: 10,
        strengths:
          "Directly addresses critical environmental challenges with measurable impact (30,000+ trees measured, 2.74M hectares monitored). The project's focus on long-term stewardship rather than one-time interventions promotes lasting change.",
        weaknesses: "Long-term funding sustainability may be a challenge as the project scales beyond grant funding.",
        recommendations:
          "Explore carbon credit markets and ecosystem service payment mechanisms to create sustainable revenue streams beyond grants and donations.",
      },
      innovation: {
        score: 9,
        strengths:
          "Cutting-edge integration of AI, blockchain, and community-based monitoring. The development of specialized tools like Taina and Polly demonstrates technical innovation with practical applications.",
        weaknesses:
          "Some technologies are still in early stages and may require refinement based on field testing and user feedback.",
        recommendations:
          "Establish a formal feedback loop with community users to continuously improve technological tools and ensure they meet real-world needs.",
      },
    },
    averageScore: 9.0,
  },
  {
    id: "app-002",
    title: "Urban Community Garden Network",
    author: "Jane Smith",
    submittedAt: "2025-03-15T10:30:00Z",
    abstract:
      "This project aims to create a network of community gardens in urban areas to address food insecurity, promote sustainable agriculture, and build community connections. The network will include educational programs, resource sharing, and a digital platform to coordinate volunteers and distribute produce. By transforming vacant lots into productive green spaces, we can improve access to fresh food, enhance urban biodiversity, and create spaces for community engagement and education.",
    status: "pending",
    reviews: {
      community: {
        score: 9,
        strengths:
          "Strong focus on community building and engagement. Addresses real community needs for fresh food and green spaces.",
        weaknesses: "Could benefit from more specific plans for engaging diverse community members.",
        recommendations: "Consider partnerships with local schools and senior centers to broaden impact.",
      },
      equity: {
        score: 8,
        strengths:
          "Targets food insecurity in underserved areas. Plans for multilingual materials and diverse leadership.",
        weaknesses: "Accessibility considerations for people with disabilities could be stronger.",
        recommendations: "Develop specific strategies for ensuring gardens are physically accessible and inclusive.",
      },
      efficiency: {
        score: 7,
        strengths: "Good use of existing resources (vacant lots). Digital platform will streamline coordination.",
        weaknesses: "Maintenance costs and volunteer management may be challenging long-term.",
        recommendations: "Develop a more detailed sustainability plan for ongoing operations and maintenance.",
      },
      sustainability: {
        score: 9,
        strengths:
          "Excellent environmental benefits. Uses sustainable growing practices and improves urban green space.",
        weaknesses: "Water usage plans could be more detailed for drought conditions.",
        recommendations: "Incorporate rainwater harvesting and gray water systems into garden designs.",
      },
      innovation: {
        score: 7,
        strengths:
          "Digital platform integration is innovative. Combines traditional gardening with modern coordination tools.",
        weaknesses: "Core concept of community gardens is not new, though implementation has some novel elements.",
        recommendations:
          "Consider incorporating emerging technologies like IoT sensors for soil monitoring and automated irrigation.",
      },
    },
    averageScore: 8.0,
  },
  {
    id: "app-003",
    title: "AI-Powered Waste Sorting System",
    author: "Michael Chen",
    submittedAt: "2025-03-10T14:45:00Z",
    abstract:
      "This project proposes an affordable AI-powered waste sorting system for public spaces and residential buildings. Using computer vision and machine learning, the system automatically identifies and sorts recyclables, compostables, and landfill waste, increasing recycling rates and reducing contamination. The technology includes a user feedback component that educates users about proper waste disposal through a mobile app. Data collected will help municipalities optimize waste management routes and resources while providing valuable insights on consumption patterns.",
    status: "approved",
    reviews: {
      community: {
        score: 7,
        strengths:
          "Addresses a universal community need. Educational component has potential for positive behavior change.",
        weaknesses:
          "May face adoption challenges in some communities. Technology access barriers for some populations.",
        recommendations:
          "Develop strategies for community engagement and technology adoption across different demographics.",
      },
      equity: {
        score: 6,
        strengths: "Could improve waste management in underserved areas. Multilingual app interface planned.",
        weaknesses: "Technology access and digital literacy barriers may limit benefits for some communities.",
        recommendations:
          "Ensure system works without requiring smartphone access. Consider community ambassadors program.",
      },
      efficiency: {
        score: 9,
        strengths:
          "Significant potential for improving waste management efficiency. Reduces contamination and sorting costs.",
        weaknesses: "Initial implementation costs may be high. Requires consistent maintenance and updates.",
        recommendations: "Develop a phased implementation plan to manage costs and demonstrate ROI.",
      },
      sustainability: {
        score: 10,
        strengths:
          "Directly addresses environmental sustainability through improved recycling. Reduces landfill waste.",
        weaknesses: "Energy consumption of AI systems should be considered in environmental impact.",
        recommendations: "Incorporate renewable energy sources for powering the system where possible.",
      },
      innovation: {
        score: 9,
        strengths: "Cutting-edge application of AI and computer vision. Novel approach to a persistent problem.",
        weaknesses: "Similar systems exist in industrial settings, though public implementation is innovative.",
        recommendations:
          "Consider open-sourcing aspects of the technology to encourage further innovation in the field.",
      },
    },
    averageScore: 8.2,
  },
  {
    id: "app-004",
    title: "Intergenerational Skills Exchange Platform",
    author: "Aisha Johnson",
    submittedAt: "2025-03-20T09:15:00Z",
    abstract:
      "This project creates a digital and in-person platform for intergenerational skills exchange, connecting seniors with valuable traditional knowledge and life experience to young people with digital skills and contemporary perspectives. The platform facilitates both virtual and face-to-face mentoring relationships, workshops, and collaborative projects. By bridging generational divides, the program aims to reduce social isolation among seniors, provide valuable guidance to young people, preserve cultural knowledge, and build stronger community bonds across age groups.",
    status: "pending",
    reviews: {
      community: {
        score: 10,
        strengths:
          "Excellent approach to building intergenerational connections. Addresses social isolation and community cohesion.",
        weaknesses: "May face challenges in initial matching and relationship building between generations.",
        recommendations: "Consider structured activities for initial meetings to ease relationship building.",
      },
      equity: {
        score: 8,
        strengths: "Brings together diverse age groups. Plans for accessibility in both digital and physical spaces.",
        weaknesses: "Digital divide may limit participation from some seniors without adequate support.",
        recommendations: "Develop a tech buddy system to help seniors navigate the digital platform.",
      },
      efficiency: {
        score: 7,
        strengths:
          "Leverages existing knowledge and skills in the community. Dual digital/in-person approach is flexible.",
        weaknesses: "Coordination and matching process may require significant staff time.",
        recommendations: "Develop semi-automated matching algorithms to reduce administrative burden.",
      },
      sustainability: {
        score: 8,
        strengths: "Socially sustainable model that builds community resilience. Low environmental impact.",
        weaknesses: "Long-term funding model could be more clearly defined.",
        recommendations:
          "Explore partnership opportunities with educational institutions and senior living communities.",
      },
      innovation: {
        score: 8,
        strengths:
          "Creative combination of traditional mentorship with digital platform. Bidirectional skill sharing is innovative.",
        weaknesses:
          "Core mentorship concept is established, though the intergenerational focus and implementation are fresh.",
        recommendations: "Consider incorporating emerging technologies like VR for virtual skill sharing sessions.",
      },
    },
    averageScore: 8.2,
  },
  {
    id: "app-005",
    title: "Micro-Mobility for Disabilities",
    author: "Robert Williams",
    submittedAt: "2025-03-05T16:20:00Z",
    abstract:
      "This project develops affordable, lightweight, and adaptable micro-mobility devices specifically designed for people with various disabilities and mobility challenges. Unlike traditional mobility aids, these devices are modular, allowing customization based on individual needs, and incorporate smart technology for navigation assistance and obstacle detection. The project includes a community workshop model where devices can be built, repaired, and modified locally, creating employment opportunities while ensuring sustainability through repair and parts recycling programs.",
    status: "rejected",
    reviews: {
      community: {
        score: 8,
        strengths: "Addresses critical mobility needs. Community workshop model builds local capacity and engagement.",
        weaknesses: "May face challenges in reaching the most isolated individuals with mobility limitations.",
        recommendations:
          "Develop outreach strategies specifically targeting isolated individuals through healthcare partnerships.",
      },
      equity: {
        score: 10,
        strengths:
          "Directly addresses accessibility and inclusion for people with disabilities. Affordability focus increases access.",
        weaknesses: "May still be financially out of reach for some without additional subsidy programs.",
        recommendations: "Develop sliding scale payment options and explore healthcare reimbursement possibilities.",
      },
      efficiency: {
        score: 6,
        strengths: "Modular design reduces waste and enables customization. Local production reduces shipping costs.",
        weaknesses: "Small-scale local production may be less efficient than centralized manufacturing.",
        recommendations:
          "Consider a hybrid model with centralized production of core components and local assembly/customization.",
      },
      sustainability: {
        score: 7,
        strengths: "Repair-focused model extends product lifespan. Parts recycling program reduces waste.",
        weaknesses: "Material sourcing and end-of-life considerations could be more detailed.",
        recommendations: "Develop specific guidelines for sustainable material sourcing and end-of-life recycling.",
      },
      innovation: {
        score: 9,
        strengths:
          "Novel approach to mobility device design and distribution. Smart technology integration is cutting-edge.",
        weaknesses: "Some technical aspects may require further development and testing.",
        recommendations: "Establish partnerships with engineering schools for ongoing R&D and prototype testing.",
      },
    },
    averageScore: 8.0,
  },
  {
    id: "app-006",
    title: "Neighborhood Emergency Resilience Network",
    author: "Elena Rodriguez",
    submittedAt: "2025-03-18T11:00:00Z",
    abstract:
      "This project creates neighborhood-based emergency preparedness and resilience networks that combine digital coordination tools with physical infrastructure and community training. Each neighborhood hub includes renewable energy systems, communication backups, water purification, and essential supplies. The accompanying digital platform facilitates resource mapping, skill sharing, and coordination during emergencies. The program emphasizes inclusion of vulnerable populations in planning and implementation, while building everyday community connections that strengthen social fabric beyond emergency situations.",
    status: "approved",
    reviews: {
      community: {
        score: 9,
        strengths: "Builds community resilience and connections. Addresses critical emergency preparedness needs.",
        weaknesses: "May face challenges in maintaining engagement during non-emergency periods.",
        recommendations:
          "Incorporate regular community events and activities to maintain engagement between emergencies.",
      },
      equity: {
        score: 9,
        strengths:
          "Strong focus on including vulnerable populations. Plans for multilingual materials and accessibility.",
        weaknesses: "May need additional strategies to reach undocumented community members who fear official systems.",
        recommendations: "Partner with trusted community organizations to build trust with all community segments.",
      },
      efficiency: {
        score: 8,
        strengths:
          "Neighborhood-based approach optimizes resource distribution. Digital coordination improves response time.",
        weaknesses: "Initial setup costs for physical infrastructure may be high.",
        recommendations: "Develop a phased implementation plan prioritizing highest-risk neighborhoods first.",
      },
      sustainability: {
        score: 9,
        strengths:
          "Renewable energy components promote sustainability. Building community resilience is inherently sustainable.",
        weaknesses: "Ongoing maintenance of systems and supplies requires consistent attention.",
        recommendations: "Develop clear protocols for regular system testing and supply rotation.",
      },
      innovation: {
        score: 7,
        strengths:
          "Effective integration of digital and physical infrastructure. Community-centered approach is forward-thinking.",
        weaknesses: "Individual components (emergency supplies, communication systems) are established technologies.",
        recommendations:
          "Explore integration with emerging technologies like mesh networks for communication redundancy.",
      },
    },
    averageScore: 8.4,
  },
]

