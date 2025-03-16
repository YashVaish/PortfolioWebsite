import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  public projects = [
    {
      title: 'Portfolio Website',
      description:
        'My Portfolio covering my Education, Work Experience, Projects and Contact Details.',
      techList: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      github: 'https://github.com/YashVaish/PortfolioWebsite',
      screenshot: 'https://i.ibb.co/HTFc66GJ/Project-Portfolio-Screenshot.png',
      live: '',
    },
    {
      title: 'Sentimental Analysis',
      description:
        'Developing solution by integrating sentiment analysis tools to determine sentiment of data with the probability score.Also, providing the user the flexibility to select any text on any webpage which will provide the PII details as output and also the text with the masked PII. ',
      techList: ['.NET', 'HTML', 'CSS'],
      github: 'https://github.com/YashVaish/Sentimental-Analysis',
      screenshot: 'https://i.ibb.co/Kx0LkCkR/Project-SAScreenshot.png',
      live: '',
    }
  ];

  public visibleProjects = this.projects.slice(0, 3);

  showMoreProjects() {
    if (this.visibleProjects.length < this.projects.length) {
      this.visibleProjects = this.projects.slice(
        0,
        this.visibleProjects.length + 3
      );
    }
  }
}
