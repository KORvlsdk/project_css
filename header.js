$(document).ready(function() {
    // 가로 스크롤 관련
    const ulscroll = document.querySelector(".header_category");
    document.querySelector("#left").addEventListener("click", () => {
        ulscroll.scrollLeft -= 500; // 왼쪽으로 스크롤
    });
    document.querySelector("#right").addEventListener("click", () => {
        ulscroll.scrollLeft += 500; // 왼쪽으로 스크롤
    });
});

