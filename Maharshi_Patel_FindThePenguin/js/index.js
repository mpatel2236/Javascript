$(document).ready(function ()

    {
        var count = 0;
        var mx_count = 0;
        h_sc(count, mx_count);

        var di = $("#gameholder").children("div");
        shuffle(di);





        //This code will run after your page loads

        $("#yeti").mousedown(function ()

            {
                $("#yeti").css('background-image', 'url("../Maharshi_Patel_FindThePenguin/images/yeti.png")');
                $('#yeti_voice').get(0).play();
                document.getElementById('yeti').style.pointerEvents = 'none';
                defaulf_image();
                default_behaviour();

                setTimeout(function ()

                    {
                        $("#yeti").css('background-image', 'url("../Maharshi_Patel_FindThePenguin/images/mound_9.png")');
                        document.getElementById('yeti').style.pointerEvents = 'auto';
                        count = 0;
                        h_sc(count, mx_count);
                        shuffle(di);
                    }, 1000);

            });


        $("#penguin1").mousedown(function ()

            {
                $('#penguin_voice').get(0).play();

                $("#penguin1").css('background-image', 'url("../Maharshi_Patel_FindThePenguin/images/penguin_1.png")');

                count = count + 1;
                h_sc(count, mx_count);

                document.getElementById('penguin1').style.pointerEvents = 'none';

            });



        $("#penguin2").mousedown(function ()

            {
                $('#penguin_voice').get(0).play();

                $("#penguin2").css('background-image','url("../Maharshi_Patel_FindThePenguin/images/penguin_2.png")');

                count = count + 1;
                h_sc(count, mx_count);

                document.getElementById('penguin2').style.pointerEvents = 'none';

            });



        $("#penguin3").mousedown(function ()

            {
                $('#penguin_voice').get(0).play();

                $("#penguin3").css('background-image','url("../Maharshi_Patel_FindThePenguin/images/penguin_3.png")');

                count = count + 1;
                h_sc(count, mx_count);

                document.getElementById('penguin3').style.pointerEvents = 'none';

            });




        $("#penguin4").mousedown(function ()

            {
                $('#penguin_voice').get(0).play();

                $("#penguin4").css('background-image', 'url("../Maharshi_Patel_FindThePenguin/images/penguin_4.png")');

                count = count + 1;
                h_sc(count, mx_count);

                document.getElementById('penguin4').style.pointerEvents = 'none';

            });


        $("#penguin5").mousedown(function ()

            {
                $('#penguin_voice').get(0).play();

                $("#penguin5").css('background-image', 'url("../Maharshi_Patel_FindThePenguin/images/penguin_5.png")');

                count = count + 1;
                h_sc(count, mx_count);

                document.getElementById('penguin5').style.pointerEvents = 'none';

            });


        $("#penguin6").mousedown(function ()

            {
                $('#penguin_voice').get(0).play();

                $("#penguin6").css('background-image', 'url("../Maharshi_Patel_FindThePenguin/images/penguin_6.png")');

                count = count + 1;
                h_sc(count, mx_count);

                document.getElementById('penguin6').style.pointerEvents = 'none';

            });




        $("#penguin7").mousedown(function ()

            {
                $('#penguin_voice').get(0).play();

                $("#penguin7").css('background-image', 'url("../Maharshi_Patel_FindThePenguin/images/penguin_7.png")');

                count = count + 1;
                h_sc(count, mx_count);

                document.getElementById('penguin7').style.pointerEvents = 'none';

            });




        $("#penguin8").mousedown(function ()

            {
                $('#penguin_voice').get(0).play();

                $("#penguin8").css('background-image', 'url("../Maharshi_Patel_FindThePenguin/images/penguin_8.png")');

                count = count + 1;
                h_sc(count, mx_count);

                document.getElementById('penguin8').style.pointerEvents = 'none';

            });




        function h_sc(count, max) {
            if (max < count) {
                mx_count = count;

            }
            $("#score").empty();
            $("#score").append("count-" + count +"\nHighScore-"+ mx_count);



        }



        function defaulf_image() {
            $("#penguin1").css('background-image', 'url("../Maharshi_Patel_FindThePenguin/images/mound_1.png")');
            $("#penguin2").css('background-image', 'url("../Maharshi_Patel_FindThePenguin/images/mound_2.png")');
            $("#penguin3").css('background-image', 'url("../Maharshi_Patel_FindThePenguin/images/mound_3.png")');
            $("#penguin4").css('background-image', 'url("../Maharshi_Patel_FindThePenguin/images/mound_4.png")');
            $("#penguin5").css('background-image', 'url("../Maharshi_Patel_FindThePenguin/images/mound_5.png")');
            $("#penguin6").css('background-image', 'url("../Maharshi_Patel_FindThePenguin/images/mound_6.png")');
            $("#penguin7").css('background-image', 'url("../Maharshi_Patel_FindThePenguin/images/mound_7.png")');
            $("#penguin8").css('background-image', 'url("../Maharshi_Patel_FindThePenguin/images/mound_8.png")');



        }

        function default_behaviour() {
            document.getElementById('penguin1').style.pointerEvents = 'auto';
            document.getElementById('penguin2').style.pointerEvents = 'auto';
            document.getElementById('penguin3').style.pointerEvents = 'auto';
            document.getElementById('penguin4').style.pointerEvents = 'auto';
            document.getElementById('penguin5').style.pointerEvents = 'auto';
            document.getElementById('penguin6').style.pointerEvents = 'auto';
            document.getElementById('penguin7').style.pointerEvents = 'auto';
            document.getElementById('penguin8').style.pointerEvents = 'auto';

        }

        function shuffle(array) {

            var scoreCount = array.length,
                temporaryValue, randomIndex;

            while (0 !== scoreCount) {

                randomIndex = Math.floor(Math.random() * scoreCount);
                scoreCount -= 1;

                temporaryValue = array[scoreCount];
                array[scoreCount] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }

            for (i = 0; i < array.length; i++) {
                $('#gameholder').append($(array[i]));
            }
        }

    });
