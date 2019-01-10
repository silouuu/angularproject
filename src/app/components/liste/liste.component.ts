import { Component, OnInit } from '@angular/core';
import { Joueur } from '../../models';

@Component({
    selector: 'app-liste',
    templateUrl: './liste.component.html',
    styleUrls: ['./liste.component.scss']
})


export class ListeComponent implements OnInit {

    public joueurs : Joueur[] = [];
    public selected: Joueur;
    public displayDetails = false;
    
    constructor(){
       
    }   
    ngOnInit() {
        this.loadJoueurs();
    }
    
    loadJoueurs(){
        this.joueurs.push({
            id : '1',
            firstName: 'Silou',
            lastName: 'Rabadan',
            poste: 'Attaquant',
            poids: 50,
            taille: 165,
            naissance: '17/04/98',
        })
        this.joueurs.push({
            id : '2',
            firstName: 'Lulu',
            lastName: 'Patenotre',
            poste: 'Ailier',
            poids: 60,
            taille: 180,
            naissance: '05/12/97',
        })
    }
    
    public select(j : Joueur){
        this.selected = j;
        this.displayDetails = true;
    }

}
