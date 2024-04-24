//요소 선택 및 상수 선언
const todaySpan = document.querySelector("#today")
const numbersDiv = document.querySelector(".numbers")
const drawBtn = document.querySelector("#draw")
const resetBtn = document.querySelector("#reset")

let lottoNumbers = []

//날짜 추가하기
const today = new Date()
let year = today.getFullYear()
let month = today.getMonth() + 1
let date = today.getDate()
todaySpan.textContent = `${year}년 ${month}월 ${date}일 `

//paintNumber 함수 - 화면에 추첨된 랜덤숫자를 그리기
function paintNumber(number){
    const eachNumberDiv = document.createElement("div")
    //나중에 적용할 수도 있는 스타일 시트를 위해 클래스 추가
    eachNumberDiv.classList.add("eachNumber")
    eachNumberDiv.textContent = number
    numbersDiv.append(eachNumberDiv)
}

//추첨 버튼 클릭 이벤트 핸들링 - 클릭하면 랜덤숫자 여섯개가 배열에 추가된다
drawBtn.addEventListener("click", function(){
    while(lottoNumbers.length < 6){
        let randomNumber = Math.floor(Math.random() * 45) + 1
        //로또는 같은 숫자가 나오면 안된다
        if(lottoNumbers.indexOf(randomNumber) === -1){
            lottoNumbers.push(randomNumber)
            paintNumber(randomNumber)
        }
    }
    //console.log(lottoNumbers)
})

//다시 버튼 클릭 이벤트 핸들링
resetBtn.addEventListener("click", function(){
    lottoNumbers.splice(0,6)
    //console.log(lottoNumbers)

    //화면에 표시되는 랜덤숫자 지우기
    numbersDiv.innerHTML = ""
})

//'추첨'버튼을 누른 후, '다시'버튼을 누르지 않은 채로 '추첨'버튼을 또 눌러도 새롭게 번호가 추가되도록 기능을 수정해보자!
drawBtn.addEventListener("click", function(){
    numbersDiv.innerHTML = ""//화면에 표시되는 랜덤숫자 지우기
    lottoNumbers = [] //lottoNumbers 배열 비우기
    while(lottoNumbers.length < 6){
        let randomNumber = Math.floor(Math.random() * 45) + 1
        if(lottoNumbers.indexOf(randomNumber) === -1){
            lottoNumbers.push(randomNumber)
            paintNumber(randomNumber)
        }
    }
})

