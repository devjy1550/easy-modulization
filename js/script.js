// 추천상품 데이터
var purposeData;
purposeData = [
  {
    id: "good010203",
    img: "good_1.jpg",
    title: "생강",
    unit: "300g",
    price: "5,600",
    option: "유기농,무농약",
    type: "1",
    link: "#",
  },
  {
    id: "good010203",
    img: "good_2.jpg",
    title: "생강",
    unit: "300g",
    price: "5,600",
    option: "유기농,무농약",
    type: "1",
    link: "#",
  },
  {
    id: "good010203",
    img: "good_3.jpg",
    title: "생강",
    unit: "300g",
    price: "5,600",
    option: "유기농,무농약",
    type: "1",
    link: "#",
  },
  {
    id: "good010203",
    img: "good_4.jpg",
    title: "생강",
    unit: "300g",
    price: "5,600",
    option: "유기농,무농약",
    type: "1",
    link: "#",
  },
  {
    id: "good010203",
    img: "good_5.jpg",
    title: "생강",
    unit: "300g",
    price: "5,600",
    option: "유기농,무농약",
    type: "1",
    link: "#",
  },
  {
    id: "good010203",
    img: "good_6.jpg",
    title: "생강",
    unit: "300g",
    price: "5,600",
    option: "유기농,무농약",
    type: "1",
    link: "#",
  },
  {
    id: "good010203",
    img: "good_7.jpg",
    title: "생강",
    unit: "300g",
    price: "5,600",
    option: "유기농,무농약",
    type: "1",
    link: "#",
  },
  {
    id: "good010203",
    img: "good_8.jpg",
    title: "생강",
    unit: "300g",
    price: "5,600",
    option: "유기농,무농약",
    type: "1",
    link: "#",
  },
];

// 목록 html 을 생성해주는 함수
function makeList(_data, _tag, _col) {
  // 추천 물품 출력 코드
  let DataTotal = _data.length;

  let html = "";
  for (let i = 0; i < DataTotal; i++) {
    let goodObj = purposeData[i];
    if (i % _col == 0) {
      html += `<div class="good-wrap">`;
    }

    html += `
    <div class="good-box">
      <a href="${goodObj.link}" class="img-link">
        <img src="images/${goodObj.img}" alt="${goodObj.title}" />
      </a>
      <ul class="good-info">
        <li>`;

    // ${ goodObj.option }
    // 옵션 출력하기
    let optArr = goodObj.option.split(",");
    for (let k = 0; k < optArr.length; k++) {
      html += `<span class="good-info-option">${optArr[k]}</span>`;
    }

    html += `</li>
        <li>
          <p class="good-info-title">${goodObj.title}(<em>${goodObj.unit}</em>)</p>
        </li>
        <li>
          <p class="good-info-price"><b>${goodObj.price}</b>원</p>
          <button class="good-cart-add">장바구니</button>
        </li>
      </ul>
    </div>
  `;
    if (i % _col == _col - 1) {
      html += `</div>`;
    }
  }
  let Div = document.querySelector(_tag);
  Div.innerHTML = html;
}

// 추천상품출력
makeList(purposeData, ".purpose-wrap", 4);

// 레시피 가격 계산
let recipeCheck = $(".recipe-check");
let recipeTotal = $(".recipe-total");
let recipeBtAll = $(".recipe-bt-all");

$.each(recipeCheck, function (index, item) {
  // 현재 선택이 되었다는 표시를 기재한다.
  $(this).attr("check", "use");
  $(this).click(function () {
    let check = $(this).attr("check");

    if (check === "use") {
      $(this).attr("check", "no");
    } else {
      $(this).attr("check", "use");
    }
    recipeCalc();
  });
});

recipeBtAll.click(function () {
  let check = $(this).attr("check");
  if (check !== "use") {
    allCheck = false;
  }
  if (allCheck) {
    recipeCheck.attr("check", "no");
    recipeBtAll.html("전체선택");
  } else {
    recipeCheck.attr("check", "use");
    recipeBtAll.html("전체해제");
  }
  recipeCalc();
});

function recipeCalc() {
  let money = 0;
  $.each(recipeCheck, function () {
    let check = $(this).attr("check");
    let price = $(this).attr("data-price");
    if (check === "use") {
      money += parseInt(price);
    }
  });
  recipeTotal.html("돈");
}

recipeCalc();
