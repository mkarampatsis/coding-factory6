import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DadJoke, ChuckNorrisJoke } from '../interfaces/jokes';

const DAD_JOKES_API_URL = 'https://icanhazdadjoke.com/';
const CHUCK_NORRIS_API_URL = 'https://api.chucknorris.io/jokes/random'

@Injectable({
  providedIn: 'root'
})
export class JokesService {
    http: HttpClient = inject(HttpClient);

    //constructor(http: HttpClient) { }

    getDadJokes(){
      return this.http.get<DadJoke>(DAD_JOKES_API_URL, {
                headers: {
                    Accept: 'application/json'
                }
            })
    }

    getChuckNorrisJoke(){
        return this.http.get<ChuckNorrisJoke>(CHUCK_NORRIS_API_URL, {
            headers: {
                Accept: 'application/json'
            }
        })
    }

}
