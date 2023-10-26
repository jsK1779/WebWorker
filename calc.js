onmessage = function (e) {
    let grade
    if (parseInt(e.data) >= 90)
        grade = "A"
    else if (parseInt(e.data) >= 80 && parseInt(e.data) < 90)
        grade = "B"
    else if (parseInt(e.data) >= 70 && parseInt(e.data) < 80)
        grade = "C"
    else if (parseInt(e.data) >= 60 && parseInt(e.data) < 70)
        grade = "D"
    else
        grade = "F"
    postMessage(grade)
}