// vue(컨테이너 위주) => front-end가 선호 - Back-end 개발자는 선호하지 않음
// React(class) : vue의 상황과 반대(react가 자바구조 형태)



let html = new Vue({
	el:"#box",
	data:{ // methods 안에 요소의 이름과 동일한 이름을 사용금지
		b:"botton",
		numbers : 0,//"0"으로 처리해도 가능
		btn1:"+",
		btn2:"-"
	 },
	 methods:{ // data 안에 요소의 이름과 동일한 이름을 사용금지
	 btn_numbers:function(z){  // 이벤트 핸들링
		if(z=="+"){ 
			this.numbers++;	// +1 증가
		}			
		else{
			if(this.numbers > 0){  // 0보다 큰 값일 경우
			this.numbers--; 	// -1 감소
		  }
		}
	  }
	}
});


var html2 = new Vue({
	el:"#box2",
	data:{
		s:"",
		ea:"",
		total_number:0
	},
	methods:{
		product:function(){
		console.log(this.s);
		console.log(this.ea);
		this.total_number = (Number(this.s) * Number(this.ea)).toLocaleString();
		// tolocaleString -> 점을 생성해줌
		}
	}
});






// 응용





















