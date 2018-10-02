import { Component, OnInit } from '@angular/core';
import { Kuis1 } from '../shared/kuis1'

@Component({
  selector: 'app-kuis1',
  templateUrl: './kuis1.component.html',
  styleUrls: ['./kuis1.component.css']
})
export class Kuis1Component implements OnInit {
  mahasiswa:Kuis1[]=[];
  nim='';
  nama = '';
  kelas = '';
  kuis1;
  constructor() { }

  ngOnInit() {
  }

  addBioData(){
    this.kuis1 = new Kuis1(this.nim, this.nama, this.kelas);
    this.mahasiswa.push(this.kuis1);
    this.nim='';
    this.nama='';
    this.kelas='';
  }
  
}
