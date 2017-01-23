import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WorkoutService } from '../../app/services/workout.service';



@Component({
  selector: 'page-add-workout',
  templateUrl: 'add-workout.html'
})
export class AddWorkoutPage {

	title: string;
	note: string;
	type: string;
	result;

  constructor(public navCtrl: NavController, public navParams: NavParams, public workoutService: WorkoutService) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddWorkoutPage');
  }

  onSubmit(){
  	var workout = {
  		title: this.title,
  		note: this.note,
  		type: this.type
  	}

  	this.workoutService.addWorkout(workout).subscribe(data => {
  		this.result = data;
  	})
  }

}
