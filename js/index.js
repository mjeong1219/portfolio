$("document").ready(function(){
    // 타이핑 js
    let typed = new Typed("#typed1",{
        stringsElement: "#typed",
        typeSpeed: 100
    });

    // 없는 것을 임의로 만들어 둚. false일 때 실행하지 않음.
    // 이걸 true로 만들어주어 스크롤 왔다갔다 할 때 실행되지 않도록 하는 원리...
    // 프로그레스바가 중첩으로 실행되는 것을 막아줌.
    let isChk = false; 

    $(".fullpage").fullpage({
        sectionsColor: ["#140a42", "#f1f0f5", "#f1f0f5", "#f1f0f5", "#f1f0f5", "#f1f0f5"], // home을 제외한 section 6개.
        navigation: true,
        anchors: ["home", "profile", "publishing", "design", "ux", "contact", "footer"],
        navigationTooltips: ["홈", "프로필", "퍼블리싱", "디자인", "경험", "컨텍트", "카피라이트"],
        responsiveWidth: 1200, // 뷰포트 너비가 1200px미만일 때, 반응형 가능.
        
        // afterlood: 각 섹션에 로딩 한 후에 실행될 함수
        // origin: 어디서부터 이벤트가 발생했는지, destination: 어디로 이동하는지를 나타냄.
        afterLoad: function(origin, destination){
            console.log(destination);

            // 로드시 홈일 때 헤더 보이기/숨기기
            if (destination == 1) { // 첫번째 섹션 (홈)
                $(".header").hide();
            } else {
                $(".header").fadeIn();
            }

            // 첫번째 섹션으로 이동할 때,
            if(destination == 1){
                $("#fp-nav ul li .fp-tooltip").eq(0).addClass("on");
            }

            // 툴팁
            if(destination == 2 && isChk == false){
                isChk = true;
                let bar = new ProgressBar.Line("#html", {
                    strokeWidth: 4,
                    trailWidth: 4,
                    color: "#fac8c8",
                    duration: 1400,
                    step: function (state, circle) {
                      circle.setText(Math.round(circle.value() * 100) + "%");
                    }
                });
                bar.animate(0.7);
                let bar2 = new ProgressBar.Line("#css", {
                    strokeWidth: 4,
                    trailWidth: 4,
                    color: "#fac8c8",
                    duration: 1400,
                    step: function (state, circle) {
                      circle.setText(Math.round(circle.value() * 100) + "%");
                    },
                });
                bar2.animate(0.5);
                let bar3 = new ProgressBar.Line("#js", {
                    strokeWidth: 4,
                    trailWidth: 4,
                    color: "#fac8c8",
                    duration: 1400,
                    step: function (state, circle) {
                      circle.setText(Math.round(circle.value() * 100) + "%");
                    },
                });
                bar3.animate(0.3);
                let bar4 = new ProgressBar.Line("#ps", {
                    strokeWidth: 4,
                    trailWidth: 4,
                    color: "#fac8c8",
                    duration: 1400,
                    step: function (state, circle) {
                      circle.setText(Math.round(circle.value() * 100) + "%");
                    },
                });
                bar4.animate(1);
                let bar5 = new ProgressBar.Line("#ai", {
                    strokeWidth: 4,
                    trailWidth: 4,
                    color: "#fac8c8",
                    duration: 1400,
                    step: function (state, circle) {
                      circle.setText(Math.round(circle.value() * 100) + "%");
                    },
                });
                bar5.animate(0.9);
                let bar6 = new ProgressBar.Line("#of", {
                    strokeWidth: 4,
                    trailWidth: 4,
                    color: "#fac8c8",
                    duration: 1400,
                    step: function (state, circle) {
                      circle.setText(Math.round(circle.value() * 100) + "%");
                    },
                });
                bar6.animate(0.8);
            }
        },

        // onLeave: 사용자가 페이지에서 다른 섹션으로 이동할 때 발생하는 이벤트
        onLeave: function(origin, destination){
            // header 보이기 숨기기
            if(destination > 1){ // 1번보다 클때 (홈이 1번이니, 홈보다 순서 값이 큰 다른 페이지 일 때)
                // destination.index > 0으로 적어도 됨.
                $(".header").fadeIn();
            }else{
                $(".header").fadeOut();
            }
            // 풀페이지 툴팁에 관한 내용
            $("#fp-nav ul li .fp-tooltip")
            .removeClass("on") // 원래 있던 내용을 remove(페이지 옮기면 툴팁 텍스트 삭제)
            .eq(destination - 1) // eq는 인덱스 번호. (페이지의 인덱스번호 destination보다 tooltip인덱스 번호가 1 작음. ex 첫번째 페이지 왔을때 인덱스 번호는 0.)
            .addClass("on");
        }
    });
});