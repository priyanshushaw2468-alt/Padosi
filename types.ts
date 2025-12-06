import React from 'react';

export interface NavLink {
  label: string;
  href: string;
}

export interface ValueProp {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  sellerName: string;
  sellerAvatar: string;
}

export interface Shop {
  id: string;
  name: string;
  distance: string;
  rating: number;
  image: string;
  category: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}