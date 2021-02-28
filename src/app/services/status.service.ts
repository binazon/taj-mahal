import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  private link: String = "http://localhost:8080";

  constructor(private http: HttpClient) { }

  getListStatus(): Observable<Status[]> {
    return this.http.get<Status[]>(this.link + "/listStatus")
      .pipe(
        tap(
          data => console.log("list status", data),
          error => console.log("list status", error)
        )
      );
  }
}
