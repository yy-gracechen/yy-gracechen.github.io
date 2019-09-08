// Counters for fetcing from texts
var SyrianusPageNum = 1;
var HermogenesParagraphNum = 1;

// Initialize starting pages onload()
function init() {
  // Default to Syrianus Page 1
  SyrianusPageNum = 1
  $("#syrianus_text").attr("data", "./Texts/Syrianus/Raw%20(Vol.%20II%20Pgs.%201-40)/p"+SyrianusPageNum+".txt");

  // Default to Paragraph 1
  HermogenesParagraphNum = 1
  loadXML()
  //fetchParagraph()
}

// Fetch Next Syrianus Page
function click_rr() {

    // Increment
    if (SyrianusPageNum < 40) {
      SyrianusPageNum += 1;
    }
    $("#syrianus_text").attr("data", "./Texts/Syrianus/Raw%20(Vol.%20II%20Pgs.%201-40)/p"+SyrianusPageNum+".txt");
};

// Fetch Previous Syrianus Page
function click_rl() {

    // Decrement
    if (SyrianusPageNum > 1) {
       SyrianusPageNum -= 1;
    }
    $("#syrianus_text").attr("data", "./Texts/Syrianus/Raw%20(Vol.%20II%20Pgs.%201-40)/p"+SyrianusPageNum+".txt");
};

// Fetch Next Hermogenes Paragraph
function click_lr() {

    // Increment
    if (HermogenesParagraphNum < 78) {
      HermogenesParagraphNum += 1;
    }
    loadXML()
};

// Fetch Previous Hermogenes Paragraph
function click_ll() {

    // Decrement
    if (HermogenesParagraphNum > 1) {
       HermogenesParagraphNum -= 1;
    }
    loadXML()
};

// Load XML into js object
function loadXML() {

  // Async fetch of HTML
  $.ajax({
    type: "GET",
    url: "./Texts/Hermogenes/hermogenes.xml",
    dataType: "xml",
    success: function(xml)
    {
      // Set
      var i = 0;
      $(xml).find("text").children().find("p").each(function() {
          i++;
          // Set innerHTML for paragraph with index = HermogenesParagraphNum
          if (i == HermogenesParagraphNum) {
            $("#hermogenes_text").html($(this).parent().parent().find("head").text() + "\n" + $(this).text());
            return (true)
          }
      });
    }
  });
}