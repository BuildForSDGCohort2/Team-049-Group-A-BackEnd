# Emed Application Endpoints

**NB:** Endpoints should be added here for easy collaboration and for reference for the frontend team. If you write a feature that has an endpoint, please add it here
with all necessary information. Ideally this will be on Postman or some other service but for easy collaboration in this case, please lets add it here.

## Documentation Guide

Please add your endpoints in the following manner. All endpoints should accept JSON.

```
ENDPOINT
Method
Parameters/Expected data format
Expected response
Any other relevant information
```

### /user/register

Method: POST

Expected Post Data

```
{
    "firstname": "John",
    "lastname": "Doe",
    "phone": "080********",
    "email": "johndoe@mail.com",
    "password": "johnnydoe13"
}
```

Expected Response

```
{
    "status": "success",
    "message": "You have been registered",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImZpcnN0bmFtZSI6IkVsIiwibGFzdG5hbWUiOiJVbnlpIiwicGhvbmUiOiIwODAzOTEwMTg2MSIsImVtYWlsIjoiZWx2aXMub25vYm9AZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmIkMTAkNEltL3QvaWdXc0JEOVRWNHZodkF5dWRIM3JFM1NQcmpmalI0ekdIbHJzTm02WHdLVFRQRGUiLCJrZXkiOiJJTHZmWjZudnNNIiwiaWQiOjl9LCJpYXQiOjE1OTk1MTQxMDgsImV4cCI6MTU5OTUxNzcwOH0.SCPHXXeDYNWId5iReW2bHLD-kvHG7gnk2iv7IvvzhZs"
}
```

### /user/verify/email/:key

Method: PUT

Should be passed a key parameter which will be used to verify the user's email.

### /user/login

Method: POST

Expected Post Data

```
{
    "email": "example@email.com",
    "password": "chosen-password"
}
```

Expected Response

```
{
    "status": "success",
    "user": {
        "id": 1,
        "firstname": "Tunde",
        "lastname": "Akerele",
        "phone": "08123456789",
        "email": "example@email.com",
        "password": "$2a$10$L1KAUlkiavElXTAL7krxe.miqtOF2S95yQUK3hWhGW8Oj9IszCThO",
        "created_at": "2020-09-15T04:37:17.000Z",
        "updated_at": "2020-09-15T04:37:17.000Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJmaXJzdG5hbWUiOiJUdW5kZSIsImxhc3RuYW1lIjoiQWtlcmVsZSIsInBob25lIjoiMDgwNjI1NzU1MzEiLCJlbWFpbCI6ImJhYnNha2VAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkTDFLQVVsa2lhdkVsWFRBTDdrcnhlLm1pcXRPRjJTOTV5UVVLM2hXaEdXOE9qOUlzekNUaE8iLCJjcmVhdGVkX2F0IjoiMjAyMC0wOS0xNVQwNDozNzoxNy4wMDBaIiwidXBkYXRlZF9hdCI6IjIwMjAtMDktMTVUMDQ6Mzc6MTcuMDAwWiJ9LCJpYXQiOjE2MDAxNDcxODIsImV4cCI6MTYwMDE0OTgxMH0.W_Ud8mLEbS0hJxCvLlekYkhTMIfG0q8bEdA1h8uUt1A"
}
```
