import {useState} from 'react';
import {Modal} from 'react-bootstrap'
import CustomInput from '../Input/CustomInput'
import CustomBtn from '../Button/CustomBtn'
export default function CustomModals({myData}) {
    const [show, setShow] = useState(false);
    const [firstname,setFirstname] = useState('');
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <i class="fas fa-cogs" onClick={handleShow} style={{fontSize:'40px',marginTop:'25px'}}></i>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <span>My Name is : {firstname}</span><br></br>
              
              Name: <CustomInput onChange={(e)=> console.log(e.target.placeholder)} test="test" placeholder="Name" text_inside_input={myData.name} />
              Username :<CustomInput onChange={(e)=> setFirstname(e.target.value)}  text_inside_input={myData.username}/>
              Email :<CustomInput onChange={(e)=> setFirstname(e.target.value)}  text_inside_input={myData.email} />
              <hr></hr>
              <div>
                  <label><b>Adress:</b></label><hr></hr>
                  street : <CustomInput text_inside_input={myData.address.street}/>
                  suite : <CustomInput text_inside_input={myData.address.suite} />
                  city : <CustomInput text_inside_input={myData.address.city} />
                  zipcode : <CustomInput text_inside_input={myData.address.zipcode}/>
                  <div>
                  <label><b>Geo:</b></label><hr></hr>
                  lat : <CustomInput text_inside_input={myData.address.geo.lat} />
                  lng : <CustomInput text_inside_input={myData.address.geo.lng} />
                  </div>
                  
              </div>
              <hr></hr>
              phone :<CustomInput text_inside_input={myData.phone}/>
              website : <CustomInput text_inside_input={myData.website} />
              <div>
                  <label><b>Company :</b></label><hr></hr>
                    Name : <CustomInput text_inside_input={myData.company.name} />
                    catch Phrase :<CustomInput text_inside_input={myData.company.catchPhrase} />
              </div>
              
            
          </Modal.Body>
          <Modal.Footer>
            <CustomBtn label='Save' variant='outline-success' />
            
            <CustomBtn label='Reset' variant='outline-danger' />
          </Modal.Footer>
        </Modal>
      </>
    );
  }
