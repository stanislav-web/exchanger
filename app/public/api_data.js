define({ "api": [
  {
    "type": "post",
    "url": "/access/signin",
    "title": "Authorize user by credentials",
    "name": "Authorization",
    "group": "Access_API_Boundle",
    "description": "<p>Authorize user by credentials</p>",
    "permission": [
      {
        "name": "user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>HTTP 200 OK</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "message",
            "description": "<p>Authentication message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n     \"status\": 200,\n     \"message\": {\n         \"expires_in\": 1507343002,\n         \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTA3Mjk5MTI5LCJleHAiOjE1MDczODU1Mjl9.4Wom95yMQoSLSX_lzfC0oz__TDW6Rrj8pQS0Zwk7Bvs\"\n     }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequestError",
            "description": "<p>Invalid auth credentials</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NotFoundError",
            "description": "<p>User not found</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessForbiddenError",
            "description": "<p>Invalid auth credentials</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "BadRequestError",
          "content": "HTTP/1.1 400 Bad Request\n{\n     \"status\": 400,\n     \"message\": \"child \"email\" fails because [\"email\" must be a valid email]\"\n }",
          "type": "json"
        },
        {
          "title": "NotFoundError",
          "content": "HTTP/1.1 404 Not Found\n{\n     \"status\": 404,\n     \"message\": \"User not found\"\n }",
          "type": "json"
        },
        {
          "title": "AccessForbiddenError",
          "content": "HTTP/1.1 403 Forbidden\n{\n     \"status\": 403,\n     \"message\": \"Invalid credentials\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/access/routes.js",
    "groupTitle": "Access_API_Boundle",
    "sampleRequest": [
      {
        "url": "http://localhost:8777/access/signin"
      }
    ]
  },
  {
    "type": "post",
    "url": "/access/signup",
    "title": "Register new user",
    "name": "Registration",
    "group": "Access_API_Boundle",
    "description": "<p>Register new user</p>",
    "permission": [
      {
        "name": "user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>User name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>User phone</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>User email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User password</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>HTTP 201 Created</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "message",
            "description": "<p>Authentication message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 201 Created\n{\n     \"status\": 201,\n     \"message\": {\n         \"expires_in\": 1507343002,\n         \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTA3Mjk5MTI5LCJleHAiOjE1MDczODU1Mjl9.4Wom95yMQoSLSX_lzfC0oz__TDW6Rrj8pQS0Zwk7Bvs\"\n     }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequestError",
            "description": "<p>Bad credentials</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "ConflictRequestError",
            "description": "<p>The user already exist</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "BadRequestError",
          "content": "HTTP/1.1 400 Bad Request\n{\n     \"status\": 400,\n     \"message\": \"child \"email\" fails because [\"email\" must be a valid email]\"\n }",
          "type": "json"
        },
        {
          "title": "ConflictRequestError",
          "content": "HTTP/1.1 409 Conflict\n{\n     \"status\": 409,\n     \"message\": \"The user already exist\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/access/routes.js",
    "groupTitle": "Access_API_Boundle",
    "sampleRequest": [
      {
        "url": "http://localhost:8777/access/signup"
      }
    ]
  },
  {
    "type": "get",
    "url": "/status/:key",
    "title": "Microservice status",
    "name": "Microservice_status",
    "group": "Status",
    "description": "<p>Get microservice status</p>",
    "permission": [
      {
        "name": "root"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>HTTP 200 OK</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "message",
            "description": "<p>Status message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n     \"status\": 200,\n     \"message\": {\n         \"now\":\"01:52:51 GMT+0300 (EEST)\",\n         \"revision\":\"62b1b88ef48bb3fe859b2bd374e64576f79e6cca\",\n         \"version\":\"v1.0\",\n         \"residentSet\":\"49.8 MB\",\n         \"totalHeap\":\"30.4 MB\",\n         \"usedHeap\":\"16.8 MB\",\n         \"uptime\":22.969\n     }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessForbiddenError",
            "description": "<p>Invalid key</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "AccessForbiddenError",
          "content": "HTTP/1.1 403 Forbidden\n{\n     \"status\": 403,\n     \"message\": \"Invalid key\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/status/routes.js",
    "groupTitle": "Status",
    "sampleRequest": [
      {
        "url": "http://localhost:8777/status/:key"
      }
    ]
  },
  {
    "type": "get",
    "url": "/verify/:token",
    "title": "Verify access token",
    "name": "Token_Verification",
    "group": "Verification",
    "description": "<p>Verify access token</p>",
    "permission": [
      {
        "name": "user"
      }
    ],
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>User token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "status",
            "description": "<p>HTTP 200 OK</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "message",
            "description": "<p>Authentication message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response",
          "content": "HTTP/1.1 200 OK\n{\n     \"status\": 200,\n     \"message\": {\n         \"uid\": \"59dc39a68610ad6ff6e4bf0a\",\n         \"email\": \"stanisov@gmail.com\",\n         \"iat\": 1507436214,\n         \"exp\": 1507436274\n     }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "BadRequestError",
            "description": "<p>No token specified</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "AccessForbiddenError",
            "description": "<p>Invalid or expires token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "BadRequestError",
          "content": "HTTP/1.1 400 Bad Request\n{\n     \"status\": 400,\n     \"message\": \"No token specified\"\n }",
          "type": "json"
        },
        {
          "title": "AccessForbiddenError",
          "content": "HTTP/1.1 403 Forbidden\n{\n     \"status\": 403,\n     \"message\": \"Invalid or expires token\"\n }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/api/verify/routes.js",
    "groupTitle": "Verification",
    "sampleRequest": [
      {
        "url": "http://localhost:8777/verify/:token"
      }
    ]
  }
] });
