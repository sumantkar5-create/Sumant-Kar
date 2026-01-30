import React from 'react';

export interface Project {
  id: string;
  title: string;
  category: string;
  stats: string;
  image: string;
  year: string;
  description?: string;
  tags?: string[];
}

export interface Tool {
  name: string;
  icon: React.ReactNode;
  description: string;
}

export interface Stat {
  label: string;
  value: string;
  context: string;
}