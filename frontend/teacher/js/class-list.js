/*fetch api */
async function getSubjects() {
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

async function renderClasses() {
    let classes = await getSubjects();

    let html = '';
    for (const mClass of classes) {
        let subject = await getSubjectByClassId(mClass.id);
        let htmlSegment = `<li>
                                <a href="class.html?classId=${mClass.id}">
                                    <span class="class-id">${mClass.code}</span>
                                    -
                                    <span class="subject-code">${subject.code}</span>
                                    -
                                    <span class="subject-title">${subject.name}</span>
                                </a>
                            </li>;`

        html += htmlSegment;
    }

    let container = document.getElementById('class-list');
    container.innerHTML += html;
}

// renderClasses();