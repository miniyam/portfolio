var html = new Vue({
	el:"#box",
	data:{
		price:"",
		ea:"",
		total:"",
		view:"0"
		
	},
	methods:{
		cal:function(){
			// console.log(z);
			// console.log();
			this.total = Number(this.price) * Number(this.ea); 
			if(this.total !="" || this.total > 0){
				this.view = 1;
			}
		}
	}
	
});