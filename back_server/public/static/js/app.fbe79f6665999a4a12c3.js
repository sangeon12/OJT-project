webpackJsonp([1],{BS5Y:function(t,e){},"Ew+q":function(t,e){},ILu8:function(t,e){},J7Qr:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("7+uW"),o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var n=s("VU/8")({name:"App"},o,!1,function(t){s("Ew+q")},"data-v-6156bdac",null).exports,a=s("/ocq"),r={name:"Login",data:function(){return{nickName:""}},methods:{login:function(){var t=this;this.$axios.post("/checkNickname",{nickName:this.nickName}).then(function(e){switch(e.data){case 0:alert("닉네임은 공백을 포함할 수 없습니다."),t.nickName="";break;case 1:alert("중복되는 닉네임 입니다."),t.nickName="";break;case 2:alert("사용할 수 없는 닉네임입니다."),t.nickName="";break;case 3:alert("이미 관리자 접속중입니다."),t.nickName="";break;case 4:alert("닉네임은 5글자를 넘을 수 없습니다."),t.nickName="";break;case 5:t.$socket.emit("login",t.nickName),location.href="/#/main"}})}}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"login"}},[t._m(0),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.nickName,expression:"nickName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Username","aria-label":"Nickname","aria-describedby":"basic-addon1"},domProps:{value:t.nickName},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login.apply(null,arguments)},input:function(e){e.target.composing||(t.nickName=e.target.value)}}}),t._v(" "),s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.login}},[t._v("login")])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"title"},[e("h1",[this._v("Welcome")]),this._v(" "),e("h2",[this._v("Please login")])])}]};var l=s("VU/8")(r,c,!1,function(t){s("nDW8")},"data-v-663f18d8",null).exports,m={name:"Main",mounted:function(){var t=this;this.$j(".userList").hide(),this.socket.on("userList",function(e){t.userList=e}),this.socket.on("roomList",function(e){t.roomList=e}),this.socket.on("awesome",function(e){t.chatList.push(e),t.scroll()}),this.socket.on("kickResult",function(){t.$router.go()}),this.socket.on("roomList",function(e){t.roomList=e}),"loading"==document.readyState&&(location.href="/#/")},data:function(){return{userView:!1,socket:this.$socket,userList:[],chatList:[],roomList:[],msgInput:"",createRoomView:!1,createRoomName:"",createRoomPassword:"",createRoomSelectGame:"",searchRoomView:!1,searchRoomId:""}},methods:{userListView:function(){this.userView=!this.userView,this.userView?this.$j(".userList").stop().slideDown(250):this.$j(".userList").stop().slideUp(250)},sendMsg:function(){this.socket.emit("sendMsg",this.msgInput),this.msgInput=""},scroll:function(){if("http://localhost:7514/#/main"===location.href)var t=document.querySelector(".chating"),e=setInterval(function(){t.scrollTop=t.scrollHeight,clearInterval(e)},10)},kick:function(t){var e=this;if(this.socket.id!==t&&this.userList.findIndex(function(t){return t.id===e.socket.id&&t.admin})>=0){if(1!=confirm("추방 하시겠습니까?"))return;this.socket.emit("kick",t)}},logout:function(){1==confirm("로그아웃 하시겠습니까?")&&(this.socket.emit("logout",this.socket.id),this.$router.go())},createRoom:function(){var t=document.querySelector("#selectGame").value;""!==this.createRoomName&&""!==t&&"방종류"!==t?(this.socket.emit(t,{roomName:this.createRoomName,roomPassword:this.createRoomPassword,selectGame:t}),this.createRoomName="",this.createRoomPassword="",location.href="/#/"+t):alert("방 이름 또는 게임을 선택해주세요.")},enterRoom:function(t){var e=this.roomList.find(function(e){return e.roomId===t});if(e.game)alert("이미 게임이 진행중입니다.");else if(e.inUser!==e.max){if(""!==e.roomPassword)if(prompt("비밀번호를 입력해주세요.","")!==e.roomPassword)return void alert("비밀번호가 틀렸습니다.");1==confirm("방에들어가시겠습니까?")&&(this.socket.emit(e.selectGame+"In",e.roomId),location.href="/#/"+e.selectGame)}else alert("방에 빈자리가 없습니다.")},searchRoom:function(){var t=parseInt(this.searchRoomId);void 0!==this.roomList.find(function(e){return e.roomId===t})?this.enterRoom(t):alert("방이 존재하지않습니다.")}}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"main"}},[s("transition",{attrs:{name:"tr"}},[t.createRoomView?s("div",{staticClass:"createRoom"},[s("h4",[t._v("방만들기")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.createRoomName,expression:"createRoomName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"방이름","aria-label":"roomName","aria-describedby":"basic-addon1"},domProps:{value:t.createRoomName},on:{input:function(e){e.target.composing||(t.createRoomName=e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.createRoomPassword,expression:"createRoomPassword"}],staticClass:"form-control",attrs:{type:"text",placeholder:"비밀번호","aria-label":"roomPassword","aria-describedby":"basic-addon1"},domProps:{value:t.createRoomPassword},on:{input:function(e){e.target.composing||(t.createRoomPassword=e.target.value)}}}),t._v(" "),s("select",{staticClass:"form-select",attrs:{"aria-label":"roomSelect",id:"selectGame"}},[s("option",{attrs:{selected:""}},[t._v("방종류")]),t._v(" "),s("option",{attrs:{value:"chating"}},[t._v("채팅방")]),t._v(" "),s("option",{attrs:{value:"endword"}},[t._v("끝말잇기")]),t._v(" "),s("option",{attrs:{value:"mafia"}},[t._v("마피아")])]),t._v(" "),s("button",{staticClass:"btn btn-warning",attrs:{type:"button"},on:{click:t.createRoom}},[t._v("만들기")]),t._v(" "),s("button",{staticClass:"btn btn-info",attrs:{type:"button"},on:{click:function(e){t.createRoomView=!1}}},[t._v("취소")])]):t._e()]),t._v(" "),s("transition",{attrs:{name:"tr"}},[t.searchRoomView?s("div",{staticClass:"searchRoom"},[s("h4",[t._v("방찾기")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.searchRoomId,expression:"searchRoomId"}],staticClass:"form-control",attrs:{type:"text",placeholder:"방번호","aria-label":"roomname","aria-describedby":"basic-addon1"},domProps:{value:t.searchRoomId},on:{input:function(e){e.target.composing||(t.searchRoomId=e.target.value)}}}),t._v(" "),s("button",{staticClass:"btn btn-warning",attrs:{type:"button"},on:{click:t.searchRoom}},[t._v("들어가기")]),t._v(" "),s("button",{staticClass:"btn btn-info",attrs:{type:"button"},on:{click:function(e){t.searchRoomView=!1}}},[t._v("취소")])]):t._e()]),t._v(" "),s("div",{staticClass:"myContainer"},[s("div",{staticClass:"left"},[s("div",{staticClass:"title",staticStyle:{"border-radius":"10px 0px 0px 0px"}},[t._v("방 리스트")]),t._v(" "),s("div",{staticClass:"roomMenu"},[s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){t.createRoomView=!0}}},[t._v("방만들기")]),t._v(" "),s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){t.searchRoomView=!0}}},[t._v("방찾기")]),t._v(" "),s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.logout}},[t._v("로그아웃")])]),t._v(" "),s("div",{staticClass:"roomList"},[s("div",{staticClass:"rooms"},t._l(t.roomList,function(e){return s("div",{key:e,staticClass:"room",on:{click:function(s){return t.enterRoom(e.roomId)}}},[s("div",{staticClass:"roomName"},[t._v(t._s(e.roomName)+"("+t._s(e.roomId)+") \n              "),""!==e.roomPassword?s("i",{staticClass:"fas fa-lock"}):s("i",{staticClass:"fas fa-lock-open"})]),t._v(" "),s("div",{staticClass:"selectGame"},[t._v(t._s(e.selectGame))]),t._v(" "),s("div",{staticClass:"inUser"},[t._v(t._s(e.inUser)+"/"+t._s(e.max))])])}),0)])]),t._v(" "),s("div",{staticClass:"right"},[s("div",{staticClass:"title point",staticStyle:{"border-radius":"0px 10px 0px 0px"},on:{click:t.userListView}},[s("b",[t._v("유저")])]),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"userList",staticStyle:{"border-radius":"0px 0px 10px 0px"}},t._l(t.userList,function(e){return s("div",{key:e,staticClass:"user",class:{my:e.id===t.socket.id},on:{click:function(s){return t.kick(e.id)}}},[t._v(t._s(e.nickName))])}),0),t._v(" "),s("div",{staticClass:"publicChat"},[s("div",{staticClass:"title"},[t._v("채팅")]),t._v(" "),s("div",{staticClass:"chating"},t._l(t.chatList,function(e){return s("div",{key:e,staticClass:"chat",class:{my:e.id===t.socket.id}},["SYSTEM"===e.id?s("div",{staticClass:"systemChat"},[s("b",[t._v(t._s(e.msg))])]):s("div",{staticClass:"userChat"},[t._v(t._s(e.nickName)+" : "+t._s(e.msg))])])}),0),t._v(" "),s("div",{staticClass:"send"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.msgInput,expression:"msgInput"}],staticClass:"form-control",attrs:{type:"text",placeholder:"message","aria-label":"message","aria-describedby":"basic-addon1"},domProps:{value:t.msgInput},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.sendMsg.apply(null,arguments)},input:function(e){e.target.composing||(t.msgInput=e.target.value)}}}),t._v(" "),s("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button"},on:{click:t.sendMsg}},[t._v(">>")])])])])])])],1)},staticRenderFns:[]};var u=s("VU/8")(m,d,!1,function(t){s("ILu8")},"data-v-5d2993e5",null).exports,v={name:"Chating",mounted:function(){var t=this;this.socket.removeAllListeners(),this.socket.on("chatingList",function(e){t.userList=e}),this.socket.on("roomInfo",function(e){t.roomInfo=e}),this.socket.on("chatingAwesome",function(e){t.chatList.push(e)}),this.socket.on("chatingKickResult",function(){location.href="/#/main",t.socket.emit("leaveRoom",t.roomInfo.roomId)}),"loading"==document.readyState&&(location.href="/#/")},data:function(){return{socket:this.$socket,roomInfo:[],userList:[],msgInput:"",chatList:[]}},methods:{sendMsg:function(){""!==this.msgInput&&(this.socket.emit("chatingMsg",{msg:this.msgInput,roomId:this.roomInfo.roomId}),this.msgInput="")},scroll:function(){var t=document.querySelector(".chating"),e=setInterval(function(){t.scrollTop=t.scrollHeight,clearInterval(e)},10)},outRoom:function(){1==confirm("정말 나가시겠습니까?")&&(this.socket.emit("roomOut"),location.href="/#/main")},kick:function(t){var e=this;if(!(t===this.socket.id||this.userList.findIndex(function(e){return e.id===t&&e.admin})>=0)&&(this.socket.id===this.roomInfo.host||this.userList.findIndex(function(t){return t.id===e.socket.id&&t.admin})>=0)){if(1!=confirm("추방 하시겠습니까?"))return;this.socket.emit("kickRoom",t)}}}},h={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"chating"}},[s("div",{staticClass:"left"},[s("div",{staticClass:"title"},[t._v("방정보")]),t._v(" "),s("div",{staticClass:"roomInfo"},[s("div",{staticClass:"roomName"},[t._v(t._s(t.roomInfo.roomName))]),t._v(" "),s("div",{staticClass:"roomId"},[t._v(t._s(t.roomInfo.roomId))])]),t._v(" "),s("div",{staticClass:"title"},[t._v("유저")]),t._v(" "),s("div",{staticClass:"userList"},t._l(t.userList,function(e){return s("div",{key:e,staticClass:"user",class:{my:e.id===t.socket.id},on:{click:function(s){return t.kick(e.id)}}},[t._v(t._s(e.nickName)),e.id===t.roomInfo.host?s("i",{staticClass:"fas fa-tag"}):t._e()])}),0),t._v(" "),s("div",{staticClass:"menu"},[s("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button",id:"out"},on:{click:t.outRoom}},[t._v("나가기")])])]),t._v(" "),s("div",{staticClass:"right"},[s("div",{staticClass:"publicChat"},[s("div",{staticClass:"title"},[t._v("채팅")]),t._v(" "),s("div",{staticClass:"chating"},t._l(t.chatList,function(e){return s("div",{key:e,staticClass:"chat",class:{my:e.id===t.socket.id}},["SYSTEM"===e.id?s("div",{staticClass:"systemChat"},[s("b",[t._v(t._s(e.msg))])]):s("div",{staticClass:"userChat"},[t._v(t._s(e.nickName)+" : "+t._s(e.msg))])])}),0),t._v(" "),s("div",{staticClass:"send"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.msgInput,expression:"msgInput"}],staticClass:"form-control",attrs:{type:"text",placeholder:"message","aria-label":"message","aria-describedby":"basic-addon1"},domProps:{value:t.msgInput},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.sendMsg.apply(null,arguments)},input:function(e){e.target.composing||(t.msgInput=e.target.value)}}}),t._v(" "),s("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button"},on:{click:t.sendMsg}},[t._v(">>")])])])])])},staticRenderFns:[]};var p=s("VU/8")(v,h,!1,function(t){s("BS5Y")},"data-v-8986fd5a",null).exports,f={name:"EndWord",mounted:function(){var t=this;this.socket.removeAllListeners(),this.socket.on("endwordList",function(e){t.userList=e}),this.socket.on("roomInfo",function(e){t.roomInfo=e}),this.socket.on("endwordAwesome",function(e){t.chatList.push(e),t.scroll()}),this.socket.once("enwordKickResult",function(){location.href="/#/main",t.socket.emit("leaveRoom",t.roomInfo.roomId)}),this.socket.on("endwordGameStart",function(e){t.chatList=[],t.round=e.round,t.limitTime=e.limitTime,t.cycle()}),this.socket.on("resultWord",function(e){t.wordList.length>4&&t.wordList.splice(0,1),e[0].name.length<=10&&e[0].content.length>11?t.wordList.push({name:e[0].name,content:e[0].content.substring(0,11)+"..."}):e[0].name.length>10&&e[0].content.length<=12?t.wordList.push({name:e[0].name.substring(0,9)+"...",content:e[0].content}):e[0].name.length>10&&e[0].content.length>12?t.wordList.push({name:e[0].name.substring(0,9)+"...",content:e[0].content.substring(0,11)+"..."}):e[0].name.length<=10&&e[0].content.length<=12&&t.wordList.push(e[0]),t.socket.emit("endwordScore",{roomId:t.roomInfo.roomId,id:t.userList[t.page].id,le:e[0].name.length,time:t.time}),t.endWord=e[0].name.substr(e[0].name.length-1),t.time=-1,t.time<0&&t.cycle(),t.inputWord=""}),this.socket.on("wrongWord",function(){t.systemMsg("없는 단어입니다.")}),this.socket.on("endwordCycle",function(e){t.time=e,t.time<0&&t.cycle()}),document.addEventListener("visibilitychange",function(){clearInterval(t.pageCycle),document.hidden?(t.setTime=100,t.pageCycle=setInterval(function(){t.emitTime--,t.socket.emit("endwordCycle",{time:t.emitTime,roomId:t.roomInfo.roomId,host:t.roomInfo.host})},100)):(t.setTime=1e3,t.pageCycle=setInterval(function(){t.emitTime--,t.socket.emit("endwordCycle",{time:t.emitTime,roomId:t.roomInfo.roomId,host:t.roomInfo.host})},1e3))}),"loading"==document.readyState&&(location.href="/#/")},data:function(){return{socket:this.$socket,roomInfo:[],userList:[],msgInput:"",chatList:[],wordList:[],page:0,round:0,limitTime:0,time:0,emitTime:0,inputWord:"",endWord:"드",pageCycle:null,turn:!0,setTime:1e3}},methods:{sendMsg:function(){""!==this.msgInput&&(this.socket.emit("endwordMsg",{msg:this.msgInput,roomId:this.roomInfo.roomId}),this.msgInput="")},scroll:function(){var t=document.querySelector(".chating"),e=setInterval(function(){t.scrollTop=t.scrollHeight,clearInterval(e)},10)},outRoom:function(){1==confirm("정말 나가시겠습니까?")&&(this.socket.emit("roomOut"),location.href="/#/main")},kick:function(t){var e=this;if(!(t===this.socket.id||this.userList.findIndex(function(e){return e.id===t&&e.admin})>=0)&&(this.socket.id===this.roomInfo.host||this.userList.findIndex(function(t){return t.id===e.socket.id&&t.admin})>=0)){if(1!=confirm("추방 하시겠습니까?"))return;this.socket.emit("kickRoom",t)}},ready:function(){this.socket.emit("endwordReady")},gameStart:function(){var t=this;this.userList.length<1?alert("게임을 시작하려면 유저가 2명 이상이 필요합니다!"):this.userList.findIndex(function(e){return t.roomInfo.host!==e.id&&!e.ready})>=0?alert("준비를 안한 유저가 있습니다!"):0!==this.round&&0!==this.limitTime?this.socket.emit("endwordGameStart",{roomId:this.roomInfo.roomId,round:this.round,limitTime:this.limitTime}):alert("라운드 또는 제한시간을 선택해주세요.")},stopGame:function(){this.chatList=[],this.game=!1},cycle:function(){var t=this;this.turn=!0,this.time<0&&this.page++,this.time=this.limitTime,this.emitTime=this.limitTime,this.page===this.userList.length&&(this.page=0),this.roomInfo.host===this.socket.id&&(clearInterval(this.pageCycle),this.pageCycle=setInterval(function(){t.emitTime--,t.socket.emit("endwordCycle",{time:t.emitTime,roomId:t.roomInfo.roomId,host:t.roomInfo.host})},this.setTime))},input:function(){var t=this;this.turn&&this.userList[this.page].id===this.socket.id&&(this.wordList.findIndex(function(e){return e.name===t.inputWord})>=0?this.systemMsg("중복되는 단어입니다."):this.inputWord.length<=1?this.systemMsg("2자리 이상의 단어만 사용 가능합니다."):0===this.inputWord.indexOf(this.endWord)?0!==this.time&&(this.socket.emit("searchWord",{word:this.inputWord,roomId:this.roomInfo.roomId}),this.turn=!1):this.systemMsg("("+this.endWord+")로 시작하는 단어만 사용가능합니다."))},systemMsg:function(t){this.chatList.push({id:"SYSTEM",nickName:"SYSTEM",msg:t}),this.scroll()}}},_={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"endword"}},[s("transition",{attrs:{name:"tr",mode:"out-in"}},[t.roomInfo.game?t._e():s("div",{key:"wait-room",staticClass:"wait-room"},[s("div",{staticClass:"left"},[s("div",{staticClass:"title",staticStyle:{"border-radius":"10px 0px 0px 0px"}},[t._v("방메뉴")]),t._v(" "),s("div",{staticClass:"room-menu"},[s("div",{staticClass:"room-info"},[t._v(t._s(t.roomInfo.roomName)+"("+t._s(t.roomInfo.roomId)+")")]),t._v(" "),t.roomInfo.host===t.socket.id?s("select",{directives:[{name:"model",rawName:"v-model",value:t.round,expression:"round"}],staticClass:"form-select",attrs:{"aria-label":"Default select example",id:"round"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.round=e.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"0"}},[t._v("라운드")]),t._v(" "),s("option",{attrs:{value:"1"}},[t._v("1라운드")]),t._v(" "),s("option",{attrs:{value:"2"}},[t._v("2라운드")]),t._v(" "),s("option",{attrs:{value:"3"}},[t._v("3라운드")])]):t._e(),t._v(" "),t.roomInfo.host===t.socket.id?s("select",{directives:[{name:"model",rawName:"v-model",value:t.limitTime,expression:"limitTime"}],staticClass:"form-select",attrs:{"aria-label":"Default select example",id:"time"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.limitTime=e.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"0"}},[t._v("제한시간")]),t._v(" "),s("option",{attrs:{value:"5"}},[t._v("5초")]),t._v(" "),s("option",{attrs:{value:"10"}},[t._v("10초")]),t._v(" "),s("option",{attrs:{value:"15"}},[t._v("15초")])]):t._e(),t._v(" "),s("div",{staticClass:"room-button"},[t.roomInfo.host===t.socket.id?s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.gameStart}},[t._v("시작하기")]):s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.ready}},[t._v("준비하기")]),t._v(" "),s("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.outRoom}},[t._v("나가기")])])]),t._v(" "),s("div",{staticClass:"title"},[t._v("유저")]),t._v(" "),s("div",{staticClass:"user-list"},[s("div",{staticClass:"user-content"},t._l(t.userList,function(e){return s("div",{key:e,staticClass:"user",class:{my:e.id===t.socket.id},on:{click:function(s){return t.kick(e.id)}}},[t.roomInfo.host===e.id?s("i",{staticClass:"fas fa-crown"}):e.ready?s("i",{staticClass:"fas fa-user-check"}):s("i",{staticClass:"fas fa-user-times"}),t._v("\n                            "+t._s(e.nickName)+"\n                        ")])}),0)])]),t._v(" "),s("div",{staticClass:"right"},[s("div",{staticClass:"public-chat"},[s("div",{staticClass:"title",staticStyle:{"border-radius":"0px 10px 0px 0px"}},[t._v("채팅")]),t._v(" "),s("div",{staticClass:"chating"},t._l(t.chatList,function(e){return s("div",{key:e,staticClass:"chat",class:{my:e.id===t.socket.id}},["SYSTEM"===e.id?s("div",{staticClass:"systemChat"},[s("b",[t._v(t._s(e.msg))])]):s("div",{staticClass:"userChat"},[t._v(t._s(e.nickName)+" : "+t._s(e.msg))])])}),0),t._v(" "),s("div",{staticClass:"send"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.msgInput,expression:"msgInput"}],staticClass:"form-control",attrs:{type:"text",placeholder:"message","aria-label":"message","aria-describedby":"basic-addon1"},domProps:{value:t.msgInput},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.sendMsg.apply(null,arguments)},input:function(e){e.target.composing||(t.msgInput=e.target.value)}}}),t._v(" "),s("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button"},on:{click:t.sendMsg}},[t._v(">>")])])])])]),t._v(" "),t.roomInfo.game?s("div",{key:"play-room",staticClass:"play-room"},[s("div",{staticClass:"title info",staticStyle:{"border-radius":"10px 10px 0px 0px"}},[s("h6",[t._v(t._s(t.roomInfo.roomName)+"("+t._s(t.roomInfo.roomId)+")")]),t._v(" "),s("h6",[t._v("끝말잇기")]),t._v(" "),s("h6",[t._v("참여자"+t._s(t.roomInfo.inUser)+"/"+t._s(t.roomInfo.max))]),t._v(" "),s("h6",[t._v(t._s(t.round)+"라운드")]),t._v(" "),s("h6",[t._v(t._s(t.limitTime)+"초")])]),t._v(" "),s("div",{staticClass:"guide"},[s("div",{staticClass:"content"},[s("h6",[t._v("드라이버")]),t._v(" "),s("div",{staticClass:"word-time"},[s("div",{staticClass:"end-word"},[t._v(t._s(t.endWord))]),t._v(" "),s("div",{staticClass:"time"},[s("progress",{attrs:{max:t.limitTime},domProps:{value:t.time}}),t._v(" "),t.time>=0?s("div",{staticClass:"num"},[t._v(t._s(t.time))]):s("div",{staticClass:"num"},[t._v("0")])]),t._v(" "),t.userList[t.page].id===t.socket.id?s("input",{directives:[{name:"model",rawName:"v-model",value:t.inputWord,expression:"inputWord"}],staticClass:"form-control",attrs:{type:"text",id:"input-word",placeholder:"단어를 입력해주세요.","aria-label":"Username","aria-describedby":"basic-addon1"},domProps:{value:t.inputWord},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.input.apply(null,arguments)},input:function(e){e.target.composing||(t.inputWord=e.target.value)}}}):t._e()])])]),t._v(" "),s("div",{staticClass:"word-list"},[s("div",{staticClass:"words"},t._l(t.wordList,function(e){return s("div",{key:e,staticClass:"word"},[s("div",{staticClass:"text"},[t._v(t._s(e.name))]),t._v(" "),s("div",{staticClass:"meaning"},[t._v(t._s(e.content))])])}),0)]),t._v(" "),s("div",{staticClass:"user-list"},[s("div",{staticClass:"content"},t._l(t.userList,function(e){return s("div",{key:e,staticClass:"user",class:{now:t.userList[t.page].id===e.id}},[s("div",{staticClass:"user-info"},[s("i",{staticClass:"fas fa-user"}),t._v(" "),s("div",{staticClass:"score"},[t._v(t._s(e.score))])]),t._v(" "),s("div",{staticClass:"name"},[t._v(t._s(e.nickName))])])}),0)]),t._v(" "),s("div",{staticClass:"public-chat"},[s("div",{staticClass:"title"},[t._v("채팅")]),t._v(" "),s("div",{staticClass:"chating"},t._l(t.chatList,function(e){return s("div",{key:e,staticClass:"chat",class:{my:e.id===t.socket.id}},["SYSTEM"===e.id?s("div",{staticClass:"systemChat"},[s("b",[t._v(t._s(e.msg))])]):s("div",{staticClass:"userChat"},[t._v(t._s(e.nickName)+" : "+t._s(e.msg))])])}),0),t._v(" "),s("div",{staticClass:"send"},[s("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button"},on:{click:t.stopGame}},[t._v("나가기")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.msgInput,expression:"msgInput"}],staticClass:"form-control",attrs:{type:"text",placeholder:"message","aria-label":"message","aria-describedby":"basic-addon1"},domProps:{value:t.msgInput},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.sendMsg.apply(null,arguments)},input:function(e){e.target.composing||(t.msgInput=e.target.value)}}}),t._v(" "),s("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button"},on:{click:t.sendMsg}},[t._v(">>")])])])]):t._e()])],1)},staticRenderFns:[]};var k=s("VU/8")(f,_,!1,function(t){s("J7Qr")},"data-v-afbc1dea",null).exports;i.a.use(a.a);var g=new a.a({routes:[{path:"/",name:"Login",component:l},{path:"/main",name:"Main",component:u},{path:"/chating",name:"Chating",component:p},{path:"/endword",name:"EndWord",component:k}]}),C=(s("qb6w"),s("mtWM")),y=s.n(C),b=s("7t+N"),I=s.n(b);i.a.config.productionTip=!1,i.a.prototype.$axios=y.a;var w=io();i.a.prototype.$socket=w,i.a.prototype.$j=I.a,new i.a({el:"#app",router:g,components:{App:n},template:"<App/>"})},nDW8:function(t,e){},qb6w:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.fbe79f6665999a4a12c3.js.map