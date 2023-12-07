var html =  new Vue({
	el:"#box",
	data:{
		lists:["홍길동", "이순신","강감찬"], // 원시배열
		
		//키값이 있는 상황
		person:[
			{names:"홍길동", age:"29"},
			{names:"강감찬", age:"36"},
			{names:"이순신", age:"40"}
		],		
		pass:{  // 기본키 배열 - 핸들링은 methods에서
			    // 배열임에 중괄호 - 통이 그룹 
		        // 무조건 배열 순 - 바
			    // "username":"조경훈", // 키에는 쌍따옴표가 나오면 안됨(백엔드 잘못)
			username:"조경훈",
			usertest:"정보처리기사 실기시험",
			userscore:"98점 합격"
			
		},
		fileno:3
	},
	methods:{ // methods 안에는 배열이 없음
	}
	
});