const gt=document.getElementById('gioitinh');
const hotenele=document.getElementById('hoten');
const sdtele=document.getElementById("sdt");
const qg=document.getElementById("quocgia");
const checkele=document.getElementById("check");
const p1=document.getElementById("phongsuperior");
const p2=document.getElementById("phongdeluxe");
const p3=document.getElementById("phongexecutive");
const p4=document.getElementById("phongjuniorsuite");
function check()
{
    let ht=hotenele.value;
    let sdt=sdtele.value;
    if (checkele.checked){}
    else 
    {
        alert("Quý khách vui lòng điền đầy đủ thông tin mang dấu * !");
        return false;
    }
    if (ht == "")
    {
        alert("Quý khách vui lòng điền đầy đủ thông tin mang dấu * !");
        return false;
    }
    if (sdt == "")
    {
        alert("Quý khách vui lòng điền đầy đủ thông tin mang dấu * !");
        return false;
    }
    else
    {
        let ktsdt=/([0-9]{10})$/;
        if (ktsdt.test(sdt)==false)
        {
            alert("Quý khách vui lòng nhập lại số điện thoại !");
            return false;
        }

    }
    if (gt.value == "0")
    {
        alert("Quý khách vui lòng điền đầy đủ thông tin mang dấu * !");
        return false;
    }
    if (qg.value == "0")
    {
        alert("Quý khách vui lòng điền đầy đủ thông tin mang dấu * !");
        return false;
    }
    if (p1.value == "0" & p2.value == "0" & p3.value == "0" & p4.value == "0")
    {
        alert("Quý khách vui lòng chọn phòng cho mình !")
        return false;
    }
    return true;
}
function kt()
{
    if (check()) alert("Cảm ơn quý khách.\nQuý khách vui lòng đợi nhân viên xác nhận thông tin và sẽ liên lạc với quý khách qua số điện thoại quý khách đã cung cấp.");
}

function startTime()
{
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth();
    var year = today.getFullYear();
    day = checkTime(day);
    month = checkTime(month);
    var time=year+'-'+month+'-'+day;
    document.getElementById('ngayden').setAttribute('value', time);
    document.getElementById('ngaydi').setAttribute('value', time);
}
function checkTime(i) 
{
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}