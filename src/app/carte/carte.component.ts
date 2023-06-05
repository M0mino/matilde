import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.scss']
})
export class CarteComponent implements OnInit {
@Output() ImmaginiOut = new EventEmitter()





  pokemonP = "prova nome pockemon";



  pokemon = [
    {"id": 722, "nome": "Rowlet", "tipo": ["Erba", "Volante"]},
    {"id": 723, "nome": "Dartrix", "tipo": ["Erba", "Volante"]},
    {"id": 724, "nome": "Decidueye", "tipo": ["Erba", "Fantasma"]},
    {"id": 725, "nome": "Litten", "tipo": ["Fuoco"]},
    {"id": 726, "nome": "Torracat", "tipo": ["Fuoco"]},
    {"id": 727, "nome": "Incineroar", "tipo": ["Fuoco", "Buio"]},
    {"id": 728, "nome": "Popplio", "tipo": ["Acqua"]},
    {"id": 729, "nome": "Brionne", "tipo": ["Acqua"]},
    {"id": 730, "nome": "Primarina", "tipo": ["Acqua", "Folletto"]},
    {"id": 731, "nome": "Pikipek", "tipo": ["Normale", "Volante"]},
    {"id": 732, "nome": "Trumbeak", "tipo": ["Normale", "Volante"]},
    {"id": 733, "nome": "Toucannon", "tipo": ["Normale", "Volante"]},
    {"id": 734, "nome": "Yungoos", "tipo": ["Normale"]},
    {"id": 735, "nome": "Gumshoos", "tipo": ["Normale"]},
    {"id": 736, "nome": "Grubbin", "tipo": ["Coleottero"]},
    {"id": 737, "nome": "Charjabug", "tipo": ["Coleottero", "Elettro"]},
    {"id": 738, "nome": "Vikavolt", "tipo": ["Coleottero", "Elettro"]},
    {"id": 739, "nome": "Crabrawler", "tipo": ["Lotta"]},
    {"id": 740, "nome": "Crabominable", "tipo": ["Lotta", "Ghiaccio"]},
    {"id": 741, "nome": "Oricorio", "tipo": ["Fuoco", "Volante"]},
    {"id": 742, "nome": "Cutiefly", "tipo": ["Insetto", "Folletto"]},
    {"id": 743, "nome": "Ribombee", "tipo": ["Insetto", "Folletto"]},
    {"id": 744, "nome": "Rockruff", "tipo": ["Roccia"]},
    {"id": 745, "nome": "Lycanroc", "tipo": ["Roccia"]},
    {"id": 746, "nome": "Wishiwashi", "tipo": ["Acqua"]},
    {"id": 747, "nome": "Mareanie", "tipo": ["Veleno", "Acqua"]},
    {"id": 748, "nome": "Toxapex", "tipo": ["Veleno", "Acqua"]},
    {"id": 749, "nome": "Mudbray", "tipo": ["Terra"]},
    {"id": 750, "nome": "Mudsdale", "tipo": ["Terra"]},
    {"id": 751, "nome": "Dewpider", "tipo": ["Acqua", "Coleottero"]},
    {"id": 752, "nome": "Araquanid", "tipo": ["Acqua", "Coleottero"]},
    {"id": 753, "nome": "Fomantis", "tipo": ["Erba"]},
    {"id": 754, "nome": "Lurantis", "tipo": ["Erba"]},
    {"id": 755, "nome": "Morelull", "tipo": ["Erba", "Folletto"]},
    {"id": 756, "nome": "Shiinotic", "tipo": ["Erba", "Folletto"]},
    {"id": 757, "nome": "Salandit", "tipo": ["Veleno", "Fuoco"]},
    {"id": 758, "nome": "Salazzle", "tipo": ["Veleno", "Fuoco"]},
    {"id": 759, "nome": "Stufful", "tipo": ["Normale", "Lotta"]},
    {"id": 760, "nome": "Bewear", "tipo": ["Normale", "Lotta"]},
    {"id": 761, "nome": "Bounsweet", "tipo": ["Erba"]},
    {"id": 762, "nome": "Steenee", "tipo": ["Erba"]},
    {"id": 763, "nome": "Tsareena", "tipo": ["Erba"]},
    {"id": 764, "nome": "Comfey", "tipo": ["Folletto"]},
    {"id": 765, "nome": "Oranguru", "tipo": ["Normale", "Psico"]},
    {"id": 766, "nome": "Passimian", "tipo": ["Lotta"]},
    {"id": 767, "nome": "Wimpod", "tipo": ["Coleottero", "Acqua"]},
    {"id": 768, "nome": "Golisopod", "tipo": ["Coleottero", "Acqua"]},
    {"id": 769, "nome": "Sandygast", "tipo": ["Spettro", "Terra"]},
    {"id": 770, "nome": "Palossand", "tipo": ["Spettro", "Terra"]},
    {"id": 771, "nome": "Pyukumuku", "tipo": ["Acqua"]},
    {"id": 772, "nome": "Type: Null", "tipo": ["Normale"]},
    {"id": 773, "nome": "Silvally", "tipo": ["Normale"]},
    {"id": 774, "nome": "Minior", "tipo": ["Roccia", "Volante"]},
    {"id": 775, "nome": "Komala", "tipo": ["Normale"]},
    {"id": 776, "nome": "Turtonator", "tipo": ["Fuoco", "Drago"]},
    {"id": 777, "nome": "Togedemaru", "tipo": ["Elettro", "Acciaio"]},
    {"id": 778, "nome": "Mimikyu", "tipo": ["Spettro", "Folletto"]},
    {"id": 779, "nome": "Bruxish", "tipo": ["Acqua", "Psico"]},
    {"id": 780, "nome": "Drampa", "tipo": ["Normale", "Drago"]},
    {"id": 781, "nome": "Dhelmise", "tipo": ["Spettro", "Erba"]},
    {"id": 782, "nome": "Jangmo-o", "tipo": ["Drago"]},
    {"id": 783, "nome": "Hakamo-o", "tipo": ["Drago", "Lotta"]},
    {"id": 784, "nome": "Kommo-o", "tipo": ["Drago", "Lotta"]},
    {"id": 785, "nome": "Tapu Koko", "tipo": ["Elettro", "Folletto"]},
    {"id": 786, "nome": "Tapu Lele", "tipo": ["Psico", "Folletto"]},
    {"id": 787, "nome": "Tapu Bulu", "tipo": ["Erba", "Folletto"]},
    {"id": 788, "nome": "Tapu Fini", "tipo": ["Acqua", "Folletto"]},
    {"id": 789, "nome": "Cosmog", "tipo": ["Psico"]},
    {"id": 790, "nome": "Cosmoem", "tipo": ["Psico"]},
    {"id": 791, "nome": "Solgaleo", "tipo": ["Psico", "Acciaio"]},
    {"id": 792, "nome": "Lunala", "tipo": ["Psico", "Spettro"]},
    {"id": 793, "nome": "Nihilego", "tipo": ["Roccia", "Veleno"]},
    {"id": 794, "nome": "Buzzwole", "tipo": ["Coleottero", "Lotta"]},
    {"id": 795, "nome": "Pheromosa", "tipo": ["Coleottero", "Lotta"]},
    {"id": 796, "nome": "Xurkitree", "tipo": ["Elettro"]},
    {"id": 797, "nome": "Celesteela", "tipo": ["Acciaio", "Volante"]},
    {"id": 798, "nome": "Kartana", "tipo": ["Erba", "Acciaio"]},
    {"id": 799, "nome": "Guzzlord", "tipo": ["Buio", "Drago"]},
    {"id": 800, "nome": "Necrozma", "tipo": ["Psico"]},
    {"id": 801, "nome": "Magearna", "tipo": ["Acciaio", "Folletto"]},
    {"id": 802, "nome": "Marshadow", "tipo": ["Lotta", "Fantasma"]}
]








  constructor() {
    console.log("costruttore")
  }


  ngOnInit(): void {
    console.log("ngOnInit")
    let counter = 0
   
  }



}
