(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{10:function(e){e.exports=JSON.parse('{"results":[{"category":"General Knowledge","type":"multiple","difficulty":"hard","question":"1. Following the time skip, how many of the original Seven Warlords remained?","correct_answer":"Four","options":["Five","Six","Four","Three"]},{"category":"General Knowledge","type":"multiple","difficulty":"hard","question":"2. Porche is a member of which pirate crew?","correct_answer":"Foxy Pirates","options":["Foxy Pirates","Black Cat Pirates","Buggy Pirates","Blujam Pirates"]},{"category":"General Knowledge","type":"multiple","difficulty":"hard","question":"3. In \'One Piece\', what does \'the Pirate King\' mean to the captain of the Straw Hat Pirates?","correct_answer":"Freedom","options":["Money","Freedom","Friends","Status"]},{"category":"General Knowledge","type":"multiple","difficulty":"hard","question":"4. What is Sanji Vinsmoke\u2019s favorite food?","correct_answer":"Spicy Seafood Pasta","options":["Ice Cream","Spicy Seafood Pasta","Spicy Smoked Sausage","Konjac"]},{"category":"General Knowledge","type":"multiple","difficulty":"hard","question":"5. How did Luffy get the scar under his eye?","correct_answer":"Proving his toughness","options":["Proving his toughness","Attacked by pirates","Bith mark","Protecting his nakama\'s"]},{"category":"General Knowledge","type":"multiple","difficulty":"hard","question":"6. At the introduction of Kaido, the \u201cKing Of Beasts\u201d how many times had he been defeated and captured?","correct_answer":"Defeated 7 times and captures 18 times","options":["Defeated 5 times and captures 33 times","Defeated 20 times and captures 5 times","Defeated 7 times and captures 18 times","Defeated 15 times and captures 40 times"]},{"category":"General Knowledge","type":"multiple","difficulty":"hard","question":"7. How many families started the world government?","correct_answer":"20","options":["25","20","15","30"]},{"category":"General Knowledge","type":"multiple","difficulty":"hard","question":"8. Who has refused to join the Seven Warlords of the Sea?","correct_answer":"Portgas D. Ace","options":["Inurashi","Portgas D. Ace","Izo","Nekomamushi"]},{"category":"General Knowledge","type":"multiple","difficulty":"hard","question":"9. Which food does Luffy dislike the most?","correct_answer":"Cherry Pie","options":["Deviled Eggs","Rum Ice Cream","Pocky","Cherry Pie"]},{"category":"General Knowledge","type":"multiple","difficulty":"hard","question":"10. Sir Crocodile (AKA the Desert King) is the former president of which crime syndicate?","correct_answer":"Baroque Works","options":["Ganzack Pirates","Baroque Works","Beasts Pirates","God\'s Army"]},{"category":"General Knowledge","type":"multiple","difficulty":"hard","question":"11. What did Trafalgar The Surgeon of Death present to the World Government?","correct_answer":"100 Hearts","options":["100 Hearts","99 Brains","150 ears","1,000 Fingers"]},{"category":"General Knowledge","type":"multiple","difficulty":"hard","question":"12. In what village dojo did Roronoa Zoro train in?","correct_answer":"Shimotsuki Village","options":["Kuen Village","Foosha Village","Cocoyasi Village","Shimotsuki Village"]},{"category":"General Knowledge","type":"multiple","difficulty":"hard","question":"13. Going Merry was destroyed and replaced with another ship. What is the name of this ship?","correct_answer":"Thousand Sunny","options":["Sunny Sunshine","Happy Days","Sunny Rise","Thousand Sunny"]},{"category":"General Knowledge","type":"multiple","difficulty":"hard","question":"14. Who hugs Tony Tony Chopper and cries after bringing back the Amiudake mushroom?","correct_answer":"Dr. Hiriluk","options":["Masked Deuce","Dr. Hiriluk","Dalton","Dr. Kureha"]},{"category":"General Knowledge","type":"multiple","difficulty":"hard","question":"15. Where was Izo and his sibling Kikunojo born?","correct_answer":"Shimotsuki Village","options":["Amazon Lily","Mokomo Dukedom","Eibaf","Wano Country"]}]}')},20:function(e,t,a){e.exports=a(35)},25:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(17),i=a.n(o),s=(a(25),a(12)),l=a.n(s),c=a(18),u=a(8);a(27),a(28);function d(e){var t=e.questions;return r.a.createElement("div",{className:"quiz",key:t.question},r.a.createElement("p",null,t.question))}var m=a(10),p=(a(29),a(9));function h(){return r.a.createElement("div",{class:"play"},r.a.createElement("img",{src:"img/logo.png",id:"logo",alt:"logo"}),r.a.createElement("h1",null,"One Piece Quiz"),r.a.createElement(p.b,{to:"/quiz"},r.a.createElement("button",null,"Lets Play")))}var y=a(1);var f=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],o=t[1],i=Object(n.useState)([]),s=Object(u.a)(i,2),f=s[0],g=s[1],w=Object(n.useState)(0),E=Object(u.a)(w,2),k=E[0],S=E[1],v=Object(n.useState)(0),b=Object(u.a)(v,2),q=b[0],P=b[1];Object(n.useEffect)((function(){K()}),[k]);var K=function(){var e=Object(c.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o(m.results[k]),g(m.results[k].options);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=m.results[k].correct_answer;return r.a.createElement(p.a,null,r.a.createElement(y.c,null,r.a.createElement(y.a,{exact:!0,path:"/"},r.a.createElement(h,null)),r.a.createElement(y.a,{exact:!0,path:"/quiz"},r.a.createElement("div",{className:"App"},r.a.createElement("img",{src:"img/logo.png",id:"logo",alt:"logo"}),r.a.createElement("h1",null,"One Piece Quiz"),r.a.createElement("p",null,"Question : ",k+1,"/15"),r.a.createElement(d,{questions:a}),r.a.createElement("div",{className:"content"},f.map((function(e){return r.a.createElement("div",{id:"col"},r.a.createElement("button",{id:"option",key:e,value:e,onClick:function(){return e===G&&P(q+1),void(k<14?S(k+1):(document.getElementById("score").style.display="block",document.getElementById("no").innerHTML=q,document.getElementById("comment").innerHTML=q<=5?'Shame on you <i class="far fa-thumbs-down"></i>':q>5&&q<=10?'Good try <i class="far fa-thumbs-up"></i>':'You are a true OP fan! <i class="far fa-surprise"></i>'))}},e))})))),r.a.createElement("div",{id:"score"},r.a.createElement("div",{className:"content"},r.a.createElement("img",{src:"img/logo.png",id:"logo",alt:"logo"}),r.a.createElement("h1",null,"Your score is : ",r.a.createElement("span",{id:"no"}),"/15"),r.a.createElement("span",{id:"comment"}))))))};i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.1db1387d.chunk.js.map