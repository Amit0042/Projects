import Item from "./Item";

const TodoItems = ({to_do_items}) => {
    return (
        <>
            {to_do_items.map((item)=>{
                return <Item todoName = {item.todoName} dueDate = {item.dueDate}/>
            })}
        </>
    );
}

export default TodoItems;