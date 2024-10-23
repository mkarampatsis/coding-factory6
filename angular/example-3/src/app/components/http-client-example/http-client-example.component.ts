import { Component, inject } from '@angular/core';
import { JokesService } from '../../shared/services/jokes.service';

@Component({
  selector: 'app-http-client-example',
  standalone: true,
  imports: [],
  templateUrl: './http-client-example.component.html',
  styleUrl: './http-client-example.component.css'
})
export class HttpClientExampleComponent {
    jokesService = inject(JokesService)
    dadJoke: string = '';
    chuckNorrisJoke: string = '';
    // constructor(jokesService: JokesService){}

    ngOnInit(){
        this.jokesService.getDadJokes()
            .subscribe((data)=>{
                console.log("DAD JOKE", data.joke)
            })
        
        this.jokesService.getChuckNorrisJoke()
            .subscribe((data) =>{
                console.log("CHUCK NORRIS JOKE", data.value)
            })
    }
}
