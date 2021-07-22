import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  color = 'black';
  title = 'sentry-angular';


  changeColor() {
    var curr = this;
    this.color = 'red';
    setTimeout(() =>{
      curr.color = 'black'
    }, 1500);
  }

  malformed() {
    decodeURIComponent('%');
  }

  // ERRORS
  notAFunctionError() {
    var someArray = [{ func: function () {}}];
    someArray[1].func();
  }

  uriError() {
    decodeURIComponent('%');
  }

  syntaxError() {
    eval('foo bar');
  }

  rangeError() {
    throw new RangeError('Parameter must be between 1 and 100');
  }

}
