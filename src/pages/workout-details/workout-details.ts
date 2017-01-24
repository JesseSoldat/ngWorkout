import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WorkoutService } from '../../app/services/workout.service';
import { WorkoutsPage } from '../workouts/workouts';


@Component({
  selector: 'page-workout-details',
  templateUrl: 'workout-details.html'
  // providers: [ WorkoutService ]
})
export class WorkoutDetailsPage {

	workout;
	result;

  constructor(public navCtrl: NavController, public navParams: NavParams, public workoutService: WorkoutService) {
  	this.workout = this.navParams.get('workout');

  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad WorkoutDetailsPage');
  }

  deleteWorkout(workout){
  	console.log(workout);
  	
  	this.workoutService.deleteWorkout(workout).subscribe(res => {
  		this.result = res;
  	}, err => console.log(err),
  	() => console.log("Workout Deleted")
  	);
  	this.navCtrl.setRoot(WorkoutsPage);
  }

}
