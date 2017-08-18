module.exports = {
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
  local: {
		environment: "local",
		mongo: {
			host: "localhost",
			port: "27017",
			database: "bakin_db_local",
		},
		server: {
			host: "localhost",
			port: "8080"
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
};
