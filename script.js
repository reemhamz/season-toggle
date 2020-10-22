const app = {};

// clicking on Summer
app.summer = function () {
  $(".summer-toggle").on("click", function () {
    $(".summer-toggle").css({
      "background-color": "#91d18b",
      "box-shadow": "0px 0px 10px 1px #91d18b",
      "z-index": "100",
      padding: "10px 20px",
      "border-radius": "30px",
    });

    $("body").css({
      background: "#11998e",
      background: "-webkit-linear-gradient(to left, #38ef7d, #11998e)",
      background: "linear-gradient(to left, #38ef7d, #11998e)",
    });

    $(".autumn-toggle").css({
      "background-color": "transparent",
      "box-shadow": "none",
    });

    $(".summer-toggle").css({
      "background-color": "#91d18b",
      "box-shadow": "0px 0px 10px 1px #91d18b",
    });

    $(".circle-summer").css({
      visibility: "visible",
    });

    $(".circle-autumn").css({
      visibility: "hidden",
    });
  });
};

// clicking on Autumn
app.autumn = function () {
  $(".autumn-toggle").on("click", function () {
    $(".autumn-toggle").css({
      "background-color": "#ffa62b",
      "box-shadow": "0px 0px 10px 1px #ffa62b",
      "z-index": "100",
      padding: "10px 20px",
      "border-radius": "30px",
    });

    $("body").css({
      background: "#f09819",
      background: "-webkit-linear-gradient(to left, #f09819, #edde5d)",
      background: "linear-gradient(to left, #f09819, #edde5d)",
    });

    $(".summer-toggle").css({
      "background-color": "transparent",
      "box-shadow": "none",
    });

    $(".autumm-toggle").css({
      "background-color": "#ffa62b",
      "box-shadow": "0px 0px 10px 1px #ffa62b",
    });

    $(".circle-summer").css({
      visibility: "hidden",
    });

    $(".circle-autumn").css({
      visibility: "visible",
    });
  });
};

// init function
app.init = function () {
  app.summer();
  app.autumn();
};

// Document ready
$(function () {
  app.init();
});
