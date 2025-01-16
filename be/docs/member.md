# MEMBER USER API SPEC

## User Register: api/member/

## Method: POST

Request Body:

```json
{
  "name": "ucup",
  "last_name": "setiawan",
  "email": "ucup@mail.com",
  "phone": "08573427842",
  "password": "secret",
  "confirm_password": "secret"
}
```

Response Body Success:

```json
{
  "status": "success",
  "data": {
    "name": "ucup",
    "last_name": "setiawan",
    "email": "ucup@mail.com",
    "phone": "08573427842"
  }
}
```

Response Body Failed:

```json
{
  "error": "something went wrong"
}
```

## User Profile: api/member/profile

## Method: POST

Request Body:

```json
{
  "address": "jl. kamboja",
  "city": "Jakarta",
  "state": "Jawa barat",
  "country": "Indonesia"
}
```

Response Body Success:

```json
{
  "status": "success",
  "data": {
    "address": "jl. kamboja",
    "city": "Jakarta",
    "state": "Jawa barat",
    "country": "Indonesia"
  }
}
```

Response Body Failed:

```json
{
  "error": "something went wrong"
}
```

## User Login: api/member/login

## Method: POST

Request Body:

```json
{
  "email": "user@gmail.com",
  "password": "secret"
}
```

Response Body Success:

```json
{
  "status": "success",
  "data": {
    "email": "user@gmail.com",
    "password": "secret",
    "token": "uuid"
  }
}
```

Response Body Failed:

```json
{
  "error": "email or password is incorrect"
}
```
