import Item from "./Item";

const TodoItems = ({ to_do_items, handleOnClickItems }) => {

    // const handleOnClickItems = (todoName) => {
    //     const newItemsAfterDeletion = to_do_items.filter((item)=>{
    //         return item.todoName !== todoName
    //     })
    //     setTodoItems(newItemsAfterDeletion)
    // }

    return (
        <>
            {to_do_items.map((item, index) => {
                return <Item 
                key={index} 
                todoName={item.todoName} 
                dueDate={item.dueDate} 
                handleOnClickItems={handleOnClickItems}    
                />
            })}
        </>
    );
}

export default TodoItems;