// constants
const syrianusMaxPgNum = 40;

// page number counters
var syrianusPgNum;
var hermogenesPgNum;

var syrianusFileName = `Resources/Texts/Syrianus/Raw/p${syrianusPgNum}.txt`;

// initialize page when DOM ready
$(document).ready(init());

function init() {
    console.log('DOM ready!');

    // default to page 1
    syrianusPgNum = 1;
    hermogenesPgNum = 1;
    
    loadSyrianus(syrianusFileName);
}

// load Syrianus text
function loadSyrianus(filename) {
    $("#right-text").load(filename);
}

// load Hermogenes XML section
function loadHermogenes(hermogenesPgNum) {
    // async fetch of XML
    $.ajax({
        type: "GET",
        url: "./Resources/Texts/Hermogenes/hermogenes.xml",
        dataType: "xml",
        success: function(xml) {
            var i = 0;
            $(xml).find("text").children().find("p").each(function() {
                if (i == hermogenesPgNum) {
                    $("#left-text").html($(this))
                }
            })
        }
    })
/*
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
  }); */
}

// event handlers for right text container
function rightPrev() {
    if (syrianusPgNum > 1) {
        syrianusPgNum--;
        syrianusFileName = `Resources/Texts/Syrianus/Raw/p${syrianusPgNum}.txt`;
        loadSyrianus(syrianusFileName);
    }
};

function rightNext() {
    if (syrianusPgNum < syrianusMaxPgNum) {
        syrianusPgNum++;
        syrianusFileName = `Resources/Texts/Syrianus/Raw/p${syrianusPgNum}.txt`;
        loadSyrianus(syrianusFileName);
    }
};

// event handlers for left text container
// function 