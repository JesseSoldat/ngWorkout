import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class WorkoutService {

	apiKey: string;
	workoutsUrl: string;

	constructor(public http: Http){
		console.log('workoutService');
		this.workoutsUrl = 'https://api.mlab.com/api/1/databases/ionicworkout/collections/workouts';
		this.apiKey = 'kT5ELadZo8SRg54IiM0k5OWNy_Wkrs2u';

	}

	getWorkouts(){
		return this.http.get(this.workoutsUrl+'?apiKey='+this.apiKey)
			.map(res => res.json());
	}
	
	

}
