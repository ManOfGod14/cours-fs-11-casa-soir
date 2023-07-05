

export function NoteStars({note}) {
    const noteTab = [...Array(note)];
    return noteTab.map((n, i) => {
        return <span className="bi-star-fill" key={'note_'+i}></span>
    })
}

export function NoteEmptyFillStars({note}) {
    const nbrStarEmpty = 5 - note;
    let starElements = [];

    for (let i = 0; i < note; i++) {
        starElements.push(<span className="bi-star-fill" key={'starFill_'+i}></span>)
    }

    for (let j = 0; j < nbrStarEmpty; j++) {
        starElements.push(<span className="bi-star" key={'star_'+j}></span>)
    }

    return starElements.map((item, ind) => {
        return item;
    });
}