webpackJsonp([1],{"Ew+q":function(t,s){},JM3D:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("7+uW"),o={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]};var n=e("VU/8")({name:"App"},o,!1,function(t){e("Ew+q")},"data-v-6156bdac",null).exports,a=e("/ocq"),r={name:"Login",data:function(){return{nickName:""}},methods:{login:function(){var t=this;this.$axios.post("/checkNickname",{nickName:this.nickName}).then(function(s){switch(s.data){case 0:alert("닉네임은 공백을 포함할 수 없습니다."),t.nickName="";break;case 1:alert("중복되는 닉네임 입니다."),t.nickName="";break;case 2:alert("사용할 수 없는 닉네임입니다."),t.nickName="";break;case 3:alert("이미 관리자 접속중입니다."),t.nickName="";break;case 4:alert("닉네임은 5글자를 넘을 수 없습니다."),t.nickName="";break;case 5:t.$socket.emit("login",t.nickName),location.href="/#/main"}})}}},c={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"login"}},[t._m(0),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.nickName,expression:"nickName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Username","aria-label":"Nickname","aria-describedby":"basic-addon1"},domProps:{value:t.nickName},on:{keydown:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.login.apply(null,arguments)},input:function(s){s.target.composing||(t.nickName=s.target.value)}}}),t._v(" "),e("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.login}},[t._v("login")])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"title"},[s("h1",[this._v("Welcome")]),this._v(" "),s("h2",[this._v("Please login")])])}]};var d=e("VU/8")(r,c,!1,function(t){e("nDW8")},"data-v-663f18d8",null).exports,l={name:"Main",mounted:function(){var t=this;this.$j(".userList").hide(),this.socket.on("userList",function(s){t.userList=s}),this.socket.on("roomList",function(s){t.roomList=s}),this.socket.on("awesome",function(s){t.chatList.push(s),t.scroll()}),this.socket.on("kickResult",function(){t.$router.go()}),this.socket.on("roomList",function(s){t.roomList=s}),"loading"==document.readyState&&(location.href="/#/")},data:function(){return{userView:!1,socket:this.$socket,userList:[],chatList:[],roomList:[],msgInput:"",createRoomView:!1,createRoomName:"",createRoomPassword:"",createRoomSelectGame:"",searchRoomView:!1,searchRoomId:""}},methods:{userListView:function(){this.userView=!this.userView,this.userView?this.$j(".userList").stop().slideDown(250):this.$j(".userList").stop().slideUp(250)},sendMsg:function(){this.socket.emit("sendMsg",this.msgInput),this.msgInput=""},scroll:function(){var t=document.querySelector(".chating"),s=setInterval(function(){t.scrollTop=t.scrollHeight,clearInterval(s)},10)},kick:function(t){var s=this;if(this.socket.id!==t&&this.userList.findIndex(function(t){return t.id===s.socket.id&&t.admin})>=0){if(1!=confirm("추방 하시겠습니까?"))return;this.socket.emit("kick",t)}},logout:function(){1==confirm("로그아웃 하시겠습니까?")&&(this.socket.emit("logout"),this.$router.go())},createRoom:function(){var t=document.querySelector("#selectGame").value;""!==this.createRoomName&&""!==t&&"방종류"!==t?this.createRoomName.length>5?alert("방 이름이 너무 깁니다!! 5글자 이하로 작성해주세요."):(this.socket.emit(t,{roomName:this.createRoomName,roomPassword:this.createRoomPassword,selectGame:t}),this.createRoomName="",this.createRoomPassword="",location.href="/#/"+t):alert("방 이름 또는 게임이 비어있습니다.")},enterRoom:function(t){var s=this.roomList.find(function(s){return s.roomId===t});if(s.game)alert("이미 게임이 진행중입니다.");else if(s.inUser!==s.max){if(""!==s.roomPassword)if(prompt("비밀번호를 입력해주세요.","")!==s.roomPassword)return void alert("비밀번호가 틀렸습니다.");1==confirm("방에들어가시겠습니까?")&&(this.socket.emit(s.selectGame+"In",s.roomId),location.href="/#/"+s.selectGame)}else alert("방에 빈자리가 없습니다.")},searchRoom:function(){var t=parseInt(this.searchRoomId);void 0!==this.roomList.find(function(s){return s.roomId===t})?this.enterRoom(t):alert("방이 존재하지않습니다.")}}},u={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"main"}},[e("transition",{attrs:{name:"tr"}},[t.createRoomView?e("div",{staticClass:"createRoom"},[e("h4",[t._v("방만들기")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.createRoomName,expression:"createRoomName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"방이름","aria-label":"roomName","aria-describedby":"basic-addon1"},domProps:{value:t.createRoomName},on:{input:function(s){s.target.composing||(t.createRoomName=s.target.value)}}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.createRoomPassword,expression:"createRoomPassword"}],staticClass:"form-control",attrs:{type:"text",placeholder:"비밀번호","aria-label":"roomPassword","aria-describedby":"basic-addon1"},domProps:{value:t.createRoomPassword},on:{input:function(s){s.target.composing||(t.createRoomPassword=s.target.value)}}}),t._v(" "),e("select",{staticClass:"form-select",attrs:{"aria-label":"roomSelect",id:"selectGame"}},[e("option",{attrs:{selected:""}},[t._v("방종류")]),t._v(" "),e("option",{attrs:{value:"chating"}},[t._v("채팅방")]),t._v(" "),e("option",{attrs:{value:"endword"}},[t._v("끝말잇기")])]),t._v(" "),e("button",{staticClass:"btn btn-warning",attrs:{type:"button"},on:{click:t.createRoom}},[t._v("만들기")]),t._v(" "),e("button",{staticClass:"btn btn-info",attrs:{type:"button"},on:{click:function(s){t.createRoomView=!1}}},[t._v("취소")])]):t._e()]),t._v(" "),e("transition",{attrs:{name:"tr"}},[t.searchRoomView?e("div",{staticClass:"searchRoom"},[e("h4",[t._v("방찾기")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchRoomId,expression:"searchRoomId"}],staticClass:"form-control",attrs:{type:"text",placeholder:"방번호","aria-label":"roomname","aria-describedby":"basic-addon1"},domProps:{value:t.searchRoomId},on:{input:function(s){s.target.composing||(t.searchRoomId=s.target.value)}}}),t._v(" "),e("button",{staticClass:"btn btn-warning",attrs:{type:"button"},on:{click:t.searchRoom}},[t._v("들어가기")]),t._v(" "),e("button",{staticClass:"btn btn-info",attrs:{type:"button"},on:{click:function(s){t.searchRoomView=!1}}},[t._v("취소")])]):t._e()]),t._v(" "),e("div",{staticClass:"myContainer"},[e("div",{staticClass:"left"},[e("div",{staticClass:"title",staticStyle:{"border-radius":"10px 0px 0px 0px"}},[t._v("방 리스트")]),t._v(" "),e("div",{staticClass:"roomMenu"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(s){t.createRoomView=!0}}},[t._v("방만들기")]),t._v(" "),e("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(s){t.searchRoomView=!0}}},[t._v("방찾기")]),t._v(" "),e("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.logout}},[t._v("로그아웃")])]),t._v(" "),e("div",{staticClass:"roomList"},[e("div",{staticClass:"rooms"},t._l(t.roomList,function(s){return e("div",{key:s,staticClass:"room",on:{click:function(e){return t.enterRoom(s.roomId)}}},[e("div",{staticClass:"roomName"},[t._v(t._s(s.roomName)+"("+t._s(s.roomId)+") \n              "),""!==s.roomPassword?e("i",{staticClass:"fas fa-lock"}):e("i",{staticClass:"fas fa-lock-open"})]),t._v(" "),e("div",{staticClass:"selectGame"},[t._v(t._s(s.selectGame))]),t._v(" "),e("div",{staticClass:"inUser"},[t._v(t._s(s.inUser)+"/"+t._s(s.max))])])}),0)])]),t._v(" "),e("div",{staticClass:"right"},[e("div",{staticClass:"title point",staticStyle:{"border-radius":"0px 10px 0px 0px"},on:{click:t.userListView}},[e("b",[t._v("유저")])]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"userList",staticStyle:{"border-radius":"0px 0px 10px 0px"}},t._l(t.userList,function(s){return e("div",{key:s,staticClass:"user",class:{my:s.id===t.socket.id},on:{click:function(e){return t.kick(s.id)}}},[t._v(t._s(s.nickName))])}),0),t._v(" "),e("div",{staticClass:"publicChat"},[e("div",{staticClass:"title"},[t._v("채팅")]),t._v(" "),e("div",{staticClass:"chating"},t._l(t.chatList,function(s){return e("div",{key:s,staticClass:"chat",class:{my:s.id===t.socket.id}},["SYSTEM"===s.id?e("div",{staticClass:"systemChat"},[e("b",[t._v(t._s(s.msg))])]):e("div",{staticClass:"userChat"},[t._v(t._s(s.nickName)+" : "+t._s(s.msg))])])}),0),t._v(" "),e("div",{staticClass:"send"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.msgInput,expression:"msgInput"}],staticClass:"form-control",attrs:{type:"text",placeholder:"message","aria-label":"message","aria-describedby":"basic-addon1"},domProps:{value:t.msgInput},on:{keydown:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.sendMsg.apply(null,arguments)},input:function(s){s.target.composing||(t.msgInput=s.target.value)}}}),t._v(" "),e("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button"},on:{click:t.sendMsg}},[t._v(">>")])])])])])])],1)},staticRenderFns:[]};var m=e("VU/8")(l,u,!1,function(t){e("dll0")},"data-v-665d87c2",null).exports,v={name:"Chating",mounted:function(){var t=this;this.socket.removeAllListeners(),this.socket.on("chatingList",function(s){t.userList=s}),this.socket.on("roomInfo",function(s){t.roomInfo=s}),this.socket.on("chatingAwesome",function(s){t.chatList.push(s),t.scroll()}),this.socket.on("kickResult",function(){t.$router.go()}),this.socket.on("chatingKickResult",function(){location.href="/#/main",t.socket.emit("leaveRoom",t.roomInfo.roomId)}),"loading"==document.readyState&&(location.href="/#/")},data:function(){return{socket:this.$socket,roomInfo:[],userList:[],msgInput:"",chatList:[]}},methods:{sendMsg:function(){this.socket.emit("chatingMsg",{msg:this.msgInput,roomId:this.roomInfo.roomId}),this.msgInput=""},scroll:function(){var t=document.querySelector(".chating"),s=setInterval(function(){t.scrollTop=t.scrollHeight,clearInterval(s)},10)},outRoom:function(){1==confirm("정말 나가시겠습니까?")&&(this.socket.emit("roomOut"),location.href="/#/main")},kick:function(t){var s=this;if(!(t===this.socket.id||this.userList.findIndex(function(s){return s.id===t&&s.admin})>=0)&&(this.socket.id===this.roomInfo.host||this.userList.findIndex(function(t){return t.id===s.socket.id&&t.admin})>=0)){if(1!=confirm("추방 하시겠습니까?"))return;this.socket.emit("kickRoom",t)}}}},h={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"chating"}},[e("div",{staticClass:"left"},[e("div",{staticClass:"title"},[t._v("방정보")]),t._v(" "),e("div",{staticClass:"roomInfo"},[e("div",{staticClass:"roomName"},[t._v(t._s(t.roomInfo.roomName))]),t._v(" "),e("div",{staticClass:"roomId"},[t._v(t._s(t.roomInfo.roomId))])]),t._v(" "),e("div",{staticClass:"title"},[t._v("유저")]),t._v(" "),e("div",{staticClass:"userList"},t._l(t.userList,function(s){return e("div",{key:s,staticClass:"user",class:{my:s.id===t.socket.id},on:{click:function(e){return t.kick(s.id)}}},[t._v(t._s(s.nickName)),s.id===t.roomInfo.host?e("i",{staticClass:"fas fa-tag"}):t._e()])}),0),t._v(" "),e("div",{staticClass:"menu"},[e("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button",id:"out"},on:{click:t.outRoom}},[t._v("나가기")])])]),t._v(" "),e("div",{staticClass:"right"},[e("div",{staticClass:"publicChat"},[e("div",{staticClass:"title"},[t._v("채팅")]),t._v(" "),e("div",{staticClass:"chating"},t._l(t.chatList,function(s){return e("div",{key:s,staticClass:"chat",class:{my:s.id===t.socket.id}},["SYSTEM"===s.id?e("div",{staticClass:"systemChat"},[e("b",[t._v(t._s(s.msg))])]):e("div",{staticClass:"userChat"},[t._v(t._s(s.nickName)+" : "+t._s(s.msg))])])}),0),t._v(" "),e("div",{staticClass:"send"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.msgInput,expression:"msgInput"}],staticClass:"form-control",attrs:{type:"text",placeholder:"message","aria-label":"message","aria-describedby":"basic-addon1"},domProps:{value:t.msgInput},on:{keydown:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.sendMsg.apply(null,arguments)},input:function(s){s.target.composing||(t.msgInput=s.target.value)}}}),t._v(" "),e("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button"},on:{click:t.sendMsg}},[t._v(">>")])])])])])},staticRenderFns:[]};var p=e("VU/8")(v,h,!1,function(t){e("iyhg")},"data-v-0ccb135c",null).exports,f={name:"EndWord",mounted:function(){var t=this;this.socket.removeAllListeners(),this.socket.on("endwordList",function(s){t.userList=s}),this.socket.on("roomInfo",function(s){t.roomInfo=s}),this.socket.on("endwordAwesome",function(s){t.chatList.push(s),t.scroll()}),this.socket.on("kickResult",function(){t.$router.go()}),this.socket.once("endwordKickResult",function(){location.href="/#/main",t.socket.emit("leaveRoom",t.roomInfo.roomId)}),this.socket.on("endwordGameStart",function(s){t.game=!0,t.chatList=[],t.round=s.round,t.startWord="가나다".substr(0,t.round),t.limitTime=s.limitTime,t.roomInfo.host===t.socket.id&&t.socket.emit("endwordCycle",t.roomInfo.roomId),t.cycle()}),this.socket.on("resultWord",function(s){t.wordList.push(s.result),t.wordViewList.length>4&&t.wordViewList.splice(0,1),t.wordViewList.push(s.contraction),t.socket.emit("endwordScore",{roomId:t.roomInfo.roomId,id:t.userList[t.page].id,le:s.result.name.length,time:t.time}),t.endWord=s.endword,t.phoneticRule=s.phoneticRule,t.cycle(),t.inputWord=""}),this.socket.on("wrongWord",function(){t.myTurn--,t.systemMsg("없는 단어입니다.")}),this.socket.on("endwordCycle",function(){if(t.time--,t.time<0&&t.turn!==t.myTurn){var s=t.userList.find(function(s){return s.id===t.socket.id});1===parseInt(t.round)||1===t.round?t.socket.emit("endwordCycleStop",s):t.socket.emit("endwordCycleRestart",s)}}),this.socket.on("endwordGameRestart",function(s){t.round--,t.page=-1,t.startWord="가나다".substr(0,t.round),t.inputWord="",t.endWord="가",t.phoneticRule=null,t.wordList=[],t.wordViewList=[],t.turn=0,t.myTurn=0,t.roomInfo.host===t.socket.id&&t.socket.emit("endwordCycle",t.roomInfo.roomId),t.cycle()}),this.socket.on("endwordGameEnd",function(s){t.gameEnd=!0,t.sortUserList=s.sort(function(t,s){return s.score-t.score})}),this.socket.on("endwordOut",function(s){t.userList[t.page].id===s&&t.cycle()}),"loading"==document.readyState&&(location.href="/#/")},data:function(){return{socket:this.$socket,roomInfo:[],userList:[],sortUserList:[],msgInput:"",chatList:[],wordList:[],wordViewList:[],page:-1,round:0,limitTime:0,time:0,inputWord:"",startWord:"",endWord:"가",phoneticRule:null,turn:0,myTurn:0,setTime:1e3,gameEnd:!1,game:!1}},methods:{sendMsg:function(){this.socket.emit("endwordMsg",{msg:this.msgInput,roomId:this.roomInfo.roomId}),this.msgInput=""},scroll:function(){var t=document.querySelector(".chating"),s=setInterval(function(){t.scrollTop=t.scrollHeight,clearInterval(s)},10)},outRoom:function(){1==confirm("정말 나가시겠습니까?")&&(this.socket.emit("roomOut"),location.href="/#/main")},kick:function(t){var s=this;if(!(t===this.socket.id||this.userList.findIndex(function(s){return s.id===t&&s.admin})>=0)&&(this.socket.id===this.roomInfo.host||this.userList.findIndex(function(t){return t.id===s.socket.id&&t.admin})>=0)){if(1!=confirm("추방 하시겠습니까?"))return;this.socket.emit("kickRoom",t)}},ready:function(){this.socket.emit("endwordReady",this.roomInfo.roomId)},gameStart:function(){var t=this;this.userList.length<1?alert("게임을 시작하려면 유저가 2명 이상이 필요합니다!"):this.userList.findIndex(function(s){return t.roomInfo.host!==s.id&&!s.ready})>=0?alert("준비를 안한 유저가 있습니다!"):0!==this.round&&0!==this.limitTime?this.socket.emit("endwordGameStart",{roomId:this.roomInfo.roomId,round:this.round,limitTime:this.limitTime}):alert("라운드 또는 제한시간을 선택해주세요.")},cycle:function(){this.time=this.limitTime,this.page++,this.page===this.userList.length&&(this.page=0),this.turn++,this.userList[this.page].id!==this.socket.id&&this.myTurn++},input:function(){var t=this;if(!(this.gameEnd||this.userList[this.page].id!==this.socket.id||this.turn===this.myTurn||0===this.time||""===this.inputWord||this.inputWord.indexOf(" ")>=0))if(this.wordList.findIndex(function(s){return s.name===t.inputWord})>=0)this.systemMsg("중복되는 단어입니다.");else if(this.inputWord.length<=1)this.systemMsg("2자리 이상의 단어만 사용 가능합니다.");else{if(null!==this.phoneticRule){if(0===this.inputWord.indexOf(this.endWord));else if(0!==this.inputWord.indexOf(this.phoneticRule))return void this.systemMsg('"'+this.endWord+"("+this.phoneticRule+')" 로(으로) 시작하는 단어만 사용가능합니다.')}else if(0!==this.inputWord.indexOf(this.endWord))return void this.systemMsg('"'+this.endWord+'" 로(으로) 시작하는 단어만 사용가능합니다.');this.socket.emit("searchWord",{word:this.inputWord,roomId:this.roomInfo.roomId}),this.myTurn++}},systemMsg:function(t){this.chatList.push({id:"SYSTEM",nickName:"SYSTEM",msg:t}),this.scroll()},endGame:function(){this.game=!1,this.round=0,this.limitTime=0,this.startWord="",this.inputWord="",this.endWord="가",this.phoneticRule=null,this.turn=0,this.myTurn=0,this.gameEnd=!1,this.page=-1,this.wordList=[],this.wordViewList=[],this.chatList=[],this.socket.emit("endwordEndGame",this.roomInfo.roomId)}}},_={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"endword"}},[e("transition",{attrs:{name:"tr",mode:"out-in"}},[t.game?t._e():e("div",{key:"wait-room",staticClass:"wait-room"},[e("div",{staticClass:"left"},[e("div",{staticClass:"title",staticStyle:{"border-radius":"10px 0px 0px 0px"}},[t._v("방메뉴")]),t._v(" "),e("div",{staticClass:"room-menu"},[e("div",{staticClass:"room-info"},[t._v(t._s(t.roomInfo.roomName)+"("+t._s(t.roomInfo.roomId)+")")]),t._v(" "),t.roomInfo.host===t.socket.id?e("select",{directives:[{name:"model",rawName:"v-model",value:t.round,expression:"round"}],staticClass:"form-select",attrs:{"aria-label":"Default select example",id:"round"},on:{change:function(s){var e=Array.prototype.filter.call(s.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.round=s.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"0"}},[t._v("라운드")]),t._v(" "),e("option",{attrs:{value:"1"}},[t._v("1라운드")]),t._v(" "),e("option",{attrs:{value:"2"}},[t._v("2라운드")]),t._v(" "),e("option",{attrs:{value:"3"}},[t._v("3라운드")])]):t._e(),t._v(" "),t.roomInfo.host===t.socket.id?e("select",{directives:[{name:"model",rawName:"v-model",value:t.limitTime,expression:"limitTime"}],staticClass:"form-select",attrs:{"aria-label":"Default select example",id:"time"},on:{change:function(s){var e=Array.prototype.filter.call(s.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.limitTime=s.target.multiple?e:e[0]}}},[e("option",{attrs:{value:"0"}},[t._v("제한시간")]),t._v(" "),e("option",{attrs:{value:"5"}},[t._v("5초")]),t._v(" "),e("option",{attrs:{value:"10"}},[t._v("10초")]),t._v(" "),e("option",{attrs:{value:"15"}},[t._v("15초")])]):t._e(),t._v(" "),e("div",{staticClass:"room-button"},[t.roomInfo.host===t.socket.id?e("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.gameStart}},[t._v("시작하기")]):e("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.ready}},[t._v("준비하기")]),t._v(" "),e("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:t.outRoom}},[t._v("나가기")])])]),t._v(" "),e("div",{staticClass:"title"},[t._v("유저")]),t._v(" "),e("div",{staticClass:"user-list"},[e("div",{staticClass:"user-content"},t._l(t.userList,function(s){return e("div",{key:s,staticClass:"user",class:{my:s.id===t.socket.id},on:{click:function(e){return t.kick(s.id)}}},[t.roomInfo.host===s.id?e("i",{staticClass:"fas fa-crown"}):s.ready?e("i",{staticClass:"fas fa-user-check"}):e("i",{staticClass:"fas fa-user-times"}),t._v("\n                            "+t._s(s.nickName)+"\n                        ")])}),0)])]),t._v(" "),e("div",{staticClass:"right"},[e("div",{staticClass:"public-chat"},[e("div",{staticClass:"title",staticStyle:{"border-radius":"0px 10px 0px 0px"}},[t._v("채팅")]),t._v(" "),e("div",{staticClass:"chating"},t._l(t.chatList,function(s){return e("div",{key:s,staticClass:"chat",class:{my:s.id===t.socket.id}},["SYSTEM"===s.id?e("div",{staticClass:"systemChat"},[e("b",[t._v(t._s(s.msg))])]):e("div",{staticClass:"userChat"},[t._v(t._s(s.nickName)+" : "+t._s(s.msg))])])}),0),t._v(" "),e("div",{staticClass:"send"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.msgInput,expression:"msgInput"}],staticClass:"form-control",attrs:{type:"text",placeholder:"message","aria-label":"message","aria-describedby":"basic-addon1"},domProps:{value:t.msgInput},on:{keydown:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.sendMsg.apply(null,arguments)},input:function(s){s.target.composing||(t.msgInput=s.target.value)}}}),t._v(" "),e("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button"},on:{click:t.sendMsg}},[t._v(">>")])])])])]),t._v(" "),t.game?e("div",{key:"play-room",staticClass:"play-room"},[e("div",{staticClass:"title info",staticStyle:{"border-radius":"10px 10px 0px 0px"}},[e("h6",[t._v(t._s(t.roomInfo.roomName)+"("+t._s(t.roomInfo.roomId)+")")]),t._v(" "),e("h6",[t._v("끝말잇기")]),t._v(" "),e("h6",[t._v("참여자"+t._s(t.roomInfo.inUser)+"/"+t._s(t.roomInfo.max))]),t._v(" "),e("h6",[t._v(t._s(t.round)+"라운드")]),t._v(" "),e("h6",[t._v(t._s(t.limitTime)+"초")])]),t._v(" "),e("div",{staticClass:"guide"},[e("div",{staticClass:"content"},[e("h6",[t._v(t._s(t.startWord))]),t._v(" "),e("div",{staticClass:"word-time"},[null!==t.phoneticRule?e("div",{staticClass:"end-word"},[t._v(t._s(t.endWord)+"("+t._s(t.phoneticRule)+")")]):e("div",{staticClass:"end-word"},[t._v(t._s(t.endWord))]),t._v(" "),e("div",{staticClass:"time"},[e("progress",{attrs:{max:t.limitTime},domProps:{value:t.time}}),t._v(" "),t.time>=0?e("div",{staticClass:"num"},[t._v(t._s(t.time))]):e("div",{staticClass:"num"},[t._v("0")])]),t._v(" "),t.userList[t.page].id===t.socket.id?e("input",{directives:[{name:"model",rawName:"v-model",value:t.inputWord,expression:"inputWord"}],staticClass:"form-control",attrs:{type:"text",id:"input-word",placeholder:"단어를 입력해주세요.","aria-label":"Username","aria-describedby":"basic-addon1"},domProps:{value:t.inputWord},on:{keydown:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.input.apply(null,arguments)},input:function(s){s.target.composing||(t.inputWord=s.target.value)}}}):t._e()])])]),t._v(" "),e("div",{staticClass:"word-list"},[e("div",{staticClass:"words"},t._l(t.wordViewList,function(s){return e("div",{key:s,staticClass:"word"},[e("div",{staticClass:"text"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"meaning"},[t._v(t._s(s.content))])])}),0)]),t._v(" "),e("div",{staticClass:"user-list"},[e("div",{staticClass:"content"},t._l(t.userList,function(s){return e("div",{key:s,staticClass:"user",class:{now:t.userList[t.page].id===s.id}},[e("div",{staticClass:"user-info"},[e("i",{staticClass:"fas fa-user"}),t._v(" "),e("div",{staticClass:"score"},[t._v(t._s(s.score))])]),t._v(" "),e("div",{staticClass:"name"},[t._v(t._s(s.nickName))])])}),0)]),t._v(" "),e("div",{staticClass:"public-chat"},[e("div",{staticClass:"title"},[t._v("채팅")]),t._v(" "),e("div",{staticClass:"chating"},t._l(t.chatList,function(s){return e("div",{key:s,staticClass:"chat",class:{my:s.id===t.socket.id}},["SYSTEM"===s.id?e("div",{staticClass:"systemChat"},[e("b",[t._v(t._s(s.msg))])]):e("div",{staticClass:"userChat"},[t._v(t._s(s.nickName)+" : "+t._s(s.msg))])])}),0),t._v(" "),e("div",{staticClass:"send"},[e("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button"},on:{click:t.outRoom}},[t._v("나가기")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.msgInput,expression:"msgInput"}],staticClass:"form-control",attrs:{type:"text",placeholder:"message","aria-label":"message","aria-describedby":"basic-addon1"},domProps:{value:t.msgInput},on:{keydown:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.sendMsg.apply(null,arguments)},input:function(s){s.target.composing||(t.msgInput=s.target.value)}}}),t._v(" "),e("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button"},on:{click:t.sendMsg}},[t._v(">>")])])])]):t._e()]),t._v(" "),e("transition",{attrs:{name:"tr"}},[t.gameEnd?e("div",{key:"result-popup",staticClass:"result-popup"},[e("div",{staticClass:"content"},[e("div",{staticClass:"result-list"},t._l(t.sortUserList,function(s,i){return e("div",{key:i,staticClass:"result"},[e("div",{staticClass:"index"},[t._v(t._s(i+1)+"등")]),t._v(" "),e("div",{staticClass:"name"},[t._v(t._s(s.nickName))]),t._v(" "),e("div",{staticClass:"score"},[t._v(t._s(s.score)+"점")])])}),0),t._v(" "),e("div",{staticClass:"button-menu"},[e("button",{staticClass:"btn btn-dark",attrs:{type:"button"},on:{click:t.endGame}},[t._v("확인")])])])]):t._e()])],1)},staticRenderFns:[]};var k=e("VU/8")(f,_,!1,function(t){e("JM3D")},"data-v-0630bca0",null).exports;i.a.use(a.a);var g=new a.a({routes:[{path:"/",name:"Login",component:d},{path:"/main",name:"Main",component:m},{path:"/chating",name:"Chating",component:p},{path:"/endword",name:"EndWord",component:k}]}),y=(e("qb6w"),e("mtWM")),C=e.n(y),b=e("7t+N"),w=e.n(b);i.a.config.productionTip=!1,i.a.prototype.$axios=C.a;var I=io();i.a.prototype.$socket=I,i.a.prototype.$j=w.a,new i.a({el:"#app",router:g,components:{App:n},template:"<App/>"})},dll0:function(t,s){},iyhg:function(t,s){},nDW8:function(t,s){},qb6w:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.1c56ad98a03e09b205c3.js.map