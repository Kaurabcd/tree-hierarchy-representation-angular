import { Component, Input } from '@angular/core';
import { TreeNode } from './tree-node.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tree-node',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tree-node.component.html',
  styleUrl: './tree-node.component.css'
})
export class TreeNodeComponent {
@Input() node!:TreeNode;
}
