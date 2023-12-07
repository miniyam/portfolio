let a = new Vue({  // vue 영역을 할당
	
	el: "#box",
	data:{ // v-bind(속성), v-modal(=value) 형태로 처리하는 구조(함수x), 가상변수 허용
		test: "hong",
		c:"div_box",
		p:"아이디를 입력하세요"	
		},
		methods: { // 여러 가상 합수 집합 공간, 함수만 사용 가상변수 생성(x)
		abc:function(){ // 함수호출 - 가상함수
			alert("전송하였습니다"); 
		},
		bbb:function(z){
			 console.log(z);	
			 // console.log(z.target.value);	
		}		
	}

});

