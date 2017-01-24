import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WorkoutService } from '../../app/services/workout.service';
// import { WorkoutDetailsPage } from '../workout-details/workout-details';
import {WorkoutDetailsPage} from '../workout-details/workout-details';


@Component({
  selector: 'page-workouts',
  templateUrl: 'workouts.html',
  providers: [WorkoutService]
})
export class WorkoutsPage {

	workouts;

  constructor(public navCtrl: NavController, public navParams: NavParams, public workoutService: WorkoutService) {
  	this.workoutService.getWorkouts().subscribe(workouts => {
  		this.workouts = workouts;
  	})
  	
  }

	  
  ionViewDidLoad() {
    // console.log('ionViewDidLoad WorkoutsPage');
  }

  ngOnInit(){
  	this.workoutService.getWorkouts().subscribe(workouts => {
  		this.workouts = workouts;
  		// console.log(this.workouts);
  	})
  }

  workoutSelected(event, workout){
  	this.navCtrl.push(WorkoutDetailsPage, {
  		workout: workout
  	});
  }

}
