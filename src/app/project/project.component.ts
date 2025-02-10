import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: false,
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  projects = [
    {
      title: 'Modern Minimalist Living Room',
      description: 'A clean, contemporary space that emphasizes functionality and comfort.',
      image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Scandinavian Kitchen Design',
      description: 'Light-filled kitchen featuring natural materials and smart storage solutions.',
      image: 'https://images.unsplash.com/photo-1556912998-c57cc6b63cd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    },
    {
      title: 'Cozy Master Bedroom',
      description: 'Serene bedroom design with a perfect balance of style and comfort.',
      image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
    }
  ];
}
