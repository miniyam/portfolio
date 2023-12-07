var html = new Vue({  
//var, let이 아닌 const는 이관이 되지 않으므로 사용하면 안됨
	el:"#box",
	data:{
			
	}, 
	methods:{
		kkk:function(){  // 이벤트 핸들링 메소드
			this.bbb();  // this로 해당 메소드로 이동
		}, 
		bbb:function(){ // 이벤트 메소드
			console.log("메소드 이동");
			var result = this.ccc();
			console.log(result);
		},
		
		ccc:function(){ // 리턴을 사용하는 -> closer메소드
			return "홍길동";
		}
	}
});



