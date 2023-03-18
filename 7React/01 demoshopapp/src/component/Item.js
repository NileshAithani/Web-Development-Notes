
import './Item.css';

function Item(props){
    const itemName =props.name;
    return(
    <div>
    <p className='itemFun'>{itemName}</p>
    {props.children}

    </div>
    );
}

export default Item;