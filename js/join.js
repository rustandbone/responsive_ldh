function validateForm() {

    var form = document.member_form;

    var register = new RegExp("^(?=.*[a-zA-Z])(?=.*[0-9]).{4,20}$");
    var match = register.exec(form.id.value)

    if (match == null) {
        alert("*아이디는 4~20 자리의 영문자, 숫자를 조합해서 입력하십시오")
        return false;
    }

    var x = document.forms["member_form"]['name'].value;
    if (x == null || x == "" || x == " ") {
        alert("이름을 입력하세요")
        return false;
    }

    var register = new RegExp("^(?=.*[a-zA-Z])(?=.*[~!@#$%^*+=-])(?=.*[0-9]).{8,}$");
    var match = register.exec(form.password.value)

    if (match == null) {
        alert("*비밀번호는 영문, 숫자, 특수문자를 사용하여 8자 이상으로 설정하십시오")
        return false;
    }

    var x1 = document.forms['member_form']['password'].value;
    var x2 = document.forms['member_form']['password_confirm'].value;
    if (x1 != x2) {
        alert('비밀번호가 일치하지 않습니다')
        return false;
    }

    var register = new RegExp("^(?=.*[0-9]).{10,11}$");
    var match = register.exec(form.tel.value)

    if (match == null || match == "" || match == " ") {
        alert("전화번호를 - 없이 숫자만 입력하세요")
        return false;
    }

    var register = new RegExp("^(?=.*[0-9]).{5,}$");
    var match = register.exec(form.tel_confirm.value)

    if (match == null || match == "" || match == " ") {
        alert("인증번호를 입력하세요")
        return false;
    }

    var x = document.forms["member_form"]['email_id'].value;
    if (x == null || x == "" || x == " ") {
        alert("E-mail을 입력하세요")
        return false;
    }

    var register = new RegExp("^(?=.*[a-zA-Z])(?=.*[.]).{5,}$");
    var match = register.exec(form.host_email.value)

    if (match == null || match == "" || match == " ") {
        alert("E-mail 도메인을 올바르게 입력해주세요")
        return false;
    }
}