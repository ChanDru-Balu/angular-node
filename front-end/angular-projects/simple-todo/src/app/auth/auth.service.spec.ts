import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock : HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(),provideHttpClientTesting()]
    });
    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it( 'should send a post request with correct data when register is called' , ()=>{
    const mockResponse = {success: true};
    let username = 'test user name';
    let password = 'test password';

    service.register(username,password).subscribe((response)=>{
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${service.apiUrl}/register`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({username,password});
    req.flush(mockResponse)
  })

  it( 'should send a post request with correct data when login is called' , ()=>{
    const mockResponse = {success: true};
    let username = 'test user name';
    let password = 'test password';

    service.login(username,password).subscribe((response)=>{
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${service.apiUrl}/login`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual({username,password});
    req.flush(mockResponse)
  })

  afterEach(()=>{
    httpMock.verify();
  })
  
});
