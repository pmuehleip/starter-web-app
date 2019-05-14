import {Component, Input, OnInit} from '@angular/core';
import {first} from 'rxjs/internal/operators/first';
import {Example, ExampleService} from '../example.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  @Input()
  example: Example;
  constructor(private readonly exampleService: ExampleService) { }

  ngOnInit() {
    this.exampleService.getExample('hello')
      .pipe(first())
      .subscribe((ex) => this.example = ex);
  }

}
