// constants
const syrianusMaxPgNum = 40;

// page number counters
var syrianusPgNum = 1;
var hermogenesPgNum = 1;




$(document).ready(function() {
    console.log('ready!');

    /* Left text */
    $("#left-text").load("Resources/Texts/Hermogenes/hermogenes.xml", "#pg28");

    /* Right text */
    $("#right-text").load("Resources/Texts/Syrianus/Raw/p1.txt");

    var syrianusFileName = '';
    $("#right-prev-btn").click(function() {
        if (syrianusPgNum > 1) {
            syrianusPgNum--;
            syrianusFileName = `Resources/Texts/Syrianus/Raw/p${syrianusPgNum}.txt`;
            $("#right-text").load(syrianusFileName);
        }
    });

    /*
    $("button").click(function(){
        if (syrianusPgNum < syrianusMaxPgNum) {
            syrianusPgNum++;
            syrianusFileName = `Resources/Texts/Syrianus/Raw/p${syrianusPgNum}.txt`;
            $.ajax({
                type: 'GET',
                url: syrianusFileName,
                dataType: 'xml',
                success: function(result) {
                $("#right-text").load(result);
            }})
        }
    }); */
    
    $("#right-next-btn").click(function() {
        if (syrianusPgNum < syrianusMaxPgNum) {
            syrianusPgNum++;
            syrianusFileName = `Resources/Texts/Syrianus/Raw/p${syrianusPgNum}.txt`;
            $("#right-text").load(syrianusFileName);
        }
    });
    
});