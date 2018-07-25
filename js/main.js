//set constant studentItems to get student item class.
const studentItems = $(".student-item");
//set constant addPagination to html div with pagination class and ul for use for pagelinks.
const addPagination = `<div class="pagination"><ul></ul></div>`;

/* created the showPages function with pageNumber (will argue 0), and pageList parameter which is able
to take "studentItems" as an argument. Then hid the student list, then ran conditional to check if pageNumber
is equal to the index. If so, it shows the list item*/
function showPages(pageNumber, pageList){

    $(".student-list li").hide();

    $.each(pageList, function(index, page){

        if(pageNumber == index){

            $.each(page, function(x, listItem){

                $(listItem).show();

            });
        }
    });

}

/*created a function with a new list parameter - able to accept "studentList" (see const studentList below),
sliced and stored it in new const list, then used a while loop to push the list into spread after splicing.*/
function pageSpread(newList){

    const list = newList.slice();

    const spread = [];

    while (list.length){

        spread.push(list.splice(0, 10));
    }

    return spread;
}

//passed studentItems as an argument and stored the pageSpread function as a constant
const studentList = pageSpread(studentItems);


/*created the appendButtons function with pageList parameter which is able to accept "studentList"
as an argument. Target the page class and appended the const addPagination, then passed the length of the argument
into a constant.*/
function appendButtons(pageList){

    $(".page").append(addPagination);

    const numPages = pageList.length;

    //created afor loop that uses the new const "numPages" to create each page link button and append.
    for(let i = 1; i <= numPages; i++){
        const buttons = `<li><a href="#">` + i + `</a></li>`;
        $(".pagination ul").append(buttons);
    }

    /*created an event handler that "on click" uses the event to determine which students are shown-
    utilizing the showPages function. It then removes classes before adding the "active class"*/
    $(".pagination ul li a").on("click", function(event){

        const choosePage = parseInt($(this)[0].text) - 1;

        showPages(choosePage, pageList);

        $(".pagination ul li a").removeClass();

        $(this).addClass("active");

        event.preventDefault();

    });
}

//called main functions
appendButtons(studentList);

showPages(0, studentList);