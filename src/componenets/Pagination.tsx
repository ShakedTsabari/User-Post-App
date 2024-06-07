export default function Pagination({activePage, numberOfPages, onPageChange} : any){

    const pageNumbers = () => {
        let startPage, endPage;
        if (numberOfPages <= 5) {
            startPage = 1;
            endPage = numberOfPages;
        } else if (activePage < 3) { //numberOfPages >= 6
            startPage = 1;
            endPage = 5;
        } else if (activePage >= 3 && activePage <= 8) {
            startPage = activePage - 2;
            endPage = activePage + 2;
        } else {
            startPage = 6;
            endPage = numberOfPages;
        }
        const numbers = [];
        for (let i = startPage; i <= endPage; i++) {
            numbers.push(i);
        }
        return numbers;
    };

    return(
        <div className="pagination">
            <button name="first" onClick={() => onPageChange(1)}>First</button>
            <button name="previous" onClick={() => onPageChange(activePage - 1)}>Previous</button>
            {pageNumbers().map((value:any) => (
                <button key={`page-${value}`} name={`page-${value}`} onClick={() => onPageChange(value)} 
                className={value === activePage ? 'active' : ''}
                >{value}</button>
            ))}
            <button name="next" onClick={() => onPageChange(activePage + 1)}>Next</button>
            <button name="last" onClick={() => onPageChange(numberOfPages)}>Last</button>
        </div>
    )
}