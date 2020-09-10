// constants
const syrianusMaxPgNum = 40;

// page number counters
var syrianusPgNum = 1;
var hermogenesPgNum = 1;

var syrianusFileName = `Resources/Texts/Syrianus/Raw/p${syrianusPgNum}.txt`;

// initialize page when DOM ready
$(document).ready(init());

function init() {
    console.log('DOM ready!');

    // default to page 1
    loadSyrianus(syrianusFileName);
    loadHermogenes();
}

// load Syrianus text
function loadSyrianus(filename) {
    $("#right-text").load(filename);
}

// load Hermogenes XML section
function loadHermogenes() {
    // async fetch of XML
    $.ajax({
        type: "GET",
        url: "/Resources/Texts/Hermogenes/hermogenes.xml",
        dataType: "xml",
        success: function(xml) {
            let text = $(xml).find('body');
            console.log('the text is of type ' + typeof text);
            $("#left-text").html(text);
            /*
            let notNewLine = false;     // tracks if first char of text is new line
            console.log('char at 0 is' + text.charAt(0));
            */
            /*
            while (!notNewLine) {
                if (text.charAt(0) == '\n') {
                    text = text.replace('\n', '');
                    console.log('removed new line');
                }
                else {
                    notNewLine == true;
                    $("#left-text").html(text);
                }
            } */
        },
        error: function(request, error, exceptionoj) {
            console.log(request, error, exceptionoj);
        }
    })
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
function leftPrev() {
    
};

function leftNext() {

};