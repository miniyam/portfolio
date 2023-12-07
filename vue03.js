let html = new Vue({ // 클래스와 비슷한 존재 - 실시간 데이터를 반영
	el:"#box",
	data:{
		t1:"",
		t2:"",   //""로 할시 문자 처리
		p:"숫자를 입력하세요",
		total:""
	},
	method:{ // 메소드 함수 - 클래스 안에 있는 요소
		abc:function(){ // vue는 무조건 선언을 해야함
			// vue의 html 값의 기본은 문자
			// 화살표 함수 장점 : 즉시실행
		   this.total = Number(this.t1) + Number(this.t2); 
		   // this : 데이터 함수 지칭 - 규칙이 많음
		   
		   // total = Number(t1) + Number(t2);  - 에러
		}
	}	
});//

let html2 = new Vue({
    el:"#box2",
	data:{
		code : "",
		ori:"0123456",
		msg:""
	}, 
	methods:{
		aaa:function(){
	if(this.code==""){
		alert("해당 보안코드를 입력하세요");
	   }
	   else{
		    if(this.code==this.ori){
				this.msg = "해당 보안코드를 확인하였습니다";
			}else{
				this.msg = "해당 보안코드가 잘못되었습니다";
			}
	
	    }
	
   }	}
});












