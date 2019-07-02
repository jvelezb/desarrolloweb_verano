
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {


	 endpoint = 'http://localhost:3000/alumnos';
	 httpOptions = {
  		headers: new HttpHeaders({
    	'Content-Type':  'application/json',
       
 	 })
	};

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
  let body = res;
  return body || { };
  }

	getAlumnos(): Observable<any> {
		
		return this.http.get(this.endpoint).pipe(
	    map(this.extractData));
	    
		
	}

	private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    console.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

/*
deleteAlumnos(id): Observable<any> {
  return this.http.delete<any>(this.endpoint + '/' + id, this.httpOptions).pipe(
    tap(_ => console.log(`deleted alumno matricula=${id}`)),
    catchError(this.handleError<any>('deleteAlumno'))
  );
}*/


getAlumno(matricula): Observable<any> {
  return this.http.get(this.endpoint + '/' + matricula).pipe(
    map(this.extractData));
}

addAlumno (alumno): Observable<any> {
  console.log(alumno);
  return this.http.post<any>(this.endpoint + '/', JSON.stringify(alumno), this.httpOptions).pipe(
    tap((alumno) => console.log(`added alumno w/ matricula=${alumno.matricula}`)),
    catchError(this.handleError<any>('addAlumno'))
  );
}

updateAlumno (matricula, alumno): Observable<any> {
  return this.http.put(this.endpoint + '/' + matricula, JSON.stringify(alumno), this.httpOptions).pipe(
    tap(_ => console.log(`updated alumno matricula=${matricula}`)),
    catchError(this.handleError<any>('updateALumno'))
  );
}

}

