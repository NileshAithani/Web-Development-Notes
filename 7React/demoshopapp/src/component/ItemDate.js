import './ItemDate.css';

const itemDate = (props) => {
    const day = props.day;
    const month = props.month;
    const year = props.year;
    return (
        <div>
            <span >{day} </span>
            <span >{month} </span>
            <span >{year} </span>
        </div>
    )
}

export default itemDate;