import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TreeHierarchyComponent } from './tree-hierarchy/tree-hierarchy.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TreeHierarchyComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  treeData = {
    "a": ["b", "c"],
    "b": ["d", "e"],
    "c": ["f", "g"],
    "e": ["h", "i"],
    "f": ["j", "k"]
  };
}
