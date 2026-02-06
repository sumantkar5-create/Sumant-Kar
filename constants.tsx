import React from 'react';
import { Project, Tool, Stat } from './types';
import { PenTool, Layers, Cpu, Hash, Camera, BarChart3 } from 'lucide-react';

export const HERO_STATS: Stat[] = [
  {
    label: "Followers",
    value: "33K+",
    context: "Organic Community Growth"
  },
  {
    label: "Monthly Impressions",
    value: "10M+",
    context: "High-Velocity Content"
  },
  {
    label: "Role",
    value: "Lead",
    context: "IndianFootballDaily"
  }
];

export const PORTFOLIO_ITEMS: Project[] = [
  {
    id: '1',
    title: 'Match Day: The Derby',
    category: 'Match Graphics',
    stats: '1.2M Reach',
    image: 'https://res.cloudinary.com/dktveoukx/image/upload/v1770374304/Two_coaches._Two_perspectives.Gerard_Zaragoza_questions_the_system.Jose_Molina_looks_inward.In_.heic.jpg_cnmxb2.jpg',
    year: '2024',
    description: 'A comprehensive visual identity system for the Kolkata Derby. Delivered real-time score updates, lineup graphics, and post-match analysis assets optimized for high-velocity social consumption.',
    tags: ['Brand Identity', 'Live Coverage', 'Motion']
  },
  {
    id: '2',
    title: 'Player Profile: Chhetri',
    category: 'Editorial',
    stats: '85K Likes',
    image: 'https://res.cloudinary.com/dktveoukx/image/upload/v1770375148/472218013_1257192518671285_496724740796923113_n_ahn05z.jpg',
    year: '2023',
    description: 'Editorial retrospective celebrating a career milestone. Combined archival imagery with modern typography to create a shareable digital monument that drove record engagement.',
    tags: ['Editorial Design', 'Copywriting', 'Retouching']
  },
  {
    id: '3',
    title: 'Tactical Breakdown',
    category: 'Infographic',
    stats: '15K Saves',
    image: 'https://res.cloudinary.com/dktveoukx/image/upload/v1770374303/Congratulations_to_India_on_clinching_the_bronze_medal_at_the_prestigious_Sultan_of_Joho.heic.jpg_enzdya.jpg',
    year: '2024',
    description: 'Translating complex game data into accessible visual narratives. This series simplified xG charts and heatmaps for the casual fan, bridging the gap between analytics and culture.',
    tags: ['Data Viz', 'Analytics', 'Strategy']
  },
  {
    id: '4',
    title: 'Transfer Deadline',
    category: 'Real-time News',
    stats: '200K Interactions',
    image: 'https://res.cloudinary.com/dktveoukx/image/upload/v1770374303/PR_Sreejesh_a_double_Olympic_medallist_emphasized_the_importance_of_grassroots_investment_and.heic.jpg_w1mkym.jpg',
    year: '2024',
    description: 'High-pressure content operation during the transfer window. Established a "Breaking News" template system allowing for <5 minute turnaround from rumor to published asset.',
    tags: ['Operations', 'Speed', 'Template System']
  },
  {
    id: '5',
    title: 'League Table Update',
    category: 'Data Viz',
    stats: 'High Retention',
    image: 'https://res.cloudinary.com/dktveoukx/image/upload/v1770375148/485264134_636647582505809_6990780388900568956_n_fkpt95.jpg',
    year: '2024',
    description: 'Weekly automated visualizers for league standings. Designed for clarity on mobile screens, utilizing club colors and distinct iconography to maximize team recognition.',
    tags: ['Automation', 'UI Design', 'Recurring']
  },
  {
    id: '6',
    title: 'Fan Choreography',
    category: 'Photography/Edit',
    stats: 'Community Highlight',
    image: 'https://res.cloudinary.com/dktveoukx/image/upload/v1770374303/Champion_Anahat_Singh_India_s_squash_prodigy_Anahat_Singh_clinches_the_JSW_Indian_Open.heic.jpg_uyrfno.jpg',
    year: '2023',
    description: 'Documenting the atmosphere of the stands. Photo manipulation and color grading to capture the raw emotion of fan culture, serving as the emotional anchor for the brand.',
    tags: ['Photography', 'Color Grading', 'Culture']
  },
  {
    id: '7',
    title: 'Season Ticket Drive',
    category: 'Campaign',
    stats: 'Record Sales',
    image: 'https://res.cloudinary.com/dktveoukx/image/upload/v1770375148/489951883_1656422345753850_7990024513724724372_n_bgvln7.jpg',
    year: '2024',
    description: 'Integrated digital campaign for season pass renewal. Developed a cohesive visual language across email, social, and web, resulting in a 15% year-over-year increase in early bird conversions.',
    tags: ['Campaign', 'Marketing', 'Conversion']
  },
  {
    id: '8',
    title: 'Legends: The Captain',
    category: 'Retrospective',
    stats: 'Viral Thread',
    image: 'https://res.cloudinary.com/dktveoukx/image/upload/v1770375148/489617612_1389410351954375_6871100860173751999_n_bqxr0n.jpg',
    year: '2022',
    description: 'A sepia-toned visual essay series honoring club legends. Blended vintage textures with sharp modern type to appeal to both legacy fans and new Gen Z supporters.',
    tags: ['History', 'Branding', 'Social']
  },
  {
    id: '9',
    title: 'Academy Recruitment',
    category: 'Community',
    stats: '3K Signups',
    image: 'https://res.cloudinary.com/dktveoukx/image/upload/v1770377560/Gold_msnsfs.jpg',
    year: '2023',
    description: 'Grassroots outreach campaign designed to feel gritty and authentic. Used high-contrast photography and bold typography to resonate with young talent for open trials.',
    tags: ['Grassroots', 'Poster Design', 'Local']
  },
  {
    id: '10',
    title: 'Kit Launch 24/25',
    category: 'Merchandise',
    stats: 'Best Seller',
    image: 'https://res.cloudinary.com/dktveoukx/image/upload/v1770375147/513849510_1239456584381217_945021337368005842_n_zlbmdx.jpg',
    year: '2024',
    description: 'Teaser and reveal strategy for the new away kit. Created a mysterious, texture-heavy visual countdown that built immense anticipation before the official drop.',
    tags: ['Product', 'Launch', 'Fashion']
  }
];

export const TOOLS: Tool[] = [
  {
    name: 'Figma & Photoshop',
    icon: <PenTool size={24} />,
    description: 'System-based design architecture for scalable social assets.'
  },
  {
    name: 'Strategic Analytics',
    icon: <BarChart3 size={24} />,
    description: 'Data-led content calendars optimizing for peak retention windows.'
  },
  {
    name: 'AI Integration',
    icon: <Cpu size={24} />,
    description: 'Generative workflows for rapid variation, leaving human judgment for the final 10%.'
  }
];