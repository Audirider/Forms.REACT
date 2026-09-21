import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
function handleSubmit(e) {
  e.preventDefault();

  alert(`Welcome ${name}!`);
}
  return (
    <div className="container">
      <h1>Student Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
  <label>Full Name</label>
  <input
  type="text"
  placeholder="Enter your full name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  />
</div>

<div className="form-group">
  <label>Email Address</label>

  <input
    type="email"
    placeholder="Enter your email"
  />
  <div className="form-group">
  <label>Password</label>

  <input
    type="password"
    placeholder="Enter your password"
  />
</div>
<div className="form-group">
  <label>Phone Number</label>

  <input
    type="tel"
    placeholder="08012345678"
  />
</div>
<div className="form-group">
  <label>Date of Birth</label>

  <input type="date" />
</div>
<div className="form-group">
  <label>Age</label>

  <input
    type="number"
    placeholder="Enter your age"
  />
</div>
<div className="form-group">
  <label>Gender</label>

  <div className="radio-group">

    <label>
      <input type="radio" name="gender" value="male" />
      Male
    </label>

    <label>
      <input type="radio" name="gender" value="female" />
      Female
    </label>

    <label>
      <input type="radio" name="gender" value="other" />
      Other
    </label>

  </div>
</div>
<div className="form-group">
  <label>Hobbies</label>

  <div className="checkbox-group">

    <label>
      <input type="checkbox" value="coding" />
      Coding
    </label>

    <label>
      <input type="checkbox" value="music" />
      Music
    </label>

    <label>
      <input type="checkbox" value="sports" />
      Sports
    </label>

    <label>
      <input type="checkbox" value="gaming" />
      Gaming
    </label>

  </div>
</div>
<div className="form-group">
  <label>Country</label>

  <select>
    <option value="">Select your country</option>
    <option value="nigeria">Nigeria</option>
    <option value="ghana">Ghana</option>
    <option value="kenya">Kenya</option>
    <option value="south-africa">South Africa</option>
  </select>
</div>
<div className="form-group">
  <label>About You</label>

  <textarea
    rows="5"
    placeholder="Tell us something about yourself..."
  ></textarea>
</div>
<div className="form-group">
  <label>Profile Picture</label>

  <input type="file" />
</div>
<div className="form-group">
  <label>Programming Experience</label>

  <input
    type="range"
    min="0"
    max="10"
  />
</div>
<div className="form-group">
  <label>Favorite Color</label>

  <input type="color" />
</div>
<div className="form-group">
  <label>
    <input type="checkbox" />

    I agree to the Terms and Conditions
  </label>
</div>
<div className="button-group">

  <button type="submit">
    Submit
  </button>

  <button type="reset">
    Reset
  </button>

</div>
</div>
  </form>
    </div>
    
  );
}
export default App;