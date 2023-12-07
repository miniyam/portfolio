<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Vue radio 활용법 및 submit 활용</title>
<!-- <script src="https://cdn.jsdelivr.net/npm/vue@3.3.10"></script>
	1, 2, 3번대 버전마다 방식이 다르므로 구분해야함
 -->
 <script src="https://cdn.jsdelivr.net/npm/vue@2"></script>
</head>
<%@ taglib uri="" prefic="c" %>

<body>
<!-- 
 v-model을 사용시 checked 속성이 적용되지 않음
 vue에서 data 가상 변수값에 value값과 동일한 값을 적용하면 자동으로 checked가 설정됨
 (checkbox도 동일)
-->

 <section id="box">
  <form id="f" method="get" action="./vue5.jsp" v-on:submit="abc"> 
  <!-- v-on:submit="abc" 를 사용하고 싶을 시에는 section안에 넣어서 사용 -->
  
	<input type="radio" name="coupon" value="신규" v-model="cp"> 신규가입쿠폰 <br>
	<input type="radio" name="coupon" value="10" v-model="cp"> 10% 할인쿠폰 <br>
	<!-- value에 % 기호가 있으면 안됨 -->
	
	<input type="radio" name="coupon" value="3000" v-model="cp"> 택배비 무료 쿠폰 <br>

	<!-- <input type="button" value="쿠폰적용" v-on:click="abc"> -->
	<input type="submit" value="쿠폰적용"> <!-- submit은 onclick 사용하지 않음 -->
  </form>
 </section>


 <!-- 상품검색 응용편 -->
 <section id="box2">
	<form id="sh" method="get" action="./vue5.jsp" v-on:submit="gopage">
	 상품검색 : <input type="text" name="search" ref="search" v-model="search">
	 <!-- value 없어도 날라감 <button type="button">검색</button> -->
 	  <button>검색</button>
 	</form>
 </section>
</body>

<script src="./vue5.js?v=5"></script>
</html>








