YUI.add("gallery-textshadow-anim",function(E){var A=function(G){return parseInt(G,10);},D=Math.floor,C=/(\-?[\d\.]+(px)?)/,B=/\s*(rgb\(.+\)|#\w{3,6}|[^#]?[a-z]{3,})\s*/i,F=function(G){var M=["rgb(0, 0, 0)",0,0,0],K=[0,0,0],J,O,I,N,L,Q,P,H;if(!G||G==="none"){return{lengths:K,color:M};}J=G.split(B);for(N=0,L=J.length;N<L;N++){if(J[N].length){if(B.test(J[N])){M=E.Color.re_RGB.exec(E.Color.toRGB(J[N]));}else{O=J[N].split(" ");H=0;for(Q=0,P=O.length;Q<P;Q++){I=O[Q].match(C);if(I&&I.length){K[H++]=I[0];continue;}}}}}return{color:M,lengths:K};};E.Anim.behaviors.textShadow={set:function(J,M,O,P,Q,I,N){O=F((typeof O=="object")?O.getStyle("textShadow"):O);P=F((typeof P=="object")?P.getStyle("textShadow"):P);var L=O.color,K=O.lengths,H=P.color,G=P.lengths;if(!L||L.length<2||!H||H.length<2){E.error("invalid from or to");}if(K.length!=G.length){E.error("invalid length");}J._node.setStyle("textShadow","rgb("+[D(N(Q,A(L[1]),A(H[1])-A(L[1]),I)),D(N(Q,A(L[2]),A(H[2])-A(L[2]),I)),D(N(Q,A(L[3]),A(H[3])-A(L[3]),I))].join(", ")+")"+N(Q,A(K[0]),A(G[0])-A(K[0]),I)+"px "+N(Q,A(K[1]),A(G[1])-A(K[1]),I)+"px "+N(Q,A(K[2]),A(G[2])-A(K[2]),I)+"px ");},get:function(H,G){return H._node.getComputedStyle("textShadow")||H._node;}};},"gallery-2010.09.22-20-15",{requires:["anim-base"]});