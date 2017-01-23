import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class WorkoutService {

	apiKey: string;
	workoutsUrl: string;

	constructor(public http: Http){
		this.workoutsUrl = 'https://api.mlab.com/api/1/databases/ionicworkout/collections/workouts';
		this.apiKey = 'kT5ELadZo8SRg54IiM0k5OWNy_Wkrs2u';

	}

	getWorkouts(){
		return this.http.get(this.workoutsUrl+'?apiKey='+this.apiKey)
			.map(res => res.json());
	}

	addWorkout(workout){
		var headers = new Headers();
		headers.append('Content-Type', 'application/json');
		return this.http.post(this.workoutsUrl+'?apiKey='+this.apiKey, JSON.stringify(workout),
			{headers: headers}).map(res => res.json());
	}
	
	

}
