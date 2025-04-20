import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@heroui/react";
import { ThemeSwitcher } from './theme-switcher';
import { Link as ScrollLink } from 'react-scroll';

const navItems = [
  { name: 'About', to: 'about' },
  { name: 'Education', to: 'education' },
  { name: 'Skills', to: 'skills' },
  { name: 'Experience', to: 'experience' },
  { name: 'Projects', to: 'projects' },
  { name: 'Awards', to: 'awards' },
  { name: 'Contact', to: 'contact' }
];

export const Navigation = () => {
  return (
    <Navbar 
      maxWidth="2xl" 
      className="bg-background/70 backdrop-blur-md"
      shouldHideOnScroll
    >
      <NavbarBrand>
        <p className="font-bold text-inherit text-xl">Sarvajeeth U K</p>
      </NavbarBrand>
      
      <NavbarContent className="hidden lg:flex gap-4" justify="center">
        {navItems.map((item) => (
          <NavbarItem key={item.to}>
            <Link
              as={ScrollLink}
              to={item.to}
              spy={true}
              smooth={true}
              offset={-70}
              className="cursor-pointer"
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem>
          <Button 
            as="a" 
            color="primary" 
            href="/src/Resume.pdf" 
            target="_blank"
            download="Sarvajeeth_UK_Resume.pdf"
            variant="flat"
          >
            Resume
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};