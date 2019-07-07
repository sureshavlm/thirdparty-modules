import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'thirdparty-demo';

  constructor() {
  	$(document).ready(function() {
  		$("button").click(function() {
  			$("h2").hide();
  		});
  	});
  }
}
