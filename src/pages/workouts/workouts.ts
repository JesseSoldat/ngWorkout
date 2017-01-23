import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WorkoutService } from '../../app/services/workout.service';


@Component({
  selector: 'page-workouts',
  templateUrl: 'workouts.html',
  providers: [WorkoutService]
})
export class WorkoutsPage {

	workouts;

  constructor(public navCtrl: NavController, public navParams: NavParams, public workoutService: WorkoutService) {

  	
  }

	  
  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutsPage');
  }

  ngOnInit(){
  	this.workoutService.getWorkouts().subscribe(workouts => {
  		this.workouts = workouts;
  		console.log(this.workouts);
  	})
  }

}
