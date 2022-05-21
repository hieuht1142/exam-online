/*fetch api */
async function getExamsByClassId(id) {
    let url = 'http://localhost:8089/classes';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function getSubjectByClassId(id) {
    let url = 'http://localhost:8089/classes'; // change
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderExams() {
    var currentUrl = window.location.href;
    let params = (new URL(currentUrl)).searchParams;
    let classId = params.get('classId');

    if (!classId) {
        return;
    }
    let exams = await getExamsByClassId(classId);

    let html = '';
    for (const exam of exams) {
        let htmlSegment = `<li>
                                <a href="class.html?examId=${exam.id}">
                                    ${exam.name}
                                </a>
                            </li>;`

        html += htmlSegment;
    }

    let container = document.getElementById('exam-list');
    container.innerHTML += html;
}

// renderExams();