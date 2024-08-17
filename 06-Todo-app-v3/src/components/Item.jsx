import { MdDelete } from "react-icons/md";

function Item({ todoName, dueDate, handleOnClickItems }) {
  return (
    <div className="row new-row-custom">
      <div className="col-4">
        {todoName}
      </div>
      <div className="col-4">
        {dueDate}
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-danger" onClick={()=>{handleOnClickItems(todoName)}}><MdDelete /></button>
      </div>
    </div>
  );
}

export default Item;