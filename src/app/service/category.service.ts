import { from } from "rxjs";
import { Injectable } from "@angular/core";
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from "ngx-toastr";
import { Action } from 'rxjs/internal/scheduler/Action';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  constructor(private afs: AngularFirestore, private toastr: ToastrService) {}
  saveCategory(data) {
    this.afs
      .collection("categories")
      .add(data)
      .then((ref) => {
        this.toastr.success("New Category Saved Successfully");
      });
  }
  loadCategories() {
   return this.afs
      .collection('categories').snapshotChanges().pipe(
        map(actions=>{
          return actions.map(a=>{
            const data=a.payload.doc.data();
            const id=a.payload.doc.id;
            return{id,data}
          })
          
        })
      );
  }

  updateCategory(id:string, updateData){
    this.afs.doc('categories/'+id).update({category:updateData}).then(()=>{
      this.toastr.success("Updated Successfully");
    })
  }

  deleteCategory(id:string ){
    this.afs.doc('categories/'+id).delete().then(()=>{
      this.toastr.error(" Category Deleted Successfully");
    })
  }
}
