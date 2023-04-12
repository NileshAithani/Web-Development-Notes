import React ,{useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {

  const[formData , setFormData] = useState({firstName:"" , lastName:"" , email:"",
               country:"" , address:"" , state:"",city:"" , postalcode:"" , Comments:false, Candidates:false,Offers:false
               ,mode:""})

              //  console.log(formData);



  function changeHandler(event){
    const{name,value,type,checked} = event.target

    setFormData(prevFormData =>{
      return{
        ...prevFormData,
        [name]:type==="checkbox"?checked:value
      }
    });

  }

  function setSubmitHandler(event){
      event.preventDefault();
      console.log("Everthing is printing...........")

      console.log(formData);
  }


  return (
    <div>
     <form onSubmit={setSubmitHandler}>
      <label>Firstname</label>
      <br/>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={changeHandler}
        name="firstName"
        value={formData.firstName}
        
      />
       
      <br/>
      <label>Lastname</label>
      <br/>
      <input
        type="text"
        placeholder="Enter your last name"
        onChange={changeHandler}
        name="lastName"
        value={formData.lastName}
        
      />


      <br/>
      <label>Email Address</label>
      <br/>
      <input
        type="email"
        placeholder="Enter your email"
        onChange={changeHandler}
        name="email"
        value={formData.email}
      />
      <br/>
      <label>Country </label>
      <br/>
      <select
          name="country"
          id="country"
          onChange={changeHandler}
          value={formData.country}
      >
      <option value="none">(none)</option>
      <option value="India">India</option>
      <option value="USA">USA</option>
      <option value="Russia">Russia</option>
      </select>


      <br/>
      <label>Street Address</label>
      <br/>
      <input
        type="text"
        palceholder="Enter your address"
        name="address"
        onChange={changeHandler}
        value={formData.address}
      />

      <br/>
      <label>State</label>
      <br/>
      <input
        type="text"
        palceholder="Enter your State"
        name="state"
        onChange={changeHandler}
        value={formData.state}
        />

      <br/>
      <label>City</label>
      <br/>
      <input
        type="text"
        palceholder="Enter your City"
        name="city"
        onChange={changeHandler}
        value={formData.city}
        />

        <br/>
        <label>Zip/Postal Code</label>
        <br/>
        <input
          type="text"
          name="postalcode"
          onChange={changeHandler}
          value={formData.postalcode}
           />
        <br/>


        <fieldset>
          <legend>For Email</legend>

          <br/>
          <div className='flex'>
          <input
          type="checkbox"
          name="Comments"
          onChange={changeHandler}
          id="comments"
          checked={formData.Comments}
            />
          <label htmlFor='comments'>Comments</label>
          <p>Get notified when someones posts a comment on a posting</p>
          </div>
        

          <br/>
          <div className='flex'>

          <input
          type="checkbox"
          name="Candidates"
          onChange={changeHandler}
          id="candidates"
          checked={formData.Candidates}
            />
          <label htmlFor='candidates'>Candidates</label>

          <p>Get notified when a candidates apply for job</p>

          </div>
          <br/>

          <div className='flex'>
          <input
          type="checkbox"
          name="Offers"
          onChange={changeHandler}
          id="offers"
          checked={formData.Offers}
            />
          <label htmlFor='offers'>Offers</label>

          <p>Get notified when a condidate accepts or rejects an offer.</p>

          </div>
        </fieldset>

        <fieldset>
          <legend>Push Notification</legend>
          <p>These are delivered via SMS to your mobile phone</p>

        <input
          type="radio"
          onChange={changeHandler}
          id="everything"
          name="mode"
          value={"Everything"}
          checked={formData.mode ==="Everything"}

        />
        <label htmlFor='everything'>Everything</label>
        <br/>
        <input
          type="radio"
          onChange={changeHandler}
          id="sameasemail"
          name="mode"
          value={"Same as email"}
          checked={formData.mode ==="Same as email"}

        />
        <label htmlFor='sameasemail'>Same as email</label>
        <br/>
        <input
          type="radio"
          onChange={changeHandler}
          id="nopush"
          name="mode"
          value={"No Push Notification"}
          checked={formData.mode ==="No Push Notification"}

        />
        <label htmlFor='nopush'>No Push Notification</label>

        </fieldset>

        <button className='save-btn'>Save</button>
        
       





     </form>
    </div>
  );
}

export default App;
