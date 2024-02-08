
class Server {
	/**
 	* Creates a new instance of the Server class.
  	*/
	constructor(){}
	/**
 	* Sends an HTTP request.
  	* @param {Object} args The configuration argument consisting of the src, payload, method, and call back function.
   	*/
	send(args) {
		if(args instanceof Object) {
			
		}
	}
	static #isArgsValid(args) {
		if(args instanceof Object && self
	}
	/**
 	* Determines if the key exists within the object.
  	* @param {Object} args The argument object to analyze.
   	* @param {string} key The key to look for.
	* @returns {bool}
 	*/
	static #containsKey(args, key) {
		return key in args;
	}
	
}

export default Server;
