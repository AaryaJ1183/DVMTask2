
function saveInput()
{   
    
    const userInputName = document.getElementById('userInputName').value;
    const userInputEmail = document.getElementById('userInputEmail').value;
    const userInputPhone = document.getElementById('userInputPhone').value;
    const userInputHostel = document.getElementById('userInputHostel').value;
    const userInputRoom = document.getElementById('userInputRoom').value;
    const userInputBITSID = document.getElementById('userInputBITSID').value;
    const userInputSize = document.getElementById('userInputSize').value;

    // sizeValidation is left
    // Learnt from https://www.youtube.com/watch?v=PAUxi3f9HB0&ab_channel=Telusko
    if(userInputName==""||userInputEmail==""||userInputPhone==""||userInputHostel==""||userInputRoom==""||userInputBITSID=="")
    {
        alert("All fields are mandatory");
        return false;
    }
    else if(userInputEmail!="")
    {
        var regX = /@bits-pilani.ac.in$/;
        if(regX.test(userInputEmail) && endsWith("@bits-pilani.ac.in"))
        {   
            return true;
        }
        else
        {
             alert("Input valid BITS email ID");
            return false;
        }
    }
    else
    {
        console.log('User Name:', userInputName);
        console.log('User Email:', userInputEmail);
        console.log('User Phone:', userInputPhone);
        console.log('User Hostel:', userInputHostel);
        console.log('User Room:', userInputRoom);
        console.log('User BITS ID:', userInputBITSID);
        console.log('User Merch Size:', userInputSize);
        return true;
    }
        
        
                            
                

    

}

function validate()
{   
}


function resetInput()
{
    location.reload();
    return true;
}