function Description({ description, setDescription }){


    return(
    <div class='container d-flex flex-column align-items-center mt-4'  >
    <div class='flex-column  '>
     <label className="text-dark" for="Description">Description</label>
     </div>
     <div>
     <input   type="text"
        id="description"
        placeholder="Enter description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required ></input>

     </div>
    </div>
    );
}
export default Description;