import GetNotes from './GetNotes';
import DeleteNotes from './DeleteNotes';
import Form from './Form';

function Notepad(){


    return(
     <div className="container d-flex flex-column justify-content-center align-items-center" style={{height: "100vh"}}>
      <Form/> 
      <GetNotes/>
      <DeleteNotes/>
    </div>
    );
}
export default Notepad;