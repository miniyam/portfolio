<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Vue - 반복문 v-for(for in 기준)</title>
<script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
</head>
<!-- body 태그에는 vue 컨테이너 생성이 안됨!! -->
<!-- v-for: 배열이 기본(키배열, 일반배열) -->


<body>

<aside id="box">
	<ul>
	  <!-- v-for는 vue 전용 반복문 출력(for in) 기본사항 -->
	  <!-- lists 배열값 a배열의 데이터값 -->
	  <li v-for="a in lists">{{a}}</li>
	</ul>
	<ol>
	   <!-- key 배열 키이름을 이용하여 출력하는 형태, index : 배열번호 -->
	   <li v-for="b,index in person">{{b.names}}-{{b.age}},{{index}}</li>	
	</ol>
	
	<dl>
	<dt>응시자 시험합격 현황</dt>
	<!-- c : 배열데이터 값, d : 배열 키이름, e : 배열 노드번호 -->
	<dd v-for="c,d,e in pass">
	{{c}}
	<!-- 재배치가 어려움
	시험명 : {{d.usertest}}
	응시자 : {{c.username}}
	점수 : {{e}}
	 -->
	</dd>
	</dl>
	
	<!-- 배열값 없이 사용시 숫자는 1부터 시작-->
	<ul> 
	  <li v-for="aa,bb in fileno"><input type="file" name="mfile">{{bb}}</li> 
	  <!-- 배열 없이 반복시, bb는 노드 번호로 인식-->
	</ul>
	
	
</aside>

</body>
<script src="./vue11.js?v=1"></script>
</html>
















