function Item({todoName, dueDate}){
    return (
        <div className="row new-row-custom">
            <div className="col-4">
              {todoName}
            </div>
            <div className="col-4">
              {dueDate}
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-danger">Delete</button>
            </div>
        </div>
    );
}

export default Item;