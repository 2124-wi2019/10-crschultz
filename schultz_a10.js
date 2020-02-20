/*Chris Schultz
schultz_a10.js
Info 2124 WW
Thoendel
02-19-2020*/


document.getElementById('action').addEventListener('click', function() {
    //WRITE YOUR SOLUTION BETWEEN THIS COMMENT
    //a. Change the image in the tag with the ID photo to 02.jpg.
    let imgChg = document.getElementById('photo');  //go get the photo id
    if (imgChg.getAttribute('src') == '01.jpg') {   //if source is 01.jpg
        imgChg.setAttribute('src','02.jpg');        //then change it to 02.jpg
    }//end if
    else {                                          //otherwise!
        imgChg.setAttribute('src','01.jpg');        //change it back to 01.jpg
    }//end else
    
    //b. Set the class for the h1 tag to greenText. 
    let hOneChg = document.getElementsByTagName('h1');   //go get all of the h1 elements, since we have no id on this H1 tag
    for (x in hOneChg) {                                 //since it's technically an array, we have to loop through it
        if (hOneChg[x].getAttribute('class') != 'greenText') {   //if each h1 is not already set to green text
            hOneChg[x].setAttribute('class','greenText');    //set the element to green text
        } //end if
        else {                                               //otherwise!
            hOneChg[x].setAttribute('class','orangeText');   //set it to orange text
        }//end else
        
    }//end for

    //AND THIS COMMENT
});

//end program
