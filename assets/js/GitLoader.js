

class GitLoader {
	static #gitUrl="https://raw.githubusercontent.com/";
	static #pageHead=document.querySelector("head");
	constructor(username, projectName, branchName) {
		this.username=username;
		this.projectName=projectName;
		this.branchName=branchName;
		this.baseUrl=GitLoader.#gitUrl+this.username+"/"+this.projectName+"/"+this.branchName+"/";
		this.scripts={};
		this.styles={};
	}
	createScript(path) {
		let elm=document.createElement("script");
		elm.id=GitLoader.#createId();
		elm.src=this.baseUrl+path;
		elm.defer=true;
		return elm;
	}
	loadScript(path) {
		let elm=this.createScript(path);
		let name=GitLoader.#getFileName(path);
		this.scripts[name]=elm;
		GitLoader.#pageHead.appendChild(elm);
		return elm.id;
	}
	unloadScript(fileName) {
		if(this.scripts.includes(fileName))
			GitLoader.#pageHead.removeChild(this.scripts[fileName]);
	}
	static #getFileName(path) {
		let m=path.match(/([^\\/]+?)(\.[^.\\/]+)?$/gi);
		return m[m.length-1];
	}
	static #createId(length=5) {
		let start=33;
		let end=126;
		let res="";
		for(let i=0;i<length;i++)
			res+=String.fromCharCode(Math.floor(Math.random()*(end-start+1))+start);
		return res;
	}
}
