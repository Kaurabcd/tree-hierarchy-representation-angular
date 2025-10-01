import { Component, Input, OnInit } from '@angular/core';
import { TreeNode } from '../tree-node/tree-node.model';
import { TreeNodeComponent } from '../tree-node/tree-node.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tree-hierarchy',
  standalone: true,
  imports: [TreeNodeComponent, CommonModule],
  templateUrl: './tree-hierarchy.component.html',
  styleUrl: './tree-hierarchy.component.css'
})
export class TreeHierarchyComponent implements OnInit{
@Input() data_adjacency_list: any;
finalRootNode: any =null;
ngOnInit() {
this.finalRootNode = this.buildTreeStructure(this.data_adjacency_list, "a");
} 

buildTreeStructure(data_adjacency_list: any, root: string) :TreeNode {
function buildNode(name: string){
  const children = data_adjacency_list[name] || [];
  return{
    name: name,
    children: children.map(buildNode)
  };
}
return buildNode(root);
}


}