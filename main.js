var main_Array = [];

function submit()
{
    var submit_array = [];

    for(var i = 1; i<=4; i++)
    {
        var name = document.getElementById("name_of_the_student_" + i).value;
        main_Array.push(name);
    }
    var len = main_Array.length;
    for(var k = 0; k<len;k++)
    {
        submit_array.push("<h4> Name-" + main_Array[k] + "</h4>");
    }
    document.getElementById("display_name_with_commas").innerHTML = submit_array;
    var data = submit_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML = data;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}


function sorting()
{
    var len = main_Array.length;
    var sort_array = [];
    main_Array.sort();
    for(var i = 0; i < len; i++)
    {
           sort_array.push("<h4> Name-" + main_Array[i] + "</h4>");
    }
    var data = sort_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML = data;
    document.getElementById("sort_button").style.display = "none";
}

function reset()
{
    location.reload();
}