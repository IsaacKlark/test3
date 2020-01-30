async function useDataFromServer () {
    const API = fetch('https://semalt.tech/dev/api/v1/example/test/')
        .then(data => data.json());
    const [URL] = await Promise.all([API]);
    addRowsToTable(URL.result.sitemap);
}

useDataFromServer();

function addRowsToTable(API) {
    const tableBody = document.querySelector(".table__body");

    for (let i = 0; i < API.length; i++) {
        const errors = API[i].errors;
        const row = `<tr class="table__row">
            <td class="table__cell">
                <input type="checkbox" class="table__checkbox"/>
                    <a href=${API[i].path} class="table__a" title=${API[i].path}>
                        ${API[i].path}
                    </a>
                    <img src="images/link.svg" alt="info" class="svg__info"/> 
                </td>
                <td class="table__cell">${i}</td>
                <td class="table__cell">${API[i].lastSubmitted.match(/.+(?=T)/g)}</td>
                <td class="table__cell">${API[i].lastCheck.match(/.+(?=T)/g)}</td>
                <td class="table__cell  ${errors === 0 ? "sucsess": errors + " errors"}">
                    ${errors === 0 ? "sucsess": errors + " errors"}
                </td>
                <td class="table__cell">${API[i].urls}</td>
                <td class="table__cell">
                    <button type="button" class="table__button">Recrawl</button>
                </td>
                <td class="table__cell">
                    <button type="button" class="table__remove"></button>
                </td>
            </tr>`;
        tableBody.innerHTML += row;
    }
}

const urlOrInputFocus = document.querySelector('.urlOrInputFocus');
const formUrlOrPart = document.querySelector('.form__urlOrPart');

formUrlOrPart.onfocus = () => {
    urlOrInputFocus.style.display = "block";
};

formUrlOrPart.onblur = () => {
    setTimeout(() => {
        urlOrInputFocus.style.display = "none";
    }, 500);
};

const allSitmaps = document.querySelector('.allSitmaps');
const allSitmapsInput = document.querySelector('.allSitmaps-input');

allSitmapsInput.onfocus = () => {
    allSitmaps.style.display = "block";
}

allSitmapsInput.onblur = () => {
    setTimeout(() => {
        allSitmaps.style.display = "none";
    }, 500);
};