import {bootstrap} from 'angular2/platform/browser'
import {Component} from 'angular2/core'

@Component({
    selector: 'app',
    templateUrl: 'app/words.html',
    styleUrls: ['../css/w3.css']
})
export class AppComponent {
  private words = WORDS.slice(0);
  private word = 'word';
  public hero = 'Windstorm';
  constructor() {
        this.addWord('word');
  }
  inputText(event:any) {
    this.addWord(event.target.value)
  }
  private addWord(newWord) {
    this.word = newWord
    let newWords = WORDS.slice(0)
    newWords.push(newWord)
    newWords.push(newWord)
    newWords.push(newWord)
    newWords.push(newWord)
    var currentIndex = newWords.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = newWords[currentIndex];
      newWords[currentIndex] = newWords[randomIndex];
      newWords[randomIndex] = temporaryValue;
    }
    this.words = newWords
  }
  getWords() {
    return this.words;
  }
  getWordLetters() {
    return this.word.split("");
  }
  getWord() {
    return this.word;
  }
  ngAfterViewInit() {
    // viewChild is updated after the view has been initialized
    console.log('ngAfterViewInit: ');
  }
}

var WORDS: string[] = ["The", "and", "on", "are", "A", "This", "is", "my", "I", "she", "he", "we", "me"];

bootstrap(AppComponent)
