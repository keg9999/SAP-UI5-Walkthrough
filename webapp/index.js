//SAPUI5 가 로드되고 초기화 되자마자 호출되는 파일. 

sap.ui.define([ //로드 할 두 개의 UI controls => 1. Button 2. MessageToast
	"sap/m/Button",
	"sap/m/MessageToast"
], function (Button, MessageToast) {
	"use strict";

	new Button({    //버튼을 콘텐트 ID 와 함꼐 엘리먼트에 위치 시킴.
		text: "Ready...",       // 텍스트 프로퍼티
		press: function () {    //press 이벤트에 등록 
			MessageToast.show("Hello World!");
		}
	}).placeAt("content");

});