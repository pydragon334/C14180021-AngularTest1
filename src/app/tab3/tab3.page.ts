import { Component } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { FotoService } from '../services/foto.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  urlImageStorage : string[] = [];

  constructor(
    public fotoService:FotoService, 
    private afStorage : AngularFireStorage 
  ) {}

  async ngOnInit(){
    var refImage = this.afStorage.storage.ref('imgStorage');
    refImage.listAll()
      .then((res) => {
        res.items.forEach((itemRef) => {
          
        });
      }).catch((error) => {
        console.log(error);
      });
  }

  tampilkanData(){
    var refImage = this.afStorage.storage.ref('imgStorage');
    refImage.listAll()
    .then((ref) => {
      ref.items.forEach((itemRef) => {
        itemRef.getDownloadURL().then(url => {
          this.urlImageStorage.unshift(url)
        });
      });
    }).catch((error) => {
      console.log(error);
    });
  }

}
