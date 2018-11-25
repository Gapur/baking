module.exports = {
	passportJWT: {
		jwtSecret: "MyS3cr3tK3Y",
		jwtSession: {
			session: false
		},
	},
  test: {
		environment: "test",
		mongo: {
			host: "localhost",
			port: "27017",
			database: "bakin_db_test",
		},
		server: {
			host: "localhost",
			port: "8081"
		},
	},
	dev: {
		environment: "dev",
		mongo: {
			host: "localhost",
			port: "27017",
			database: "bakin_db_dev",
		},
		server: {
			host: "localhost",
			port: "8080"
		},
  },
  prod: {
		environment: "prod",
		mongo: {
			host: "localhost",
			port: "27017",
			database: "bakin_db_prod",
		},
		server: {
			host: "localhost",
			port: "8080"
		},
	},
	httpStatus: {
		success: {
			OK: 200,
			Created: 201,
			NoContent: 204,
		},
		client_error: {
			BadRequest: 400,
			UnAuthorized: 401,
			Forbidden: 403,
			NotFound: 404,
		},
		server_error: {
			InternalServerError: 500,
		}
	},
};
