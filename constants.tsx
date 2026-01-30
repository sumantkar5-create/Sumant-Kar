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
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1600&auto=format&fit=crop',
    year: '2024',
    description: 'A comprehensive visual identity system for the Kolkata Derby. Delivered real-time score updates, lineup graphics, and post-match analysis assets optimized for high-velocity social consumption.',
    tags: ['Brand Identity', 'Live Coverage', 'Motion']
  },
  {
    id: '2',
    title: 'Player Profile: Chhetri',
    category: 'Editorial',
    stats: '85K Likes',
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1600&auto=format&fit=crop',
    year: '2023',
    description: 'Editorial retrospective celebrating a career milestone. Combined archival imagery with modern typography to create a shareable digital monument that drove record engagement.',
    tags: ['Editorial Design', 'Copywriting', 'Retouching']
  },
  {
    id: '3',
    title: 'Tactical Breakdown',
    category: 'Infographic',
    stats: '15K Saves',
    image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=1600&auto=format&fit=crop',
    year: '2024',
    description: 'Translating complex game data into accessible visual narratives. This series simplified xG charts and heatmaps for the casual fan, bridging the gap between analytics and culture.',
    tags: ['Data Viz', 'Analytics', 'Strategy']
  },
  {
    id: '4',
    title: 'Transfer Deadline',
    category: 'Real-time News',
    stats: '200K Interactions',
    image: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45?q=80&w=1600&auto=format&fit=crop',
    year: '2024',
    description: 'High-pressure content operation during the transfer window. Established a "Breaking News" template system allowing for <5 minute turnaround from rumor to published asset.',
    tags: ['Operations', 'Speed', 'Template System']
  },
  {
    id: '5',
    title: 'League Table Update',
    category: 'Data Viz',
    stats: 'High Retention',
    image: 'https://images.unsplash.com/photo-1624880357913-a8539238245b?q=80&w=1600&auto=format&fit=crop',
    year: '2024',
    description: 'Weekly automated visualizers for league standings. Designed for clarity on mobile screens, utilizing club colors and distinct iconography to maximize team recognition.',
    tags: ['Automation', 'UI Design', 'Recurring']
  },
  {
    id: '6',
    title: 'Fan Choreography',
    category: 'Photography/Edit',
    stats: 'Community Highlight',
    image: 'https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?q=80&w=1600&auto=format&fit=crop',
    year: '2023',
    description: 'Documenting the atmosphere of the stands. Photo manipulation and color grading to capture the raw emotion of fan culture, serving as the emotional anchor for the brand.',
    tags: ['Photography', 'Color Grading', 'Culture']
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