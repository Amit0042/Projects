function AddTodo(){
    return (
        <div className="row new-row-custom">
            <div className="col-4">
              <input type="text" placeholder='Enter Todo Here'></input>
            </div>
            <div className="col-4">
              <input type='date' placeholder='date'></input>
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-success">Add</button>
            </div>
        </div>
    );
}
export default AddTodo;