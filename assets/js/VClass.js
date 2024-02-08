
class VClass {
	constructor() {
		this._instanceMembers=this.getInstanceMembers();
		this._staticMembers=this.getStaticMembers();
	}
	
	getInstanceMembers() => Object.getOwnPropertyDescriptors(this);
	getStaticMembers() => Object.keys(
}
