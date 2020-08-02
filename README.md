# 포트폴리오 ver.2

### 결과물 위주로 확인 가능하도록 재설계

1. 메인 페이지 완료 (2020-08-01)
    * contact를 modal로 만들었으며 메일 보내기 가능

2. 프로젝트 페이지 완료 (2020-08-02)
    * ScrollEvent 적용 모바일/웹페이지 각각 적용 완료
    * typewriter.js를 사용하였으며, scroll에 따라 반복 실행되는걸 막기위해서🤔<br/>
    control변수를 만들어서 제어하였다.😃
    ```javascript
    let control = 0;
        if(control === 0) {
            sotongType();
            control++; // 컨트롤의 숫자로 실행하여 재반복을 막음
        }
    ```

3. 디자인 페이지 완료 (2020-08-03)
    * 예전 포트폴리오 디자인 페이지를 기반으로 새롭게 구현
    * 디자인 클릭시 modal로 크게 볼수있도록 만들었다.
    * slick.js , masonry.js 사용 (반응형 완료)
        > 많은 이미지를 제어하기 위해서 window load 방식을 사용
        > masonry는 load/resize 반응형 적용 <br/>
        과부하를 막기 위해 setTimeout으로 시간차를 줬다.
        ```javascript
        $(window).resize(()=>{
           setTimeout(()=>{
               masonryMedia();
           },200);
        })
        ```
    * 매번 디자인들을 랜덤한 순서로 페이지에 뿌려준다.
    * ScrollReveal을 사용하여 스크롤 효과 적용
        > 위로 올라오도록 하고 싶었는데 적용이 되지않고 fadeIn만 적용됐다.🤔
    * filterBtn 적용