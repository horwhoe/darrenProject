var config = {};

config.email = {};
config.email.username = "fycdmail@gmail.com";
config.email.password = "4156658526";

config.mongodb = {
	openshift: {
		username: "admin",
		password: "K_2vk3UT58L_",
		dbname: "fycdweb",
		ip: process.env.OPENSHIFT_MONGODB_DB_HOST,
		port: process.env.OPENSHIFT_MONGODB_DB_PORT
	},
	digitalocean: {
		username: "",
		password: "",
		dbname: "fycd",
		ip: "localhost",
		port: 27017
	},
	local: {
		username: "",
		password: "",
		dbname: "fycd",
		ip: "127.0.0.1",
		port: 27017
	}
};

config.server = {
	openshift: {
		ip: process.env.OPENSHIFT_NODEJS_IP,
		port: process.env.OPENSHIFT_NODEJS_PORT
	},
	digitalocean: {
		ip: "localhost",
		port: 8000
	},
	local: {
		ip: "127.0.0.1",
		port: 8000
	}
};

module.exports = config;
