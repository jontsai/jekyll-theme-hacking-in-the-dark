YUI.add("gallery-aui-form-textfield",function(B){var F=B.Lang,C=B.ClassNameManager.getClassName,G="textfield",D=C(G);var E=B.Component.create({NAME:G,ATTRS:{selectOnFocus:{value:false},allowOnly:{value:null,validator:function(H){var A=this;return H instanceof RegExp;}},defaultValue:{value:""},validator:{value:null}},EXTENDS:B.Field,prototype:{bindUI:function(){var A=this;E.superclass.bindUI.call(A);var I=A.get("node");if(A.get("allowOnly")){I.on("keypress",A._filterInputText,A);}if(A.get("selectOnFocus")){I.on("focus",A._selectInputText,A);}var H=A.get("defaultValue");if(H){I.on("blur",A._checkDefaultValue,A);I.on("focus",A._checkDefaultValue,A);}},syncUI:function(){var A=this;var I=A.get("value");if(!I){var H=A.get("defaultValue");A.set("value",A.get("defaultValue"));}E.superclass.syncUI.apply(A,arguments);},_filterInputText:function(J){var A=this;var H=A.get("allowOnly");var I=String.fromCharCode(J.charCode);if(!H.test(I)){J.halt();}},_checkDefaultValue:function(M){var A=this;var I=A.get("defaultValue");var L=A.get("node");var K=F.trim(A.get("value"));var J=M.type;var H=(J=="focus"||J=="focusin");if(I){var N=K;if(H&&(K==I)){N="";}else{if(!H&&!K){N=I;}}A.set("value",N);}},_selectInputText:function(H){var A=this;H.currentTarget.select();}}});B.Textfield=E;},"gallery-2010.08.18-17-12",{requires:["gallery-aui-form-field"]});