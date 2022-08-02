//index.html에서 호출됨
//컨트롤: 스크린의 한 부분의 모양과 동작을 정의 하기위해 사용됨. 


sap.ui.define([
	"sap/m/Text"    //이 컨트롤의 prefix는 네임스페이스 => sap/m

], function (Text) {
	"use strict";

	new Text({  
		text: "Hello World"
	}).placeAt("content");

});
